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

console.log(itCompanies.slice(1,3))
console.log()
