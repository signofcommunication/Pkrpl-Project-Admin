import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProvider } from "../../../../utils/FirebaseProvider";
import {
  Paper,
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import FileBase64 from "react-file-base64";
import Navbar from "./Navbar";
import axios from "axios";

function Update() {
  const [price, setPrice] = useState();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [data, setData] = useState([]);
  const {
    getSingleProduct,
    setImagesCollection,
    updateProduct,
    imagesCollection,
  } = useProvider();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, [productId]);

  async function getProduct() {
    const res = await getSingleProduct(productId);
    // const images = res.
    setData(res.data.product);
    setTitle(res?.data.product.title);
    setPrice(res?.data.product.price);
    setCategories(res?.data.product.categories);
  }

  function handleUpload() {
    const data = imagesCollection.map((i) => i.base64);
    axios.patch(`http://localhost:8000/products/${productId}`, {
      title,
      price: parseInt(price),
      categories,
      images: data,
    });
    alert(`Product Updated with id:${productId} was updated successfully`);
    navigate(`/product/${productId}`);
  }

  console.log(data);

  return (
    <>
      <Navbar />
      {data ? (
        <Container>
          <Grid
            direction="row-reverse"
            container
            justify="center"
            alignItems="center"
            style={{ height: "100%", margin: "10px 0" }}
          >
            <Grid item md={6}>
              <Paper variant="outlined" square className="paper-container">
                <form>
                  <Typography
                    variant="h5"
                    component="h1"
                    gutterBottom
                    className="text"
                  >
                    Update a product
                  </Typography>
                  <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                  />
                  <Button variant="contained" onClick={handleUpload}>
                    Update
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid
              item
              md={6}
              className="upload-image"
              style={{ height: "64vh" }}
            >
              <FileBase64
                type="file"
                multiple={true}
                onDone={(base64) => setImagesCollection(base64)}
              />
            </Grid>
          </Grid>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default Update;
