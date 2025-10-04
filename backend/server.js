import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";
// import bodyParser from "body-parser";

dotenv.config();

const dbUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/passop";
const client = new MongoClient(dbUrl);
const dbName = "passop";
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Error-handling middleware for invalid JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON payload" });
  }
  next();
});

//Collection name from env
const Collection = process.env.COLLECTION_NAME || "passwords";

//Get all the password
app.get("/", async (req, res) => {
  try {
    const collection = db.collection(Collection);
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
  } catch (err) {
    res.status(500).json({ error: "Error fetching the data" });
  }
});

//Save a password
app.post("/", async (req, res) => {
  try {
    const collection = db.collection(Collection);
    const passwords = req.body;
    const data = await collection.insertOne(passwords);
    res.send({ success: true, result: data });
  } catch (err) {
    res.status(500).json({ error: "Error saving data" });
  }
});

//delete a password
app.delete("/:id", async (req, res) => {
  try {
    const collection = db.collection(Collection);
    const { id } = req.params;

    const deleteData = await collection.deleteOne({ id: id });

    if (deleteData.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Password not found" });
    }

    res.send({ succes: true, result: deleteData });
  } catch (err) {
    res.status(500).json({ error: "Error deleting the data" });
  }
});

//update the data
app.put("/:id", async (req, res) => {
  try {
    const collection = db.collection(Collection);
    const { id } = req.params;
    const {_id, ...updateFields}=req.body;

    const updateResult = await collection.updateOne(
      { id: id },
      { $set: updateFields }
    );

    if(updateResult.matchedCount===0){
      res.status(404).json({success:false,error:"Data not found"})
    }

    res.json({success:true,result:updateResult})
  } catch (err) {
    res.status(500).json({error:"Error updation the data"})
  }
});

// Start server after DB connects
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
});
