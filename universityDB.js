// Step 1: Switch to University Database
use universityDB;

// Step 2: Insert Course Records
db.courses.insertMany([
  { courseId: "CS101", title: "Data Structures", credits: 4, department: "Computer Science" },
  { courseId: "DB201", title: "NoSQL Databases", credits: 3, department: "Computer Science" }
]);

// Step 3: Insert Student Profiles with embedded academic records
db.students.insertMany([
  {
    studentId: "STU001",
    name: "Alice Smith",
    email: "alice@university.edu",
    major: "Computer Science",
    enrolledCourses: [
      { courseId: "CS101", semester: "Fall 2026", grade: "A" },
      { courseId: "DB201", semester: "Fall 2026", grade: "A-" }
    ],
    gpa: 3.8
  },
  {
    studentId: "STU002",
    name: "Bob Jones",
    email: "bob@university.edu",
    major: "Information Technology",
    enrolledCourses: [
      { courseId: "CS101", semester: "Fall 2026", grade: "B+" }
    ],
    gpa: 3.3
  }
]);

// Step 4: Query to retrieve student profile and academic record
db.students.find({ studentId: "STU001" }).pretty();

// Query students with a GPA greater than 3.5
db.students.find({ gpa: { $gt: 3.5 } }, { name: 1, major: 1, gpa: 1, _id: 0 });