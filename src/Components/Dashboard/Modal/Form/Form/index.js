import { FormProvider, useFormContext } from "react-hook-form";
import FormSubmitButton from "../SubmitButton";

export function FieldError({ name }) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const error = errors[name];
  if (!error) return null;

  return <span className="text-sm text-red-600">{error.message}</span>;
}

const Form = ({ form, onSubmit, children, ...props }) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <fieldset
          className="flex flex-col space-y-4"
          disabled={form.formState.isSubmitting}
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};

Form.SubmitButton = FormSubmitButton;

export default Form;
