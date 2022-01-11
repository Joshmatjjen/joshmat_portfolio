import React, { useEffect, useMemo, useState } from "react";
import "./Contact.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "@formcarry/react";
import emailIcon from "../../assets/img/envelope.png";
import phoneIcon from "../../assets/img/smartphone.png";

const Contact: React.FC =  () => {
  
  const { state, submit } = useForm({
    id: "drM33_-Ro0i",
    debug: true,
  });
  
  const notify = (message: string | {} | null | undefined) => {
    toast.dark(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // const [status, setStatus] = useState("");
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

  useEffect(() => {
    if (state.submitted && !state.submitting) {
      console.log("Helloo", state);
      notify("😁 Message submitted successfully");
    }
  }, [state]);

  return (
    <div className="section">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
            onSubmit={submit}
          >
            <div className="contact__content--form__list">
              <input type="email" name="_replyto" placeholder="Email Address" />
              <input type="firstName" name="firstName" placeholder="Name" />
              {/* <input type="lastName" name="lastName" placeholder="Last name" /> */}
              <input type="text" name="message" placeholder="Message" />
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
