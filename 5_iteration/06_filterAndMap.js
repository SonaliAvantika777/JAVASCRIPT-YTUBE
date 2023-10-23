
const books = [
    {
        title : 'Book1',genre : 'fiction', publish:1981, edition:2004
    },
    {
        title : 'Book1',genre : 'fiction', publish:1981, edition:2004
    },
    {
        title : 'Book2',genre : 'Fiction', publish:1992, edition:2008
    },
    {
        title : 'Book3',genre : 'History', publish:1999, edition:2007
    },
    {
        title : 'Book4',genre : 'Non -fiction', publish:1989, edition:2010
    },
    {
        title : 'Book5',genre : 'Science', publish:1987, edition:2010
    },
    {
        title : 'Book6',genre : 'History', publish:1986, edition:1996
    },
    {
        title : 'Book7',genre : 'Geography', publish:2011, edition:2016
    }
]

// let reading = books.filter((bk) => bk.genre == 'History')
// let reading = books.filter((bk) => bk.publish >= 2000)
let reading = books.filter((bk) => {
    return bk.genre == 'History' && bk.edition > 1999 
})
// console.log(reading);


const nums =[1,2,3,4,5,6,7,8,9,10]

// let newNums = nums.map((num) => num + 1 )
// let newNums = nums.map((num) =>{ return num + 1 } )

const newNums = nums.map( (num) => num *10 ).map( (num) => num + 2).filter( (num) => num > 50)

console.log(newNums);