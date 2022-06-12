import { Button, Link, TextField, Typography } from "@material-ui/core";
import { useEffect } from "react";
import useStyles from "./style";
import { Controller, useForm } from "react-hook-form";
import { LoginUser } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { loginUserSuccess } from "../../store/actions";
import { AppState } from "../../store/reducers";
import { useHistory } from "react-router-dom";
const Login = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const token = useSelector((s: AppState) => s.auth.token);
  const history = useHistory();
  console.log(token);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const onSubmit = (data: LoginUser) => {
    dispath(loginUserSuccess(data));
  };

  useEffect(() => {
    if (token) {
      history.replace("/todo");
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={classes.main}>
      <Typography variant="h4">Login Form</Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, ref } }) => (
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={value}
                inputRef={ref}
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="password"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                value={value}
                inputRef={ref}
              />
            )}
          />
        </div>
        <div className={classes.dFlex}>
          <Link>Forget password?</Link>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
