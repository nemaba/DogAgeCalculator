function calculateDogAge() {
var myDogAge = document.getElementById('years').value;
var dogAge = (myDogAge - 2) * 4 + 21;

document.getElementById('dogAge').innerHTML = "My dog's age is " + dogAge + ' years old in human years.';
}
