"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useForm } from "@mantine/form";

import PasswordInput from "@/components/ui/password";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must be at least 8 characters" : null,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        setError(undefined);
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setError(new Error("Not implemented"));
      })}
    >
      {error && (
        <div
          className="text-sm mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          Invalid email address or password.
        </div>
      )}
      <div className="space-y-4">
        <div>
          <label
            className="block text-sm text-slate-600 font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="form-input text-sm py-2 w-full"
            type="email"
            required
            disabled={loading}
            {...form.getInputProps("email")}
          />
          {form.errors.email && (
            <div className="mt-2 text-xs text-red-500">{form.errors.email}</div>
          )}
        </div>
        <div>
          <div className="flex justify-between">
            <label
              className="block text-sm text-slate-600 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <Link
              className="text-sm font-medium text-blue-500 hover:text-blue-400 ml-2"
              href="/reset-password"
            >
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            id="password"
            className="form-input text-sm py-2 w-full"
            required
            disabled={loading}
            {...form.getInputProps("password")}
          />
          {form.errors.password && (
            <div className="mt-2 text-xs text-red-500">
              {form.errors.password}
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 w-full group disabled:opacity-50"
          disabled={loading}
        >
          Log in
          <ArrowRightIcon className="h-3 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </button>
      </div>
    </form>
  );
}
