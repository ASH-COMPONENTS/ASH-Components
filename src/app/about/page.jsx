"use client"

import { useState, useEffect } from "react"

// export const metadata = {
//   description: "this page make to show all hellpes site and show all futures"
// }

const aboutus = () => {
  let [product, setProduct] = useState({});
  let api = 'https://jsonplaceholder.typicode.com/todos/1'
  useEffect(() =>{
    fetch(api).then((response) => response.json()).then((response) => {
      console.log(response);
      setProduct(response);
    });
  }, []);
  return (
    <>
    <h1>hello on about todos</h1>
    <div>
        <h1>
          {product.title}
        </h1>
    </div>
    </>
  )
}

export default aboutus