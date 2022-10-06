export function renderArray(app) {
  const array = ["BMW", "VW", "AUDI", "MB"];
  app.innerHTML += `<ul>${array
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;
}
