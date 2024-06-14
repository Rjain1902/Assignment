import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Typography from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Tab3 = () => {
  const [inputValue, setInputValue] = useState(0);
  const [messages, setMessages] = useState([]);

  const recursiveHello = (count) => {
    if (count <= 0) {
      setMessages((prev) => [...prev, "STOP"]);
      return;
    }
    setMessages((prev) => [...prev, "Hello Task"]);
    setTimeout(() => recursiveHello(count - 1), 1000);
  };

  const handleSubmit = () => {
    setMessages([]);
    recursiveHello(inputValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Enter Count"
        variant="outlined"
        onChange={(e) => setInputValue((e.target.value))}
        value={inputValue}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleSubmit}
        style={{ marginTop: "3em" }}
      >
        Start !
      </Button>
      <div>
        <List>
          {messages.map((msg, index) => (
            <ListItem disablePadding style={{margin:'5px'}}>{msg}</ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Tab3;
