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
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
//q1
const array = Array()
console.log(array)
//q2
const namesChildren= Array('Maryam', 'Aasiyah', 'Khadeejah', 'zahra', 'Malik', 'Jamal','Kamal','juwayriyyah', 'AbduLLaH')
console.log(namesChildren)
//q3
console.log(namesChildren.length)
//q4
console.log(namesChildren[0])
console.log(namesChildren[4])
let lastIndex=namesChildren.length-1
console.log(namesChildren[lastIndex])
//q5
const mixedDataTypes= ['i', 'married', 'ifemi' ,2,'true ',50 ]
console.log(mixedDataTypes.length)
//q6
const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle','Amazon']
console.log(itCompanies)
//q7
console.log(itCompanies.length)

//q8
console.log(itCompanies[0])
console.log(itCompanies[2])
let lastIndex8=itCompanies.length-1
console.log(itCompanies[lastIndex8])

//q9
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

//q10
console.log(itCompanies[0].toUpperCase())

console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//q12

const sentences=['are' ,'big' ,'IT' , 'companies']
let second=sentences.join(' ')
console.log(second)
let first=itCompanies.join(',')
console.log(first)
let fullSentence= [first, second]
console.log(fullSentence)
console.log(fullSentence.toString())

//q13
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes('Microsoft')===true?console.log(itCompanies.indexOf('Microsoft')):console.log('company is not found')
/*if(itCompanies.includes('excel')===true){
(console.log(itCompanies.indexOf(excel)))}
else{
  (console.log('company not found'))
}*/
/*q14
Filter out companies which have more than one 'o' without the filter method*/

//q15

//Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)

//q16Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

//q17Slice out the first 3 companies from the array

itCompanies.slice(0,3)
console.log()

//level2
//q1
/*Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file*/

//q2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

/*First remove all the punctuations and change the string to array and count the number of words in the array*/
function removePunctuations(text){
var punctuations=/[\.,?!]/g;
var newText= text.replace(punctuations,"")
return newText
}
console.log(removePunctuations(text))
function countWords(text){
  var arr=text.split(' ')
  return arr.filter(word => word !== '').length;
}
console.log(countWords(text))

//q3
//In the following shopping cart add, remove, edit items 
/* add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat')
console.log(shoppingCart)
shoppingCart.push('sugar')
console.log(shoppingCart)

shoppingCart[4]=""
console.log(shoppingCart)
shoppingCart[3]='Green Tea'
console.log(shoppingCart)

//q4
//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if(countries.includes('Ethiopia'===true)){
  console.log('ETHIOPIA')
}else{
 console.log(countries.push('Ethiopia'))
}