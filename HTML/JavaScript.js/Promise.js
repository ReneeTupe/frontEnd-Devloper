let iceCream = new Promise (( resolved , rejected) => {
 let value = true ;

 if (value) {
    resolved('got it ...');
 } else {
    rejected('call mommy!!!');
}
});

iceCream
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
}) 
.finally(() => console.log('finally execution done✅'))

// setTineOut

console.log('A');
const timeOut = () => {
    console.log('B');
    let id = setTimeout(()=> {
    console.log('this is setTimeOut');
    },1500);
    console.log('C');
};
console.log('D');
timeOut();
console.log('E');

// set Interval

console.log ('A');

const timeOut_1 =()=>{
    console.log('B');
    let id= setInterval(()=>{
        console.log('this is setInterval');
    },1500);
    console.log('C');
};
console.log('D');
timeOut_1();
console.log('E');

function naam() {
    let name = 'hello';
    return ()=> {
        let name = 'khan';
        return name;
    };
}

console.log(naam()());