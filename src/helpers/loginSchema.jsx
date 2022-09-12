import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too short password")
    .max(30, "Too long")
    .required("Required"),
});
