import React from "react";
import Iframe from "react-iframe";

import Card from "@mui/material/Card";

export default function Tab1() {
  return (
    <Card style={{margin:'40px'}}>
      <Iframe
        src="https://www.youtube.com/embed/rJEB-0yCjKw"
        width="100%"
        height="380px"
        allowFullScreen
        frameborder="0"
      />
    </Card>
  );
}
