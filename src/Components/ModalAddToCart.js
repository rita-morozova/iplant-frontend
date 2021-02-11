import React from "react";
import { Button, Modal } from "semantic-ui-react";

const ModalAddToCart = ({ addToCart, chosenPlant }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(false)
    addToCart(chosenPlant)
  }

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size="mini"
      trigger={
        <Button
          className="add-to-cart-btn"
          color="olive"
          style={{ width: "200px" }}
        >
          Add To Cart
        </Button>
      }
    >
      <Modal.Content>
        <Modal.Description>1 Item Added To Your Cart</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={handleClick}
        >
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalAddToCart;
