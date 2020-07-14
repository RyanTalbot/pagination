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

DisplayList(listNames, ul, rows, currentPage);
