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

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const registerObject = { name, email, password };
    dispatch(authOperations.register(registerObject));
    resetForm();
  };

  return (
    <Container>
      <h2>Registration Page</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <FormContact>
          <Label htmlFor="name">Name</Label>
          <div>
            <Input type="name" name="name" />
          </div>
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
