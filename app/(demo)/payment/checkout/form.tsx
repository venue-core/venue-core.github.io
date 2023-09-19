"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, UseFormReturnType } from "@mantine/form";
import { IMaskInput } from "react-imask";

import { CURRENCY_FORMAT } from "@/components/estimator/estimate/utils";

type Tab = "card" | "ach" | "paypal";

export default function PayForm() {
  const [tab, setTab] = useState<Tab>("card");

  return (
    <div>
      <Tabs tab={tab} setTab={setTab} />
      {tab === "card" && <CardForm />}
      {tab === "ach" && <ACHForm />}
    </div>
  );
}

type ContactFields = Partial<{
  email: string;
  phone: string;
}>;

type CardFields = Partial<{
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}>;

function CardForm() {
  const router = useRouter();
  const search = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<CardFields & ContactFields>({
    initialValues: {},
  });
  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        setSubmitting(true);
        router.push(
          `/payment/receipt?${search.toString()}&payment=${encodeURIComponent(
            "CREDIT CARD"
          )}&email=${values.email}&phone=${values.phone}`
        );
        setSubmitting(false);
      })}
    >
      <CreditCard submitting={submitting} form={form} />
      <Contact submitting={submitting} form={form} />
      <Pay />
    </form>
  );
}

type ACHFields = Partial<{
  routingNumber: string;
  accountNumber: string;
}>;

function ACHForm() {
  const router = useRouter();
  const search = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<ACHFields & ContactFields>({
    initialValues: {},
  });
  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        setSubmitting(true);
        router.push(
          `/payment/receipt?${search.toString()}&payment=ACH&email=${
            values.email
          }&phone=${values.phone}`
        );
        setSubmitting(false);
      })}
    >
      <BankAccount submitting={submitting} form={form} />
      <Contact submitting={submitting} form={form} />
      <Pay />
    </form>
  );
}

function Tabs({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative flex w-full py-2 bg-slate-100 rounded">
        <span
          className="absolute inset-1 m-1 pointer-events-none"
          aria-hidden="true"
        >
          <span
            className={`absolute inset-0 w-1/2 bg-white rounded border border-slate-200 shadow-sm transition duration-150 ease-in-out ${
              tab === "card" ? "translate-x-0" : "translate-x-full"
            }`}
          ></span>
        </span>
        <button
          className={`relative flex-1 text-sm font-medium p-1 duration-150 ease-in-out ${
            tab === "card" ? "text-slate-500" : "text-slate-500"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setTab("card");
          }}
          aria-pressed={tab === "card"}
        >
          Credit Card
        </button>
        <button
          className={`relative flex-1 text-sm font-medium p-1 duration-150 ease-in-out ${
            tab === "ach" ? "text-slate-500" : "text-slate-500"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setTab("ach");
          }}
          aria-pressed={tab === "ach"}
        >
          ACH
        </button>
        {/*<button*/}
        {/*  className={`relative flex-1 text-sm font-medium p-1 duration-150 ease-in-out ${*/}
        {/*    tab === "paypal" ? "dark:text-slate-100" : "text-slate-500"*/}
        {/*  }`}*/}
        {/*  onClick={(e) => {*/}
        {/*    e.preventDefault();*/}
        {/*    setTab("paypal");*/}
        {/*  }}*/}
        {/*  aria-pressed={tab === "paypal"}*/}
        {/*>*/}
        {/*  PayPal*/}
        {/*</button>*/}
      </div>
    </div>
  );
}

function Pay() {
  const search = useSearchParams();
  const amount = Number(search.get("amount"));
  const payment = isNaN(amount) ? "$10,000.00" : CURRENCY_FORMAT.format(amount);

  return (
    <div className="mt-6">
      <button
        type="submit"
        className="block w-full btn text-sm text-white bg-blue-600 hover:bg-blue-700 group"
      >
        <span>Pay - {payment}</span>
      </button>
    </div>
  );
}

function CreditCard({
  submitting,
  form,
}: {
  submitting: boolean;
  form: UseFormReturnType<{}>;
}) {
  return (
    <div className="mt-8 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="cardName">
          Cardholder Name
        </label>
        <input
          id="cardName"
          className="form-input w-full"
          type="text"
          required
          disabled={submitting}
          {...form.getInputProps("cardName")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="cardNumber">
          Card Number
        </label>
        <IMaskInput
          id="cardNumber"
          className="form-input w-full"
          mask="0000 0000 0000 0000"
          radix="."
          placeholder="1234 1234 1234 1234"
          required
          disabled={submitting}
          {...form.getInputProps("cardNumber")}
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="cardExpiry"
          >
            Expiry Date
          </label>
          <IMaskInput
            id="cardExpiry"
            className="form-input w-full"
            mask="00/00"
            radix="."
            placeholder="MM/YY"
            required
            disabled={submitting}
            {...form.getInputProps("cardExpiry")}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1" htmlFor="cardCvc">
            CVC
          </label>
          <IMaskInput
            id="cardCvc"
            className="form-input w-full"
            mask="000"
            radix="."
            placeholder="123"
            required
            disabled={submitting}
            {...form.getInputProps("cardCvc")}
          />
        </div>
      </div>
    </div>
  );
}

function BankAccount({
  submitting,
  form,
}: {
  submitting: boolean;
  form: UseFormReturnType<{}>;
}) {
  return (
    <div className="mt-8 space-y-4">
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="routingNumber"
        >
          Routing Number
        </label>
        <IMaskInput
          id="routingNumber"
          className="form-input w-full"
          mask={"0".repeat(9)}
          radix="."
          required
          disabled={submitting}
          {...form.getInputProps("routingNumber")}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="accountNumber"
        >
          Account Number
        </label>
        <IMaskInput
          id="accountNumber"
          className="form-input w-full"
          // most are 8-12 digits, but can be up to 17 digits
          mask={"0".repeat(17)}
          radix="."
          required
          disabled={submitting}
          {...form.getInputProps("accountNumber")}
        />
      </div>
    </div>
  );
}
function Contact({
  submitting,
  form,
}: {
  submitting: boolean;
  form: UseFormReturnType<ContactFields>;
}) {
  return (
    <div className="mt-8 space-y-4">
      <div className="uppercase text-sm font-semibold">Contact information</div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="form-input w-full"
          type="email"
          required
          disabled={submitting}
          {...form.getInputProps("email")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="phone">
          Phone
        </label>
        <IMaskInput
          id="phone"
          className="form-input w-full"
          mask="+1 (000) 000-0000"
          radix="."
          required
          disabled={submitting}
          {...form.getInputProps("phone")}
        />
      </div>
    </div>
  );
}
