import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@material-ui/icons";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.items.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cart.items.map((item) => (
              <ListItem key={item._id}>
                <ListItemText
                  primary={item.name}
                  secondary={`${item.price} د.ت x ${item.quantity}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() =>
                      handleUpdateQuantity(item._id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      handleUpdateQuantity(item._id, item.quantity + 1)
                    }>
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => handleRemoveItem(item._id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6">Total: {cart.total} د.ت</Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "1rem" }}>
            Proceed to Checkout
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginTop: "1rem", marginLeft: "1rem" }}
            onClick={handleClearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
