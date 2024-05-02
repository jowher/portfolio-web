import { MdWorkOutline } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import "./ExperienceStyle.css";

const Experience = () => {
  return (
    <div className="experience_wrapper" id="experience">
      <div className="experience_container container">
        <h3 className="heading">Work Experience</h3>

        <div className="row g-4 experience_card_container">

        <div className="col-lg-6">
            <div className="experience_card">
              <div>
                <div className="icon_container">
                  <MdWorkOutline />
                </div>
              </div>

              <span className="location d-none d-lg-block">New York, USA</span>
              <span className="date d-none d-lg-block">SEP 2022 - Present</span>

              <h3 className="title">
                Software Engineer <AiOutlineMinus className="icon" />
                <span>CVS Health Corporation</span>
              </h3>

              <span className="location location_sm">New York, USA</span>
              <span className="date date_sm">Aug 2023 - Present</span>

              <ul>
                <li>
                Managed and developed a user interface enabling the discovery of medical and prescription data from various sources within our data pipeline, 
                featuring user-friendly querying capabilities.
                </li>
                <li>
                Created a user interface from scratch for a DAG utility tool, with the resulting DAGs stored in a GCS bucket.
                </li>
                <li>Designed a user interface for document review, allowing users to upload PDFs, search using a DCN number, retrieve bounding box coordinates via API, and highlight relevant areas within the document.</li>
                <li>
                Developed a spike dashboard for business purposes, facilitating graphical trend analysis of procedure amounts with filtering options based on plan sponsor and patient information.
                </li>                
              </ul>
            </div>
          </div>


          <div className="col-lg-6">
            <div className="experience_card">
              <div>
                <div className="icon_container">
                  <MdWorkOutline />
                </div>
              </div>

              <span className="location d-none d-lg-block">Remote, USA</span>
              <span className="date d-none d-lg-block">Sep 2022 - June 2023</span>

              <h3 className="title">
                Software Engineer <AiOutlineMinus className="icon" />
                <span>Target Corporation</span>
              </h3>

              <span className="location location_sm">Remote, USA</span>
              <span className="date date_sm">SEP 2022 - Present</span>

              <ul>
                <li>
                  Implemented automated certificate renewal and alerting for
                  application security
                </li>
                <li>
                  Built and enhanced data catalog tool for Target’s data science
                  platform
                </li>
                <li>Developed Python client to interact with ETL tool</li>
                <li>
                  Created a wrapper devops(Vela) plugin to interact with ETL
                  tool using yaml files as config and published a docker image
                </li>
                <li>
                  Wrote ipynb scripts for Target’s data compliance team to
                  reprocess delete requests for different dates
                </li>
                <li>
                  Implemented a way in Target’s ETL tool to get the Kubernetes
                  pod/job logs and console to the specific action logs using
                  multi threading
                </li>
                <li>
                  Created Kibana dashboard for API debugging and Grafana
                  dashboard for application health monitoring, integrating
                  ShuttleIO for alerts
                </li>
                <li>
                  Worked on Spring Boot multi-module Gradle project and wrote
                  Groovy test cases
                </li>
                <li>
                  Authored Confluence documentation on new design patterns for
                  spike stories
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="experience_card">
              <div>
                <div className="icon_container">
                  <MdWorkOutline />
                </div>
              </div>
              <span className="location d-none d-lg-block">
                Bangalore, Karnataka, India
              </span>
              <span className="date d-none d-lg-block">
                July 2018 - Aug 2021
              </span>

              <h3 className="title">
                Software Engineer <AiOutlineMinus className="icon" />
                <span>Target Corporation</span>
              </h3>

              <span className="location location_sm">
                Bangalore, Karnataka, India
              </span>
              <span className="date date_sm">July 2018 - Aug 2021</span>

              <ul>
                <li>
                  Worked as a full stack engineer to develop and add new
                  features to Automation Portal which allows team of user to own
                  end-to-end data pipeline and scheduling of workflows
                </li>
                <li>
                  Developed web application for intake request form and created
                  Jira tickets, automating the issue creation process
                </li>
                <li>
                  Migrated ETL tool from JSP framework to ReactJS and
                  ContextAPI, designing and implementing a major portion of new
                  UI
                </li>
                <li>
                  Automated archiving of logs from Oracle Database to Hive
                  tables using Hadoop
                </li>
                <li>
                  Built several API’s using Java Spring Boot and wrote unit and
                  integration tests for them
                </li>
                <li>
                  Worked on maven microservices architecture projects and added
                  unit tests in Junit
                </li>
                <li>
                  Designed and implemented a web application using Java Spring
                  and Hibernate for CRUD operations on tags
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="experience_card intern">
              <div>
                <div className="icon_container">
                  <MdWorkOutline />
                </div>
              </div>
              <span className="location d-none d-lg-block">Bangalore</span>
              <span className="date d-none d-lg-block">
              Jan 2018 - May 2018
              </span>

              <h3 className="title">
                Intern <AiOutlineMinus className="icon" />
                <span>Servntire Global</span>
              </h3>

              <span className="location location_sm">Bangalore</span>
              <span className="date date_sm">Jan 2018 - May 2018</span>

              <ul>
                <li>
                  As a front-end developer, I was responsible for creating
                  wire-frames and designing the user interface for various web
                  applications using React
                </li>
                <li>
                  I was responsible for testing the application’s front-end
                  functionality and ensuring that it integrated seamlessly with
                  the back-end
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
