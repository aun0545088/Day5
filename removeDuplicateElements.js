const arr = ["a", "a", "b", "c", "c", "a", "d", "b"]
const uniqueArray = []

let obj = {}

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1
        uniqueArray.push(arr[i])
    }
}

for (let obj in arr) {

}

//2nd Method

const removeDuplicae = [...new Set(arr)]

console.log(uniqueArray, removeDuplicae)