import React from "react";

import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../redux/action/actionTypes";

 import { LogoutOutlined } from "@ant-design/icons";

const Logout = () => {
  const { loginState } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        position: "fixed",
        right: 10,
        bottom: 10,
        zIndex: 100,
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#aaa",
      }}>
      <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
        <span>Giriş Yapan Kullanıcı: </span>
        <span className="text-primary" style={{marginLeft:"5px"}}>{loginState.username}</span>
        <span
          onClick={() => dispatch({ type: actionTypes.loginActions.LOGOUT })}
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
            cursor: "pointer",
          }}>
          <LogoutOutlined style={{ color: "orangered" }} />
        </span>
      </p>
    </div>
  );
};
export default Logout;