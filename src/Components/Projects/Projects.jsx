import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/ti";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/qL8sGbQ/hashnode.png"
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Hashnode clone</h2>
                <p>
                  {/* Rockstar games is a video game company who develops lots of
                  games like GTA, Red Dead, and many more. we build clone of
                  their store website.  */}
                  Developed user-friendly features such as tabs for page
                  switching, accordions, and a hamburger menu. Implemented
                  Dynamic rounting to enhance Search engine optimisation.
                </p>
                <div>
                  <FaReact />
                  <SiTailwindcss />
                  {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb /> */}
                  {/* <TbBrandNextjs /> */}
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://hashnode-nextjs-clone.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Spactmen/Hashnode-NextJS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/tqP736R/webalar.png"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2> Webalar</h2>
                <p>
                  Developed an web application using ReactJS with re-usable
                  components. Created user-friendly features such as navigation
                  and switchable tabs.Used Gradients for better user experience.
                </p>
                <div>
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://github.com/Spactmen/webalar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://webalar-project.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/86Bn517/urbanservice.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Urban Service Expert</h2>
                <p>
                  Implemented Dynamic rounting to enhance Search engine
                  optimisation.Implemented Server-Side Rendering (SSR) to
                  enhance the performance and accessibility of the project.
                  {/* Fetched city-specific content dynamically through API calls to
                  a database or backend service. */}
                </p>
                <div>
                  <FaReact />
                  <SiCss3 />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="http://urban-service.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Spactmen/UrbanService"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/kXjFKYS/oyebusy.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>OyeBusy</h2>
                <p>
                  Developed Landingpage for Oyebusy Technologies.Implemented
                  a fully responsive design to improve the user experience
                  across all devices.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://oyebusy-project.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Spactmen/Oyebusy-Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
