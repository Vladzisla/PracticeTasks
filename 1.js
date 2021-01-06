const numbers = [2, 3, 5, 7, 11, 13, 17, 19]

function currentSums(numbers){
    const result = []
    numbers.reduce((sum, value) => {
        result.push(sum)
        return sum + value
    })
    return result
}

console.log(currentSums(numbers))