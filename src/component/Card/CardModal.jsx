import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const plans = {
  "Beginner Plan": 1000,
  "Intermediate Plan": 1500,
  "Ultimate Plan": 2000,
};

const CardModal = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      selectPlan: "",
      dateOfJoining: "",
      amount: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is Required"),
      selectPlan: Yup.string().required("Select Plan is Required"),
      amount: Yup.string().required("Amount is Required"),
      dateOfJoining: Yup.string().required("Date of Joining is Required"),
    }),
    onSubmit: () => {
      console.log(formik.values);
      formik.handleReset();
    },
  });

  const handleSelectPlanChange = (event) => {
    const selectedPlan = event.target.value;
    const amount = plans[selectedPlan] || "";
    formik.setFieldValue("selectPlan", selectedPlan);
    formik.setFieldValue("amount", amount);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FormikProvider value={formik}>
          <Stack spacing={2}>
            <Field name="name">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Name"
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="selectPlan">
              {({ field, meta }) => (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Plan
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Month Plan"
                    onChange={handleSelectPlanChange}
                  >
                    <MenuItem value="Beginner Plan">Beginner Plan</MenuItem>
                    <MenuItem value="Intermediate Plan">
                      Intermediate Plan
                    </MenuItem>
                    <MenuItem value="Ultimate Plan">Ultimate Plan</MenuItem>
                  </Select>
                  {meta.touched && meta.error ? (
                    <FormHelperText>{meta.error}</FormHelperText>
                  ) : (
                    ""
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="amount">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Amount"
                  InputProps={{ readOnly: true }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Field name="dateOfJoining">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  type="Date"
                  label="Date of Joining"
                  InputLabelProps={{ shrink: true }}
                  error={meta.touched && meta.error ? true : false}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>
            <Button
              variant="contained"
              onClick={() => {
                formik.handleSubmit();
                onClose(); 
              }}
            >
              Submit
            </Button>
          </Stack>
        </FormikProvider>
      </Box>
    </Modal>
  );
};

export default CardModal;
