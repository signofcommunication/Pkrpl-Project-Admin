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
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import Upload from "../../Upload/Upload";
import styles from "../../Post/Post.module.css";
import "react-toastify/dist/ReactToastify.css";

function Update() {
  const [price, setPrice] = useState();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [data, setData] = useState([]);
  const {
    getSingleProduct,
    updateProduct,
    imagesCollection,
    setImagesList,
    imagesList,
  } = useProvider();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, [productId]);

  useEffect(() => {
    document.title = `Update ${title || "Product"}`;
  }, [title]);

  async function getProduct() {
    const res = await getSingleProduct(productId);

    setData(res.data.product);
    setTitle(res.data.product.title);
    setPrice(res.data.product.price);
    setImagesList(res.data.product.images);
    setCategories(res.data.product.categories);
  }

  async function handleUpload() {
    try {
      const dataImages = imagesList.map((i) => i);

      await updateProduct(productId, {
        title,
        price: parseInt(price),
        categories,
        images: dataImages,
      });

      alert(`Product Updated with id:${productId} was updated successfully`);
      navigate(`/product/${productId}`);
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
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
              <Paper
                variant="outlined"
                square
                className={styles.paper_container}
              >
                <form>
                  <Typography
                    variant="h5"
                    component="h1"
                    gutterBottom
                    className={styles.text}
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
              className={styles.upload_image}
              style={{ height: "64vh" }}
            >
              <Upload />
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
