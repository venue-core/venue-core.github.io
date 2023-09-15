import { UseFormReturnType } from "@mantine/form";
import cx from "classnames";

import MultiSelect from "@/components/estimator/form/multiselect";
import { meetsConditions } from "@/components/estimator/form/utils";
import { Field, Inputs, VariableType } from "@/components/estimator/types";

export default function FormField({
  inputs,
  field,
  form,
}: {
  inputs: Inputs;
  field: Field;
  form: UseFormReturnType<{}>;
}) {
  if (!meetsConditions(field, inputs)) return null;
  const varId = field.variable.id;
  const inputProps = form.getInputProps(varId);
  const base = {
    id: field.id,
    className: "form-input text-sm py-2 w-full",
    required: field.variable.required,
    ...inputProps,
  };
  let node: React.ReactNode;
  switch (field.variable.type) {
    case VariableType.Boolean:
      node = (
        <div className="flex items-center">
          <div className="form-switch ">
            <input
              {...base}
              type="checkbox"
              required={false}
              checked={inputProps.value}
              className="toggle-checkbox sr-only"
            />
            <label className="bg-slate-400 dark:bg-slate-700" htmlFor={base.id}>
              <span className="bg-white shadow-sm" aria-hidden="true"></span>
              <span className="sr-only">{field.variable.name}</span>
            </label>
          </div>
          <div className="text-sm text-slate-400 dark:text-slate-500 italic ml-2">
            {inputProps.value ? "Yes" : "No"}
          </div>
        </div>
      );
      break;
    case VariableType.Float:
      node = (
        <input
          {...base}
          type="number"
          min={field.variable.min}
          max={field.variable.max}
          step={field.variable.interval}
        />
      );
      break;
    case VariableType.Integer:
      node = (
        <input
          {...base}
          type="number"
          min={field.variable.min}
          max={field.variable.max}
          step={field.variable.interval || 1}
        />
      );
      break;
    case VariableType.MultiSelect:
      if (!field.variable.options) {
        console.error(
          `Options not defined for select variable: ${field.variable.name}`
        );
        return null;
      }
      node = (
        <MultiSelect
          {...base}
          selected={base.value}
          options={field.variable.options}
          min={field.variable.min}
          max={field.variable.max}
          onChange={(selected) => form.setFieldValue(varId, selected)}
        />
      );
      break;
    case VariableType.Select:
      if (!field.variable.options) {
        console.error(
          `Options not defined for select variable: ${field.variable.name}`
        );
        return null;
      }
      node = (
        <select {...base}>
          {!(field.required ?? field.variable.required) && (
            <option key="none" value={undefined}>
              None
            </option>
          )}
          {field.variable.options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      );
      break;
    case VariableType.Text:
      node = <input {...base} type="text" />;
      break;
    default:
      return null;
  }
  return (
    <div className="mb-6">
      <label
        className={cx([
          "block text-sm text-slate-600 font-medium",
          field.subtext ? "" : "mb-1",
        ])}
        htmlFor={field.id}
      >
        {field.label}
      </label>
      {field.subtext && (
        <div className="block text-xs text-slate-400 mb-1">{field.subtext}</div>
      )}
      {node}
    </div>
  );
}
