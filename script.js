const listNames = [
  "John",
  "Ben",
  "James",
  "David",
  "Tom",
  "Samuel",
  "Sarah",
  "Jane",
  "Daniel",
  "Samantha",
];

let rows = 3;
let currentPage = 1;
const ul = document.querySelector(".results");
const btnWrapper = document.querySelector(".btn-wrapper");

function DisplayList(names, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rowsPerPage * page;
  let end = start + rowsPerPage;

  let paginatedNames = names.slice(start, end);

  for (let i = 0; i < paginatedNames.length; i++) {
    let name = paginatedNames[i];

    let liElement = document.createElement("li");
    liElement.classList.add("name");
    liElement.textContent = name;

    wrapper.appendChild(liElement);
  }
}

function SetupPagination(names, wrapper, rowsPerPage) {
  wrapper.innerHTML = "";

  let pageCount = Math.ceil(names.length / rowsPerPage); // Rounds up

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = PaginationButton(i, names);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page, names) {
  let button = document.createElement("button");
  button.textContent = page;

  if (currentPage == page) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentPage = page;
    DisplayList(names, ul, rows, currentPage);

    let currentBtn = document.querySelector(".btn-wrapper .active");
    currentBtn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

DisplayList(listNames, ul, rows, currentPage);
SetupPagination(listNames, btnWrapper, rows);
