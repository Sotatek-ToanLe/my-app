import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import useStyles from "./style";
import { Todo } from "../../types";
import { useDispatch } from "react-redux";
import { deleteTodo, deleteTodoSuccess } from "../../store/actions";
import axios from "axios";
import { TodoRow } from "./todo-row";
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
  return (
    <div className={classes.container}>
      {todoList?.map((todo, index) => (
        <TodoRow
          todo={todo}
          key={index}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
};
