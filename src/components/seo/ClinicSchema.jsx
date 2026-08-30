function ClinicSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "GreenCare Clinic",
    url: "https://greencare-clinic.vercel.app/",
    description:
      "GreenCare Clinic provides professional healthcare services, experienced doctors, preventive care, health screening, and convenient appointments for individuals and families.",
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