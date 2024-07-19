import React from "react";
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, We are
          <br />
          Florida Wagyu Company LLC.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <button>Contact Us</button>
            <a>Download Flyer</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaLinkedin size={32} />
            <FaFacebook size={32} />
            <FaTwitter size={32} />
            <FaInstagram size={32} />
          </div>
        </div>
        <p className="contact-me__allrights">© 2024 Florida Wagyu Company LLC. All rights reserved.</p>
      </Animate>
    </section>
  );
};

export default Home;
