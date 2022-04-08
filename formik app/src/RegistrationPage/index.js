import React from "react";
import { useFormik, Formik, FieldArray, Field, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const RegistrationPage = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      // email: "",
      age: "",
      // location: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      // email: Yup.string().required("Required"),
      age: Yup.string().required("Required"),
      // location: Yup.string().required("Required"),

    }),
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 4));
      history.push("/Login-Page");
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1>Registration</h1>
        <label htmlFor="firstName">Firstname</label>
        <input
          id="firstName"
          type="firstName"
          autoComplete="off"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="input-feedback">{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Lastname</label>
        <input
          id="lastName"
          type="lastName"
          autoComplete="off"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="input-feedback">{formik.errors.lastName}</div>
        ) : null}

        {/* <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="off"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="input-feedback">{formik.errors.email}</div>
        ) : null} */}

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

         {/* <label htmlFor="location">Location</label>
        <input
          id="location"
          type="location"
          autoComplete="off"
          {...formik.getFieldProps("location")}
        />
        {formik.touched.location && formik.errors.location ? (
          <div className="input-feedback">{formik.errors.location}</div>
        ) : null} */}

        <button type="submit">Submit</button>
      </form>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: [],
          age: [],
          location:[]
        }}
        onSubmit={(values) =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 1));
          }, 500)
          // history.push("/Login-Page")
        }
        render={({ values }) => (
          <Form>
              <FieldArray
            name="location" 
            render={(arrayHelpers) => (
              <div>
                {values.location && values.location.length > 0 ? (
                  values.location.map((friend, index) => (
                    <div key={index}>
                      <Field name={`location.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}>
                        Remove
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")} >
                        Insert
                      </button>
                    </div>
                  ))
                ) : (
                  <label type="button"  
                          className="button"
                  onClick={() => arrayHelpers.push("")}>
                    Add a Location
                  </label>
                )}
                <div>
                  <label type="submit"
                          className="button">Submit</label>
                </div>
              </div>
            )}
          />
            <FieldArray
              name="email"
              render={(arrayHelpers) => (
                <div>
                  {values.email && values.email.length > 0 ? (
                    values.email.map((email, index) => (
                      <div key={index}>
                        <Field name={`email.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")}
                        >
                          Insert
                        </button>
                      </div>
                    ))
                  ) : (
                    <label
                      type="button"
                      className="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Add email
                    </label>
                  )}
                <div>
                  <label type="submit"
                          className="button">Submit</label>
                </div>
              </div>
              )}
            />
          </Form>
        )}
      />
    </>
  );
};

export default RegistrationPage;
