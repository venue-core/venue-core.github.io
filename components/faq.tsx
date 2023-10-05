const QUESTIONS = [
  // {
  //   question: "How does the free trial work?",
  //   answer: [
  //     "You can try our software free for 30 days without entering a credit card. Billing will only start after your trial ends.",
  //   ],
  // },
  {
    question: "What kind of payments do you support?",
    answer: [
      "We support collecting payments by all major credit card providers, ACH withdrawals, PayPal, Apple Pay, and Google Wallet.",
    ],
  },
  {
    question: "Do you support payment plans or custom billing schedules?",
    answer: [
      "Yes! Customize your billing plans based on your business requirements. Many of our vendors opt for an initial deposit followed by payments at set intervals leading up to the booked event date.",
    ],
  },
  {
    question: "Does the software send reminders for pending payments?",
    answer: [
      "Yes, automated reminders are sent to your customers via email and text, eliminating the need to manually chase payments.",
    ],
  },
  {
    question:
      "Is there integration with tax or accounting software like Quickbooks?",
    answer: [
      "We allow exporting payments collected into your Quickbooks account."
      // "Integration capabilities are in development. Please reach out to katherinewang2012@gmail.com for specific integration inquiries or other questions.",
    ],
  },
  {
    question: "How secure is your payment processing?",
    answer: [
      "We partner with Stripe, the number one globally trusted payment platform known for its advanced security measures. All transactions and financial data are fully SHA-256 encrypted.",
    ],
  },
  {
    question: "Can I modify the invoices before sending them out?",
    answer: [
      "Yes, while the software generates invoices automatically, admin users have the flexibility to review and adjust before finalizing the invoice.",
    ],
  },
] as const;

export default function Faq() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          {QUESTIONS.map(({ question, answer }, i) => (
            <div className="space-y-2" key={question}>
              <h4 className="text-xl font-bold">{question}</h4>
              {answer.map((a) => (
                <p className="text-slate-500" key={a}>
                  {a}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
