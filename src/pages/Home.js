import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import ListBooks from "../components/ListBooks";
import { useSelector } from "react-redux";
import "../styles/general.css";
import Logout from "../components/Logout";
const Home = () => {
  const navigate = useNavigate();
  const { themeState } = useSelector((state) => state);
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="d-flex justify-content-end my-5">
          <Button
            type={themeState === "light" ? "dark" : "dark"}
            onClick={() => navigate("/add-book")}
            text="Kitap ekle"
            className={`btn btn-sm ${
              themeState === "light" ? "headerLight" : "headerDark"
            }`}
          />
        </div>
        <ListBooks />
      </div>
      <Logout/>
    </div>
  );
};

export default Home;
