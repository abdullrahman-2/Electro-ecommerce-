
import { Container } from "react-bootstrap"
import  Carousel  from "../../components/carousle/carousle"
import Productsection from "../../components/Product-section/productsection"
import { useEffect, useState } from "react"




 function Home() {
  const [products , setProduct] = useState([]);
       async function getData(){
          const res = await fetch("https://api2-taupe-one.vercel.app/products");
          const data = await res.json()

          setProduct(data)
        }

  useEffect(()=>{
    getData()
  },[]);

  return (  
    <>

    <Container>

       <Carousel/>
  
       <Productsection className="ProductsContainer" title="Latest Products" products={products.slice(0, 10)} />
      <Productsection className="ProductsContainer" title="Offers" products={products.slice(10, 20)} />
    </Container>
      
    </>
  )
}

export default Home
