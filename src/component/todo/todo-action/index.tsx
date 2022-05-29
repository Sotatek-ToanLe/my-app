import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  actionAddSuccess,
  actionEditSuccess,
  addTodo,
  editTodo,
} from "../../../store/actions";
import { Todo } from "../../../types";
import useStyles from "./styles";
interface Props {
  type: string;
  defaultValues: Todo;
}
export const TodoAction: React.FC<Props> = ({ type, defaultValues }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { isDirty, isValid },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      title: type === "edit" ? defaultValues.title : "",
    },
  });

  const onSubmit = async (title: any) => {
    if (type === "edit") {
      const todo = { ...defaultValues, title: title.title };
      dispatch(editTodo(todo));
      setValue("title", "");
    } else {
      const todo = {
        userId: Math.floor(Math.random() * 100),
        id: Math.floor(Math.random() * 100),
        title: title.title,
        completed: false,
      };

      dispatch(addTodo(todo));
    }
  };

  useEffect(() => {
    setValue("title", defaultValues.title);
  }, [defaultValues]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          control={control}
          name="title"
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={value}
              inputRef={ref}
              onChange={onChange}
              name={name}
            />
          )}
        />
        <Button type="submit" color="default" variant="contained">
          {" "}
          {type === "add" ? "Add" : "Change"}
        </Button>
      </form>
    </div>
  );
};
