import React from "react";

const Error = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="alert alert-danger" role="alert">
        Yükleme sırasında bir sorun oluştu.
      </div>
    </div>
  );
};

export default Error;
