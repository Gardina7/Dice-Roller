//console.log("Eliazbeth")
let dieRolls=[];
let userroll=document.querySelector("#dice-amount");
let roll=document.querySelector("#roll-button");
let rollcount=document.querySelector("#total-rolls");
let rollreset=document.querySelector("#reset-button");
let revealdice=document.querySelector("showallrolls");


roll.addEventListener("click", function (){
let diceCount = userroll.value;
console.log (diceCount)
})

//  const list = document.querySelector('#"Allrolls"');
//  list.innerHTML='';
 
var numbers = [1,2,3,4,5,6];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
 
// for (int Allrolls = 1; Allrolls <= 10; Allrolls++)
//        {
//         int Random = (int)(Math.random()*100);
//         System.out.println(Random);
//        }





// for (let i = 0; i =< 6.length; i++) {
//   let input = rollcount[i];
  

//   let result = input;
//   let listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }


// revealdice.addEventListener("click", function(){
    
// })

// rollreset.addEventListener("click", function () {
//     newValue = Number(reset.innerHTML) + 1;
//     reset.innerHTML = newValue;
//     newValue = 0;
//     userroll.innerHTML = newValue;
//     newValue = 0;
//     rollcount.innerHTML = newValue;
//     newValue = 0;
// })