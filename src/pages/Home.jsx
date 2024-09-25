import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function Home() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Checkbox is required";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    } else {
      alert("Form Submitted Successfully");
      localStorage.setItem("user", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      navigate("/selection");
    }
  };
  return (
    <div
      className={styles.BoxContainer}
    >
      <div className={styles.Contentcontainer}>
        <div style={{width : "50%", position: "relative"}}>
          <img
            src="https://s3-alpha-sig.figma.com/img/3bdb/ec6f/74b004fdcf87b04992ba3c2faf4d5bf9?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kuvipd5CxbrnsnZNbx-l119rY3qVw1bxh4MgKBkOy6EzIEwEOcGlFvSmj1bec5S5-W4uXNnnF1wbOrB1KJFY2YVWEFw6fESzG-4EBMoa3gPqejwDR3coxzkiTVOcHOb5wJNsab08FhJVpy0OxTxFefmO3MWrW0QAy4inb9N46FQsku~Wu1tNEcsJATQn2cphjQj86efFyQhjykyPJWVL9wSguRejDCTZyA5zkJT-cHbzsDJeogHbNOWcolwqcB5OwbEm0hit1RuyMg7ZGrxKFQN7C9BQLGLnKizPe747CAIR-5dFA2RktJ7G4fKTOQK1yngi6HSJ1h2yDgVbpMBzaA__"
            className={styles.image}
            alt="Image"
          />
          <div className={styles.TextOverImage}>
          Discover new things on Superapp
          </div>
        </div>
        <div className={styles.FormContainer}>
          <div style={{padding : "5px" , marginBottom: "20px", gap :"10px"}}>
            <h1 className={styles.heading}>Super app</h1>
            <p style={{color : "white", marginBottom : "10px", fontFamily : "DM sans"}}>Create your new account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              height : "70%",
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              value={data.name}
              className={styles.input}
              onChange={handleInput}
            />
            <span style={{ color: "red", height: "20px" }}>{errors.name}</span>

            <input
              type="text"
              name="username"
              placeholder="username"
              value={data.username}
              className={styles.input}
              onChange={handleInput}
            />
            <span style={{ color: "red", height: "20px" }}>
              {errors.username}
            </span>

            <input
              type="email"
              name="email"
              placeholder="email"
              value={data.email}
              className={styles.input}
              onChange={handleInput}
            />
            <span style={{ color: "red", height: "20px" }}>{errors.email}</span>

            <input
              type="tel"
              name="mobile"
              placeholder="mobile"
              value={data.mobile}
              className={styles.input}
              onChange={handleInput}
            />
            <span style={{ color: "red", height: "20px" }}>
              {errors.mobile}
            </span>

            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={handleInput}
              />
              <label htmlFor="checkbox"
              className={styles.label}>
                Share my registration data with Superapp
              </label>
            </div>
            <span style={{ color: "red", height: "20px" }}>
              {errors.checkbox}
            </span>

            <button type="submit" className={styles.button}>SIGN UP</button>
            <p className={styles.span}>By clicking on Sign up. you agree to Superapp <span style={{color : "#72DB73"}}>Terms and Conditions of Use</span></p>
            <p  className={styles.span}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color : "#72DB73"}}>Privacy Policy</span></p>
          </form>
         
        </div>
      </div>
    </div>
  );
}

// # Homework
//  Largest Contentful Paint (LCP)
//  First Input Delay (FID)
//  Cumulative Layout Shift (CLS)
//  First Contentful Paint (FCP)
//  Explore React Hook Forms
