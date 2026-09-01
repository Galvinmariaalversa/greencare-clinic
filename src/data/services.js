const services = [
  {
    id: "general-medicine",
    name: "General Medicine",
    shortDescription:
      "Professional consultation and everyday healthcare support for a wide range of common health concerns.",
    description:
      "Our general medicine service provides an opportunity to discuss health concerns with a healthcare professional in a structured and comfortable setting.",
    detailedInformation: [
      "General consultations are intended to understand your current concerns and healthcare needs.",
      "The consultation may include discussion of symptoms, relevant health history, and appropriate next steps.",
      "Where further evaluation or specialist care is appropriate, the healthcare team can provide guidance on the next stage of care.",
    ],
    consultationDuration: "30–45 minutes",
    consultationInformation:
      "Please bring any relevant previous medical records, prescriptions, or reports that may help the healthcare professional understand your concerns.",
    icon: "＋",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    category: "Primary Care",
    doctorIds: ["dr-arun", "dr-rahul"],
    faqs: [
      {
        question: "What happens during a general medicine consultation?",
        answer:
          "The healthcare professional will discuss your concerns and relevant health information and guide you on appropriate next steps.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "You can bring relevant previous medical records, prescriptions, reports, and a list of medicines you currently take.",
      },
      {
        question: "Can I book a general consultation online?",
        answer:
          "Yes. You can use the GreenCare appointment page to select a service and continue with the appointment process.",
      },
    ],
  },

  {
    id: "family-medicine",
    name: "Family Medicine",
    shortDescription:
      "Patient-focused healthcare support designed for individuals and families across different stages of life.",
    description:
      "Our family medicine service focuses on providing a convenient point of care for individuals and families seeking professional healthcare guidance.",
    detailedInformation: [
      "Family medicine consultations provide an opportunity to discuss everyday healthcare concerns.",
      "The healthcare professional considers the patient's individual situation when discussing appropriate care.",
      "The service is designed to support clear communication between patients and healthcare professionals.",
    ],
    consultationDuration: "30–45 minutes",
    consultationInformation:
      "Please bring relevant health records and current medication information where applicable.",
    icon: "♡",
    image:
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
    category: "Primary Care",
    doctorIds: ["dr-anita"],
    faqs: [
      {
        question: "Who can use family medicine services?",
        answer:
          "Individuals and families can use family medicine consultations for appropriate general healthcare concerns.",
      },
      {
        question: "Can family members book separate consultations?",
        answer:
          "Yes. Appointments can be arranged separately according to individual healthcare needs.",
      },
    ],
  },

  {
    id: "preventive-care",
    name: "Preventive Care",
    shortDescription:
      "Healthcare consultations focused on supporting informed decisions about ongoing health and wellbeing.",
    description:
      "Preventive care focuses on helping patients understand their healthcare needs and make informed decisions about maintaining their wellbeing.",
    detailedInformation: [
      "Preventive consultations can provide an opportunity to discuss general health and lifestyle considerations.",
      "The healthcare professional can review relevant information and discuss appropriate preventive measures.",
      "Specific recommendations depend on the individual's circumstances and should be discussed with a qualified healthcare professional.",
    ],
    consultationDuration: "30 minutes",
    consultationInformation:
      "Bring any relevant health information or previous reports that may be useful during your consultation.",
    icon: "✓",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=85",
    category: "Wellness",
    doctorIds: ["dr-priya", "dr-arun"],
    faqs: [
      {
        question: "What is preventive care?",
        answer:
          "Preventive care involves healthcare activities intended to support informed decisions about maintaining health and identifying appropriate areas for follow-up.",
      },
      {
        question: "Is preventive care suitable for everyone?",
        answer:
          "Healthcare needs vary between individuals. A healthcare professional can advise you about appropriate preventive care based on your circumstances.",
      },
    ],
  },

  {
    id: "health-screening",
    name: "Health Screening",
    shortDescription:
      "Structured healthcare assessments designed to help patients discuss relevant screening needs with professionals.",
    description:
      "Our health screening service provides a structured setting for discussing appropriate health assessments and screening requirements.",
    detailedInformation: [
      "Screening needs vary depending on factors such as age, health history, and individual circumstances.",
      "The healthcare professional can discuss which assessments may be appropriate for you.",
      "Screening results and follow-up requirements should be discussed with a qualified healthcare professional.",
    ],
    consultationDuration: "30–60 minutes",
    consultationInformation:
      "Bring previous health reports and relevant medical information where available.",
    icon: "⌕",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
    category: "Wellness",
    doctorIds: ["dr-rahul", "dr-priya"],
    faqs: [
      {
        question: "What does a health screening involve?",
        answer:
          "The appropriate screening process depends on your individual circumstances and will be discussed with the healthcare professional.",
      },
      {
        question: "Should I bring previous reports?",
        answer:
          "Yes. Previous reports can provide useful context during your consultation when they are available.",
      },
    ],
  },

  {
    id: "wellness-consultation",
    name: "Wellness Consultation",
    shortDescription:
      "A professional consultation focused on practical health and wellbeing discussions.",
    description:
      "Wellness consultations provide a structured opportunity to discuss general wellbeing and practical healthcare considerations with a professional.",
    detailedInformation: [
      "The consultation can focus on your general wellbeing concerns and relevant lifestyle considerations.",
      "Your healthcare professional can discuss practical approaches based on your individual circumstances.",
      "Any healthcare recommendations should be understood in the context of your individual needs.",
    ],
    consultationDuration: "30 minutes",
    consultationInformation:
      "Bring any relevant health information that may help the healthcare professional understand your concerns.",
    icon: "✦",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",
    category: "Wellness",
    doctorIds: ["dr-priya"],
    faqs: [
      {
        question: "What can I discuss during a wellness consultation?",
        answer:
          "You can discuss general wellbeing concerns and relevant lifestyle or healthcare questions with the healthcare professional.",
      },
      {
        question: "Is this a replacement for specialist care?",
        answer:
          "No. The appropriate type of healthcare depends on your individual circumstances. Your healthcare professional can guide you if additional care is needed.",
      },
    ],
  },

  {
    id: "internal-medicine",
    name: "Internal Medicine",
    shortDescription:
      "Professional medical consultation for patients seeking structured evaluation and healthcare guidance.",
    description:
      "Internal medicine consultations provide an opportunity for patients to discuss relevant health concerns with a professional focused on adult medical care.",
    detailedInformation: [
      "The consultation begins with an understanding of the patient's concerns and relevant health information.",
      "The healthcare professional may discuss appropriate evaluation or follow-up based on the consultation.",
      "Further investigations or specialist care may be recommended where appropriate.",
    ],
    consultationDuration: "30–45 minutes",
    consultationInformation:
      "Please bring previous medical records, reports, and current medication information when relevant.",
    icon: "＋",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    category: "Specialist Care",
    doctorIds: ["dr-rahul"],
    faqs: [
      {
        question: "What is internal medicine?",
        answer:
          "Internal medicine focuses on adult healthcare and medical consultations. Your healthcare professional can explain which type of consultation is appropriate for your needs.",
      },
      {
        question: "What information should I bring?",
        answer:
          "Previous reports, medical records, prescriptions, and current medication information can be useful during the consultation.",
      },
    ],
  },
];

export default services;