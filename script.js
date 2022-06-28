
function colorHex( )
{
// 16777215 is the decimal number of the highest hexadecimal(rgb(255, 255, 255) or in hexadecimal is “FFFFFF”)
// generate a random number between 000000-FFFFFF

    let num1 = Math.floor(Math.random()*16777215);

// take the generated random number to the base 16

    let num2= num1.toString(16);

   num3= document.getElementById("HC").style.backgroundColor =`#${num2}`
    console.log(num3)
}

// --------filter ----------------

function filterSelection(event) {
  const cards = document.querySelectorAll(".card"); 
  let key = event.target.dataset.filter; 
  filterElement(cards,key)
};

function filterElement(cards,key){
  cards.forEach(card => {
    if(card.classList.contains(key)){
      card.style.display= "block"
    }
    else{
    card.style.display= "none"
    }
  });
} 

function filterSearch(){
  const searchName= document.getElementById("search").value.toLowerCase()
  const cards = document.querySelectorAll(".card");
  filterElement(cards,searchName)
}