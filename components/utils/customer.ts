import { ReadonlyURLSearchParams } from "next/navigation";

export enum CustomerType {
  Catering = "CATERING",
  Wedding = "WEDDING",
}

export function getCustomerType(search: ReadonlyURLSearchParams): CustomerType {
  // @ts-ignore
  for (const [key, value] of search.entries()) {
    if (["type", "customer"].includes(key.toLowerCase())) {
      const normalized = value.toLowerCase();
      if (normalized.includes("cater")) return CustomerType.Catering;
      if (normalized.includes("wed")) return CustomerType.Wedding;
    }
  }
  return CustomerType.Wedding;
}
