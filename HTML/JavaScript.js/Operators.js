// assignment operators

let count = 0;

let name = 'Renee';

count +=4;
count -=2;
count *=2;
count /=2;

console.log(count);

//arithmatic operators [maths --> sing's]

let a = 6;
let b = 9;

let sum = a+b;
console.log(sum);
let sub = a-b;
console.log(sub);
let mul = a*b;
console.log(mul);
let div = a/b;
console.log(div);
let mod = a%b;
console.log(mod);
let expo = a**b;
console.log(expo);

/*

+
-
*
/
%
**
*/


//concatination operators

let name1 = "Renee"
let name2 = "Tupe"

//let fullname ='/n' + '/n' + name2;
//console.log =(fullname);

let fullname = `${name1} ${name2}`;
console.log(fullname);

name1 = name1 + '' + name2;

// name1 += ''+ name2 ;

console.log (name1)

//logical operators 

let flag1 = true;
let flag2 = false;
let flag3 = false;

console.log(true || flase);//true && false --> flase

console.log(!flag3); //true

let value = 'null';

let ans = value ?? 50;
console.log(ans);

// terrary operators

let flags = false;

let ans1 = flags ? 'i am in ': 'i am out';
console.log(ans1);

// unary operators

let name4 = '5';

name4 = +name4;
//console.log(+name4);

//typeof operators

console.log(typeof name4);

// conversion between string to number || number to string

let xyz = '123';
console.log(+xyz);
console.log(typeof +xyz);

//method

let ans55 = parseInt(xyz);
console.log(ans55);
console.log(typeof ans55);

// consturctor method

let ans56 = Number(xyz);
console.log(ans56);
console.log(typeof ans56);

//numberToString 


let numberToString = 55;

console.log(
    numberToString, 
    StringTonumber
);

const jugad = numberToString + '';

console.log('jugad: ans',jugad, 'typeof:'typeof jugad );

const jugad_2 = numberToString.toString();

console.log('jugad:ans',jugad_2 ,'type:' typeof jugad);

const jugad_3 = String(numberToString);
console.log('jugad:ans',jugad_3'type:'typeof jugad);

// condittion/comparision operators

let num1 = 4;
let num2 = '4';

console.log(num1 === num2);

/*
... the return value in boolean

= =  --> LHS == RHS DATA[value RH , type WRO]
! = --> LHS =/= RHS  DATA[value RH ,type WRO]
=== --> LHS === RHS  DATA[value RH , type WRO]



&& --> AND --> left side && right side ... both value are true then it will become --> true

|| --> OR --> left side // right side ... any one value has been true then it will become --> true

! --> NOT --> change the value if true become false and false become true


// binary converstion


 let n1 = 26;
 let n2 = 7;

 let numToBin1 = n1.toString(2);
 console,log(numToBin1);
 let numToBin2 = n2.toString(2);

 let binTonum = parseInt(numToBin1,2);

 let