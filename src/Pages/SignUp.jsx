import React from "react";
import NavbarLog from "../components/NavbarLog";
import "../components/Banner.css";
import MainSection from "../components/SignUp-Sections/MainSection";
import SectionOne from "../components/SignUp-Sections/SectionOne";
import SectionTwo from "../components/SignUp-Sections/SectionTwo";
import SectionThree from "../components/SignUp-Sections/SectionThree";
import QuestionSections from "../components/SignUp-Sections/QuestionSections";
import Footer from "../components/SignUp-Sections/Footer";

function SignUp() {
  return (
    <>
      <NavbarLog />
      <div
        className="    "
        style={{
          backgroundImage: `url("https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg") `,
          backgroundSize: "cover",
          backgroundPosition: "center-center",
          height: "131vh",
          backgroundColor: "black",
        }}
      >
        <div className=" banner--fadeBottom "/>
        <MainSection />
      </div>

      <div className="h-2 " style={{ backgroundColor: "#222222" }} />

      <SectionOne />
      <div
        className="h-2 z-20 relative "
        style={{ backgroundColor: "#222222" }}
      />

      <SectionTwo />
      <div className="h-2 " style={{ backgroundColor: "#222222" }} />
      <SectionThree/>
      <div className="h-2 " style={{ backgroundColor: "#222222" }} />
      <QuestionSections/>
      <div className="h-2 " style={{ backgroundColor: "#222222" }} />
      <Footer/>
    </>
  );
}

export default SignUp;
