import { useState } from "react";

function AppointmentForm({ selectedDate, onSave }) {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      date: selectedDate.toDateString(),
      patient,
      doctor,
      time,
    };

    onSave(appointment);

    setPatient("");
    setDoctor("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <h3>Add Appointment for {selectedDate.toDateString()}</h3>

      <div>
        <label>Patient: </label>
        <select value={patient} onChange={(e) => setPatient(e.target.value)} required>
          <option value="">Select Patient</option>
          <option value="John">John</option>
          <option value="Meena">Meena</option>
          <option value="Ravi">Ravi</option>
        </select>
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <label>Doctor: </label>
        <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
          <option value="">Select Doctor</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Dr. Priya">Dr. Priya</option>
          <option value="Dr. Arjun">Dr. Arjun</option>
        </select>
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <label>Time: </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <button type="submit" style={{ marginTop: "1rem" }}>
        Save Appointment
      </button>
    </form>
  );
}

export default AppointmentForm;
