// Dates

let MyDate = new Date()
// console.log(MyDate.toDateString());

let createdDate = new Date(2023, 0, 25)
console.log(createdDate.toDateString());


let MyTimeStamp = Date.now()

// console.log(MyTimeStamp);

// console.log(MyTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: 'long'
    
})









