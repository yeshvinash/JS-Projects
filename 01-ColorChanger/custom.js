const buttons = document.querySelectorAll("button");
const mainBody = document.querySelector(".main");

buttons.forEach((item) => {
  item.addEventListener("click", function (e) {
    const id = e.target.id;

    //1. using switch case method
    switch (id) {
      case "grey":
        mainBody.style.backgroundColor = e.target.id;
        break;
      case "purple":
        mainBody.style.backgroundColor = e.target.id;
        break;
      case "blue":
        mainBody.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        mainBody.style.backgroundColor = e.target.id;
      default:
        break;
    }
    //2. Using if else statement
    // if (e.target.id === "grey") {
    //   mainBody.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "purple") {
    //   mainBody.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   mainBody.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "yellow") {
    //   mainBody.style.backgroundColor = e.target.id;
    // }
  });
});

// 3. OPTIMIZED CODE VERSION

// buttons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     const color = e.target.id; // Get the button ID
//     mainBody.style.backgroundColor = color; // Set the background color directly
// });
// });
