import React from "react";
import style from "./Form.module.css";
import validation from "./validation";

function Form({ login }) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.name,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div
      style={{
        height: "50vh",
        width: "50vw",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        marginLeft: "5%",
      }}
    >
      <h2
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "beige",
          padding: "5px",
        }}
      >
        Username: rickandmorty@mail.com
        <br></br>
        Password: rickandmorty
      </h2>
      <form className={style.styleForm} onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30rem",
            justifyContent: "start",
            marginBottom: "2%",
          }}
        >
          <label className={style.label}>Username:</label>
          <input
            name="username"
            value={userData.username}
            className={style.input}
            placeholder="example@gmail.com..."
            onChange={handleInputChange}
          />

          {errors.username ? (
            <span className={style.danger}>{errors.username}</span>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30rem",
            justifyContent: "start",
            marginBottom: "5%",
          }}
        >
          <label style={{ paddingInlineEnd: "3%" }} className={style.label}>
            Password:
          </label>
          <input
            name="password"
            value={userData.password}
            className={style.input}
            type="password"
            onChange={handleInputChange}
          />
          {errors.username ? (
            <span className={style.danger}>{errors.username}</span>
          ) : null}
          <br></br>
        </div>
        <button className={style.button}>LOGIN</button>
      </form>
    </div>
  );
}

export default Form;
