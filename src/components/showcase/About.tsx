import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpeg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
  return (
    // add on resize listener
    <div className='site-page-content'>
      {/* <img src={me} style={styles.topImage} alt="" /> */}
      <h1 style={{ marginLeft: -16 }}>Welcome</h1>
      <h3>I'm Shlok Kadam</h3>
      <br />
      <div className='text-block'>
        <p>
          I'm a passionate Full Stack Developer with expertise in the MERN stack (MongoDB,
          Express.js, React.js, Node.js). Currently pursuing my B.Tech in Computer Science at ITM
          Skills University (2024–2028), I build real-world apps that blend smart backend logic with
          sleek frontend interfaces. From deploying on AWS to integrating voice AI — I'm here for it
          all.
        </p>
        <br />
        <p>
          Thank you for visiting my portfolio. I'm excited to share my journey and projects with
          you. If you have any questions or would like to connect, feel free to reach out through
          the <Link to='/contact'>contact form</Link> or email me at{' '}
          <a href='mailto:shlokkadam46@gmail.com'>shlokkadam46@gmail.com</a>
        </p>
      </div>
      <ResumeDownload />
      <div className='text-block'>
        <h3>About Me</h3>
        <br />
        <p>
          My journey in tech began with curiosity — I wanted to know how websites work under the
          hood. That curiosity turned into passion, and today I’m building full-stack apps using
          React, Node, Express, and MongoDB. I’ve worked on projects like an AI interview simulator,
          a cloud drive clone, and even a voice bot powered by GPT-4 and Twilio.
        </p>
        <br />
        <div className='captioned-image'>
          <img src={me} style={styles.image} alt='' />
          <p>
            <sub>
              <b>Figure 1:</b> A real photo of me developing this website :)
            </sub>
          </p>
        </div>

        <p>
          I’ve worked on 20+ freelance projects and completed job simulations with
          top companies like Skyscanner and HP. My projects often focus on real-world use cases like
          cloud storage, social platforms, or AI call agents. You can check them out on my{' '}
          <Link to='/projects/software'>Software Projects</Link> page.
        </p>
        <br />
        <p>
          I’m constantly learning new tools and frameworks — recently diving into CI/CD, Docker, and
          even GraphQL. I believe in writing clean, scalable code and creating experiences users
          actually enjoy using. That’s what keeps me going.
        </p>
        <br />
        <br />
        <div style={{}}>
          <div
            style={{
              flex: 1,
              textAlign: 'justify',
              alignSelf: 'center',
              flexDirection: 'column',
            }}
          >
            <h3>My Hobbies</h3>
            <br />
            <p>
              Beyond software, I have a lot of hobbies that I enjoy doing in my free time. The more
              tangible hobbies I have are <Link to='/projects/music'>Music Production</Link> and
              creating <Link to='/projects/art'>Digital Art</Link>. You can read more about each of
              these on their respective pages under my projects tab. Some other hobbies I enjoy are
              working out, cooking, and (unsurprisingly) playing video games.
            </p>
            <br />
            <p>
              I’m also very active in tech communities, always contributing ideas, debugging with
              fellow devs, and brainstorming the next cool project. I love collaboration just as
              much as I enjoy solo problem-solving.
            </p>
          </div>
          <div style={styles.verticalImage}>
            <img src={meNow} style={styles.image} alt='' />
            <p>
              <sub>
                <b>Figure 2:</b> Me, April 2025
              </sub>
            </p>
          </div>
        </div>
        <br />
        <br />
        <p>
          Thanks for reading about me! I hope that you enjoy exploring the rest of my portfolio
          website and everything it has to offer. If you find the easter egg make sure to let me
          know on Twitter{' '}
          <a rel='noreferrer' target='_blank' href='https://twitter.com/shlokkadam'>
            @shlokkadam
          </a>{' '}
          Good luck and have fun!
        </p>
        <br />
        <p>
          If you have any questions or comments I would love to hear them. You can reach me through
          the <Link to='/contact'>contact page</Link> or shoot me an email at{' '}
          <a href='mailto:shlokkadam46@gmail.com'>shlokkadam46@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  contentHeader: {
    marginBottom: 16,
    fontSize: 48,
  },
  image: {
    height: 'auto',
    width: '100%',
  },
  topImage: {
    height: 'auto',
    width: '100%',
    marginBottom: 32,
  },
  verticalImage: {
    alignSelf: 'center',
    // width: '80%',
    marginLeft: 32,
    flex: 0.8,

    alignItems: 'center',
    // marginBottom: 32,
    textAlign: 'center',
    flexDirection: 'column',
  },
};

export default About;
