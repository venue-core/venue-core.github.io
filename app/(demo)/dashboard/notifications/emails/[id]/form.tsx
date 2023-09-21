"use client";

import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { useForm } from "@mantine/form";

import HTMLEditor from "@/components/editor";
import {
  EMAIL,
  Email,
} from "@/app/(demo)/dashboard/notifications/emails/[id]/data";

export default function Form() {
  const [email, setEmail] = useState<Email>();
  const form = useForm<Partial<Email>>({
    initialValues: {},
  });
  useEffect(() => {
    setEmail(EMAIL);
    for (const [key, value] of Object.entries(EMAIL)) {
      form.setFieldValue(key, value);
    }
  }, []);
  if (!email) return <Loader />;
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          {email.name}
        </h1>
        <button className="btn-sm text-sm bg-blue-600 text-white">Save</button>
      </div>
      <div className="mt-4 md:w-2/3 xl:w-1/2">
        <form>
          <div className="mb-4">
            <label className="block text-base font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="form-input text-base py-2 w-full"
              {...form.getInputProps("name")}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-base font-medium mb-1"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              id="subject"
              className="form-input text-base py-2 w-full"
              {...form.getInputProps("subject")}
              required
            />
          </div>
          <div className="my-4">
            <HTMLEditor contentHtml={form.getInputProps("body").value} />
          </div>
        </form>
      </div>
    </>
  );
}
