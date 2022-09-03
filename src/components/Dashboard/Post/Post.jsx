import { useProvider } from "../../../utils/FirebaseProvider";
import { Paper, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import Upload from "../Upload/Upload";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import FileBase64 from "react-file-base64";

function Post() {
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const { setImagesCollection, imagesCollection } = useProvider();

  console.log(imagesCollection);

  async function handleUpload() {
    try {
      const data = imagesCollection.map(i => i.base64);
      console.log(data);
      axios.post("http://localhost:8000/products", {
        title,
        price: +price,
        categories,
        images: data,
      });
      console.log("Document Uploaded Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: "99%",
            height: "100%",
          },
        }}
        style={{
          flexDirection: "column",
        }}
      >
        <Paper variant="outlined" square>
          <TextField
            required
            id="outlined-required"
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Categories"
            value={categories}
            onChange={e => setCategories(e.target.value)}
          />
          <FileBase64
            type="file"
            multiple={true}
            onDone={base64 => setImagesCollection(base64)}
          />
          <Button onClick={handleUpload}>Upload</Button>
        </Paper>
      </Box>
    </>
  );
}

export default Post;
