import React, { useState } from 'react';
import './App.css';
import profileImage from './profile.jpg'; // Make sure to place your profile.jpg in the src folder
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Documents from './Documents'; // Import the new Documents component

function App() {
  const [activeTab, setActiveTab] = useState('aboutMe');

  return (
    <Router>
      <Switch>
        <Route exact path="/Profile">
          <div className="App">
            <header className="App-header">
              <h1>Professional Profile</h1>
            </header>

            <main>
              <section className="personal-info">
                <div className="profile-container">

                  <div className="personal-details">
                    <h2>Personal Information</h2>
                    <ul>
                      <li><strong>Name:</strong> Abhishek Dnyaneshwar Dhonde</li>
                      <li><strong>Email:</strong> abhishekdhonde0@gmail.com</li>
                      <li><strong>Phone:</strong> (+91) 8830079372/9421207743</li>
                      <li><strong>Current Address:</strong> Sairang Residancy, Bhosari, pune, Maharshtra, India PIN-412105</li>
                    </ul>
                  </div>

                  <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
              </section>

              {/* Tabs Navigation */}
              <div className="tabs">
                <button onClick={() => setActiveTab('aboutMe')} className={activeTab === 'aboutMe' ? 'active' : ''}>About Me</button>
                <button onClick={() => setActiveTab('skills')} className={activeTab === 'skills' ? 'active' : ''}>Key Competencies & Technical Skills</button>
                <button onClick={() => setActiveTab('journey')} className={activeTab === 'journey' ? 'active' : ''}>Professional Journey</button>
                <button onClick={() => setActiveTab('Educational Information')} className={activeTab === 'Educational Information' ? 'active' : ''}>Educational Information</button>
                <button onClick={() => setActiveTab('declaration')} className={activeTab === 'declaration' ? 'active' : ''}>Declaration</button>
                <button onClick={() => setActiveTab('documents')} className={activeTab === 'documents' ? 'active' : ''}>Documents</button>
              </div>

              {/* Tabs Content */}
              <div className="tab-content">
                {activeTab === 'aboutMe' && (
                  <section className="about-me">
                    <h2>About Me</h2>
                    <p> Dedicated and experienced Software Quality Assurance Engineer with a solid background in manual and automation
                      testing. Proficient in Python and JavaScript with a strong understanding of software development principles. Skilled in
                      utilizing industry-standard testing tools and technologies, including Git, Jenkins, and various IDEs. Possesses
                      comprehensive knowledge of Cloud Platform (GCP), Azure  & services. Proven ability to collaborate effectively within cross
                      functional teams to ensure high-quality software deliverable s.</p>
                    <h2>Professional Summary</h2>
                    <ul>
                      <li><i className="fas fa-check-circle"></i> More Than 4.5 years of Experience in the IT industry with expertise in Manual and Automation Testing like Black box, Smoke, Sanity, Integration, Functional, Regression, database, and writing test cases.</li>
                      <li><i className="fas fa-check-circle"></i> Conducted comprehensive manual testing of UI and API applications to identify defects and ensure adherence to quality standards.</li>
                      <li><i className="fas fa-check-circle"></i> Developed and executed automated test scripts using Selenium WebDriver and REST Assured for API testing, resulting in improved test coverage and efficiency.</li>
                      <li><i className="fas fa-check-circle"></i> Collaborated with cross-functional teams to define test strategies, create test plans, and prioritize testing activities based on project timelines and requirements.</li>
                      <li><i className="fas fa-check-circle"></i> Designed and maintained test cases, test suites, and test documentation to support regression testing and future releases.</li>
                      <li><i className="fas fa-check-circle"></i> Integrated automated tests into Jenkins CI/CD pipelines to enable continuous testing and delivery of software increments.</li>
                      <li><i className="fas fa-check-circle"></i> Identified, reported, and tracked software defects using issue tracking systems such as Jira, ensuring timely resolution and effective communication with development teams.</li>
                      <li><i className="fas fa-check-circle"></i> Participated in Agile ceremonies, including sprint planning, daily stand-ups, and retrospectives, to provide valuable input on testing efforts and project progress.</li>
                      <li><i className="fas fa-check-circle"></i> Received the "Bright Beginner" award during the probation period in 2022 for outstanding performance and dedication.</li>
                      <li><i className="fas fa-check-circle"></i> Recognized as the "Best Performer of the Year" during the period (2024–2025).</li>
                    </ul>
                    <h2>Additional Personal Information</h2>
                    <ul>
                      <li><strong>DOB:</strong> 20 January, 1993</li>
                      <li><strong>Marital Status:</strong> Married</li>
                      <li><strong>Languages Known:</strong> Marathi, Hindi, English.</li>
                      <li><strong>Email:</strong> abhishekdhonde0@gmail.com/abhishekdhonde1993@gmail.com</li>
                      <li><strong>Phone:</strong> (+91) 8830079372/9421207743</li>
                      <li><strong>Strengths:</strong> Positive thinker, Hard working, Quick learner, Honest, Friendly.
                      Weakness: Not quick to trust, afraid of loneliness.</li>
                      <li><strong>Nationality:</strong> INDIAN</li>
                    </ul>
                  </section>
                )}

                {activeTab === 'skills' && (
                  <section className="skills">
                    <h2>Key Competencies & Technical Skills</h2>
                    <ul>
                      <li><i className="fas fa-code"></i> JavaScript</li>
                      <li><i className="fab fa-java"></i> Java</li>
                      <li><i className="fab fa-react"></i> React</li>
                      <li><i className="fab fa-node-js"></i> Node.js</li>
                      <li><i className="fas fa-file-code"></i> HTML, CSS</li>
                      <li><i className="fab fa-git-alt"></i> Git & GitHub</li>
                      <li><i className="fas fa-vial"></i> Manual Testing and Automation Testing (Selenium, Rest Assured API)</li>
                      <li><i className="fas fa-network-wired"></i> API Testing (REST Assured)</li>
                      <li><i className="fas fa-tasks"></i> Test Planning and Execution</li>
                      <li><i className="fas fa-pencil-alt"></i> Test Case Design and Documentation</li>
                      <li><i className="fas fa-file-alt"></i> Microsoft Office Suite</li>
                      <li><i className="fas fa-pen-fancy"></i> Technical Writing</li>
                      <li><i className="fas fa-table"></i> Advanced Excel Modelling</li>
                      <li><i className="fas fa-user-check"></i> User Acceptance Testing</li>
                      <li><i className="fab fa-jira"></i> Jira</li>
                      <li><i className="fab fa-python"></i> PYTHON</li>
                      <li><i className="fas fa-code-branch"></i> Git Version Control</li>
                      <li><i className="fas fa-cogs"></i> Jenkins Continuous Integration</li>
                      <li><i className="fas fa-project-diagram"></i> Agile Methodologies</li>
                      <li><i className="fas fa-laptop-code"></i> IDEs (Eclipse, Visual Studio Code)</li>
                      <li><i className="fab fa-google"></i> Google Cloud Platform (GCP) Services</li>
                      <li><i className="fab fa-microsoft"></i> Azure Cloud Platform</li>
                      <li><i className="fab fa-dev"></i> Azure DevOps</li>
                      <li><i className="fas fa-check"></i> TestNG</li>
                      <li><i className="fas fa-leaf"></i> Cucumber</li>
                    </ul>
                  </section>
                )}

                {activeTab === 'journey' && (
                  <section className="experience">
                    <h2>Professional Journey</h2>
                    <div className="experience-section">
                      <h3>Analyst - Software Engineer at FigmdIndia pvt. Ltd., Pune (Group of MRO).</h3>
                      <p><em>Mar 2022 - Present</em></p>
                      <h4>Role & Responsibility</h4>
                      <ul>
                        <li><i className="fas fa-check-circle"></i> Performing test analysis which includes requirement understanding, effort estimation, test plan, and test case preparation for new Service requests (SR) and change requests (CR).</li>
                        <li><i className="fas fa-check-circle"></i> Developing a robust automated testing framework using Java and Selenium WebDriver to validate web application functionality across multiple browsers and platforms.</li>
                        <li><i className="fas fa-check-circle"></i> Preparation of Python or Java scripts to generate test data.</li>
                        <li><i className="fas fa-check-circle"></i> Implemented reusable test scripts and page objects to improve maintainability and scalability of automated tests.</li>
                        <li><i className="fas fa-check-circle"></i> CICD pipeline setup to integrate Security scan Snyk, test execution steps etc.</li>
                        <li><i className="fas fa-check-circle"></i> Integrated the testing framework with Jenkins for continuous integration and executed tests as part of the CI/CD pipeline.</li>
                        <li><i className="fas fa-check-circle"></i> Execution of Test Cases and reporting to the manager.</li>
                        <li><i className="fas fa-check-circle"></i> Developed Test Cases to test the functionality and change functionality of the application from the BRD (Business Requirement Documents/Contract).</li>
                        <li><i className="fas fa-check-circle"></i> Coordination with the development team in fixing the defects.</li>
                        <li><i className="fas fa-check-circle"></i> Raising defects and incidents and bringing them to closure within SLA.</li>
                        <li><i className="fas fa-check-circle"></i> Attending sprint planning, daily huddle, grooming, backlog refinement, and sprint review meetings.</li>
                      </ul>
                    </div>
                    <div className="experience-section">
                      <h3>Associate Test Engineer at Precisto Solutions, Pune.</h3>
                      <p><em>July 2021 - April 2022</em></p>
                      <p>Description – Accounting Project is an ERP system that includes Purchase, Sales, Accounts related modules for retailers, whole sellers, clothing industries. Entire management of Purchase, Sales Inventory and reports can be viewed in the system.</p>
                      <h4>Role & Responsibility</h4>
                      <ul>
                        <li><i className="fas fa-check-circle"></i> Analyzed the User Stories and Identified the Test Scenarios & Test Cases.</li>
                        <li><i className="fas fa-check-circle"></i> Performed Functional testing on the User Stories in each iteration.</li>
                        <li><i className="fas fa-check-circle"></i> Performed Regression Testing before every Release.</li>
                        <li><i className="fas fa-check-circle"></i> Performed Smoke testing on QA Environment daily before approving the daily Build.</li>
                        <li><i className="fas fa-check-circle"></i> Performed Sanity Testing before delivery of any Release.</li>
                      </ul>
                    </div>
                  </section>
                )}

                {activeTab === 'Educational Information' && (
                  <section className="education">
                    <h2>Educational Information</h2>
                    <div>
                      <h3>Post Graduation</h3>
                      <p><em>MTech in MechanicalProduction, Maharashtra
                        Kolhapur institute of technology, Kolhapur(2019), CGPA 7.5</em></p>
                    </div>
                    <div>
                      <h3>Graduation</h3>
                      <p><em>Bachelor of Engineeringin Mechanical Engineering, PuneUniversity, Maharashtra
                        JCOE,Junnar( Pune)(2016), 64.86%</em></p>
                    </div>
                    <div>
                      <h3>HSC</h3>
                      <p><em> HSC(12th), Pune Board,Maharashtra
                        M.P.K. V. Jr.College, Rahuri (2010), 58.33%</em></p>
                    </div>
                    <div>
                      <h3>SSC</h3>
                      <p><em>SSC(10th), Pune Board,Maharashtra
                        M.P.K.V. , Rahuri (2008), 76.00%</em></p>
                    </div>
                  </section>
                )}

                {activeTab === 'declaration' && (
                  <section className="declaration">
                    <h2>Declaration</h2>
                    <p>I hereby declare that the information provided above is true to the best of my knowledge and belief.</p>
                    <p>Signature: Abhishek D Dhonde</p>
                  </section>
                )}

                {activeTab === 'documents' && (
                  <section className="documents">
                  <h2>Documents</h2>
                  <Link to="/documents" target="_blank" rel="noopener noreferrer">View My Documents</Link>
                  <br />
                  <a href="/path/to/your/document1.pdf" target="_blank" rel="noopener noreferrer" download>Download Document 1</a>
                  <br />
                  <a href="/path/to/your/document2.pdf" target="_blank" rel="noopener noreferrer" download>Download Document 2</a>
                  {/* Add more download links as needed */}
                </section>
                )}
              </div>
            </main>

            <footer>
              <p>Thank You!</p>
            </footer>
          </div>
        </Route>
        <Route path="/documents" component={Documents} />
      </Switch>
    </Router>
  );
}

export default App;
