import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Card from "./Card/Card";
import axios from "axios";
import "../styles/Dashboard/styles";

function Dashboard() {
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [datas, setDatas] = useState([]);

  async function getAllData() {
    try {
      const {
        data: { products },
      } = await axios.get("http://localhost:8000/products");
      console.log(products);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}

export default Dashboard;
