import { useProvider } from "../../../utils/FirebaseProvider";
import { Paper, Box, TextField } from "@mui/material";
import React from "react";
import Upload from "../Upload/Upload";
import Navbar from "./Navbar/Navbar";

function Post() {
  const { imagesCollection } = useProvider();

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper variant="outlined" square>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </Paper>
      </Box>
      {/* Upload in here */}
    </>
  );
}

export default Post;
// async function handleUpload(e) {
//   e.preventDefault();

//   try {
//     const data = imagesCollection.map(i => i.data_url);
//     console.log(data);
//     axios.post("http://localhost:8000/products", {
//       price: +price,
//       title,
//       categories,
//       data,
//     });
//     console.log("Document Uploaded Successfully");
//   } catch (error) {
//     console.log(error);
//   }
// }
