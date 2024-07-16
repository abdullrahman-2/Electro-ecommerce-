import * as yup from "yup"


const loginSchema = yup.object().shape({
    email: yup.string().email().required() ,
    password: yup.string().required().min(5).max(35)
})


export default loginSchema;