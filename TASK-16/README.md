# Student Records Web Page

A simple web page that shows student records as cards and lets you search for a student by name. The list of students filters live as you type.

## Project Files

- `index.html` – the page structure (header, search box, and the empty grid where cards go)
- `style.css` – all the styling (colors, layout, card design, responsive grid)
- `script.js` – the student data and the JavaScript logic (rendering cards + search filter)

## CSS Concepts Practiced

- **Flexbox** – used to line up the header (title + login button) and the search box (input + button) side by side.
  ```css
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ```
- **CSS Grid** – used to arrange the student cards in neat rows and columns.
  ```css
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  ```
- **Media queries** – used so the grid drops from 3 columns to 2, then to 1, on smaller screens.
  ```css
  @media (max-width: 550px) {
    .card-grid { grid-template-columns: 1fr; }
  }
  ```
- **Box model & border-radius** – padding, spacing, and rounded corners used on the cards, buttons, and search box.

## JavaScript Concepts Practiced

- **Array of objects** – each student is stored as an object with `name`, `marks`, `class`, and `address` properties, all kept inside one array called `students`.
- **Template literals** – used to build each card's HTML using backticks and `${ }` instead of joining strings with `+`.
- **`.map()`** – turns the array of student objects into an array of HTML card strings:
  ```js
  cardGrid.innerHTML = list.map(createCardHTML).join("");
  ```
- **`.filter()`** – used to keep only the students whose name matches what's typed in the search box:
  ```js
  const matches = students.filter(student =>
    student.name.toLowerCase().includes(query)
  );
  ```
- **Events (`input` and `click`)** – the `input` event on the search box runs the filter function on every keystroke, so results update live. The `click` event on the Search button runs the same function.

## How to Run It

1. Download/keep all three files (`index.html`, `style.css`, `script.js`) in the same folder.
2. Double-click `index.html`, or right-click it and choose "Open with" your browser (Chrome/Edge/Firefox).
3. You'll see the student cards displayed on the page.
4. Click into the search box and start typing a student's name (e.g. "R").
5. Watch the cards update instantly to show only matching students, along with a "Search Results for..." heading.
6. Clear the search box to see all students again.

## What I Learned

- How to store structured data (multiple fields per item) using an array of objects instead of separate variables.
- How `.map()` can turn data into HTML, and how `.filter()` can narrow down a list based on user input.
- How to make a search box feel "live" by listening for the `input` event instead of waiting for a button click.
- How Flexbox and Grid solve different layout problems — Flexbox for aligning a row of items, Grid for a full card layout.
- How to make a fixed 3-column layout responsive using media queries.
