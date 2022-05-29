import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  RadioGroup,
  Radio,
  TextField,
  Select,
  MenuItem,
  Input,
  Chip,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useState } from "react";
import {
  Controller,
  ControllerProps,
  useController,
  UseControllerProps,
  useForm,
} from "react-hook-form";
import useStyles from "./style";

interface FilterTodoProps {
  search?: string;
  status?: string;
  priority?: any[];
  onChange: (data: any) => any;
}
const statusList = [
  { label: "All", value: 2 },
  { label: "Completed", value: 1 },
  { label: "Todo", value: 0 },
];

const prioritiesStatus: { [key: string]: number } = {
  ["High"]: 0,
  ["Medium"]: 1,
  ["Low"]: 2,
};
interface AppInputProps<T> {
  controller: UseControllerProps<T>;
}
export const AppInput: React.FC<AppInputProps<any>> = ({ controller }) => {
  const {
    field: { name, value, onChange },
  } = useController(controller);
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};
export const FilterTodo: React.FC<FilterTodoProps> = ({
  search,
  priority,
  status,
  onChange,
}) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      status: 0,
      search: "",
      priorities: [1],
    },
  });
  const handleChange = (data: any, key: string) => {
    onChange({ [key]: data });
  };
  return (
    <div className={classes.filter}>
      <form>
        <div>
          <FormControl fullWidth>
            <FormLabel>Search</FormLabel>
            {/* <AppInput controller={{ control, name: "search" }} /> */}
            <Controller
              control={control}
              name="search"
              render={({ field: { name, value, onChange } }) => {
                return (
                  <TextField
                    name={name}
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value);
                      handleChange(e.target.value, "search");
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                );
              }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth>
            <FormLabel>Filter by Status</FormLabel>
            <Controller
              control={control}
              name="status"
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <RadioGroup
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value);
                        handleChange(e.target.value, "status");
                      }}
                      className={classes.radioGroup}
                    >
                      {statusList.map((item) => (
                        <FormControlLabel
                          key={item.value}
                          value={item.value}
                          control={<Radio />}
                          label={item.label}
                          checked={item.value === Number(value)}
                        />
                      ))}
                    </RadioGroup>
                  </>
                );
              }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth>
            <FormLabel>Filter by Status</FormLabel>
            <Controller
              control={control}
              name="priorities"
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <Select
                      labelId="demo-mutiple-chip-label"
                      id="demo-mutiple-chip"
                      multiple
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value);
                        handleChange(e.target.value, "priority");
                      }}
                      input={<Input id="select-multiple-chip" />}
                      renderValue={(selected: any) => (
                        <div>
                          {selected.map((item: any) => {
                            return Object.entries(prioritiesStatus).map(
                              ([key, value]) => {
                                return value === item ? (
                                  <Chip key={key} label={key} />
                                ) : (
                                  ""
                                );
                              }
                            );
                          })}
                        </div>
                      )}
                    >
                      {Object.entries(prioritiesStatus).map(([key, value]) => (
                        <MenuItem key={key} value={value}>
                          {key}
                        </MenuItem>
                      ))}
                    </Select>
                  </>
                );
              }}
            />
          </FormControl>
        </div>
      </form>
    </div>
  );
};
