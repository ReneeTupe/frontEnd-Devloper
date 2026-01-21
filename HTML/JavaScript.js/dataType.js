var name = 'Renee';

var surname = 'Tupe';

var maried = 'false';

var age = '17';

var ans = '${name} ${surname} ${maried} ${age}';

for(let i=0;i<3;i++){
    console.log(i)
}
let val=3;
val='Tupe';
console.log(val);

//hello

// primitive - [call by vale] [point to memory]

/**
 * 
 * ! string - "" '' ``
 * # number - 0-9
 * $ boolean - true/false
 * * symbol - symbol()
 * & undefined - undefined
 * ? null - null 
 * bigint - 35245543759757.n
 * 
 * 
 * ! array - []
 * # object - {}
 * $ function - ()
 * *
 */

let name1 = 'shivam';
//console.log(~ name:' name);

name1 = 'Renee';
// console.log(~name:' name);

name1[0] = 'S';
console.log( 'name:',name1);
console.log( 'name[0]:',name1[0]);

let othername = 'shivam';

let arr = [
    1,
    3,
    4,
    name1,
    othername,
    'Renee',
    [true,false],
    {name: 'mehfooz', age: 99},
    ];

    arr[0] = 'sneha';
    arr[1] = 'abhishek';

    console.log('~ arr[0]:',arr[0]); // sneha
    console.log('~ arr:', arr);

