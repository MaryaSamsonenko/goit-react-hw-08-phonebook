import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth/authOperations";
import { Formik, ErrorMessage } from "formik";
import { FormStyled, Label, Input, ButtonSubmit } from "../UI/Form.styled";
import { loginSchema } from "../../helpers/loginSchema";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const loginObject = { email, password };
    dispatch(authOperations.logIn(loginObject));

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label htmlFor="email">Email</Label>
        <div>
          <Input type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <Label htmlFor="password">password</Label>
        <div>
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </FormStyled>
    </Formik>
  );
};
