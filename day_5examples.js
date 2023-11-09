
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

const num = [1, 2, 3, 4, 5,]
console.log(num.includes(5))
console.log(num.includes(0))
console.log(num.includes(6))
console.log(num.includes(1))
console.log(webTechs.includes('nodes'))
console.log(webTechs.includes('javascripts'))
console.log(webTechs.includes('c+'))

console.log(num.slice())
console.log(num.slice(0))
console.log(num.slice(1,4))
console.log(num.splice())
console.log(num.splice(0,1))
const num1=[1,2,3,4,5]
num1.push(6)
console.log(num1)
num1.pop()
console.log(num1)
fruits.push('apple')
console.log(fruits)
fruits.pop()
console.log(fruits)
num.shift()
console.log(num)
num1.unshift()
console.log(num1)
number.reverse()
console.log(number)
webTechs.sort()
console.log(webTechs)
webTechs.reverse()
console.log(webTechs)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)
 console.log(fullStack.length)
 console.log(fullStack[0])
 console.log(fullStack[1])