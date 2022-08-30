import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { authOperations } from "../../redux/auth/authOperations";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const registerObject = { name, email, password };
    dispatch(authOperations.register(registerObject));
    resetForm();
  };

  return (
    <section>
      <container>
        <h2>Registration Page</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <div>
              <Field type="name" name="name" />
            </div>
            <label htmlFor="email">Email</label>
            <div>
              <Field type="email" name="email" />
            </div>

            <label htmlFor="password">password</label>
            <div>
              <Field type="password" name="password" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </container>
    </section>
  );
};
