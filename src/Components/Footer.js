import React from "react";
import { Segment, Icon, Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment vertical>
      <Grid container textAlign="center">
        <Grid.Column>
          © 2020 IPLANT, LLC Plants with{" "}
          <Icon name="heart" color="red" size="tiny" />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Footer;
