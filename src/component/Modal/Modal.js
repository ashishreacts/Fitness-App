import React, { useEffect, useState } from "react";
import "./Modal.css";
import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Button,
  TextField,
  TextareaAutosize,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      gender: "",
      inquiry: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("firstName is required"),
      lastName: Yup.string().required("lastName is required"),
      email: Yup.string().email("Invalid email").required("email is required"),
      contactNumber: Yup.string().required("contactNumber is required"),
      gender: Yup.string().required("gender is required"),
      inquiry: Yup.string().required("inquiry is required"),
    }),
    onSubmit: () => {
      console.log(formik.values);
      formik.handleReset();
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <>
          <div className="modal-wrapper" onClick={closeModal}></div>
          <div className="modal-container">
            <FormikProvider value={formik}>
              <Stack spacing={2}>
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{ textAlign: "center" }}
                >
                  Inquiry Form
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Field name="firstName">
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          label="First Name"
                          error={meta.touched && meta.error ? true : false}
                          helperText={
                            meta.touched && meta.error ? meta.error : ""
                          }
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <Field name="lastName">
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          label="Last Name"
                          error={meta.touched && meta.error ? true : false}
                          helperText={
                            meta.touched && meta.error ? meta.error : ""
                          }
                        />
                      )}
                    </Field>
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Field name="email">
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          label="Email"
                          error={meta.touched && meta.error ? true : false}
                          helperText={
                            meta.touched && meta.error ? meta.error : ""
                          }
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <Field name="contactNumber">
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          label="Contact Number"
                          error={meta.touched && meta.error ? true : false}
                          helperText={
                            meta.touched && meta.error ? meta.error : ""
                          }
                        />
                      )}
                    </Field>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="gender">Gender</InputLabel>
                    <Field name="gender" validate={formik.validate}>
                      {({ field, form, meta }) => (
                        <>
                          <RadioGroup
                            {...field}
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <FormControlLabel
                              value="Female"
                              control={<Radio />}
                              label="Female"
                            />
                            <FormControlLabel
                              value="Male"
                              control={<Radio />}
                              label="Male"
                            />
                            <FormControlLabel
                              value="Other"
                              control={<Radio />}
                              label="Other"
                            />
                          </RadioGroup>
                          {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                          )}
                        </>
                      )}
                    </Field>
                  </Grid>
                </Grid>

                <label htmlFor="inquiry">What can we do for you?</label>
                <Field name="inquiry">
                  {({ field }) => (
                    <>
                      <TextareaAutosize
                        {...field}
                        id="inquiry"
                        placeholder="Type your inquiry here"
                        className="custom-textarea"
                        style={{ width: "auto", minHeight: "100px" }}
                      />
                      <ErrorMessage
                        name="inquiry"
                        component="div"
                        className="error-message"
                      />
                    </>
                  )}
                </Field>
                <Button
                  variant="contained"
                  onClick={() => formik.handleSubmit()}
                >
                  Submit
                </Button>
              </Stack>
            </FormikProvider>
          </div>
        </>
      )}
    </>
  );
};
export default Modal;
