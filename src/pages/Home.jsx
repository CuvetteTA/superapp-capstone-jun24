import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
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
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.contentContainerTexts}>
          Discover new things on Superapp
        </h1>
      </div>
      <div className={styles.leftContentContainer}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>Super app</h1>
          <p className={styles.logoSubtext}>Create your new account</p>
        </div>
        <div className={styles.formContainer}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              // gap: "20px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={handleInput}
              className={styles.inputContainer}
            />
            <span style={{ color: "red", height: "20px" }}>{errors.name}</span>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={handleInput}
              className={styles.inputContainer}
            />
            <span style={{ color: "red", height: "20px" }}>
              {errors.username}
            </span>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleInput}
              className={styles.inputContainer}
            />
            <span style={{ color: "red", height: "20px" }}>{errors.email}</span>

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={data.mobile}
              onChange={handleInput}
              className={styles.inputContainer}
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
                className={styles.checkBox}
              />
              <label
                htmlFor="checkbox"
                style={{ color: "#7C7C7C", fontFamily: "DM Sans,sans-serif" }}
              >
                Share my registration data with Superapp
              </label>
            </div>
            <span style={{ color: "red", height: "20px" }}>
              {errors.checkbox}
            </span>

            <button className={styles.submitButton} type="submit">
              Submit
            </button>
            <div>
              <p style={{ color: "#7C7C7C", fontFamily: "Roboto" }}>
                By clicking on Sign up. you agree to Superapp{" "}
                <span style={{ color: "#72db73" }}>
                  Terms and Conditions of Use
                </span>
              </p>
              <p style={{ color: "#7C7C7C", fontFamily: "Roboto" }}>
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp{" "}
                <span style={{ color: "#72db73" }}>Privacy Policy</span>
              </p>
            </div>
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
