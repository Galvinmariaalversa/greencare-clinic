import { useState } from "react";

export const initialValues = {
  fullName: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  reason: "",
};

function PatientForm({ values, onChange, onValidSubmit }) {
  const [errors, setErrors] = useState({});

  function validate() {
    const nextErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[+]?[\d\s()-]{8,15}$/.test(values.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.age) {
      nextErrors.age = "Age is required.";
    } else if (
      Number(values.age) < 1 ||
      Number(values.age) > 120
    ) {
      nextErrors.age = "Enter an age between 1 and 120.";
    }

    if (!values.gender) {
      nextErrors.gender = "Please select a gender.";
    }

    if (!values.reason.trim()) {
      nextErrors.reason = "Reason for visit is required.";
    } else if (values.reason.trim().length < 10) {
      nextErrors.reason =
        "Please provide at least 10 characters.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validate()) {
      onValidSubmit();
    }
  }

  function updateField(field, value) {
    onChange({
      ...values,
      [field]: value,
    });

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: "",
      }));
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
          Step 5
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#102b4e]">
          Patient details
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Enter your information to continue.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          value={values.fullName}
          error={errors.fullName}
          onChange={(value) =>
            updateField("fullName", value)
          }
          placeholder="Enter your full name"
        />

        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(value) =>
            updateField("phone", value)
          }
          placeholder="+91 98765 43210"
        />

        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(value) =>
            updateField("email", value)
          }
          placeholder="you@example.com"
        />

        <Field
          id="age"
          label="Age"
          type="number"
          min="1"
          max="120"
          value={values.age}
          error={errors.age}
          onChange={(value) =>
            updateField("age", value)
          }
          placeholder="Age"
        />

        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-semibold text-slate-800"
          >
            Gender
          </label>

          <select
            id="gender"
            value={values.gender}
            onChange={(event) =>
              updateField("gender", event.target.value)
            }
            className={[
              "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm",
              "outline-none transition",
              "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
              errors.gender
                ? "border-red-400"
                : "border-slate-200",
            ].join(" ")}
          >
            <option value="">Select gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">
              Prefer not to say
            </option>
          </select>

          {errors.gender && (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.gender}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="reason"
            className="block text-sm font-semibold text-slate-800"
          >
            Reason for Visit
          </label>

          <textarea
            id="reason"
            rows="4"
            value={values.reason}
            onChange={(event) =>
              updateField("reason", event.target.value)
            }
            placeholder="Briefly describe the reason for your appointment"
            className={[
              "mt-2 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm",
              "outline-none transition",
              "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
              errors.reason
                ? "border-red-400"
                : "border-slate-200",
            ].join(" ")}
          />

          {errors.reason && (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.reason}
            </p>
          )}
        </div>
      </div>

      <div className="mt-7 flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Continue to Review →
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
  placeholder,
  min,
  max,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-800"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        min={min}
        max={max}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className={[
          "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm",
          "outline-none transition",
          "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
          error
            ? "border-red-400"
            : "border-slate-200",
        ].join(" ")}
      />

      {error && (
        <p className="mt-1 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default PatientForm;