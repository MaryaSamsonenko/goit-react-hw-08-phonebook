import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too short password")
    .max(30, "Too long")
    .required("Required"),
});
