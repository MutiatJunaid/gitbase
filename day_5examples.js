
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const country = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries
console.log('Numbers:', numbers)    
console.log('Number of numbers:',numbers.length)
console.log('Name of fruits:', fruits)
console.log('Number of fruits:', fruits.length)
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companiesString)
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(txt.split(','))
console.log(words)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya']
    console.log(countries.length)
    console.log(countries)
    console.log(countries[0])
    console.log(countries[10])
    const lastIndex=countries.length-1
    console.log(lastIndex)
    countries[0]= 'Afghanistan'
    countries[9]='Nigeria'
    countries[lastIndex]='Uk'
    console.log(countries)
const arra = Array()
console.log(arra)
const eightEmptyValues= Array(8)
console.log(eightEmptyValues)
const nineEmptyValues= Array(9).fill('x')
console.log(nineEmptyValues)

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

console.log(thirdList.indexOf(3))
console.log(thirdList.indexOf(8))
let index= fruits.indexOf('banana')
if(index === -1){
    console.log('This fruit does not exist in the array')  
 } else {
     console.log('This fruit does exist in the array')
 }

index===-1? console.log('this fruits doesnt exist in the array'):console.log('this fruits exist in the array')
const number = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(number.lastIndexOf(2))
console.log(number.includes(5))
