import NavBar from "../components/Navbar";
import { FaLinkedinIn, FaGithub, FaJava } from "react-icons/fa";


import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import reactLogo from "../assets/react.png";
import spring from "../assets/spring.png";
import figma from "../assets/figma.png";
import firebase from "../assets/Firebase.png";


 import profile from "../assets/profile.png";

export default function Home() {
  return (
    <>
      {/* ส่วนของ NavBar  */}
      <NavBar pname='h' colorLinkNavbar="#FFF714" />

      {/* ส่วนของ Hero Section */}
      <div className="flex items-center justify-between pt-28 px-20">
        {/* รายละเอียดด้านซ้าย */}
        <div className="flex flex-col gap-2">
          <span className="text-white text-6xl font-bold">Full Stack Web</span>
          <span className="text-white text-6xl font-bold">Developer !</span>
          <span className="text-white text-lg max-w-md">
            Hi, I’m Boss. A passionate Full Stack Web Developer based in Thailand.
          </span>

          {/* ไอคอนโซเชียล */}
          <div className="flex gap-4 mt-3">
            {/* TODO: ใส่ลิงก์ LinkedIn ของคุณที่ href */}
            <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 rounded-full bg-white">
              <FaLinkedinIn className="text-black text-2xl" />
            </a>
            
            <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-center w-11 h-11 rounded-full bg-white">
              <FaGithub className="text-black text-2xl" />
            </a>
          </div>
        </div>

        
        <div className="w-[450px] h-[450px] rounded-full overflow-hidden bg-neutral-800">
          {
          <img
            src={profile}
            alt="My profile"
            className="w-full h-full object-cover"
          />
          }
        </div>
      </div>

      {/* ส่วนของ Tech Stacks */}
      <div className="flex flex-col items-center gap-6 pt-16 pb-12">
        <span className="text-white text-base font-medium">My Tech Stacks</span>

        {/* กล่องจัดเรียงไอคอนแบบ flex กึ่งกลาง */}
        <div className="flex flex-wrap items-center justify-center gap-10">
          <img src={html5} alt="HTML5" className="h-12 w-auto" />
          <img src={css3} alt="CSS3" className="h-12 w-auto" />
          <img src={js} alt="JavaScript" className="h-12 w-auto" />
          <img src={nodejs} alt="Node.js" className="h-12 w-auto" />
          <img src={reactLogo} alt="React" className="h-12 w-auto" />
          <img src={spring} alt="Spring Boot" className="h-12 w-auto" />
          
          <FaJava className="text-[#E76F00] text-5xl" />
          <img src={figma} alt="Figma" className="h-12 w-auto" />
          <img src={firebase} alt="Firebase" className="h-12 w-auto" />
        </div>
      </div>
    </>
  );
}