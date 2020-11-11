import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalAddToCart = ({addToCart, chosenPlant}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size='mini'
      trigger={<Button>Add To Cart</Button>}>
      <Modal.Content>
        <Modal.Description>
          1 Item Added To Your Cart
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} onClick={() => addToCart(chosenPlant)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalAddToCart
