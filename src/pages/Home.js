import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesResult = await axios.get("/api/categories");
      setCategories(categoriesResult.data);

      const productsResult = await axios.get("/api/products?featured=true");
      setFeaturedProducts(productsResult.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{category.name}</Typography>
                <Button component={Link} to={`/category/${category._id}`}>
                  View Products
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom style={{ marginTop: "2rem" }}>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {featuredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>{product.price} د.ت</Typography>
                <Button component={Link} to={`/product/${product._id}`}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
