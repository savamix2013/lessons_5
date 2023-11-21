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
  
// Домашня робота другої частини  яка називається (програма, що використовує бінарний пошук)