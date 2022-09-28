import { Grid, Container, CircularProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useProvider } from "../../../utils/FirebaseProvider";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import "../../styles/Dashboard/styles";

function Dashboard() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAllProducts } = useProvider();

  useEffect(() => {
    document.title = "Dashboard";
    async function getAllData() {
      try {
        const {
          data: { products },
        } = await axios.get("http://localhost:8000/products");

        setDatas(products);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    getAllData();
  }, []);

  console.log({ datas });

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
              <Typography>Data sedang dimuat..</Typography>
            </Grid>
          ) : (
            datas?.map((data, i) => (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <Card
                  title={data.title}
                  price={+data.price}
                  image={data.images[0]}
                  link={data._id}
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
