const removeUniqueEl = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length - 1; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }

    let newArr = arr.filter(el => obj[el] > 1)
    return newArr
}

console.log(removeUniqueEl(["a", "b", "a", "b", "c", "b"]))