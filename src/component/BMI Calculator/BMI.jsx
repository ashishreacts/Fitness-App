import { Button, Stack, TextField, Typography } from "@mui/material";
import { Field, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [weightRange, setWeightRange] = useState("");
  const formik = useFormik({
    initialValues: {
      weight: "",
      height: "",
    },
    validationSchema: Yup.object().shape({
      weight: Yup.string().required("Weight is Required"),
      height: Yup.string().required("Height is Required"),
    }),
    onSubmit: () => {
      const enterWeight = parseFloat(weight);
      const enterHeight = parseFloat(height) / 100;

      if (enterWeight && enterHeight) {
        const bmiValue = enterWeight / (enterHeight * enterHeight);
        setBmi(bmiValue.toFixed(2));

        if (bmiValue < 18.5) {
          setWeightRange("Underweight");
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          setWeightRange("Healthy weight");
        } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
          setWeightRange("Overweight");
        } else {
          setWeightRange("Obesity");
        }
      }

      formik.handleReset();
    },
  });

  return (
    <div style={{ border: "1px solid rgb(210, 210, 210)", padding: "15px" }}>
      <FormikProvider value={formik}>
        <Stack spacing={2}>
          <Typography component="h1" variant="h4">
            Calculate BMI
          </Typography>
          <Field name="weight">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Weight:(kg)"
                onChange={(e) => {
                  formik.handleChange(e);
                  setWeight(e.target.value);
                }}
                error={meta.touched && meta.error ? true : false}
                helperText={meta.touched && meta.error ? meta.error : ""}
              />
            )}
          </Field>

          <Field name="height">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Height:(cm)"
                onChange={(e) => {
                  formik.handleChange(e);
                  setHeight(e.target.value);
                }}
                error={meta.touched && meta.error ? true : false}
                helperText={meta.touched && meta.error ? meta.error : ""}
              />
            )}
          </Field>
          <Button type="button" variant="outlined" onClick={() => formik.handleSubmit()}>
            Calculate BMI
          </Button>

          {bmi && <p>Your BMI: {bmi}</p>}
          {weightRange && <p>Weight Category: {weightRange}</p>}
          <Button type="button" onClick={() => {
            setBmi(null);
            setWeightRange("");
          }}>
            Clear
          </Button>
        </Stack>
      </FormikProvider>
    </div>
  );
};

export default BMI;
