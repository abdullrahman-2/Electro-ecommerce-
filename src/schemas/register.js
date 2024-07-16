import * as yup from "yup"

const RegisterSchema = yup.object().shape({
    email: yup.string().email().required("Please Enter your Email") ,
    name:yup.string().required("Please Enter your name"),
    password: yup.string().required("Please Enter your password").min(5).max(35),
    confirmPassword: yup.string().required().min(5).max(35).oneOf([yup.ref('password')],"Password does not match")

})

export default RegisterSchema