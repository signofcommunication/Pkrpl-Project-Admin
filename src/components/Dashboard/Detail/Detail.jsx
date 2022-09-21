import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useProvider } from "../../../utils/FirebaseProvider";
import {
  Typography,
  Grid,
  Container,
  Paper,
  CircularProgress,
} from "@mui/material";
import Navbar from "./Navbar";
import Image from "material-ui-image";

function Detail() {
  const [data, setData] = useState([]);
  const { getSingleProduct, setUpdateId } = useProvider();
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await getSingleProduct(productId);
        setData(res.data.product);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProduct();
  }, [productId, getSingleProduct]);

  setUpdateId(productId);

  console.log(data);

  return (
    <Fragment>
      <Navbar id={productId} />
      {data ? (
        <Container maxwidth="sm">
          <Grid
            container
            spacing={2}
            direction="row"
            style={{ margin: "10px 0" }}
          >
            <Grid item md={6}>
              <Image src={data?.images} />
            </Grid>
            <Grid item md={6}>
              ok
            </Grid>
          </Grid>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </Fragment>
  );
}

export default Detail;
