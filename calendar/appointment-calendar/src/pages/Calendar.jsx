import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentForm from "../components/AppointmentForm";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(saved);
  }, []);

  const handleSave = (appointment) => {
    const updated = [...appointments, appointment];
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const appointmentsForDate = appointments.filter(
    (a) => a.date === date.toDateString()
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Appointment Calendar</h2>
      <Calendar onChange={setDate} value={date} />
      <p style={{ marginTop: "1rem" }}>
        Selected Date: <strong>{date.toDateString()}</strong>
      </p>

      <AppointmentForm selectedDate={date} onSave={handleSave} />

      <div style={{ marginTop: "2rem" }}>
        <h3>Appointments for this day:</h3>
        {appointmentsForDate.length === 0 ? (
          <p>No appointments.</p>
        ) : (
          <ul>
            {appointmentsForDate.map((a, index) => (
              <li key={index}>
                🧑 {a.patient} — 👨‍⚕️ {a.doctor} at ⏰ {a.time}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
