import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router-dom'


const LoginPage = () => {
    const[showPassword1, setShowPassword1] = useState(false);
    const history = useHistory()
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: ""
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      
    }),
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    history.push('/Registration-Page');
    }
  });
 
  const showPassword = () => {
//   setShowPassword1(true)
   setShowPassword1(showPassword1 => !showPassword1)
 }
 
  return (
    <form onSubmit={formik.handleSubmit}>
              <h1> Login </h1>

      <label htmlFor="userName">Username</label>
      <input 
      id="userName" 
      type="userName" 
      autoComplete="off" 
      {...formik.getFieldProps("userName")} 
      />
            {formik.touched.userName && formik.errors.userName ? (
                <div className="input-feedback">{formik.errors.userName}</div>
            ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type={showPassword1 ? "text" : "password"}
        autoComplete="off"
        {...formik.getFieldProps("password")}
      />
            {formik.touched.password && formik.errors.password ? (
                <div className="input-feedback">{formik.errors.password}</div>
            ) : null}
    
      <button type="submit" >Submit</button>
      <label className="ShowPassword" onClick={() => showPassword()}>Show Password</label>
    </form>
  );
};

export default LoginPage;
