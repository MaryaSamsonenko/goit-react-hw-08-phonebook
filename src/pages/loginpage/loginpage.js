import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { authOperations } from "../../redux/auth/authOperations";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const loginObject = { email, password };
    dispatch(authOperations.logIn(loginObject));

    resetForm();
  };

  return (
    <section>
      <container>
        <h2>Login Page</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
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
