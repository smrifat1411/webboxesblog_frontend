import { useState } from "react";


function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`top-0 right-0 left-0 h-screen  w-[80%] bg-slate-100  transform  fixed ${
        open ? "-translate-x-0  " : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      {/* <a className="text-xl font-normal my-4" href="/blog" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Blog
                </a> */}
      <div className="flex  flex-col ml-4 ">
        <a className="text-xl font-medium my-4" href="/">

          Blog
        </a>
        <a className="text-xl font-medium my-4" href="/">
          About Us
        </a>
    
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" myNav flex filter drop-shadow-md bg-gray  px-4 py-4 h-16 items-center">
      <div>
        <MobileNav open={open} />
      </div>

      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className=" flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/">Blog</NavLink>
          <NavLink to="#">About Us</NavLink>
        </div>
      </div>
    </nav>
  );
}
