const sentence = "hello there from lighthouse labs";
const interval = 200;
const lines = ["|", "/", "-", "\\"]
let timer = 100;


const startSpinner = () => {
  for (let i = 0; i < 9; i++) {
    setTimeout(() => process.stdout.write(`\r${lines[i % 4]}   `), timer);
    timer += interval;
  }
  setTimeout(() => console.log(""), timer);
};

startSpinner();