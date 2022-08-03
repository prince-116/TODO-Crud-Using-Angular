$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

// done = (listId) => {
//   let checkbox = document.getElementById(`check${listId}`);
//   let current = document.getElementById(`text${listId}`);
//   let classExit = current.classList.contains("text-decoration-line-through");
//   if (classExit == true) {
//     current.classList.remove("text-decoration-line-through");
//   } else {
//     current.classList.add("text-decoration-line-through");
//   }
// };
