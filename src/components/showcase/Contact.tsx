import React, { useEffect, useState } from 'react';
import colors from '../../constants/colors';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

const validateEmail = (email: string) => {
  const re =
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

interface SocialBoxProps {
  icon: string;
  link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => (
  <a rel="noreferrer" target="_blank" href={link}>
    <div className="big-button-container" style={styles.social}>
      <img src={icon} alt="" style={styles.socialImage} />
    </div>
  </a>
);

const Contact: React.FC<ContactProps> = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formMessageColor, setFormMessageColor] = useState('');

  useEffect(() => {
    if (validateEmail(email) && name.trim().length > 0 && message.trim().length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, name, message]);

  async function submitForm() {
    if (!isFormValid) {
      setFormMessage('Form unable to validate, please try again.');
      setFormMessageColor('red');
      return;
    }
    try {
      setIsLoading(true);

      const res = await fetch(
        'https://nocodeform.io/f/68448b5c2024fdb9eb4facee',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            company,
            email,
            name,
            message,
          }),
        }
      );

      if (res.ok) {
        setFormMessage(`Message successfully sent. Thank you ${name}!`);
        setCompany('');
        setEmail('');
        setName('');
        setMessage('');
        setFormMessageColor(colors.blue);
      } else {
        const data = await res.json().catch(() => null);
        setFormMessage(data?.error || 'Failed to send message.');
        setFormMessageColor(colors.red);
      }
      setIsLoading(false);
    } catch (e) {
      setFormMessage('There was an error sending your message. Please try again.');
      setFormMessageColor(colors.red);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (formMessage.length > 0) {
      const timeout = setTimeout(() => {
        setFormMessage('');
        setFormMessageColor('');
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [formMessage]);

  return (
    <div className="site-page-content">
      <div style={styles.header}>
        <h1>Contact</h1>
        <div style={styles.socials}>
          <SocialBox icon={ghIcon} link="https://github.com/Shlokmonster" />
          <SocialBox icon={inIcon} link="https://www.linkedin.com/in/shlok-kadam" />
          <SocialBox icon={twitterIcon} link="https://x.com/Shlokkadam103?t=fEuQ5jONX1F14CGcUHXtew&s=08" />
        </div>
      </div>

      <div className="text-block">
        <p>
          I'm always open to discussing new opportunities, projects, or just a friendly chat about technology.
          Feel free to reach out via email or through the contact form below. I'll get back ASAP!
        </p>
        <br />
        <p>
          <b>Email: </b>
          <a href="mailto:shlokkadam46@gmail.com">shlokkadam46@gmail.com</a>
        </p>
        <p>
          <b>Phone: </b>
          <a href="tel:+917823065134">+91 7823065134</a>
        </p>

        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
          noValidate
        >
          <label>
            <p>
              {!name && <span style={styles.star}>*</span>}
              <b>Your name:</b>
            </p>
          </label>
          <input
            style={styles.formItem}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>
            <p>
              {!validateEmail(email) && <span style={styles.star}>*</span>}
              <b>Email:</b>
            </p>
          </label>
          <input
            style={styles.formItem}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            <p>
              <b>Company (optional):</b>
            </p>
          </label>
          <input
            style={styles.formItem}
            type="text"
            name="company"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <label>
            <p>
              {!message && <span style={styles.star}>*</span>}
              <b>Message:</b>
            </p>
          </label>
          <textarea
            name="message"
            placeholder="Message"
            style={styles.formItem}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div style={styles.buttons}>
            <button
              className="site-button"
              style={styles.button}
              type="submit"
              disabled={!isFormValid || isLoading}
            >
              {!isLoading ? 'Send Message' : <p className="loading">Sending</p>}
            </button>

            <div style={styles.formInfo}>
              <p style={{ color: formMessageColor }}>
                <b>
                  <sub>
                    {formMessage
                      ? formMessage
                      : ' All messages get forwarded straight to my personal email'}
                  </sub>
                </b>
              </p>
              <p>
                <sub>
                  {!isFormValid ? (
                    <span>
                      <b style={styles.star}>*</b> = required
                    </span>
                  ) : (
                    '\xa0'
                  )}
                </sub>
              </p>
            </div>
          </div>
        </form>
      </div>
      <ResumeDownload altText="Need a copy of my Resume?" />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 32,
  },
  formItem: {
    marginTop: 4,
    marginBottom: 16,
    padding: '8px 12px',
    fontSize: 16,
  },
  socialImage: {
    width: 36,
    height: 36,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formInfo: {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingLeft: 24,
  },
  star: {
    paddingRight: 4,
    color: 'red',
  },
  button: {
    minWidth: 184,
    height: 32,
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socials: {
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  social: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
};

export default Contact;
