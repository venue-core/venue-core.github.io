import { evaluateCondition } from "@/components/estimator/estimate/utils";
import { Field, Inputs, VariableType } from "@/components/estimator/types";

export function updatedInputs(
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

export function meetsConditions(field: Field, inputs: Inputs) {
  if (!field.conditions) return true;
  const debug = false;
  return field.conditions.every((c) => evaluateCondition(c, inputs, debug));
}

export function getFieldDefault(field: Field) {
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

const NUM_TYPES: Set<VariableType> = new Set([
  VariableType.Integer,
  VariableType.Float,
]);

function cleanFieldValue<T>(field: Field, value: T): T | number {
  if (NUM_TYPES.has(field.variable.type)) return Number(value);
  return value;
}
