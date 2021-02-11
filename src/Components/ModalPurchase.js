import React from "react";
import { Button, Modal, Grid } from "semantic-ui-react";

const ModalPurchase = ({ purchased }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(false)
    purchased()
  }

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Grid>
          <Grid.Column textAlign="center">
            <Button color="olive" type="button" className="pay-now-button">
              Pay Now
            </Button>
          </Grid.Column>
        </Grid>
      }
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your purchase was successful! A confirmation number has been sent to
          your email address.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClick}>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalPurchase;
