"use client";
import React, { use } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../FormContact/TextField";
import * as Yup from "yup";
import { sendTalentForm } from "@/libs/actions";
import toast from "react-hot-toast";
import { emailValidation } from "@/libs/constant";

export const FormTalent = () => {
  const validate = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    companyName: Yup.string().required("Company Name is Required"),
    email: Yup.string()
      .matches(emailValidation, "Email is invalid")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    role: Yup.string().required("Role is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        role: "",
      }}
      validationSchema={validate}
      onSubmit={async (values, { resetForm }) => {
        const validSend = await sendTalentForm(values);
        if (validSend !== undefined) {
          // alert('Send Email')
          toast.success("Send Success OK!");
          resetForm();
        } else {
          // alert('Error')
          toast.error("Send Fail!!!");
        }
      }}
    >
      {(formik) => (
        <div
          className="wow fadeInUp shadow-testimonial rounded-lg bg-white px-8 py-10 dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
          data-wow-delay=".2s"
        >
          <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
            {`Let's Get Started`}
          </h3>
          <Form>
            <TextField
              label="First Name*"
              name="firstName"
              type="text"
              placeholder="John"
            />
            <TextField
              label="Last Name*"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
            <TextField
              label="Company Name*"
              name="companyName"
              type="text"
              placeholder="Company Name"
            />
            <TextField
              label="Work Email*"
              name="email"
              type="email"
              placeholder="example@yourmail.com"
            />
            <TextField
              label="Phone Number*"
              name="phone"
              type="text"
              placeholder="+13051255211"
            />
            <TextField
              label="Role*"
              name="role"
              type="text"
              placeholder="What role are you hiring?"
            />

            <div className="mb-0">
              <button
                type="submit"
                className="hover:bg-btn-hover-dark inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
