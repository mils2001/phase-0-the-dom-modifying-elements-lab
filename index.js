// Write your code here!

console.log(document.getElementById("main"));
main.remove(); 

const newHeader = document.createElement("h1");
newHeader.innerHTML = "h1";
newHeader.id = "victory";
newHeader.textContent= "Miles is the champion";