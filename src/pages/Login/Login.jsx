import { ErrorMessage, Field, Form, Formik } from "formik"
import loginSchema from "../../schemas/login"
import { date } from "yup"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../rtk/Slice/authSlice"




function Login() {
  const dispatch = useDispatch()
  const authData =useSelector(state => state.authSlice)
  function handlingLogin(values){
    fetch(`https://api2-taupe-one.vercel.app/users?email=${values.email}&password=${values.password}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log( )

      if(data.length>0){
        dispatch(login(data[0]))
      }
      else{}
    })
  
    
  
  }
  return (
    <div className="row d-flex justify-content-center   ">
<Formik
  initialValues={{
    email:"",
    password:"",
    }
    
    }
    validationSchema={loginSchema}
    onSubmit={(values)=>{
      handlingLogin(values)
    }}
>
      <Form className="col-6 border border-secondary rounded p-10" style={{marginTop:"20px",padding:"10px"}}   >
   
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <Field type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <span className="text-danger"><ErrorMessage name="email"/></span>

  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <Field name="password" type="password" className="form-control" id="exampleInputPassword1"/>
    <span className="text-danger"><ErrorMessage name="password"/></span>

  </div>
 
 
  <button type="submit" className="btn btn-primary">Submit</button>
</Form>
</Formik>
    </div>
  )
}

export default Login
