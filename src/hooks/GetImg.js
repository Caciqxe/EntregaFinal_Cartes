import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export const GetImg = (productImg) => {
  const [img, setImg] = useState(null);
  const storage = getStorage();
  const productImgRef = ref(storage, `products/${productImg}`);

  useEffect(() => {
    getDownloadURL(productImgRef)
      .then((data) => setImg(data))
      .catch((err) => console.error({ err }));
  }, [productImgRef]);

  return img;
};
