import { useState } from "react";
import { useProvider } from "../../utils/FirebaseProvider";
import Upload from "./Upload/Upload";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import "../styles/Dashboard/styles";

function Dashboard() {
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const { imagesCollection } = useProvider();

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

  return (
    <>
      <Navbar />
    </>
  );
}

export default Dashboard;
