import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import useStyles from "./style";
import { Todo } from "../../types";
import { useDispatch } from "react-redux";
import { deleteTodo, deleteTodoSuccess } from "../../store/actions";
import axios from "axios";
interface Props {
  todoList: Todo[];
  handleEditTodo: (todo: Todo) => void;
  handleDeleteTodo: (id: number) => void;
}
export const TodoList: React.FC<Props> = ({
  todoList,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  const classes = useStyles();
  const dispath = useDispatch();
  return (
    <div className={classes.container}>
      {todoList?.length &&
        todoList?.slice(1, 10).map((item) => {
          return (
            <div key={item.id} className={classes.list}>
              <Typography variant="h6">{item.title}</Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEditTodo(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleDeleteTodo(item.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
