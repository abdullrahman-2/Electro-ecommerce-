import { useEffect, useState } from "react";
import ProductCard from "../../components/Card/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import { useParams } from "react-router-dom";

const products_per_page = 8;

function Shop() {
  const [products, setProduct] = useState([]);
  const [Urlquery, setUrlquery] = useState();
  const { page } = useParams();

  async function getData() {
    const res = await fetch(`https://api2-taupe-one.vercel.app/products?${Urlquery}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    getData();
  }, [Urlquery, page]);

  return (
    <Container className="my-5">
      <ProductFilter setUrlquery={setUrlquery} />
      <Row className="con">
        {products.map((product) => (
          <Col key={`products-list-item-${product.id}`} xs={6} md={4} lg={3} xl={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Shop;