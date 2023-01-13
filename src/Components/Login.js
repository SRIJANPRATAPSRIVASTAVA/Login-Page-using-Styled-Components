import React from "react";
import {
  Main,
  Submit,
  HighLight,
  InputText,
  Form,
  Label,
  DivMargin,
  Confirmation,
  Password,
  Eye
} from "../Styles/Styles";


const Login = () => {
  return (
    <Main>
      <h2>Login</h2>
      <Form>
        <DivMargin>
          <Label type="main" htmlFor="loginid">
            Login ID
          </Label>
          <br />
          <InputText
            type="text"
            id="loginid"
            name="loginid"
            placeholder="Enter Login ID"
          />
        </DivMargin>
        <DivMargin>
          <Label type="main" htmlFor="password">
            Password
          </Label>
          <br />
          <Password
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
          />
          <Eye class="fa-solid fa-eye-slash"></Eye>
        </DivMargin>
        <Confirmation className="confirmation">
          <div className="rules">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
            <br />
            <input type="checkbox" id="vehicle1" name="vehicle1" />
            <label htmlFor="vehicle1">
              Agree to <HighLight href="#">Terms & Conditions</HighLight>
            </label>
          </div>
          <div className="managePassword">
            <HighLight type="">Change Password</HighLight>
          </div>
        </Confirmation>
      <Submit type="submit" value="Submit" />
      </Form>
      <span>
        Don't have an account?{" "}
        <HighLight variant="bold" href="#">
          Register Here
        </HighLight>
      </span>
    </Main>
  );
};

export default Login;

