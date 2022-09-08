import { useDispatch } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { authOperations } from "../../redux/auth/authOperations";
import { Container } from "../../components/Container/Container.styled";
import { registerSchema } from "../../helpers/registerSchema";
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
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <FormContact>
          <Label htmlFor="name">Name</Label>
          <div>
            <Input type="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
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
        </FormContact>
      </Formik>
    </Container>
  );
};
