

/*let date = dokument.getElementById("date");

console.log("date");

*/





const date = document.getElementById('date');
const options = {weekday: "long", month: "short", day: "numeric"}
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);




let date = new Date();
   document.write(d.getDate()+"."+d.getMonth()+"."+(d.getYear()+1900));





   let hund= "hallo"
console.log("hund");



const now = new Date();
const stunde = now.getHours();
const minuten = now.getMinutes();
const monat = now.getMonth();
const tag = now.getDate();

console.log(tag);
console.log(stunde + "." + minuten);