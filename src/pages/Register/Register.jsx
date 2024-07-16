
import { ErrorMessage, Field, Form, Formik } from "formik"
import RegisterSchema from "../../schemas/register"
import { Navigate, useNavigate } from "react-router-dom";


 function registerAccount(values){
    delete values.confirmPassword ;
    fetch("https://api2-taupe-one.vercel.app/users",{
      method : "POST",
      body :JSON.stringify(values),
      headers:{"Content-Type":"application/json"}
    })

 }

function Register() {
  const navigate = useNavigate()
  return (
    <div className="row d-flex justify-content-center   ">
<Formik
  initialValues={{
    name:"",
    email:"",
    password:"",
    confirmPassword:""
    }
    
    }
    validationSchema={RegisterSchema}
    onSubmit={(values)=>{
    registerAccount(values)
    navigate('/login')
    
      }}
>
      <Form 
      
       className="col-6 border border-secondary rounded p-10" style={{marginTop:"20px",padding:"10px"}}   >
      <div className="mb-3">
    <label  className="form-label">Name</label>
    <Field type="text" className="form-control" name="name" id="exampleInputEmail" aria-describedby="emailHelp"/>
 <span className="text-danger"><ErrorMessage name="name"/></span>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <Field type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    <span className="text-danger"><ErrorMessage name="email"/></span>

  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <Field name="password" type="password" className="form-control" id="exampleInputPassword"/>
    <span className="text-danger"><ErrorMessage name="password"/></span>

  </div>
 
  <div className="mb-3">
    <label  className="form-label">ConfirmPassword</label>
    <Field name="confirmPassword" type="password" className="form-control" id="exampleInputPassword1"/>
    <span className="text-danger"><ErrorMessage name="confirmPassword"/></span>

  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</Form>
</Formik>
    </div>
  )
}

export default Register
