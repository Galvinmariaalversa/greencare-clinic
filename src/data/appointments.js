export const initialValues = {
  fullName: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  reason: "",
};

export const appointmentSteps = [
  {
    id: 1,
    label: "Doctor",
  },
  {
    id: 2,
    label: "Service",
  },
  {
    id: 3,
    label: "Date",
  },
  {
    id: 4,
    label: "Time",
  },
  {
    id: 5,
    label: "Patient",
  },
  {
    id: 6,
    label: "Review",
  },
  {
    id: 7,
    label: "Confirmation",
  },
];

export const mockAppointmentConfig = {
  unavailableDates: [],
  unavailableSlots: {},
};

export const timeSlotDuration = 30;

export function formatDateForDisplay(dateString) {
  if (!dateString) return "";

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getTodayString() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getDayName(dateString) {
  if (!dateString) return "";

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });
}

function parseTime(timeString) {
  const match = timeString.match(
    /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i
  );

  if (!match) return null;

  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const period = match[3].toUpperCase();

  if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  if (period === "AM" && hour === 12) {
    hour = 0;
  }

  return {
    hour,
    minute,
  };
}

function formatTime(hour, minute) {
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${String(displayHour).padStart(2, "0")}:${String(
    minute
  ).padStart(2, "0")} ${period}`;
}

export function getTimeSlotsForDoctor(doctor, dateString) {
  if (!doctor || !dateString) return [];

  const dayName = getDayName(dateString);

  const availability = doctor.availability?.find(
    (item) => item.day === dayName
  );

  if (!availability) {
    return [];
  }

  const ranges = availability.hours.split("–");

  if (ranges.length !== 2) {
    return [];
  }

  const start = parseTime(ranges[0].trim());
  const end = parseTime(ranges[1].trim());

  if (!start || !end) {
    return [];
  }

  const slots = [];

  let currentMinutes = start.hour * 60 + start.minute;
  const endMinutes = end.hour * 60 + end.minute;

  while (currentMinutes < endMinutes) {
    const hour = Math.floor(currentMinutes / 60);
    const minute = currentMinutes % 60;

    slots.push(formatTime(hour, minute));

    currentMinutes += timeSlotDuration;
  }

  return slots;
}

export function isSlotInThePast(dateString, timeString) {
  if (!dateString || !timeString) return false;

  const today = getTodayString();

  if (dateString !== today) {
    return dateString < today;
  }

  const parsed = parseTime(timeString);

  if (!parsed) return false;

  const now = new Date();

  const slotDate = new Date();

  slotDate.setHours(parsed.hour);
  slotDate.setMinutes(parsed.minute);
  slotDate.setSeconds(0);
  slotDate.setMilliseconds(0);

  return slotDate <= now;
}

export function isSlotUnavailable(dateString, timeString) {
  const unavailable =
    mockAppointmentConfig.unavailableSlots?.[dateString] || [];

  return unavailable.includes(timeString);
}