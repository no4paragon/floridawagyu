import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiCow, GiDna2, GiBull, GiDrippingTube } from "react-icons/gi";
import { Animate } from "react-simple-animate";
import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Us"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">Florida Wagyu Company LLC</h3>
            <p>
              sometextsometextsometextsometextsometextsometextsometext
              sometextsometextsometextsometextsometextsometextsometext
              sometextsometextsometextsometextsometextsometextsometext
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <GiDna2 size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <GiBull size={60} color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <GiDrippingTube size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <GiCow size={60} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
