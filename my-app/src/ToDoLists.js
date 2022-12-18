import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <Box height="2rem" display="flex" alignItems="center">
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => props.onSelect(props.id)}
            color="error"
          />
          <li> {props.text} </li>
        </Box>
      </div>
    </>
  );
};

export default ToDoLists;
