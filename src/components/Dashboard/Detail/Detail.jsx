import { useEffect, useState, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { useProvider } from "../../../utils/FirebaseProvider";
import {
  Typography,
  Grid,
  Container,
  Button,
  CircularProgress,
} from "@mui/material";
import Navbar from "./Navbar";
import Image from "material-ui-image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Detail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getSingleProduct, setUpdateId } = useProvider();
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await getSingleProduct(productId);
        setData(res.data.product);
        setLoading(false);
      } catch (e) {
        toast.error(e.message);
      }
    }

    fetchProduct();
  }, [productId, getSingleProduct]);

  useEffect(() => {
    document.title = `${data.title || "Product"}`;
  }, [data.title]);

  setUpdateId(productId);

  return (
    <Fragment>
      <ToastContainer />
      <Navbar id={productId} />
      {loading ? (
        <Grid container justify="center">
          <Grid item align="center" style={{ margin: "20px auto" }}>
            <CircularProgress />
            <Typography>Getting the Detail</Typography>
          </Grid>
        </Grid>
      ) : (
        <Container maxwidth="sm">
          <Grid
            container
            spacing={2}
            direction="row"
            style={{ margin: "10px 0" }}
          >
            <Grid item md={6}>
              {data.images && <Image src={data?.images[0]} />}
            </Grid>
            <Grid item md={6}>
              <Typography variant="h2" component="h2">
                {data?.title}
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                style={{ margin: "20px 0" }}
              >
                {data?.price && `Rp ${data?.price.toLocaleString()}`}
              </Typography>
              <Link
                to={`/product/${productId}/edit`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained">Edit</Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      )}
    </Fragment>
  );
}

export default Detail;
