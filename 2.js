let str = "Каждый  охотник желает ,знать, где сидит фазан.";

function newArray(str){
    return str.split("").filter((element, index, arr) => {
        if(index == 0 && element != " " && element != "," && element != ".") return true
        if((arr[index - 1] == " " || arr[index - 1] == "," || arr[index - 1] == ".") && (element != " " && element != "," && element != ".")) return true
    })
}

console.log(newArray(str));