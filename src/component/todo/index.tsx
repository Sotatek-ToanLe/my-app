import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import { deleteTodo, getTodoList, getTotalCount } from "../../store/actions";
import { TodoList } from "../todo-list";
import { TodoAction } from "./todo-action";
import { Todo as _Todo, TodoRequest } from "../../types";
import { CustomePagination } from "../../core/pagination";

interface TodoProps {
  handleSubmitTodo: (data: any) => any;
}

export const Todo: React.FC<TodoProps> = ({ handleSubmitTodo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [defaultValues, setDefaultValues] = useState<_Todo>({} as _Todo);
  const [type, setType] = useState("add");
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState<TodoRequest>({
    _page: 1,
    _limit: 3,
  });

  const todoList = useSelector((s: AppState) => s.todo.todo.todos);
  const loading = useSelector((s: AppState) => s.todo.loading);
  const total = useSelector((s: AppState) => s.todo.total);

  useEffect(() => {
    dispatch(getTotalCount());
  }, [todoList]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(getTodoList(params));
  }, [params, total]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleEditTodo = (todo: _Todo) => {
    setType("edit");
    setOpen(true);
    if (todo) {
      setDefaultValues(todo);
    } else {
      setDefaultValues({} as _Todo);
    }

    dispatch(getTodoList({ ...params }));
  };
  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));

    if (todoList.length <= 1) {
      dispatch(getTodoList({ ...params, _page: +params._page - 1 }));
      setParams({ ...params, _page: +params._page - 1 });
    } else {
      dispatch(getTodoList({ ...params }));
    }
  };

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
        onAdd={setParams}
        params={params}
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

      {todoList && (
        <CustomePagination
          handleOnchange={setParams}
          params={params}
          total={Math.ceil(total / +params._limit)}
        />
      )}
    </div>
  );
};
