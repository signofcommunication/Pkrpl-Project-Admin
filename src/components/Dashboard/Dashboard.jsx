import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Card from "./Card/Card";
import axios from "axios";
import "../styles/Dashboard/styles";

function Dashboard() {
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
    // getAllData();
  }, []);

  return (
    <>
      <Navbar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        // style={{ backgroundColor: "#000" }}
      >
        <Grid item xs={2} sm={4} md={4} alignItems="center" justify="center">
          <Card />
        </Grid>
        <Grid item xs={2} sm={4} md={4} alignItems="center" justify="center">
          <Card />
        </Grid>
        <Grid item xs={2} sm={4} md={4} alignItems="center" justify="center">
          <Card />
        </Grid>
        <Grid item xs={2} sm={4} md={4} alignItems="center" justify="center">
          <Card />
        </Grid>
        <Grid item xs={2} sm={4} md={4} alignItems="center" justify="center">
          <Card />
        </Grid>
        <Grid item xs={2} sm={4} md={4} alignItems="center" justify="center">
          <Card />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
