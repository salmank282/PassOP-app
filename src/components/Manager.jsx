import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbEdit } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const eyeRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length>3  )
   { setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    console.log([...passwordArray, form]);
    setForm({ site: "", username: "", password: "" });
     toast("Password Saved..!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });}
      else{
        toast("Error : Password not Saved..!")
      }

  };

  const deletePassword = (id) => {
    let c = confirm("Are you sure ...You want to delete?");
    if (c) {
      const newpasswordArray = passwordArray.filter((item) => {
        return item.id !== id;
      });
      setPasswordArray(newpasswordArray);
      localStorage.setItem("passwords", JSON.stringify(newpasswordArray));
      toast("Password Deleted successfully..!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  };

  const editPassword = (id) => {
    const newPassword = passwordArray.find((item) => item.id === id);
    setForm(newPassword);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    toast("Edit the Password..!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };

  const showPassword = () => {
    if (eyeRef.current.src.includes("src/assets/eyeOff.png")) {
      eyeRef.current.src = "src/assets/eye.png";
      passwordRef.current.type = "text";
    } else {
      eyeRef.current.src = "src/assets/eyeOff.png";
      passwordRef.current.type = "password";
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("Copied to Clipboard..!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute top-0 -z-10 h-full w-full bg-green-50 ">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-100 opacity-50 blur-[80px]"></div>
      </div>
      <div className=" md:myContainer text-center mt-8 px-2">
        <h1 className=" text-4xl font-bold  ">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg">Your own Password Manager</p>
        <div className="flex flex-col gap-5 p-4 items-center text-black">
          <input
            value={form.site}
            onChange={handleChange}
            type="text"
            name="site"
            id="site"
            placeholder="Enter website URL"
            className="rounded-full w-full border border-green-600 py-1 px-4 "
            />
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <input
              value={form.username}
              onChange={handleChange}
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              className="rounded-full w-full border border-green-600 py-1 px-4 "
              />
            <div className="relative flex items-center">
              <input
                value={form.password}
                name="password"
                id="password"
                ref={passwordRef}
                onChange={handleChange}
                type="password"
                placeholder="Enter Password"
                className="rounded-full w-full border border-green-600 py-1 px-4 "
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => {
                  showPassword();
                }}
              >
                <img
                  ref={eyeRef}
                  src="src/assets/eyeOff.png"
                  width={18}
                  alt=""
                />
              </span>
            </div>
          </div>
          <div></div>
          <div>
            <button
              onClick={() => {
                savePassword();
              }}
              className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full w-fit py-2 px-7 border border-green-900 disabled:cursor-not-allowed disabled:bg-green-200 disabled:text-white disabled:border-0 "
              disabled={
                form.site === "" || form.username === "" || form.password === ""
              }
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Save Password
            </button>
          </div>
        </div>
      </div>
      <div className="passwords">
        <h2 className="py-4 w-3/4 mx-auto font-bold text-2xl">Your Passwords</h2>
        {passwordArray.length == 0 && (
          <div className="text-xl w-3/4 mx-auto ">No Passwords to show</div>
        )}
        {passwordArray.length !== 0 && (
          <table className="table-auto w-3/4 mx-auto rounded-md overflow-hidden">
            <thead className="bg-green-800 text-white ">
              <tr className="text-center">
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Passwords</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-200">
              {passwordArray.map((item) => {
                return (
                  <tr key={item.password} className="text-center">
                    <td className="py-2 text-center  border border-white">
                      <div className="flex  justify-center items-center">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <div
                          className="size-7 cursor-pointer"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "23px",
                              padding: "3px 0px 0px 3px",
                            }}
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 text-center  border border-white">
                      <div className="flex  justify-center items-center">
                        <span>{item.username}</span>
                        <div
                          className="size-7 cursor-pointer"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "23px",
                              padding: "3px 0px 0px 3px",
                            }}
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 text-center  border border-white">
                      <div className="flex  justify-center items-center">
                        <span>{item.password}</span>
                        <div
                          className="size-7 cursor-pointer"
                          onClick={() => {
                            copyText(item.password);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "25px",
                              height: "23px",
                              padding: "3px 0px 0px 3px",
                            }}
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 text-center w-24  border border-white">
                      <div className="flex justify-center items-center">
                        <span
                          className="mx-2 cursor-pointer"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <TbEdit style={{ width: "25px", height: "25px" }} />
                        </span>
                        <span
                          className="mx-2 cursor-pointer"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Manager;
