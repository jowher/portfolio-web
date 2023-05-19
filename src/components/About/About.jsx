import Accordion from "react-bootstrap/Accordion";
import { FaAward } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import bannerImg from "../../assets/img/about_banner_2.png";
import certificate_1 from "../../assets/img/certificate_1.png";
import certificate_2 from "../../assets/img/cert2.png";
import certificate_3 from "../../assets/img/certificate_3.png";
import resume from "../../assets/img/resume new.pdf";
import "./AboutStyle.css";

const About = () => {
  return (
    <div className="about_wrapper" id="about">
      <div className="about_container container">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="about_container_left">
              <img
                src={bannerImg}
                alt="About"
                className="about_banner img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about_container_right">
              <h3 className="heading">The Mind Behind the Magic</h3>

              <p className="desc">
                Transforming ideas into reality through code. With over 5 years
                of experience, I bring expertise as a software engineer,
                front-end developer, and data scientist. Crafting visually
                stunning websites and powerful software solutions that elevate
                user experiences.
              </p>

              <ul>
                <li>
                  <span>Name:</span>
                  <span>Muhammed Ali Jowher</span>
                </li>
                <li>
                  <span>Date of birth:</span>
                  <span>January 29, 1997</span>
                </li>
                <li>
                  <span>Address:</span>
                  <span>283 American campus Dr, Buffalo, New York</span>
                </li>
                <li>
                  <span>Zip code:</span>
                  <span>14228</span>
                </li>
                <li>
                  <span>Email:</span>
                  <span>ali.jowher4@gmail.com</span>
                </li>
                <li>
                  <span>Phone:</span>
                  <span>+1 716-2320608</span>
                </li>
              </ul>

              <h4 className="project_text">
                <span>7+</span> Projects completed
              </h4>

              <a href={resume} download>
                <button>Download Cv</button>
              </a>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}

        <section className="skills_container">
          <h3 className="heading">Technical Skills</h3>

          <div className="progress_container">
            <div className="row">
              <div className="col-lg-3">
                <div className="progress_box js_bar">
                  <p className="title">JavaScript</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box react_bar">
                  <p className="title">React Js</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box kafka_bar">
                  <p className="title">Spring Boot</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box pandas_bar">
                  <p className="title">numpy</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box sift_bar">
                  <p className="title">Oracle</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box docker_bar">
                  <p className="title">Docker</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box kafka_bar">
                  <p className="title">Kafka</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="progress_box py_bar">
                  <p className="title">Python</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box cont_api_bar">
                  <p className="title">Context API</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box node_bar">
                  <p className="title">Node.js</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box scikit_bar">
                  <p className="title">pandas</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box opencv_bar">
                  <p className="title">Postgres</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box kubernetes_bar">
                  <p className="title">Kubernetes</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box tensorflow_bar">
                  <p className="title">Tensorflow</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="progress_box java_bar">
                  <p className="title">Java</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box spring_boot_bar">
                  <p className="title">Redux</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box pytest_bar">
                  <p className="title">JUnit</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box cypress_bar">
                  <p className="title">scikit</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box oracle_bar">
                  <p className="title">MongoDB</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box jenkins_bar">
                  <p className="title">Jenkins</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box CNN_bar">
                  <p className="title">CNN</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="progress_box r_bar">
                  <p className="title">R</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box spring_MVC">
                  <p className="title">Cypress</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box numpy_bar">
                  <p className="title">Groovy</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box XGBoost_bar">
                  <p className="title">opencv</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box postgres_bar">
                  <p className="title">Hadoop</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box GCP_bar">
                  <p className="title">GCP</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>

                <div className="progress_box RNN_bar">
                  <p className="title">RNN</p>
                  <div className="progress_bar">
                    <div className="line">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS SECTION */}

        <section className="awards_container">
          <h3 className="heading">Awards</h3>

          <div className="row g-4 award_box_container">
            <div className="col-lg-4">
              <div className="award_box">
                <div>
                  <div className="icon_container">
                    <FaAward />
                  </div>
                </div>
                <h3 className="title">First Prize</h3>
                <p>
                  Secured first prize in all three rounds of a Hackathon
                  attended by 200+ Target Corporation employees from India and
                  Minneapolis. Developed a mobile app version of the ETL tool
                  using PWA technology.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="award_box">
                <div>
                  <div className="icon_container">
                    <FaAward />
                  </div>
                </div>
                <h3 className="title">Highest Grade</h3>
                <p>
                  Achieved the highest grade in Maths during the first semester
                  of my Masters program.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="award_box">
                <div>
                  <div className="icon_container">
                    <FaAward />
                  </div>
                </div>
                <h3 className="title">Monthly Award</h3>
                <p>
                  Received the Pyramid Monthly Award from Target for my
                  significant contributions to UI features and enhancements
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="award_box">
                <div>
                  <div className="icon_container">
                    <FaAward />
                  </div>
                </div>
                <h3 className="title">Team Level</h3>
                <p>
                  Won first prize twice in team-level hack day competitions at
                  Target Corporation
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="award_box">
                <div>
                  <div className="icon_container">
                    <FaAward />
                  </div>
                </div>
                <h3 className="title">Highest Code</h3>
                <p>
                  Committed the second-highest number of lines of code to the
                  ETL front-end Git repository at Target Corporation (80k+
                  lines)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}

        <section className="education_container">
          <h3 className="heading">Education</h3>

          <div className="education_accordion_container">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  MS in Engineering Science, Data Science - University at
                  Buffalo - <span> 2021 – 2023</span>
                  <MdOutlineKeyboardArrowDown className="arrow_icon" />
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    src={certificate_1}
                    alt="Certificate"
                    className="img-fluid certificate"
                  />

                  {/* <a
                    href="https://drive.google.com/file/d/11-mjz3KBceRcUh1usM23u_bxhNIRIMYq/view"
                    target="blank"
                    className="portfolio_link"
                  >
                    <FiLink />
                    View transcript
                  </a> */}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Post Graduate Program in Artificial Intelligence and Machine
                  Learning - The University of Texas - <span> 2020 – 2021</span>
                  <MdOutlineKeyboardArrowDown className="arrow_icon" />
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    src={certificate_2}
                    alt="Certificate"
                    className="img-fluid certificate"
                  />
                  <div className="btn_container">
                    <a
                      href="https://olympus.mygreatlearning.com/eportfolio"
                      className="portfolio_link"
                      target="blank"
                    >
                      <FiLink />
                      View e-portfolio
                    </a>
                    <a
                      href="https://i.ibb.co/y09xX9R/MUHAMMED-ALI-JOWHER-transcript.jpg"
                      target="blank"
                      className="portfolio_link"
                    >
                      <FiLink />
                      View transcript
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  B.Tech in Computer Science and Engineering - National
                  Institute of Technology, Calicut - <span> 2014 – 2018</span>
                  <MdOutlineKeyboardArrowDown className="arrow_icon" />
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    src={certificate_3}
                    alt="Certificate"
                    className="img-fluid certificate"
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
