import React from "react";
import { FormProvider as Form } from "react-hook-form";

const FormProvider = ({ children, onSubmit, methods }) => {
  return (
    <Form {...methods}>
      <from onSubmit={onSubmit}>{children}</from>
    </Form>
  );
};

export default FormProvider;
