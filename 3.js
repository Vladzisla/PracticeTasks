const arr = [ 1, 2, 3, 4, 5 ]
const arr2 = [ 1, 2, 3, 4, 5, 6 ]

function changeArray(arr){
    const result = []

    if(arr.length % 2 != 0 ){
        result.push(...arr.slice(Math.round(arr.length / 2)))
        result.push(arr[Math.floor(arr.length / 2)])
        result.push(...arr.slice(0, Math.floor(arr.length / 2)))
    }
    else {
        result.push(...arr.slice(arr.length / 2))
        result.push(...arr.slice(0, arr.length / 2))
    }
    return result


}

console.log(changeArray(arr2))