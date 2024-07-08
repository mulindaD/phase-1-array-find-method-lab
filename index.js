// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(arr){
    if(arr.find(isWin) === undefined) {
        return undefined
    } else {
        return arr.find(isWin).year    
    }
}

function isWin (element) {
    if (element.result === 'W'){
        return element.year
    }
}

superbowlWin(record)
console.log(superbowlWin(record))

