import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth/authOperations";
import { Formik, ErrorMessage } from "formik";
import {
  FormContact,
  Label,
  Input,
  ButtonSubmit,
} from "../../components/ContactForm/ContactForm.styled";
import { registerSchema } from "../../helpers/registerSchema";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const registerObject = { name, email, password };
    dispatch(authOperations.register(registerObject));
    resetForm();
  };
  return (
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
  );
};
