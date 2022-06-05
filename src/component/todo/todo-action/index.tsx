import {
  Button,
  Dialog,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

import { useEffect } from "react";
import _ from "lodash";

import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ReactComponent as CloseIcon } from "../../../../src/assess/icon/close.svg";
import { addTodo, editTodo } from "../../../store/actions";
import { Todo } from "../../../types";
import useStyles from "./styles";
import moment from "moment";
interface Props {
  type: string;
  defaultValues: Todo;
  open: boolean;
  handleClose: () => any;
}
export const TodoAction: React.FC<Props> = ({
  type,
  defaultValues,
  open,
  handleClose,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { isDirty, isValid, errors },
    control,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      ...defaultValues,
      status: defaultValues?.status ? defaultValues?.status : "0",
    },
    mode: "onSubmit",
  });

  useEffect(() => {
    setValue("title", _.capitalize(defaultValues.title));
    setValue("detail", _.capitalize(defaultValues.detail));
    setValue("label", defaultValues.label);
    setValue("category", defaultValues.category);
    setValue("status", defaultValues.status);
  }, [defaultValues]);

  const onSubmit = async (data: Todo) => {
    if (type === "edit") {
      const todo = {
        ...defaultValues,
        title: data.title,
        detail: data.detail,
        category: data.category,
        label: data.label,
        status: data.status,
      };
      dispatch(editTodo(todo));
    } else {
      const todo = {
        id: Math.floor(Math.random() * 100),
        title: data.title,
        detail: data.detail,
        category: data.category,
        label: data.label,
        status: data.status,
        startTime: moment(new Date()).format("DD/MM/YYYY HH:mm"),
      };
      dispatch(addTodo(todo));
    }
    reset();
    handleClose();
  };

  return (
    <div className={classes.dialog}>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{
          root: classes.root,
          scrollPaper: classes.scrollPaper,
          container: classes.container,
          paper: classes.paper,
          paperScrollPaper: classes.paperScroll,
        }}
      >
        <div className={classes.title}>
          <Typography variant="h6" color="primary">
            <span> {type === "add" ? "Add" : "Edit"} New Todo </span>
          </Typography>
          <CloseIcon
            width={12}
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <div className={classes.formControl}>
            <Controller
              control={control}
              name="title"
              rules={{ required: "This field cannot be empty " }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <>
                  <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={value}
                    inputRef={ref}
                    onChange={onChange}
                    name={name}
                    fullWidth
                  />
                  {errors.title && (
                    <span style={{ color: "red" }}>
                      {errors.title?.message}{" "}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className={classes.formControl}>
            <Controller
              control={control}
              name="detail"
              rules={{ required: "This field cannot be empty " }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <>
                  <TextField
                    id="outlined-basic"
                    label="Detail"
                    variant="outlined"
                    value={value}
                    inputRef={ref}
                    onChange={onChange}
                    name={name}
                    fullWidth
                    multiline={true}
                    minRows={4}
                  />
                  {errors.detail && (
                    <span style={{ color: "red" }}>
                      {errors.detail?.message}{" "}
                    </span>
                  )}
                </>
              )}
            />
          </div>

          <div className={classes.formControl}>
            <Controller
              control={control}
              name="category"
              rules={{ required: "This field cannot be empty " }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <>
                  <Select
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    inputRef={ref}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {listCategory.map((item, index) => (
                      <MenuItem key={item.val} value={item.val}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.category && (
                    <span style={{ color: "red" }}>
                      {errors.category?.message}{" "}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className={classes.formControl}>
            <Controller
              control={control}
              name="label"
              rules={{ required: "This field cannot be empty " }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <>
                  <Select
                    id="outlined-basic"
                    label="Label"
                    variant="outlined"
                    inputRef={ref}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {listLabel.map((item, index) => (
                      <MenuItem key={item.val} value={item.val}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.label && (
                    <span style={{ color: "red" }}>
                      {errors.label?.message}{" "}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className={classes.formControl}>
            <FormLabel component="legend">Status</FormLabel>
            <Controller
              control={control}
              name="status"
              rules={{ required: "This field cannot be empty " }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Completed"
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio />}
                    label="Pending"
                  />
                </RadioGroup>
              )}
            />
          </div>
          <div className={classes.groupBtn}>
            <Button color="secondary" variant="contained" onClick={handleClose}>
              {" "}
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={Boolean(errors.title)}
            >
              {type === "add" ? "Add" : "Change"}
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

const listCategory = [
  {
    title: "Flexbox",
    val: 1,
  },
  {
    title: "Scss",
    val: 2,
  },
  {
    title: "React",
    val: 3,
  },
];
const listLabel = [
  {
    title: "Education",
    val: 2,
  },
  {
    title: "Persional",
    val: 1,
  },
  {
    title: "New framework",
    val: 3,
  },
];
