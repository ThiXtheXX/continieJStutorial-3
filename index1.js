const elements = document.querySelectorAll(".oneOf3Blogs");


for (let elem of elements) {
    let h2 = document.querySelector('h2')
    console.log(h2.textContent);
}
// elements.forEach(function(userItem) {
//     let h2 = document.querySelector('h2')
//     console.log(elements)
// });




//TOGGLE
// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// body {
//   padding: 25px;
//   background-color: white;
//   color: black;
//   font-size: 25px;
// }

// .dark-mode {
//   background-color: black;
//   color: white;
// }
// </style>
// </head>
// <body>

// <h2>Toggle Dark/Light Mode</h2>
// <p>Click the button to toggle between dark and light mode for this page.</p>

// <button onclick="myFunction()">Toggle dark mode</button>

// <script>
// function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
// }
// </script>

// </body>
// </html>