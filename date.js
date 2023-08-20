const today = new Date();
console.log(today);

const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');

if(date1.getTime() < date2.getTime()) {
    console.log('March was before December');
}
else {
    console.log('March was not before December');
}


// there is a thing called Date in JS
// to work with time search on google for Date in JS