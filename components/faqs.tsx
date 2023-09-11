import Accordion from "@/components/utils/accordion";

const QUESTIONS = [
  {
    question: "How does avatar.ai work?",
    answer:
      `Our platform's onboarding process collects information on your personality, audience demographics, and monetization objectives. ` +
      `Our team's AI engineers will then create an AI community manager for you to distribute to your fans through a secure link. ` +
      `avatar.ai will then continually message, engage, and monetize your audience anywhere and anytime.`,
  },
  {
    question: "How much does avatar.ai cost?",
    answer:
      "There is a free trial period for a month. Subscriptions start at $25 per month afterwards.",
  },
  {
    question: "Who owns my data?",
    answer:
      "You own all of the data between you and your fans. All messages are encrypted, stored securely, and deleted if you ever stop using avatar.ai.",
  },
  {
    question: "How much can I make?",
    answer:
      "The average active avatar.ai creator makes ~$500 per month from their fans through chat subscriptions and PPV (Pay Per View) content.",
  },
  {
    question: "How am I paid?",
    answer:
      "Creators are paid on a monthly basis. Payment methods include direct ACH transfers, Paypal, and Zelle.",
  },
] as const;

export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <div className="uppercase mb-4 text-xl font-bold text-blue-600 tracking-wider">
              FAQ
            </div>
            <h2 className="h2">Questions & Answers</h2>
          </div>
          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
            {QUESTIONS.map((q, i) => (
              <Accordion key={i} title={q.question} active>
                {q.answer}
              </Accordion>
            ))}
            {/*<span*/}
            {/*  className="block border-t border-gray-200"*/}
            {/*  aria-hidden="true"*/}
            {/*/>*/}
          </ul>
        </div>
      </div>
    </section>
  );
}
