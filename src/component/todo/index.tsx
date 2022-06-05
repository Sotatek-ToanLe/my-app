import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  Input,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { GET_TODO_LIST_SUCCESS } from "../../store/constant";
import { deleteTodo, getTodoList } from "../../store/actions";
import { TodoList } from "../todo-list";
import { TodoAction } from "./todo-action";
import { Todo as _Todo } from "../../types";

interface TodoProps {
  handleSubmitTodo: (data: any) => any;
}

export const Todo: React.FC<TodoProps> = ({ handleSubmitTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [defaultValues, setDefaultValues] = useState<_Todo>({} as _Todo);
  const [type, setType] = useState("add");
  const [open, setOpen] = useState(false);

  const todoList = useSelector((s: AppState) => s.todo.todo.todos);
  const loading = useSelector((s: AppState) => s.todo.loading);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  const handleEditTodo = (todo: _Todo) => {
    setType("edit");
    setOpen(true);
    if (todo) {
      setDefaultValues(todo);
    } else {
      setDefaultValues({} as _Todo);
    }
  };
  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  console.log("defaultValues", defaultValues);

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Typography variant="h4">Todo Page</Typography>
        <Button
          onClick={() => {
            setOpen(true);
            setType("add");
            setDefaultValues({} as _Todo);
          }}
          variant="contained"
          color="primary"
        >
          Add new todo
        </Button>
      </div>
      <TodoAction
        type={type}
        defaultValues={defaultValues}
        open={open}
        handleClose={() => {
          setOpen(false);
          setType("");
          setDefaultValues({} as _Todo);
        }}
      />
      {loading ? (
        <TodoList
          todoList={todoList}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ) : (
        <Typography variant="h6" color="primary">
          Loading...
        </Typography>
      )}
    </div>
  );
};
