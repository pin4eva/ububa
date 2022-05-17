import React from "react";

const About = () => {
  return (
    <div className={"about"}>
      <div className="">
        <div className="about__h4">
          <h2>About Us</h2>
        </div>
        <div className="  about__lead">
          <div className=" about__left">
            <div className="container">
              <h4 className="left__text-1">IT CONSULTING, COMPUTER TRAINING</h4>
              <p className="left__text-2">
                We help you transform your innovation performance for long-term success <br /> by combining our Programming knowledge with our expertise in product and <br /> technology development processes. Our team is able to give Technical <br /> Support, Project Validation and Solutions. We also develop creative solutions <br />
                for small and big brands , also build authenthic product identities and much more.{" "}
              </p>
              <button className="left__btn">View</button>
            </div>
          </div>
          <div className=" about__right">
            <img className="about__side-image" src=".././images/side1.png" alt="staffs-pics" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
