import React from "react";
import "./Contact.css";
import axios from "axios";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import useInput from "../../Hooks/use-input";
const isNotEmpty=value=>value.trim()!=='';
const isEmail=value=> value.includes('@');
  
const Contact = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

 
  let formIsValid = false;
  if (enteredNameIsValid && enteredMessageIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

 
  const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formIsValid){
      return;
    }

    const user = {
      "name":enteredName,
      "email": enteredEmail,
      "message":enteredMessage
    }
    axios({
      method: "POST",
      url: "http://localhost:8080/sendemail",
      data: JSON.stringify(user),
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        "crossorigin":true,
      Accept:'application/json',
      }
    }).then((res) => {
      console.log("here", res)
      if (res.data) {
        toast.success(JSON.stringify(res.data), {position: toast.POSITION.TOP_RIGHT});
        resetNameInput();
        resetEmailInput();
        resetMessageInput();
      }
    })
    .catch((error) => {
    if (error.req) {
       toast.error("netowork error", {position: toast.POSITION.TOP_RIGHT})
     } else {
     // alert();
     toast.error(error.response.data.error, {position: toast.POSITION.TOP_RIGHT})
     }
    });
  };

  const nameInputClasses = nameInputHasError
    ? "contact-form invalid"
    : "contact-form";

  const emailInputClasses = emailInputHasError
    ? "contact-form invalid"
    : "contact-form";
    const messageInputClasses = messageInputHasError
    ? "contact-form invalid"
    : "contact-form";
  return (
    <>
    <div id="contacts" className="container contact-section">
      <div className="row">
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="image-class">
            <img src="https://media.istockphoto.com/id/1252809376/photo/japanese-man-at-hand-using-a-smartphone.jpg?s=612x612&w=0&k=20&c=3zUF1981mbU4mN3gmQ8IYWU96HAs1pPEN89WYKw5NAQ=" />
          </div>
        </div>

        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-design">
            <div className="text-center contact-us">
              <h5>Contact me</h5>
            </div>
            <form>
              <div className={nameInputClasses}>
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={enteredName}
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
                />
              </div>
              {nameInputHasError && (
                <p className="error-text">Please add your name</p>
              )}

              <div className={emailInputClasses}>
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={enteredEmail}
                  onChange={emailChangedHandler}
                  onBlur={emailBlurHandler}
                />
              </div>
              {emailInputHasError && (
                <p className="error-text">Please enter a valid email</p>
              )}
              <div className={messageInputClasses}>
                <label className="form-label">Your message</label>
                <textarea
                  type="text"
                  className="form-control"
                  value={enteredMessage}
                  onChange={messageChangedHandler}
                  onBlur={messageBlurHandler}
                />
                {messageInputHasError && (
                  <p className="error-text">Please enter a message</p>
                )}
              </div>
              <div className="button-submit" onClick={sendEmail}>
            <button disabled={!formIsValid}>Send</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
  
    </div>
        <ToastContainer autoClose={8000} />
        </>
  );
};

export default Contact;
