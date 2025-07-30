// IIFE stands for Immediately Invoked Function Expression.
// Avoids polluting the global namespace
// Executes immediately
// Commonly used for encapsulation, initialization, and modular code
(function () {
  var secret = "hidden";
  console.log(secret); // "hidden"
})();

// console.log(secret); // Error: secret is not defined


// Without IIFE
var count = 10;
// With IIFE
(function () {
  var count = 5;
  console.log(count); // 5
})();
console.log(count); // 10 (not affected)


(function () {
  // console.log("App initialized");
})();


((name) => {
  // console.log(`${name}! App initialized`);
})("Shubham");


for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(() => console.log(index), 2000); // 2000 ms (2 second)
  })(i);
}
