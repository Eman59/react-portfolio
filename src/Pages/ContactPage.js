import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import { send } from 'emailjs-com';
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_5j4qh5t',
      'template_969s5nm',
      toSend,
      '-xeyicEBd4v6BHW8Q'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setToSend({ from_name: '', reply_to: '', subject: '', message: '', })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={onSubmit}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" name='from_name' value={toSend.from_name} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email" name='reply_to' value={toSend.reply_to} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" name='subject' value={toSend.subject} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  onChange={handleChange}
                  value={toSend.message}
                  required
                ></textarea>
              </div>
              <div className="form-field">
                <button className="f-button" type='submit'>Send Email</button>
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+91 8097322537"}
            />
            <ContactItem
              title={"Gmail"}
              icon={email}
              cont1={"sayyedeman59@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"Mumbai, Maharashtra"}
              cont2={"India"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
      .f-button{
        background-color: var(--primary-color);
        padding: 0.8rem 2.5rem;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        text-transform: uppercase;
        position: relative;
        transition: all 0.4s ease-in-out;
        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0.2rem;
          transition: all 0.4s ease-in-out;
          left: 0;
          bottom: 0;
          opacity: 0.7;
        }
        &:hover::after {
          width: 100%;
          background-color: var(--white-color);
        }
      }
    }
  }
`;

export default ContactPage;
