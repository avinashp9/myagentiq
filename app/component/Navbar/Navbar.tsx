"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // Your existing CSS module

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header>
      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex justify-between text-white items-center px-10 py-4 fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md`}
      >
        {/* Logo */}
        <div className={`${styles.logo} text-white text-2xl font-bold`}>
          <Link href="/" passHref>
            MyAgentIQ
          </Link>
        </div>

        {/* Center Nav Links */}
        <div className="flex gap-6">
          <div className={styles.navItem}>
            <Link href="/" passHref>
              Home
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/homepage/comingsoon" passHref>
              Resources
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/homepage/comingsoon" passHref>
              Pricing
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/homepage/comingsoon" passHref>
              Integrations
            </Link>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <div className={styles.login}>
            <Link href="/homepage/comingsoon" passHref>
              Log In
            </Link>
          </div>
          {/* <div className={styles.login}>
            <input
              type="checkbox"
              className="toggle theme-controller"
              onChange={(e) =>
                document.documentElement.setAttribute(
                  "data-theme",
                  e.target.checked ? "retro" : "black"
                )
              }
            />
          </div> */}
          <button className={styles.primaryCTA}>
            <div className={styles.textwrapper4}>
              <Link href="/homepage/contactpage" passHref>
                Sign Up
              </Link>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 px-4 py-3 flex items-center justify-between bg-black bg-opacity-90 backdrop-blur-md z-50">
        {/* Logo */}

        <div className={`${styles.logo} text-white text-sm font-bold`}>
          <Link href="/" passHref>
            MyAgentIQ
          </Link>
        </div>

        {/* Auth + Menu */}
        <div className="flex items-center space-x-3">
          <button className={`${styles.login} text-sm`}>
            <Link href="https://app.myagentiq.ai/login" passHref>
              Log In
            </Link>
          </button>
          <button className={`${styles.primaryCTA} px-3 py-1 text-sm`}>
            <div className={styles.textwrapper4}>
              <Link href="https://app.myagentiq.ai/signup" passHref>
                Sign Up
              </Link>
            </div>
          </button>
          <button onClick={() => setIsMobileOpen(true)}>
            <Menu className="text-white w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/30 backdrop-blur-md text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsMobileOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 text-base font-medium">
          <li>
            <div className={styles.textwrapper}>
              <Link href="/" passHref>
                Home
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.textwrapper2}>
              <Link href="/homepage/comingsoon" passHref>
                Resources
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.textwrapper2}>
              <Link href="/homepage/comingsoon" passHref>
                Pricing
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.textwrapper2}>
              <Link href="/homepage/comingsoon" passHref>
                Integrations
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;

// "use client";
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   return (
//     <header>
//       {/* Desktop Navbar */}
//       <div className="hidden md:flex justify-between text-white items-center px-10 py-4 fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
//         {/* Logo */}
//         <div className="font-sans text-white text-2xl font-bold">
//           <Link href="/" passHref>
//             MyAgentIQ
//           </Link>
//         </div>

//         {/* Center Nav Links */}
//         <div className="flex gap-6">
//           <Link href="/" passHref>
//             <div className="font-semibold text-white text-base px-3 py-2 rounded-md hover:text-orange-400 hover:bg-white/10 cursor-pointer">
//               Home
//             </div>
//           </Link>
//           <Link href="/homepage/comingsoon" passHref>
//             <div className="font-semibold text-white text-base px-3 py-2 rounded-md hover:text-orange-400 hover:bg-white/10 cursor-pointer">
//               Resources
//             </div>
//           </Link>
//           <Link href="/homepage/comingsoon" passHref>
//             <div className="font-semibold text-white text-base px-3 py-2 rounded-md hover:text-orange-400 hover:bg-white/10 cursor-pointer">
//               Pricing
//             </div>
//           </Link>
//           <Link href="/homepage/comingsoon" passHref>
//             <div className="font-semibold text-white text-base px-3 py-2 rounded-md hover:text-orange-400 hover:bg-white/10 cursor-pointer">
//               Integrations
//             </div>
//           </Link>
//         </div>

//         {/* Right Buttons */}
//         <div className="flex items-center gap-4">
//           <Link href="/homepage/comingsoon" passHref>
//             <button className="font-semibold text-white hover:text-orange-400 cursor-pointer">
//               Log In
//             </button>
//           </Link>

//           <input
//             type="checkbox"
//             className="toggle theme-controller"
//             onChange={(e) =>
//               document.documentElement.setAttribute(
//                 "data-theme",
//                 e.target.checked ? "retro" : "black"
//               )
//             }
//           />

//           <Link href="/homepage/contactpage" passHref>
//             <button className="bg-white/10 border border-white/15 rounded-xl text-white font-semibold px-5 py-2 hover:bg-white/40 hover:text-black transition">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="md:hidden fixed top-0 left-0 right-0 px-4 py-3 flex items-center justify-between bg-black bg-opacity-90 backdrop-blur-md z-50">
//         {/* Logo */}
//         <div className="text-white text-sm font-bold">
//           <Link href="/" passHref>
//             MyAgentIQ
//           </Link>
//         </div>

//         {/* Auth + Menu */}
//         <div className="flex items-center space-x-3">
//           <Link href="/homepage/comingsoon" passHref>
//             <button className="text-white text-sm font-semibold hover:text-orange-400">
//               Log In
//             </button>
//           </Link>
//           <Link href="/homepage/contactpage" passHref>
//             <button className="bg-white/10 border border-white/15 rounded-xl text-white font-semibold px-3 py-1 text-sm hover:bg-white/40 hover:text-black transition">
//               Sign Up
//             </button>
//           </Link>
//           <button onClick={() => setIsMobileOpen(true)}>
//             <Menu className="text-white w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-black/30 backdrop-blur-md text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
//           isMobileOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-white/10">
//           <span className="text-lg font-bold">Menu</span>
//           <button onClick={() => setIsMobileOpen(false)}>
//             <X className="w-6 h-6" />
//           </button>
//         </div>
//         <ul className="flex flex-col p-4 space-y-4 text-base font-medium">
//           <li>
//             <Link href="/" passHref>
//               <div className="hover:text-orange-400 cursor-pointer">Home</div>
//             </Link>
//           </li>
//           <li>
//             <Link href="/homepage/comingsoon" passHref>
//               <div className="hover:text-orange-400 cursor-pointer">
//                 Resources
//               </div>
//             </Link>
//           </li>
//           <li>
//             <Link href="/homepage/comingsoon" passHref>
//               <div className="hover:text-orange-400 cursor-pointer">
//                 Pricing
//               </div>
//             </Link>
//           </li>
//           <li>
//             <Link href="/homepage/comingsoon" passHref>
//               <div className="hover:text-orange-400 cursor-pointer">
//                 Integrations
//               </div>
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Overlay */}
//       {isMobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
//           onClick={() => setIsMobileOpen(false)}
//         />
//       )}
//     </header>
//   );
// };

// export default Navbar;
