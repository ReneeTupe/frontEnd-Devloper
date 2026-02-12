// while loop 

//1to 100

let start = 1;

let end = 100;

while (start <= end){
    //code

    console.log(start);

    //increment
    start++;
}

let given = 5;

let start_1 = 1;

let result = 1;

// 120

while (start_1 <= given) {
    result *= start_1;
    start_1++;
}
console.log(reult);

// do while loop

do {
console.log('hello');
start_2++;
} while (start_2 <=3);

// for in and for of

let oject = {
    animal: 'cat',
    married: false,
    age: 3,
    city: ['pune','mumbai','lucknow','banglore'],
    hobbie:{
        virtual: 'pub-G',
        outDoor: 'football',
        inDoor: 'carrom',
    },
    myName: function () {
        console.log(this.animal);
    },
};

for (let key in object) {
    console.log(`this is key ${key} this is value`, object[key]);
    
}
