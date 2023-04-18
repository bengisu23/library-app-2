import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../redux/action/actionTypes";

import { Link } from "react-router-dom";
import "../styles/general.css";
import sun from "../assets/icons8-sun.gif";
import moon from "../assets/icons8-moon-and-stars.gif";

const Header = () => {
  const { themeState, booksState, categoriesState } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  return (
    <nav
      style={{ position: "relative" }}
      className={`navbar navbar-expand-lg navbar-dark ${
        themeState === "light" ? "headerLight" : "headerDark"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand " to={"/"}>
          LIBRARY APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                Kitap İşlemleri
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/categories"}>
                Kategori İşlemleri
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div>
          <p style={{ margin: 0, color: "#fff" }}>
            Topam Kitap Sayısı: {booksState.books.length}
          </p>
          <p style={{ margin: 0, color: "#fff" }}>
            Topam Kategori Sayısı: {categoriesState.categories.length}
          </p>
        </div>
        {themeState === "light" ? (
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() =>
              dispatch({
                type: actionTypes.themeActions.CHANGE_THEME,
                payload: "dark",
              })
            }
            className="btn btn-sm"
          >
            <img
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
              src={moon}
            />
            <span>Dark</span>
          </button>
        ) : (
          <button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={() =>
              dispatch({
                type: actionTypes.themeActions.CHANGE_THEME,
                payload: "light",
              })
            }
            className="btn btn-sm "
          >
            <img
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
              src={sun}
            />
            <span>Light</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
