const today = new Date(); // Create a new Object
const newHour = today.getHours(); // Find the current hour

let greeting;

// Display the approciate greeting based on the current time
if (newHour > 18) {
  greeting = "Selamat Malam";
} else if (newHour > 12) {
  greeting = "Selamat Siang";
} else if (newHour > 0) {
  greeting = "Selamat Pagi";
} else {
  greeting = "Hallo...";
}

console.log(greeting);
