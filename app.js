
// 1 misol
// function ortiqcha(str, value) {
//     return str.slice(value);
// }

// console.log(ortiqcha("sonlar", "son"));

// 2-misol

// function ortiqcha(str) {
//   return str.slice(1, -1);
// }
// console.log(ortiqcha('<div>'));

//3-misol

// function sl(nm) {
//   for (let i = 1; i < nm; i++) {
//     if (nm % 2 == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(sl(10));

//5-misol

// function xamason(n1, n2) {
//   let son = 0;
//   for (let i = n1; i <= n2; i++) {
//     son += i;
//   }
//   return son;
// }
// console.log(xamason(5, 10));

//8-misol

// function oraligson(arr, k, m) {
//   arr.splice(k, m - k + 1);
//   return arr;
// }
// let sonlar = [1, 2, 3, 4, 5, 6, 7];
// let k = 4;
// let m = 7;
// console.log(oraligson(sonlar, k, m));
// console.log(sonlar.length);

//10-misol

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// const prod = products.reduce((p, m) => {
//   return p + m.price + m.discount + m.quantity;
// }, 0);
// console.log(`jami${prod}`);
 