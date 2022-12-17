let createTaskBtn = document.getElementById("createTaskBtn");
let tasks = document.getElementById("tasks");
let getTask = document.getElementById("task");

createTaskBtn.addEventListener("click", () => {
  if (getTask.value === "") {
    preventDefault();
  }

  var paragrafo = document.createElement("p");

  const checkIcon = document.createElement("img");
  checkIcon.setAttribute("src", "assets/images/check-circle-regular.svg");
  checkIcon.setAttribute("class", "check");
  paragrafo.appendChild(checkIcon);

  const delIcon = document.createElement("img");
  delIcon.setAttribute("src", "assets/images/trash-alt-regular.svg");
  delIcon.setAttribute("class", "trash");
  paragrafo.appendChild(delIcon);

  paragrafo.innerHTML += getTask.value;
  tasks.appendChild(paragrafo);
  getTask.value = "";
  paragrafo.addEventListener("click", () => {
    paragrafo.style.textDecoration = "line-through";
    paragrafo.style.border = "1px solid #02B553";
    paragrafo.firstChild.setAttribute(
      "src",
      "assets/images/check-circle-solid.svg"
    );
  });

  paragrafo.childNodes[1].addEventListener("click", () => {
    tasks.removeChild(paragrafo);
  });
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createTaskBtn.click();
  }
});
