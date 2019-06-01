const EventEmitter = require("events");

class MeuEmisor extends EventEmitter {}

const eventEmitter = new MeuEmisor();

eventEmitter.on("event", function(count) {
  console.log(count);
});
// let count = 0;
// setInterval(() => {
//  eventEmitter.emit("event", count++);
// }, 1000);
const stdin = process.openStdin();
stdin.addListener("data", function(value) {
  eventEmitter.emit("event", value.toString());
});
