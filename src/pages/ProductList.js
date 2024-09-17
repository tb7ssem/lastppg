import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const categoryResult = await axios.get(`/api/categories/${id}`);
      setCategory(categoryResult.data);

      const productsResult = await axios.get(`/api/products?category=${id}`);
      setProducts(productsResult.data);
    };
    fetchData();
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (!category) return <div>Loading...</div>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {category.name}
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" style={{ marginTop: "1rem" }}>
                  {product.price} د.ت
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(product)}
                  style={{ marginTop: "1rem" }}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
