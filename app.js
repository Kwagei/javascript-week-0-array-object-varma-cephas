// declare an array with five items

let tools = ["spinal", "screw", "bolt", "zinc", "blocks"]

// add an item to the array
tools[tools.length] = "cement"

// update the third item in the array
tools[2] = "nail"
console.log(tools)

// print five from the array above

let arr = [0,1,2,3,4,[5,6,7],8,9]
console.log(arr[5][0])

// print the last item in the array above using the array length property

let last_item = arr[arr.length -1]
console.log(last_item)

// a program that swaps 0 and 1 and brings the output [1,0,2,3,4,[5,6,7],8,9]

let nums = [1,0,2,3,4,[5,6,7],8,9]
nums[0] = 0
nums[1] = 1
console.log(nums)

// declare an object called clss with three property

let the_class = {
    'room':'down-stairs',
    'students':9,
    'laptops': 10
}

console.log(the_class)

// a new property to the object

the_class["chips"] = "potato"
console.log(the_class)

// first item from the object using the dot notation

console.log(the_class.chips)

// last item from the object using square bracket notation

console.log(the_class["students"])


// print mary from the list of people

let people = [
        {name: "mary", contact: 0881999000},
        {name: "paul", contact: 0881999600},
        {name: "peter", contact: 0881999400},
        {name: "sara", contact: 0881999300}
    ]

console.log(people[0].name)

// add gender to each of the object in the array

people[0]["gender"] = "female"
people[1]["gender"] = "male"
people[2]["gender"] = "male"
people[3]["gender"] = "female"
console.log(people)


// add a new object to the list of people

people[people.length] = {
    name:"benny", contact:0777531177, gender: "male"
}

console.log(people)

// print sara's contact

console.log(people[3])