"use client";

import { useState } from "react";
import Link from "next/link";
import Email from "@emailjs/browser";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useForm } from "@mantine/form";
import { IMaskInput } from "react-imask";

const EMAILJS_SERVICE_ID = "service_t2oc63w" as const;
const EMAILJS_TEMPLATE_ID = "template_o00uvd5" as const;
const EMAILJS_PUBLIC_API_KEY = "cAm4_BslKf4HuNSII" as const;

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [completed, setCompleted] = useState(false);
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      source: "Google",
      message: "",
    },
    validate: {
      firstName: (value) =>
        value.trim().length < 2 ? "Name must be at least 2 characters" : null,
      lastName: (value) =>
        value.trim().length < 2 ? "Name must be at least 2 characters" : null,
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  if (completed) {
    return (
      <div>
        <div>
          Thanks! You're all set. You will receive an email from us within 24
          hours.
        </div>
        <Link
          className="mt-4 btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 w-full group"
          href="/"
        >
          Return Home
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <div className="font-bold">Something unexpected happened!</div>
        <div className="mt-2">Try refreshing the page.</div>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        try {
          setLoading(true);
          setError(undefined);
          await Email.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            values,
            EMAILJS_PUBLIC_API_KEY
          );
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
      <div className="space-y-4">
        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div className="sm:w-1/2">
            <label
              className="block text-sm text-slate-600 font-medium mb-1"
              htmlFor="first-name"
            >
              First Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="first-name"
              className="form-input text-sm py-2 w-full"
              type="text"
              disabled={loading}
              required
              {...form.getInputProps("firstName")}
            />
            {form.errors.firstName && (
              <div className="mt-2 text-xs text-red-500">
                {form.errors.firstName}
              </div>
            )}
          </div>
          <div className="sm:w-1/2">
            <label
              className="block text-sm text-slate-600 font-medium mb-1"
              htmlFor="last-name"
            >
              Last Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="last-name"
              className="form-input text-sm py-2 w-full"
              type="text"
              disabled={loading}
              required
              {...form.getInputProps("lastName")}
            />
            {form.errors.lastName && (
              <div className="mt-2 text-xs text-red-500">
                {form.errors.lastName}
              </div>
            )}
          </div>
        </div>
        <div>
          <label
            className="block text-sm text-slate-600 font-medium mb-1"
            htmlFor="email"
          >
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            className="form-input text-sm py-2 w-full"
            type="email"
            disabled={loading}
            required
            {...form.getInputProps("email")}
          />
          {form.errors.email && (
            <div className="mt-2 text-xs text-red-500">{form.errors.email}</div>
          )}
        </div>
        <div>
          <label
            className="block text-sm text-slate-600 font-medium mb-1"
            htmlFor="phone"
          >
            Phone <span className="text-rose-500">*</span>
          </label>
          <IMaskInput
            id="phone"
            className="form-input text-sm py-2 w-full"
            mask="+1 (000) 000-0000"
            radix="."
            disabled={loading}
            {...form.getInputProps("phone")}
            onAccept={form.getInputProps("phone").onChange}
          />
        </div>
        <div>
          <label
            className="block text-sm text-slate-600 font-medium mb-1"
            htmlFor="referrer"
          >
            How did you hear about us? <span className="text-rose-500">*</span>
          </label>
          <select
            id="referrer"
            className="form-select py-2 w-full"
            disabled={loading}
            required
            {...form.getInputProps("source")}
          >
            <option>Google</option>
            <option>Facebook</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm text-slate-600 font-medium mb-1"
            htmlFor="message"
          >
            What can we help you with?
          </label>
          <textarea
            id="message"
            className="form-textarea text-sm py-2 w-full"
            disabled={loading}
            rows={2}
            {...form.getInputProps("message")}
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="btn-sm text-sm text-white bg-blue-600 hover:bg-blue-700 w-full group disabled:opacity-50"
          disabled={loading}
        >
          Request
          <ArrowRightIcon className="h-3 stroke-2 tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </button>
      </div>
    </form>
  );
}
