// alert();

//buttons
let btnChange1 = document.getElementById("btnChange1");
// console.log(btnChange1);
let btnChange2 = document.getElementById("btnChange2");
let btnChange3 = document.getElementById("btnChange3");
let btnChange4 = document.getElementById("btnChange4");



// fields
let affectMe1 = document.getElementById("affectMe1");
// console.log(affectMe1);
let affectMe2 = document.getElementById("affectMe2");
let affectMe3 = document.getElementById("affectMe3");
let affectMe4 = document.getElementById("affectMe4");




// Event Listeners
btnChange1.addEventListener("click", function(event){
    // alert("button clicked");
    affectMe1.innerText = "Changed the value to this string";
});
btnChange2.addEventListener("click", function(event){
    affectMe2.innerText = "Hope you had a great three day weekend!"
    affectMe2.className = "new-Style";
});
btnChange3.addEventListener("click", function(event){
    affectMe3.innerText = "We love to code";
    affectMe3.className = "new-Style " + "barrelRoll";
});
btnChange4.addEventListener("click", function(){
    
});