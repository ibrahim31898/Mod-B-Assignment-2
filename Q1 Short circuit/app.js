// Q1 Short circuit expressions:

// let exp = "faraz" || (true + false) + 5 && " " || "true";

// "faraz" || 1 + 5 && " " || "true"
// "faraz" || " " || "true"
// Result: "faraz"
// let exp1 = (1 + 2) + ++b || 5 && 0 ; for b = 3;

// let b = 3;
// let exp1 = 3 + ++b || 5 && 0;
// let exp1 = 3 + 4 || 5 && 0;
// let exp1 = 7 || 0;
// Result: 7
// let exp2 = 32 && true - ++a && " " || "true"; for a = 5;

// let a = 5;
// let exp2 = 32 && true - ++a && " " || "true";
// let exp2 = 32 && true - 6 && " " || "true";
// let exp2 = 32 && -5 && " " || "true";
// let exp2 = " " || "true";
// Result: " "
// let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;

// (true + 3) * 5 && undefined || "faraz" + 5
// 4 * 5 && undefined || "faraz5"
// 20 && undefined || "faraz5"
// undefined || "faraz5"
// Result: "faraz5"
// let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";

// 32 + "abc" || 1 + false || +5 || "true"
// "32abc" || 1 || 5 || "true"
// Result: "32abc"
// let exp5 = false || (true + true) + 15 && "" || 50;

// false || 2 + 15 && "" || 50
// false || 17 && "" || 50
// false || "" || 50
// Result: 50
// let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";

// (true + false) + 5 || false + 8 + "abc" || "true"
// 1 + 5 || 0 + 8 + "abc" || "true"
// 6 || "8abc" || "true"
// Result: 6
// let exp7 = "faraz" || false + 10 || "true";

// "faraz" || 0 + 10 || "true"
// "faraz" || 10 || "true"
// Result: "faraz"
// let exp8 = 12 + (false + false) + true && null || "faraz";

// 12 + 0 + true && null || "faraz"
// 12 + 1 && null || "faraz"
// 13 && null || "faraz"
// null || "faraz"
// Result: "faraz"
// let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;

// (0 + 1 + 0 + 2) || "faraz" && false || 1 + 10
// 3 || "faraz" && false || 1 + 10
// 3 || false || 11
// Result: 3
// let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";

// (1 + 0) + 5 || 0 + 8 + "abc" || "true"
// 1 + 5 || 8 + "abc" || "true"
// 6 || "8abc" || "true"
// Result: 6
// let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);

// (1 + 0) * 3 && "" || 0 + 1 - (12 + 1 + 1 + 0)
// 1 * 3 && "" || 1 - 14
// 3 && "" || -13
// "" || -13
// Result: -13




// 1.
let exp = "faraz" || (true + false) + 5 && " " || "true";
console.log(exp); // "faraz"
// exp = "faraz"

// 2.
let exp1 = (1 + 2) + ++b || 5 && 0; // b = 3
console.log(exp1); // 6
// exp1 = 6

// 3.
let exp2 = 32 && true - ++a && " " || "true"; // a = 5
console.log(exp2); // "true"
// exp2 = " "

// 4.
let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
console.log(exp3); // "faraz5"
// exp3 = "faraz5"

// 5.
let exp4 = 32 + "abc" || (true + false) + false || +5 || "true";
console.log(exp4); // "32abc"
// exp4 = "32abc"

// 6.
let exp5 = false || (true + true) + 15 && "" || 50;
console.log(exp5); // 50
// exp5 = 50

// 7.
let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
console.log(exp6); // 6
// exp6 = 6

// 8.
let exp7 = "faraz" || false + 10 || "true";
console.log(exp7); // "faraz"
// exp7 = "faraz"

// 9.
let exp8 = 12 + (false + false) + true && null || "faraz";
console.log(exp8); // "faraz"
// exp8 = "faraz"

// 10.
let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
console.log(exp9); // 3
// exp9 = 3

// 11.
let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
console.log(exp10); // 6
// exp10 = 6

// 12.
let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
console.log(exp11); // -14

// exp11 = -13




