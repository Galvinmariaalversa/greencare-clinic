import { useState } from "react";

function FAQAccordion({
  items,
  defaultOpenId = null,
}) {
  const [openId, setOpenId] = useState(defaultOpenId);

  const handleToggle = (id) => {
    setOpenId((currentId) =>
      currentId === id ? null : id
    );
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="
              overflow-hidden rounded-2xl
              border border-slate-100 bg-white shadow-sm
              transition-[box-shadow,border-color]
              duration-300 ease-out
              hover:border-slate-200
              hover:shadow-md
              motion-reduce:transition-none
            "
          >
            <button
              type="button"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="
                flex w-full items-center justify-between
                gap-5 px-5 py-5 text-left
                transition-colors duration-200
                hover:bg-slate-50
                active:bg-slate-100
                focus-visible:outline-2
                focus-visible:outline-offset-[-2px]
                focus-visible:outline-blue-600
                sm:px-6
              "
            >
              <span
                className="
                  text-sm font-bold leading-6 text-[#102b4e]
                  sm:text-base
                "
              >
                {item.question}
              </span>

              <span
                aria-hidden="true"
                className={`
                  flex h-7 w-7 shrink-0
                  items-center justify-center rounded-full
                  bg-[#edf7ff]
                  text-lg font-medium text-blue-600
                  transition-transform duration-300 ease-out
                  ${isOpen ? "rotate-45" : "rotate-0"}
                  motion-reduce:transition-none
                `}
              >
                +
              </span>
            </button>

            <div
              id={`faq-answer-${item.id}`}
              className={`
                grid
                transition-[grid-template-rows]
                duration-300 ease-in-out
                motion-reduce:transition-none
                ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }
              `}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className="
                    border-t border-slate-100
                    px-5 py-5
                    sm:px-6
                  "
                >
                  <p className="text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;