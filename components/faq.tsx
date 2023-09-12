const QUESTIONS = [
  [
    {
      question: "How does the free trial work?",
      answer: [
        "No credit card required. Simply try for 30 days for free. We will only ask for payment once the 30 days after over.",
      ],
    },
    {
      question: "What kind of payments do you support?",
      answer: [
        "We support all major credit cards and ACH direct deposit. We also support fully customizable payment schedules to match your business needs.",
      ],
    },
    {
      question: "Do you support payment plans or custom billing schedules?",
      answer: [
        "Yes! You can fully customize billing schedules to match your business needs. We often see vendors require a % deposit up front, and then payments 6 months, 3 months, and 2 weeks before the final wedding date.",
        "Business and Enterprise plans include automated email and text message reminders so that you don’t have to remember to chase down payments.",
      ],
    },
  ],
  [
    {
      question:
        "Will I be able to adjust numbers in the invoice before finalizing?",
      answer: [
        "Yes. Our invoices are automatically generated, but admin users will be able to make adjustments as part of the review and finalization process.",
      ],
    },
    {
      question:
        "Do you support integrations with tax / bookkeeping software, such as Quickbooks?",
      answer: [
        "Coming soon! Our engineers are hard at work. If there is a specific integration that you’re looking for or have questions about, let us know at [contact email].",
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
