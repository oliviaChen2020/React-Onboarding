import * as Yup from "yup";

const Schema = Yup.object().shape({
    username: Yup
        .string()
        .min(3, "username must be at least 3 characters long.")
        .required("username is Required"),
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("email is required."),
    password: Yup
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .required("Must enter a password."),
    termsofservice: Yup
        .boolean()
        .oneOf([true], "Please accept the TOS")
        .required('Please accept the TOS')
})
export default Schema;