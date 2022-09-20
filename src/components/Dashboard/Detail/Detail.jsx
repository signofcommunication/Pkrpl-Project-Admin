import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProvider } from "../../../utils/FirebaseProvider";
import Navbar from "./Navbar";

function Detail() {
  const [data, setData] = useState([]);
  const { getSingleProduct } = useProvider();
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

  console.log(data);

  return <Navbar id={productId} />;
}

export default Detail;
