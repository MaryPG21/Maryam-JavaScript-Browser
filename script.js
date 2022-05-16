
function colorHex( )
{
// 16777215 is the decimal number of the highest hexadecimal(rgb(255, 255, 255) or in hexadecimal is “FFFFFF”)
// generate a random number between 000000-FFFFFF

    let num1 = Math.floor(Math.random()*16777215);

// take the generated random number to the base 16

    let num2= num1.toString(16);
    let sh='#'

   num3= document.getElementById("HC").style.backgroundColor =sh+num2
    console.log(num3)
}