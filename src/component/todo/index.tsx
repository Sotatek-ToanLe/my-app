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
const prioritiesStatus: { [key: string]: number } = {
  ["High"]: 0,
  ["Medium"]: 1,
  ["Low"]: 2,
};
const errRequired = "This field cannot be empty";
export const Todo: React.FC<TodoProps> = ({ handleSubmitTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [defaultValues, setDefaultValues] = useState<_Todo>({} as _Todo);
  const [type, setType] = useState("add");
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      status: false,
      priority: 1,
    },
  });
  const onSubmit = (data: any) => {
    handleSubmitTodo(data);
    reset();
  };
  const todoList = useSelector((s: AppState) => s.todo.todo.todos);
  const loading = useSelector((s: AppState) => s.todo.loading);

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  const handleEditTodo = (todo: _Todo) => {
    setType("edit");
    if (todo) {
      setDefaultValues(todo);
    }
  };
  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className={classes.main}>
      <Typography variant="h4">Todo Page</Typography>
      <TodoAction type={type} defaultValues={defaultValues} />
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
