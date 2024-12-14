"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";

const Page = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("")

  // function getToken() {
  //   return localStorage.getItem("accessToken");
  // }
  // const token = getToken();
  // console.log(token);

  // if (token) {
  //   redirect("/admin");
  // }

  // const userInfo = { username: "sohag@gmail.com", password: "1234" };

  // if (userInfo.username === email) {
  //   console.log(email);
  //   localStorage.setItem("accessToken", userInfo.username);
  //   redirect("/admin");
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const user = { email };
  //   await setEmail(e.target.email.value);
  //   // await setPassword(e.target.password.value)
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const userToken = {
  //     access: event.target.token,
  //   };

  //   localStorage.setItem("accessToken", userToken.access);
  //   console.log("Token stored:", userToken.access);
  // };

  return (
    <section className="container">
      <div>
        <div>
          <section id="contact">
            <div className="st-height-b100 st-height-lg-b80"></div>
            <div className="container">
              <div className="st-section-heading st-style1">
                <h4 className="st-section-heading-title">Sign In</h4>
                <h2 className="st-section-heading-subtitle">Sign In</h2>
              </div>
              <div className="st-height-b25 st-height-lg-b25"></div>
            </div>

            {/* <!-- Contact Container --> */}

            <div className="container">
              <div className="flex">
                <div className="basis-2/12	"></div>
                <div className="basis-8/12">
                  <div id="st-alert"></div>

                  {/* <form onSubmit={handleSubmit}> */}
                  <form >
                    <label>
                      email:
                      <input type="email" name="email" 
                      // onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <br />
                    {/* <label>
                     password:
                      <input type="password" name="password" />
                    </label> */}
                    <br />
                    <button type="submit">Submit</button>
                  </form>

                  {/* <form
                    onSubmit={handleSubmit}
                    action="#"
                    method="POST"
                    className="st-contact-form"
                    id="contact-form"
                  >
                    <div className="st-form-field">
                      <input
                        type="text"
                        id="name"
                        name="token"
                        placeholder="Enter Name"
                        required
                      />
                    </div>

                    <div className="st-form-field">
                      <input
                        type="email"
                        id="subject"
                        name="Category"
                        placeholder="Enter Email"
                        required
                      />
                    </div>

                    <div className="st-form-field">
                      <input
                        type="password"
                        id="subject"
                        name="Category"
                        placeholder="Enter Password"
                        required
                      />
                    </div>

                    <button
                      className="st-btn st-style1 st-color1"
                      type="submit"
                      id="submit"
                      name="submit"
                    >
                      Sing In
                    </button>
                  </form> */}
                </div>
                <div className="basis-2/12	"></div>
                <div className="st-height-b0 st-height-lg-b30"></div>
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Page;
