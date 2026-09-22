// Step 1: Switch to Hospital Database
use hospitalDB;

// Step 2: Insert Patient Documents
db.patients.insertMany([
  {
    patientId: "PAT1001",
    fullName: "John Doe",
    dob: "1988-05-14",
    gender: "Male",
    bloodGroup: "O+",
    contact: "555-0199",
    allergies: ["Penicillin", "Peanuts"],
    medicalHistory: [
      { diagnosis: "Hypertension", diagnosedYear: 2020, status: "Ongoing" }
    ],
    visits: [
      {
        visitId: "VST-2026-01",
        date: "2026-08-10",
        doctor: "Dr. Sarah Connor",
        symptoms: ["Dizziness", "Headache"],
        prescription: [
          { medicine: "Amlodipine", dosage: "5mg daily", duration: "30 days" }
        ]
      }
    ]
  }
]);

// Step 3: Query patient record by Patient ID
db.patients.find({ patientId: "PAT1001" }).pretty();

// Step 4: Add a new medical visit record to an existing patient
db.patients.updateOne(
  { patientId: "PAT1001" },
  {
    $push: {
      visits: {
        visitId: "VST-2026-02",
        date: "2026-09-15",
        doctor: "Dr. Alan Grant",
        symptoms: ["Routine Checkup"],
        prescription: []
      }
    }
  }
);