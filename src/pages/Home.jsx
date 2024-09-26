import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/Home.module.css";

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

    if(!data.name || data.name.trim() === ""){
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

    if(Object.keys(errors).length > 0){
      return;
    }else{
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


  }
  return (
  <div className={styles.main}>
    <div className={styles.discover}>
      <h1>Discover new things on Superapp</h1>
    </div>
    <div className={styles.formDiv}>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
      <div className={styles.formHeading}>
        <h1>Super App</h1>
        <p>Create your new account</p>
      </div>
      <div className={styles.inputs}>
        <input className={styles.inputField}
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.name}</span>

        <input
          className={styles.inputField}
          type="text"
          name="username"
          placeholder="username"
          value={data.username}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.username}</span>

        <input
          className={styles.inputField}
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.email}</span>

        <input
          className={styles.inputField}
          type="tel"
          name="mobile"
          placeholder="mobile"
          value={data.mobile}
          onChange={handleInput}
        />
        <span style={{ color: "red", height: "20px" }}>{errors.mobile}</span>
      </div>


      <div>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleInput}
        />
        <label className={styles.checkBoxDialogue} htmlFor="checkbox">
          Share my registration data with Superapp
        </label>
      </div>
      <div>
        <span style={{ color: "red",  height: "30px" }}>{errors.checkbox}</span>
        <br/>
        <button className={styles.submitButton} type="submit">SIGN UP</button>
      </div>
      <div className={styles.termsAndConditions}>
        <p>By clicking on Sign up. you agree to Superapp <span className={styles.tc}>Terms and Conditions of Use </span></p>
        <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className={styles.tc}>Privacy Policy </span> </p>
      </div>
    </form>
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