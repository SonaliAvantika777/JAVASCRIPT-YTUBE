
const coding = ["JS",'ruby',"java","python","cpp"]

coding.forEach(function (values){
    // console.log(values)
})

coding.forEach( (item) => {
    // console.log(item)
})

function print(item){
    console.log(item);
}
// coding.forEach(print)


const codingLang = [
    {
        langName : "javascript",
        fileName : "js"
    },
    {
        langName : "phython",
        fileName : "py"
    },
    {
        langName : "java",
        fileName : "java"
    }
]
codingLang.forEach((item)=>{
    // console.log(item.langName);
})

const arr = [1,2,3,,4,5,6,7,8,9,10]

// let newArr = arr.filter((num) => (num > 5))
//  console.log(newArr);

// const newArr = arr.filter((num) => {
//     return num > 4
// })
// console.log(newArr);

const newArr = []

arr.forEach((num) => {
    if (num > 5) {
        //   console.log(num);
        newArr.push(num)
    }
})
console.log(newArr);
