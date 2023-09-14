const QUESTIONS = [
  [
    {
      question: "How does the free trial work?",
      answer: [
        "You can try our software free for 30 days without entering a credit card. Billing will only start after your trial ends.",
      ],
    },
    {
      question: "What kind of payments do you support?",
      answer: [
        "We support all major credit cards and ACH direct deposit. We also support payment schedules tailored to match your business needs.",
      ],
    },
    {
      question: "Do you support payment plans or custom billing schedules?",
      answer: [
        "Yes! Customize your billing plans based on your business requirements. Many of our vendors opt for an initial deposit followed by payments at set intervals leading up to the wedding.",
      ],
    },
    {
      question: "Does the software send reminders for pending payments?",
      answer: [
        "Yes, with our Business and Enterprise plans, automated reminders via email and text are included, eliminating the need to manually chase payments.",
      ],
    },
  ],
  [
    {
      question: "Can I modify the invoices before sending them out?",
      answer: [
        "Yes, while the software generates invoices automatically, admin users have the flexibility to review and adjust before finalizing.",
      ],
    },
    {
      question:
        "Is there integration with tax or accounting software like Quickbooks?",
      answer: [
        "Integration capabilities are in development. Please reach out to katherinewang2012@gmail.com for specific integration inquiries or other questions.",
      ],
    },
    {
      question: "How secure is your payment processing?",
      answer: [
        "We utilize Stripe, the number one globally trusted payment platform known for its advanced security measures. All transactions and financial data are fully encrypted.",
      ],
    },
  ],
] as const;

export default function Faq() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20" data-aos="fade-up">
          {/* Section header */}
          <div className="pb-12">
            <h2 className="h2">FAQs</h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            {/* Item */}
            {QUESTIONS.map((group, i) => (
              <div className="w-full md:w-1/2 space-y-8" key={i}>
                {group.map(({ question, answer }) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
