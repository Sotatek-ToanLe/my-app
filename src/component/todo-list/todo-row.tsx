import React, { useEffect, useState } from "react";
import { Todo } from "../../types";
import useStyles from "./style";
import { ReactComponent as Check } from "./../../../src/assess/icon/check.svg";
import { Button, Checkbox, Typography } from "@material-ui/core";
import _ from "lodash";
export const TodoRow = ({
  todo,
  handleEditTodo,
  handleDeleteTodo,
}: {
  todo: Todo;
  handleEditTodo: (todo: Todo) => void;
  handleDeleteTodo: (id: number) => void;
}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const renderLabel = (label: number) => {
    const text =
      label === 1 ? "persional" : label === 2 ? "education" : "new framework";

    return <Typography>{_.capitalize(text)}</Typography>;
  };
  const renderCategory = (catagory: number) => {
    const text = catagory === 1 ? "Flexbox" : catagory === 2 ? "Scss" : "React";
    return <>{_.capitalize(text)}</>;
  };

  useEffect(() => {
    const checked = todo.status === "1" ? true : false;
    setChecked(checked);
  }, [todo.status]);

  return (
    <div className={classes.row}>
      <div className={classes.header}>
        <Typography className={classes.title}>
          {" "}
          <Check width={12} style={{ marginRight: 8 }} />
          {todo.title}
        </Typography>
        {renderCategory(todo.category)}
        <span>{todo.startTime}</span>
        <p className={classes.label}>{renderLabel(todo.label)}</p>
        <Checkbox checked={checked} color="primary" />
        <Button onClick={() => handleEditTodo(todo)} variant="contained">
          Edit
        </Button>
        <Button
          onClick={() => handleDeleteTodo(todo.id)}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </div>
      <div className={classes.description}>{todo.detail}</div>
    </div>
  );
};
