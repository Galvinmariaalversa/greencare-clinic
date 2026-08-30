import clinic from "../../data/clinic";

function ClinicSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",

    "@id": "https://greencare-clinic.vercel.app/#clinic",

    name: clinic.name,

    url: "https://greencare-clinic.vercel.app/",

    description:
      "GreenCare Clinic provides professional healthcare services, experienced doctors, preventive care, health screening, and convenient appointments for individuals and families.",

    telephone: clinic.contact.phone,

    email: clinic.contact.email,

    address: {
      "@type": "PostalAddress",
      addressLocality: clinic.contact.address.city,
      addressRegion: clinic.contact.address.state,
      addressCountry: "IN",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],

    medicalSpecialty: [
      "General Practice",
      "Family Medicine",
      "Internal Medicine",
      "Preventive Medicine",
    ],

    isAcceptingNewPatients: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default ClinicSchema;