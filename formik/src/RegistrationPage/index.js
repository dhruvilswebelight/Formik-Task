import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router-dom'

const RegistrationPage = () => {
    const history = useHistory()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      age: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 4));
    history.push('/Login-Page');

    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <h1>Registration</h1>
      <label htmlFor="firstName">Firstname</label>
      <input id="firstName" type="firstName" autoComplete="off" {...formik.getFieldProps("firstName")} />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="input-feedback">{formik.errors.firstName}</div>
      ) : null}

       <label htmlFor="lastName">Lastname</label>
      <input id="lastName" type="lastName" autoComplete="off" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="input-feedback">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input id="email" type="email" autoComplete="off" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div className="input-feedback">{formik.errors.email}</div>
      ) : null}



      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="age" 
        autoComplete="off"
        {...formik.getFieldProps("age")}
      />
      {formik.touched.age && formik.errors.age ? (
        <div className="input-feedback">{formik.errors.age}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationPage;
