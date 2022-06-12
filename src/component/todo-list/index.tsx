import React from "react";

import useStyles from "./style";
import { Todo, TodoRequest } from "../../types";

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
