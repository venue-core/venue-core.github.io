"use client";

import { useState } from "react";
import { useForm } from "@mantine/form";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [completed, setCompleted] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-xl font-bold mb-4">Reset password</h1>
      <p className="text-sm text-slate-600 mb-4">
        Enter your email address. If an account exists, you'll receive an email
        with a password reset link soon.
      </p>
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            setLoading(true);
            setError(undefined);
            await new Promise((r) => setTimeout(r, 1000));
            setCompleted(true);
          } catch (err) {
            if (err instanceof Error) {
              setError(err);
            }
          } finally {
            setLoading(false);
          }
        })}
      >
        {error && (
          <div
            className="text-sm mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            Invalid email address
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
              className="form-input py-2 w-full"
              type="email"
              disabled={loading}
              required
              {...form.getInputProps("email")}
            />
            {form.errors.email && (
              <div className="mt-2 text-xs text-red-500">
                {form.errors.email}
              </div>
            )}
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 w-full group disabled:opacity-50"
          >
            Reset Password{" "}
            <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
