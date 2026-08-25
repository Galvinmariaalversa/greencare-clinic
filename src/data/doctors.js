const doctors = [
  {
    id: "dr-arun",
    name: "Dr. Arun Kumar",
    specialization: "General Medicine",
    qualification: "MBBS, MD",
    experience: "10+ years",
    availableDays: ["Monday", "Wednesday", "Friday"],
    availability: [
      {
        day: "Monday",
        hours: "9:00 AM – 1:00 PM",
      },
      {
        day: "Wednesday",
        hours: "2:00 PM – 6:00 PM",
      },
      {
        day: "Friday",
        hours: "9:00 AM – 1:00 PM",
      },
    ],
    biography:
      "Dr. Arun Kumar focuses on providing thoughtful general healthcare with an emphasis on clear communication and understanding each patient's individual needs.",
    expertise: [
      "General consultations",
      "Preventive healthcare",
      "Routine health assessment",
      "Chronic condition support",
    ],
    services: [
      "General Consultation",
      "Preventive Care",
      "Health Screening",
    ],
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: "dr-anita",
    name: "Dr. Anita Sharma",
    specialization: "Family Medicine",
    qualification: "MBBS, MD",
    experience: "12+ years",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    availability: [
      {
        day: "Tuesday",
        hours: "9:00 AM – 1:00 PM",
      },
      {
        day: "Thursday",
        hours: "2:00 PM – 6:00 PM",
      },
      {
        day: "Saturday",
        hours: "9:00 AM – 2:00 PM",
      },
    ],
    biography:
      "Dr. Anita Sharma provides family-focused healthcare and aims to make consultations comfortable, clear, and practical for patients and families.",
    expertise: [
      "Family healthcare",
      "Preventive care",
      "Routine consultations",
      "Wellness guidance",
    ],
    services: [
      "Family Healthcare",
      "General Consultation",
      "Preventive Care",
    ],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: "dr-rahul",
    name: "Dr. Rahul Mehta",
    specialization: "Internal Medicine",
    qualification: "MBBS, MD",
    experience: "14+ years",
    availableDays: ["Monday", "Tuesday", "Thursday"],
    availability: [
      {
        day: "Monday",
        hours: "2:00 PM – 6:00 PM",
      },
      {
        day: "Tuesday",
        hours: "9:00 AM – 1:00 PM",
      },
      {
        day: "Thursday",
        hours: "2:00 PM – 6:00 PM",
      },
    ],
    biography:
      "Dr. Rahul Mehta focuses on internal medicine consultations and supporting patients through informed and structured healthcare decisions.",
    expertise: [
      "Internal medicine",
      "Health assessment",
      "Preventive healthcare",
      "Long-term health support",
    ],
    services: [
      "Specialist Consultation",
      "Health Screening",
      "Preventive Care",
    ],
    image:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: "dr-priya",
    name: "Dr. Priya Nair",
    specialization: "Preventive Healthcare",
    qualification: "MBBS, MPH",
    experience: "8+ years",
    availableDays: ["Monday", "Wednesday", "Saturday"],
    availability: [
      {
        day: "Monday",
        hours: "9:00 AM – 1:00 PM",
      },
      {
        day: "Wednesday",
        hours: "9:00 AM – 1:00 PM",
      },
      {
        day: "Saturday",
        hours: "10:00 AM – 2:00 PM",
      },
    ],
    biography:
      "Dr. Priya Nair is focused on preventive healthcare and helping patients develop practical approaches to maintaining their overall wellbeing.",
    expertise: [
      "Preventive healthcare",
      "Health screening",
      "Wellness consultation",
      "Lifestyle guidance",
    ],
    services: [
      "Preventive Care",
      "Health Screening",
      "Wellness Care",
    ],
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85",
  },
];

export default doctors;