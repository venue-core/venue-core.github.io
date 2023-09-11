import { useForm, UseFormReturnType } from "@mantine/form";
import cx from "classnames";

import { Customer, getVariables } from "@/components/estimator/data";
import {
  DefaultVariableType,
  Inputs,
  Variable,
  VariableType,
} from "@/components/estimator/types";

const SKIP_VARIABLES = new Set<VariableType>(
  Object.values(DefaultVariableType)
);

export default function InputsPage({
  customer,
  inputs,
  setInputs,
  goNext,
}: {
  customer: Customer;
  inputs: Inputs;
  setInputs: (i: Inputs) => void;
  goNext: () => void;
}) {
  const variables = getVariables(customer).filter(
    (v) => !SKIP_VARIABLES.has(v.type)
  );
  const variablesMap = variables.reduce<Record<string, Variable>>((acc, v) => {
    acc[v.id] = v;
    return acc;
  }, {});
  const form = useForm<Inputs>({
    initialValues: variables.reduce<Inputs>((acc, v) => {
      let defaultValue;
      switch (v.type) {
        case VariableType.Boolean:
          defaultValue = false;
          break;
        case VariableType.Float:
          defaultValue = v.min || 0;
          break;
        case VariableType.Integer:
          defaultValue = v.min || 0;
          break;
        case VariableType.Select:
          defaultValue = v.options?.[0] || "";
          break;
        case VariableType.Text:
          defaultValue = "";
          break;
        default:
          defaultValue = "";
          break;
      }
      if (v.default) defaultValue = v.default;
      const current = inputs[v.id];
      if (current !== undefined) {
        acc[v.id] = current;
      } else if (v.required) {
        acc[v.id] = defaultValue;
      }
      return acc;
    }, {}),
  });
  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        const updated = Object.entries(values).reduce<Inputs>(
          (acc, [id, value]) => {
            acc[id] = clean(variablesMap[id], value);
            return acc;
          },
          inputs
        );
        setInputs(updated);
        goNext();
      })}
    >
      {variables.map((v) => (
        <Input key={v.id} variable={v} form={form} />
      ))}
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 group"
        >
          <span>Get Estimate</span>
          <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </button>
      </div>
    </form>
  );
}

function Input({
  variable,
  form,
}: {
  variable: Variable;
  form: UseFormReturnType<{}>;
}) {
  const inputProps = form.getInputProps(variable.id);
  const base = {
    id: variable.id,
    className: "form-input text-sm py-2 w-full",
    required: true,
    ...inputProps,
  };
  let node: React.ReactNode;
  switch (variable.type) {
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
              <span className="sr-only">{variable.name}</span>
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
          min={variable.min}
          max={variable.max}
          step={variable.interval}
        />
      );
      break;
    case VariableType.Integer:
      node = (
        <input
          {...base}
          type="number"
          min={variable.min}
          max={variable.max}
          step={variable.interval || 1}
        />
      );
      break;
    case VariableType.Select:
      if (!variable.options) {
        console.error(
          `Options not defined for select variable: ${variable.name}`
        );
        return null;
      }
      node = (
        <select {...base}>
          {!variable.required && (
            <option key="none" value={undefined}>
              None
            </option>
          )}
          {variable.options.map((o) => (
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
          variable.subtext ? "" : "mb-1",
        ])}
        htmlFor={variable.name}
      >
        {variable.label || variable.name}
      </label>
      {variable.subtext && (
        <div className="block text-xs text-slate-400 mb-1">
          {variable.subtext}
        </div>
      )}
      {node}
    </div>
  );
}

const NUM_TYPES: Set<VariableType> = new Set([
  VariableType.Integer,
  VariableType.Float,
]);

function clean<T>(variable: Variable, value: T): T | number {
  if (NUM_TYPES.has(variable.type)) return Number(value);
  return value;
}
