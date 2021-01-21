//console.log("Eliazbeth")
let dieRolls=[];
let userroll=document.querySelector("#dice-amount");
let rollButton=document.querySelector("#roll-button");
let totalSpan=document.querySelector("#total");
let resetButton=document.querySelector("#reset-button");
let showallrolls=document.querySelector("#showallrolls");
let allRollsElement=document.querySelector("#allRolls")


rollButton.addEventListener("click", function (){
let diceCount = userroll.value;
// console.log (diceCount)
let total = 0;
for(let count =1;count<=diceCount;  count++ ){

 let roll = (Math.floor( Math.random() * 6)+ 1)
dieRolls.push(roll)
total = total + roll;
 }
 totalSpan.innerHTML = total
})

//  const list = document.querySelector('#"Allrolls"');
//  list.innerHTML='';
 

showallrolls.addEventListener("click", function(){
    for(let count = 0; count < dieRolls.length; count++){
 
         const newDiceString = '<li class ="dice">' + dieRolls[count] + "</li>";
         allRollsElement.innerHTML = allRollsElement.innerHTML + newDiceString;
    }
})
let diceReset = document.querySelector("#reset-button")


diceReset.addEventListener("click",function (){
    
    newValue = 0;
    totalSpan.innerHTML = newValue;
    newValue = 0;
    allRollsElement.innerHTML = newValue;
    newValue = 0;
    userroll.innerHTML = newValue;
    newValue = 0;
    

})
    // let count = 0;
    // totalRolls.innerHTML ="";
    
    // while (count < dieRolls.length){
    //     showAllRolls.innerHTML += '<li>' + (count +1)+ ''
    //     count++;
  
    

// alert('You rolled a ' + dieRoll);

//  resetButton.addEventListener("click", function () {
//     newValue = Number(resetButton.innerHTML) = 0 ;
//     reset.innerHTML = newValue;
//     newValue = 0;
//     dieroll.innerHTML = newValue;
//     newValue = 0;
//     totalRolls.innerHTML = newValue;
//     newValue = 0;
//     showAllRolls.innerHTML = newValue;
//     newValue = 0;
// })
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

