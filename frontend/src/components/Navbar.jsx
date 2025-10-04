const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-full top-0 z-30">
        <div className="bg-slate-700  text-white">
          <div className="myContainer h-14 items-center flex justify-between px-[100px] py-5 ">
            <div className="logo font-bold text-2xl">
                <span  className="text-green-600">&lt;</span>
                Pass
                <span className="text-green-600">OP/&gt;</span>
                </div>
            <ul>
              <li className="flex gap-4">
                <p className="hover:font-bold">
                  Home
                </p>
                <p className="hover:font-bold">
                  About Us
                </p>
                <p className="hover:font-bold">
                  Contact
                </p>
              </li>
            </ul>
            <div>
                <button className="text-white flex justify-between items-center hover:bg-green-500 bg-green-600 rounded-full gap-2 py-1 px-2 ring-black ring-1">
                <img src="src/assets/github.png" alt="" className="w-8"/>
                <span className="text-black font-bold">GitHub</span>
                </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
