import React from 'react';
import Button from "@material-ui/core/Button"

import ticketIcon from "../../images/icons/ticket.png"


const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img src={ticketIcon} className="iconImage" alt="button"/>
      {props.text}
    </Button>
  );
};

export default MyButton;