import { useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useForm } from "@mantine/form";

import FormField from "@/components/estimator/form/field";
import {
  getFieldDefault,
  updatedInputs,
} from "@/components/estimator/form/utils";
import { Field, Inputs, Page } from "@/components/estimator/types";

export default function Form({
  page,
  fields,
  inputs,
  setInputs,
  nextPage,
}: {
  page: Page;
  fields: Field[];
  inputs: Inputs;
  setInputs: (i: Inputs) => void;
  nextPage: () => void;
}) {
  const form = useForm<Inputs>({
    initialValues: fields.reduce<Inputs>((acc, field) => {
      const varId = field.variable.id;
      const current = inputs[varId];
      if (current !== undefined) {
        acc[varId] = current;
      } else {
        acc[varId] = getFieldDefault(field);
      }
      return acc;
    }, inputs),
  });

  const varToField = fields.reduce<Record<string, Field>>((acc, field) => {
    acc[field.variable.id] = field;
    return acc;
  }, {});

  useEffect(() => {
    setInputs(updatedInputs(inputs, form.values, varToField));
  }, [form.values]);

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        setInputs(updatedInputs(inputs, values, varToField));
        nextPage();
      })}
    >
      <div className="text-center font-bold text-2xl mb-2">{page.title}</div>
      {fields.map((field) => (
        <FormField
          key={field.id}
          inputs={form.values}
          field={field}
          form={form}
        />
      ))}
      <div className="block">
        <button
          type="submit"
          className="btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 group w-full mx-auto"
        >
          <span>Continue</span>
          <ArrowRightIcon className="h-3 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </button>
      </div>
    </form>
  );
}
