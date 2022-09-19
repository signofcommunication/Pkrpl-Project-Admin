import { Grid, Container, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useProvider } from "../../utils/FirebaseProvider";
import Navbar from "./Navbar/Navbar";
import Card from "./Card/Card";
import axios from "axios";
import "../styles/Dashboard/styles";

function Dashboard() {
  const [datas, setDatas] = useState([]);
  const [d, setD] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getSingleProduct } = useProvider();

  async function getAllData() {
    try {
      const {
        data: { products },
      } = await axios.get("http://localhost:8000/products");
      const { data: product } = await getSingleProduct(
        "6321c0750452f286223efac9"
      );
      setDatas(products);
      setD(product);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

  console.log({ datas, d });

  return (
    <>
      <Navbar />
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={4}
          style={{ margin: "10px 0" }}
        >
          {loading ? (
            <Grid item>
              <CircularProgress />
            </Grid>
          ) : (
            datas?.map((data) => (
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  title={data.title}
                  price={+data.price}
                  image={data.images[0]}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
