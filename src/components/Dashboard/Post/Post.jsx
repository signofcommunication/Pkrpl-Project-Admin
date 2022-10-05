import {
  Paper,
  TextField,
  Button,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { useProvider } from "../../../utils/FirebaseProvider";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import FileBase64 from "react-file-base64";
import styles from "./Post.module.css";
import "react-toastify/dist/ReactToastify.css";

function Post() {
  const [price, setPrice] = useState();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const { setImagesCollection, imagesCollection, createProduct } =
    useProvider();
  const navigate = useNavigate();

  async function handleUpload() {
    try {
      const data = imagesCollection.map((i) => i.base64);
      await createProduct({
        title,
        price: +price,
        categories,
        images: data,
      });
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    document.title = "Upload a product";
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <Container>
        <Grid
          direction="row-reverse"
          container
          justify="center"
          alignItems="center"
          style={{ height: "100%", margin: "10px 0" }}
        >
          <Grid item md={6}>
            <Paper variant="outlined" square className={styles.paper_container}>
              <form>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  className={styles.text}
                >
                  Upload a product
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
                  Upload
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
            <FileBase64
              type="file"
              multiple={true}
              onDone={(base64) => setImagesCollection(base64)}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Post;
