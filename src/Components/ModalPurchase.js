import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalPurchase = ({purchased}) => {

  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button type='button' className='pay-now-button'>Pay Now</button>}>
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
        Your purchase was successful!
        A confirmation number has been sent to your email address.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} onClick={purchased}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalPurchase