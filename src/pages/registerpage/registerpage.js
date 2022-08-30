import { useDispatch } from "react-redux";
import { Formik } from "formik";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    const registerObject = { name, email, password };

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
          <form>
            <label htmlFor="name">Name</label>
            <div>
              <input type="name" name="name" />
            </div>
            <label htmlFor="email">Email</label>
            <div>
              <input type="email" name="email" />
            </div>

            <label htmlFor="password">password</label>
            <div>
              <input type="password" name="password" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </Formik>
      </container>
    </section>
  );
};
