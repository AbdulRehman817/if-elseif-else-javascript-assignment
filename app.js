
//question:1
// var character=prompt('Enter a character ')
// var charCode=character.charCodeAt(0)
// if (charCode>=65 && charCode<=96) {
//     document.write(character+"is uppercase  letter")
// }
// else if (charCode>=97 && charCode<=122) {
//     document.write(character+"is lowercase letter")
// }
// else{
//     document.write("it is a number or something")
// }

//question2:
// var interger1=+prompt('Enter a integer')
// var interger2=+prompt('Enter a integer')
// if (interger1>interger2) {
//     document.write(interger1+"is larger than"+interger2)
    
// }
// else if(interger1===interger2){
//     docum
//     document.write(interger1+'is equal to'+interger2)
// }
// else{
//     document.write('it is smaller or not equals to')
// }
 
//question3:
// var number1=+prompt('Enter a number')

// if (number1===0) {
//     document.write(number1+'is zero')
// }

// else if (number1>0) {
//     document.write(number1+'is positive')
// }

// if (number1<0) {
//     document.write(number1+'is negative')
// }


//question4:
// var character=prompt('Enter a character')
// if (character ==='a') {
//     document.write(character+'\nit is a vowel' )
    
// }
// else if (character ==='e') {
//     document.write(character+'\nit is a vowel' )
    
// }
// else if (character ==='i') {
//     document.write(character+'\nit is a vowel' )
    
// }
// else if (character ==='o') {
//     document.write(character+'\nit is a vowel' )
    
// }
// else if (character ==='u') {
//     document.write(character+'\nit is a vowel' )
    
// }
// else {
//     document.write(character +'is consonant')
// }


//question5:
// var password=prompt('Enter your password')


// var ConfirmPassword=prompt('Enter your confirm password')


// if (password===ConfirmPassword) {
//     document.write('Correct! The password youentered matches the original password')
// }
// else if (password!=ConfirmPassword) {
//     document.write('Incorrect! The password you entered doesnot matches the original password')
// }

// var greeting=+prompt('Enter a number')
// var hour = 13
// if (hour <= 13) {
//     document.write(  "Good day")}
// else{
//     document.write('Good evening')
// }





var time=+prompt('Enter time in 24 hour clock')

if(time>=0000 && time<=1200){
document.write('Good Morning')
}
else if(time>=1200 && time <=1700){
document.write('Good Evening')
}
