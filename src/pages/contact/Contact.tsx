import React, { useEffect, useMemo, useState } from "react";
import "./Contact.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "@formcarry/react";
import emailIcon from "../../assets/img/envelope.png";
import phoneIcon from "../../assets/img/smartphone.png";
import axios from "axios";

const Contact: React.FC =  () => {
  
  // const { state, submit } = useForm({
  //   id: "drM33_-Ro0i",
  //   debug: true,
  // });
  
  const notify = (message: string | {} | null | undefined) => {
    toast.dark(message, {
      position: "bottom-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [formState, setFormState] = useState({email: '', name: '', message: ''});
  // const submitForm = (ev: { preventDefault: () => void; target: any; }) => {
  //   ev.preventDefault();
  //   const form = ev.target;
  //   const data = new FormData(form);
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(form.method, form.action);
  //   xhr.setRequestHeader("Accept", "application/json");
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState !== XMLHttpRequest.DONE) return;
  //     if (xhr.status === 200) {
  //       form.reset();
  //       setStatus("SUCCESS");
  //     } else {
  //       setStatus("ERROR");
  //     }
  //   };
  //   xhr.send(data);
  // };
  // useMemo(() => {
  //   status === "SUCCESS" && notify("😁 Message submitted successfully");
  //   status === "ERROR" && notify("😢 Message was not submitted successfully");
  // }, [status]);

  const clearInput = () => {
    setFormState({ email: "", name: "", message: "" });
  };

  const onInputChange = (type: string, e: string | any) => {
    console.log("onInputChange", formState);
    setFormState({ ...formState, [type]: e.target.value });
    // this.setState({ inputVal: e.target.value });
  };

  const handleForm = (e) => {
    axios
      .post("https://formcarry.com/s/drM33_-Ro0i", formState, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        // access response.data in order to check formcarry response
        if (response.data.success) {
          // handle success
          
        } else {
          // handle error
          
          console.log(response.data.message);
        }
        notify(
          "😁 Message submitted successfully, you will get a response soon"
        );
        clearInput();
      })
      .catch(function (error) {
        notify(
          "😞 Error occur while submitting message, please try again later"
        );
        console.log(error);
      });

    e.preventDefault();
  };

  // useEffect(() => {
  //   if (state.submitted && !state.submitting) {
       
  //     setTimeout(() => {
       
  //     }, 2000);
  //     console.log("Helloo", state);
      
      
  //   }
  // }, [state]);

  return (
    <div className="section">
      <div className="contact" style={{ height: window.innerHeight }}>
        <section className="contact__top">
          <h1>Take a coffee & chat with me</h1>
        </section>
        {/* Title & Sub */}
        <section className="contact__item">
          <div className="contact__item--box">
            <div className="contact__item--box--1">
              <img src={emailIcon} alt="itemImage" />
              <p>joshmatparrot@gmail.com</p>
            </div>
            <div className="contact__item--box--2">
              <img src={phoneIcon} alt="itemImage" />
              <p>+2349035982285</p>
            </div>
          </div>
        </section>
        <section className="contact__content">
          <form
            className="contact__content--form"
            // onSubmit={submitForm}
            // action="https://formspree.io/f/xlezdyzg"
            // method="POST"
            onSubmit={handleForm}
          >
            <div className="contact__content--form__list">
              <input
                type="email"
                name="_replyto"
                placeholder="Email Address"
                value={formState.email}
                onChange={(e) => onInputChange("email", e)}
              />
              <input
                type="firstName"
                name="firstName"
                placeholder="Name"
                value={formState.name}
                onChange={(e) => onInputChange("name", e)}
              />
              {/* <input type="lastName" name="lastName" placeholder="Last name" /> */}
              <input
                type="text"
                name="message"
                placeholder="Message"
                value={formState.message}
                onChange={(e) => onInputChange("message", e)}
              />
            </div>
            <div>
              {/* <div className="btn" onClick={() => submitForm()}></div> */}
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
        <section className="footer">
          <p>
            Copyright © {new Date().getFullYear()} Joshmat. All rights Reserved.
          </p>
          {/* <p>
            Created by{" "}
            <a href="https://wa.me/+2349035982285?text=Hello Ĵoshmăt">
              Ĵoshmăt
            </a>
          </p> */}
        </section>
      </div>
    </div>
  );
};

export default Contact;
