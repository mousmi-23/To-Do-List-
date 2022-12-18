import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToDoLists from "./ToDoLists";
import { purple } from "@mui/material/colors";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <Grid container justify="center">
      <Box
        sx={{
          width: 300,
          height: 450,
          backgroundColor: purple[100]
        }}
        display="flex"
        justifyContent="center"
      >
        <div className="main_div">
          <div className="center_div">
            <br />
            <Box
              sx={{
                boxShadow: 2,
                width: "18.79rem",
                height: "3rem",
                bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "#101010" : "#fff",
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <h1> ToDo List </h1>
            </Box>
            <br />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
            <input
              type="text"
              placeholder="Add a Item"
              value={inputList}
              onChange={itemEvent}
            />
            <button onClick={listOfItems}> + </button>
            </Box>

            <Box>
            <ol>
              {/* <li> {inputList} </li> */}

              {items.map((itemval, index) => {
                return (
                  <ToDoLists
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                  />
                );
              })}
            </ol>
            </Box>
          </div>
        </div>
      </Box>
    </Grid>
  );
}

export default App;
