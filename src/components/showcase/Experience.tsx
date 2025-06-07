import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <div className='site-page-content'>
      <ResumeDownload />
      <div style={styles.headerContainer}>
        <div style={styles.header}>
          <div style={styles.headerRow}>
            <h1>Skyscanner & Hewlett Packard</h1>
            <a rel='noreferrer' target='_blank' href={'#'}></a>
          </div>
          <div style={styles.headerRow}>
            <h3>FullStack Development Job Simulations</h3>
            <b>
              <p>02/2025 – Present</p>
            </b>
          </div>
        </div>
      </div>
      <div className='text-block'>
        <p>
          A technology company focused on building innovative web applications using modern
          technologies.
        </p>
        <br />
        <ul>
          <li>
            <p>
              Built and deployed scalable applications using the MERN stack, integrating with cloud
              platforms for enterprise-level solutions.
            </p>
          </li>
          <li>
            <p>
              Designed and developed RESTful APIs with Express.js and Node.js, enabling efficient
              backend workflows and third-party integrations.
            </p>
          </li>
          <li>
            <p>
              Created interactive and performance-optimized Ul components using React.js, enhancing
              user engagement and in-game functionality.
            </p>
          </li>
          <li>
            <p>
              Implemented unit/integration testing and used tools like Postman, Jest, and MongoDB
              Atlas for debugging and validation.
            </p>
          </li>
        </ul>
      </div>
      <div style={styles.headerContainer}>
        <div style={styles.header}>
          <div style={styles.headerRow}>
            <h1>Freelancer</h1>
            <a rel='noreferrer' target='_blank' href={'https://hover.gg/'}>
              <h4>www.hover.gg</h4>
            </a>
          </div>
          <div style={styles.headerRow}>
            <h3>Software Developer</h3>
            <b>
              <p>01/2021 – Present</p>
            </b>
          </div>
        </div>
      </div>
      <div className='text-block'>
        <p>
          A Freelancing agency focused on building innovative web applications using modern
          technologies.
        </p>
        <br />
        <ul>
          <li>
            <p>
              Delivered 20+ full-stack projects including web apps, automation tools, and bots using
              MongoDB, Express.js, React.js, and Node.js.
            </p>
          </li>
          <li>
            <p>
              Built dynamic Uls with React and implemented secure, scalable backends with Node and
              Express
            </p>
          </li>
          <li>
            <p>
              Deployed cloud-based solutions on AWS (EC2, S3, Lambda), ensuring performance and
              uptime.
            </p>
          </li>
          <li>
            <p>
              Implemented RESTful APIs using Node.js and Express, ensuring secure and efficient data
              flow between frontend and backend systems.
            </p>
          </li>
          <li>
            <p>
              Managed end-to-end development while sharpening skills in product management, client
              communication, and agile delivery.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  skillRow: {
    flex: 1,
    justifyContent: 'space-between',
  },
  skillName: {
    minWidth: 56,
  },
  skill: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    background: 'red',
    marginLeft: 8,
    height: 8,
  },
  hoverLogo: {
    height: 32,
    marginBottom: 16,
  },
  headerContainer: {
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'center',
  },
  hoverText: {
    marginBottom: 8,
  },
  indent: {
    marginLeft: 24,
  },
  headerRow: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default Experience;
