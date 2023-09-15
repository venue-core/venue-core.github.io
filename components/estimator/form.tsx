import { useEffect } from "react";
import { useForm, UseFormReturnType } from "@mantine/form";
import cx from "classnames";
import _ from "lodash";

import { evaluateCondition } from "@/components/estimator/estimate";
import {
  Field,
  Inputs,
  Page,
  VariableType,
} from "@/components/estimator/types";

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
          className="block btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 group w-full mx-auto"
        >
          <span>Continue</span>
          <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </button>
      </div>
    </form>
  );
}

function updatedInputs(
  oldValues: Inputs,
  newValues: Inputs,
  varToField: Record<string, Field>
) {
  return Object.entries(newValues).reduce<Inputs>((acc, [id, value]) => {
    const field = varToField[id];
    if (field) {
      if (meetsConditions(field, newValues)) {
        acc[id] = cleanFieldValue(field, value);
      } else {
        acc[id] = getFieldDefault(field);
      }
    }
    return acc;
  }, oldValues);
}

function meetsConditions(field: Field, inputs: Inputs) {
  if (!field.conditions) return true;
  const debug = false;
  return field.conditions.every((c) => evaluateCondition(c, inputs, debug));
}

const NUM_TYPES: Set<VariableType> = new Set([
  VariableType.Integer,
  VariableType.Float,
]);

function cleanFieldValue<T>(field: Field, value: T): T | number {
  if (NUM_TYPES.has(field.variable.type)) return Number(value);
  return value;
}

function getFieldDefault(field: Field) {
  if (field.variable.default !== undefined) {
    return field.variable.default;
  }
  switch (field.variable.type) {
    case VariableType.Boolean:
      return false;
    case VariableType.Float:
      return field.variable.min || 0;
    case VariableType.Integer:
      return field.variable.min || 0;
    case VariableType.MultiSelect:
      return [];
    case VariableType.Select:
      return field.variable.required ? field.variable.options?.[0] || "" : "";
    case VariableType.Text:
      return "";
    default:
      return "";
  }
}

function FormField({
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

function MultiSelect<T extends string | number>({
  id,
  className,
  selected = [],
  options,
  min,
  max,
  onChange,
}: {
  id: string;
  className: string;
  selected: T[];
  options: T[];
  min?: number;
  max?: number;
  onChange: (selected: T[]) => void;
}) {
  return (
    <div>
      <select
        id={id}
        className={className}
        disabled={max ? selected.length === max : false}
        value={undefined}
        onChange={(evt) => {
          const value = evt.target.value as T;
          const updated = _.uniq([...selected, value]);
          onChange(updated);
        }}
      >
        <option key="Select options" value={undefined}>
          Select options
        </option>
        {options
          .filter((o) => !selected.includes(o))
          .map((o) => (
            <option key={o}>{o}</option>
          ))}
      </select>
      <div className="mt-2">
        {selected.map((v) => (
          <span
            key={v}
            className="inline-block cursor-pointer bg-blue-50 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded"
          >
            <span>{v.toString()}</span>
            <span
              className="ml-4"
              onClick={() => {
                onChange(selected.filter((o) => o !== v));
              }}
            >
              &#x2715;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
