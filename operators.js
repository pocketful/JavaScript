// liekana
const liekana = 26 % 4;
console.log("liekana ===", liekana); // lieka skaiciais taip isvedant

// pakelti 5 treciuoju
const pakelta = 5 ** 3;
console.log("pakelta treciuoju ===", pakelta);

// padidinti, pamazinti vienetu
let sk = 100;
sk++;
console.log("sk++ ===", sk);
sk--;
sk--;
console.log("sk-- ===", sk);

// assignment operators
let sk2 = 110;
sk2 + 10;
console.log("sk2 ===", sk2); // 110, nes neperrasem priskyrimo su 'sk2 = sk2 + 10' ||  'sk+= 10;'
sk += 10; // 120 tas pats kaip 'sk2 = sk2 + 10'
sk2 -= 5; // 105
sk2 /= 10; // 12,5

// x++, ++x
// x++, increments and returns the value before incrementing.
let x = 3;
let y = x++; // y = 3, x = 4

// ++x, increments and returns the value after incrementing.
let a = 3;
let b = ++a; // a = 4, b = 4
