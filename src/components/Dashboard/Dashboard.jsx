import { Grid, Container, CircularProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useProvider } from "../../utils/FirebaseProvider";
import Navbar from "./Navbar/Navbar";
import Card from "./Card/Card";
import Modal from "./Home/Modal";
import axios from "axios";
import "../styles/Dashboard/styles";

function Dashboard() {
  const [open, setOpen] = useState(false);
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  handleOpen={handleOpen}
                />
              </Grid>
            ))
          )}
          <Modal handleClose={handleClose} open={open} />
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
