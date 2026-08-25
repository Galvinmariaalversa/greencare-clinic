import { useState } from "react";

function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="px-5 sm:px-6">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="font-semibold text-slate-900">
                {item.question}
              </span>

              <span
                className="shrink-0 text-xl font-normal text-blue-600"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="pb-5 pr-8 text-sm leading-6 text-slate-600"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;