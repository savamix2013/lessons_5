/*let arr = Array.from({ length: 50 }, () => Math.round(Math.random() * 100));

console.log(arr);

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Найменше число:", min); */

/* Це домашня робота першої частини  яка називається (програма для знаходження мінімального числа в масиві) */









/*
let arr = Array.from({ length: 11 }).map(() => Math.round(Math.random() * 10)).sort((a, b) => a - b);
console.table(arr);

let found_num = Math.floor(Math.random() * 11);
console.log("Found number:", found_num);
console.log("================");

let i = 0;
let j = arr.length - 1;

while (i <= j) {
    let half_index_arr = Math.floor((i + j) / 2);
    console.log(i, "+", j, "/ 2 =", half_index_arr);

    if (arr[half_index_arr] === found_num) {
        console.log("================");
        console.log("Found:", found_num);
        break;
    } else if (arr[half_index_arr] > found_num) {
        j = half_index_arr - 1;
        console.log("j =", j);
    } else {
        i = half_index_arr + 1;
        console.log("i =", i);
    }
}   
  
Домашня робота другої частини  яка називається (програма, що використовує бінарний пошук) */









const { faker } = require('@faker-js/faker');

let arr = Array.from({ length: 10 }, () => faker.person.firstName());

console.log("Згенерований масив:");
console.table(arr);

for (let i = 0, temp; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - 1; k++) {
        if (arr[k] > arr[k + 1]) {
            temp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = temp;
        }
    }
}

console.log("Відсортований масив:");
console.table(arr);

/* програма для сортування масиву метедом бульбашки */

