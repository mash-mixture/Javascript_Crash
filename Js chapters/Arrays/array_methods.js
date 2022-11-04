/****ARRAY FIND**/
const myarray = [
    ['asad' , '50'],
    ['Majid' , '60'],
    ['shan' , '70'],
    ['Zee' , '80'],
    ['rizwan' , '70'],
    ['ali' , '30'],
];

/*Getting Index Index of specific search match in multi-dimenssional array*/
console.log(myarray);

myarray.forEach((item) => {
    item.find(element => element == '50');
    if(item.find(element => element == '80') != undefined){
        console.log(myarray.indexOf(item));
    }
});