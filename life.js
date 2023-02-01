

let testCases = [
    {
        cell: 1,
        neighbors: [0, 1, 0]
        // dead
    },
    {
        cell: 0,
        neighbors: [1, 1, 1]
        // alive
    },
    {
        cell: 1,
        neighbors: [0, 0, 1]
        // dead
    },
    {
        cell: 0,
        neighbors: [1, 0, 0]
        //dead
    },
    {
        cell: 1,
        neighbors: [0, 1, 1]
        // alive
    }
];

// cell state 1 = alive cell state 0= ded

////////////////////////////////////// arrary extraction ////////////////////////////////////////////

// function cellTest () {
testCases.forEach(item => {
    const a = item.neighbors.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(a);
    a.forEach(number => {
        if (arr < 2) {
            return cellState = 0;
        } else if (arr > 3) {
            return cellState = 0;
        } else if (arr === 2 || 3) {
            return cellState = 1
        } else {
            return cellState = 0;
        }
    })
});

////////////////////////////////////// copy /////////////////////////////////////////////

// let cellState = 0

// function cellTest(arr) {
//     if (arr < 2) {
//         return cellState = 0;
//     } else if (arr > 3) {
//         return cellState = 0;
//     } else if (arr === 2 || 3) {
//         return cellState = 1
//     } else {
//         return cellState = 0;
//     }
// }


// export {
//     cellTest
// };




// copy in case I fuck up again

// testCases.forEach(item => {
//     const a = item.neighbors.reduce(
//         (accumulator, currentValue) => accumulator + currentValue,
//         0)
//         // console.log(typeof a);
// } 
// );