import React, { useEffect, useState } from "react";
import userAvatar from "../assets/userAvatar.png";
import styles from "./ProfileWidget.module.css";
import SkeletonLoader from "./SkeletonLoader";

const ProfileWidget = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [selectedGeneres, setSelectedGeneres] = useState([]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user")) || {};
    const seletedGeneres =
      JSON.parse(localStorage.getItem("selectedMovies")) || [];

    function getUser() {
      const userData = {
        name: localUser.name || "Name",
        email: localUser.email || "E-mail",
        username: localUser.username || "Username",
        mobile: localUser.mobile || "Mobile",
        selectedMovies: seletedGeneres,
      };
      setUser(userData);
      setSelectedGeneres(seletedGeneres);
      setLoading(false);
    }

    getUser();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={userAvatar} alt="User Avatar" />
      </div>
      <div className={styles.detailsContainer}>
        {loading ? (
          <SkeletonLoader height="200px" />
        ) : (
          <div className={styles.details}>
            <p className={styles.name}>{user.name}</p>
            <p className={styles.email}>{user.email}</p>
            <p className={styles.username}>{user.username}</p>
          </div>
        )}
        <div className={styles.generes}>
          {selectedGeneres.slice(0, 4).map((genere, index) => (
            <button
              key={index}
              style={{
                backgroundColor: "#9F94FF",
                border: "none",
                borderRadius: "10px",
                color: "white",
                padding: "5px 10px",
                fontSize: "18px",
                cursor: "pointer",
                fontFamily: "roboto",
                fontWeight: "lighter",
                margin: "5px", // Optional: add some margin between buttons
              }}
            >
              {genere.movie}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileWidget;
