// ---------- Array of student objects ----------
const students = [
  { name: "Salmaan Ahmed", marks: "38%", class: "3rd", address: "India" },
  { name: "Riya Sharma", marks: "85%", class: "10th", address: "123, ABC Colony, Delhi" },
  { name: "Rohan Patel", marks: "70%", class: "12th", address: "456, XYZ Street, Mumbai" },
  { name: "Priya Singh", marks: "95%", class: "8th", address: "789, PQR Nagar, Bangalore" },
  { name: "Ankit Gupta", marks: "60%", class: "9th", address: "101, LMN Road, Kolkata" },
  { name: "Neha Verma", marks: "80%", class: "11th", address: "222, DEF Avenue, Chennai" },
  { name: "Manoj Kumar", marks: "75%", class: "10th", address: "333, GHI Lane, Hyderabad" },
  { name: "Pooja Mishra", marks: "88%", class: "12th", address: "444, STU Colony, Pune" },
  { name: "Rajesh Singhania", marks: "92%", class: "9th", address: "555, VWX Street, Jaipur" }
];

// ---------- Grab the elements we need ----------
const cardGrid = document.getElementById("cardGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsHeading = document.getElementById("resultsHeading");
const noResults = document.getElementById("noResults");

// ---------- Build the HTML for one student card ----------
function createCardHTML(student) {
  return `
    <div class="student-card">
      <p><span>Student Name:</span> ${student.name}</p>
      <p><span>Marks:</span> ${student.marks}</p>
      <p><span>Class:</span> ${student.class}</p>
      <p><span>Address:</span> ${student.address}</p>
    </div>
  `;
}

// ---------- Render a list of students to the page ----------
function renderStudents(list) {
  // map() turns each student object into a card's HTML,
  // then we join all the pieces into one string and drop it into the grid
  cardGrid.innerHTML = list.map(createCardHTML).join("");

  noResults.textContent = list.length === 0 ? "No students found." : "";
}

// ---------- Filter students by name as the user types ----------
function filterStudents() {
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    resultsHeading.textContent = "";
    renderStudents(students);
    return;
  }

  // filter() keeps only the students whose name includes the typed text
  const matches = students.filter(student =>
    student.name.toLowerCase().includes(query)
  );

  resultsHeading.textContent = `Search Results for ${searchInput.value}...`;
  renderStudents(matches);
}

// ---------- Wire up the events ----------
searchInput.addEventListener("input", filterStudents); // live filtering while typing
searchBtn.addEventListener("click", filterStudents);    // also works on button click

// ---------- Show all students when the page first loads ----------
renderStudents(students);
