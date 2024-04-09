'use client'
import { ClassAttributes, InputHTMLAttributes } from "react"
import { ErrorMessage, useField, FieldHookConfig  } from 'formik';

type TextFieldProps = {
  label: string;
};

export const TextAreaField = ({ label, ...props }:TextFieldProps & InputHTMLAttributes<HTMLTextAreaElement> &
  ClassAttributes<HTMLTextAreaElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-[30px]">
      <label htmlFor={field.name} className="mb-4 block text-sm text-body-color dark:text-dark-6">
        {label}
      </label>
      <textarea
        className={`w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6 ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
      ></textarea>
      <ErrorMessage component="div" name={field.name} className="text-[#dc2626]" />
    </div>
  );
};
