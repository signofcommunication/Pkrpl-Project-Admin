import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Update() {
  const { productId } = useParams();

  return (
    <>
      <Navbar />
      <div>Update with id : {productId}</div>
    </>
  );
}

export default Update;
