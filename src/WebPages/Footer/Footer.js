import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Footer = () => {
  return (
    <div className="bg-dark p-5 text-light">
      <p>Copyright &copy; Raju Ahammed Roton. All Right Reserved</p>
      <h6
        style={{
          margin: "auto 0",
          fontWeight: "normal",
        }}
      >
        {" "}
        <span style={{ color: "yellow", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "For any Query: rajuahamedkst15@gmail.com",
              "Phone: +8801765629262",
              "linkedin.com/in/rajuahamedkst",
              "Developer Mode ON",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h6>
    </div>
  );
};

export default Footer;
