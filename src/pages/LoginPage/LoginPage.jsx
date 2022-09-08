import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { authOperations } from "../../redux/auth/authOperations";
import { Container } from "../../components/Container/Container.styled";
import {
  FormContact,
  Label,
  Input,
  ButtonSubmit,
} from "../../components/ContactForm/ContactForm.styled";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const loginObject = { email, password };
    dispatch(authOperations.logIn(loginObject));

    resetForm();
  };

  return (
    <Container>
      <h2>Login Page</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <FormContact>
          <Label htmlFor="email">Email</Label>
          <div>
            <Input type="email" name="email" />
          </div>

          <Label htmlFor="password">password</Label>
          <div>
            <Input type="password" name="password" />
          </div>

          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </FormContact>
      </Formik>
    </Container>
  );
};
