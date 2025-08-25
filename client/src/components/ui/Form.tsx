// Form.tsx
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

interface FormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

export function Form({ onSubmit, children }: FormProps) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
