let arr = Array.from({ length: 50 }, () => Math.round(Math.random() * 100));

console.log(arr);

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Найменше число:", min);

// Це домашня робота першої частини  яка називається (програма для знаходження мінімального числа в масиві)