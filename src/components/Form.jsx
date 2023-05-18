import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const Form = () =>  {

  const formik = useFormik({
    initialValues: {
      name: "",
      email : "",
      password: "",
    },
    validationSchema :yup.object({
      name : yup.string().min(2,"Name is too short!").required(),
      email : yup.string().email().required(),
      password : yup.string().min(4,"Your Password should be within 4-8 characters").required(),
    }),
    onSubmit : (values, {resetForm}) => {
      console.log(values);
      resetForm({values: ""});
    },
  });

  //Errors here
  const nameError = formik.touched.name && formik.errors.name && <p className="text-danger">{formik.errors.name}</p>;
  const emailError = formik.touched.email && formik.errors.email && <p className="text-danger">{formik.errors.email}</p>;
  const passwordError = formik.touched.password && formik.errors.password && <p className="text-danger">{formik.errors.password}</p>;


  return(
    <>
    <div className="col-12 col-sm-8 mx-auto bg-light p-3">
    <h1 className="text-center text-white" style={{textShadow:"1px 1px 3px #444"}}>Formik & yup</h1>
      <form className="col-10 col-sm-8 mx-auto" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Name : </label>
          <input type="text"
          className="form-control"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          />
        {nameError}

        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email : </label>
          <input type="email"
          className="form-control"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          />
        {emailError}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Password : </label>
          <input type="password"
          className="form-control"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          />
        {passwordError}
        </div>
        <button type="submit" className="btn btn-info text-white">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Form;
