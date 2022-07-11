// //....................Template string for concatenation.....................
// ${person.name}
// ${person.name}
// ${person.name}

// const person={
//     name:"glory",
//     age:"18"
// }
// console.log("my name is " + person.name + " and i am " + person.age +" years old"  )

// console.log(`my name is ${person.name} and i am ${person.age}`)

// //......................++ and -- .........................

// let num1 = 100;
// const num2 = 5;

// const plus=num1 + num2

// console.log(`${num1} + ${num2}  =${plus }` )

// num1++;
// num1++;
// num1++;
// num1++;
// num1++;
// num1++;

// console.log(num1);

// //............................ prompt...................

//  let ans=prompt("what kjjjbzkjnkhbhgihsigi", "glory")
//                                            //  default value//

//  if(ans==="glory" || "joel" || "sammy" || "juice"){

//      alert("correct")
//  }
//  else {
//      alert("wrong")
//  }

// ...................NESTED IF...........................................
// let score = 0;

// let ans1 = prompt("what is your name");
// if (ans1 === "glory") {
//   score++;
//   alert(`score:${score}`);
//   let ans2 = prompt("where are you from");
//   if (ans2 === "lagos") { score++;
//     alert(`score:${score}`);

//   } else { alert("wrong" + score);
//   }
// } else {
//   alert("wrong" + score);
// }

// ....................................FOR LOOPS.............................................

// for(i=0;i<15;i++){
// console.log(i)
// }

// .................................CONDITIONALS WITH LOOP.......................
// for (i = 0; i < 15; i++) {
//   console.log(i);
// }
// // ..........GLORY FOR LOOP METHOD..........
// for (i = 0; i < 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     console.log("odd");
//   }
// }

// ....................MULTIPLICATION TABLE...............
// const num = 2;

// for (i = 1; i <= 12; i++) {
//   let multi = num * i;
//   console.log(`${num} x ${i} =${multi}`);
// }

// // .............NESTED FOR LOOP MULTI TABLE.........................
// for (i = 1; i <= 20; i++) {
//   for (k = 1; k <= 20; k++) {
//     let multi = i * k;
//     console.log(`${i} x ${k} = ${multi}`);
//   }
// }

// .....................NESTED LOOP FOR ARRAY...............
// let ray = ["joel", "sam", "lily"];

// for (i = 0; i <= 3; i++) {
//   for (k = 0; k <= 3; k++) {
//     let k = ray[i];
//     console.log(k);
//   }
// }

// let sum = 5;
// let shum = 6;

// let scum = sum + shum;

// console.log(`${sum} + ${shum} = ${scum}`);

// .....................NESTED FOR LOOPS PRACTICE...............

// for (i = 0; i <= 5; i++) {
//   for (k = 0; k <= 5; k++) {
//     let c = i * k;
//     console.log(`${i} x ${k} =${c}`);
//   }
// }

// ......................PRACTICE.................

// let joe = prompt("what is your name", "glory");
// if (joe === "glory") {
//   alert("right");
// } else {
//   alert("wrong");
//   let joe2 = prompt("where are you from", "masha");
//   if (joe2 === "masha") {
//     alert("right");
//   } else {
//     alert("wrong");
//   }
// }

// ..........................JS HIGH ORDER ARRAYS AND FUNCTIONS......................
// const data = [
//   { name: "joel", school: "uniben1", age: "18", phone: "18" },
//   { name: "simi", school: "uniben2", age: "19", phone: "25" },
//   { name: "tade", school: "uniben3", age: "20", phone: "2" },
//   { name: "joel", school: "uniben4", age: "21", phone: "22" },
//   { name: "joel2", school: "uniben5", age: "22", phone: "26" },
//   { name: "joel3", school: "uniben6", age: "24", phone: "15" },
//   { name: "joel", school: "uniben7", age: "17", phone: "9" },
//   { name: "joel5", school: "uniben8", age: "88", phone: "89" },
// ];

// const age=[30,20,17,18,16,15,9,55,78,45,43,34,57,79,102,435];

// .............................FOR EACH.....................
// data.forEach(function (info) {
//   console.log(info);
// });

// // .......................FILTER................
// // let legal=[]
// // for(i=0;i<age.length;i++){
// //     if(age[i]>=21){            IRRELEVANT     ..............
// //    legal.push(age[i]);
// //    console.log(legal)
// //     }
// // }

// // .................FIRST FILTER METHOD...........
// const legal = age.filter(function (age) {
//   if (age > 21) {
//     return true; //NOTE RETURN VALUE
//   }
// });
// console.log(legal);

// // ...........SECOND FILTER METHOD................
// const legal = age.filter((age) => age > 21); //EASY METHOD
// console.log(legal);

// //................REFERRING TO THE PARTICULAR VALUE OF AN ARRAY
// const edu = data.filter((goby) => goby.name === "joel"); //.name points to the location
// console.log(edu);

// //................ANOTHER FILTER METHOD........................
// const aggy = data.filter((goby) => goby.age > 18 && goby.age < 30); //.age points to location .....filter(var=>(var.location));
// console.log(aggy);

// //..................FOR THINGS THAT ARE A PARTICULAR VALUE OR MORE..............
// const vggy = data.filter((goby) => goby.age - goby.age >= 30);
// console.log(vggy);

// // ...............MAP FUNCTION...........................
// const info = data.map(function (name) {
//   return 1;
// });
// console.log(info);

// // ................RUNNING EGUATIONS WITH MAP...............
// const warn = age.map((age) => Math.sqrt(age));
// console.log(warn);

// const t2 = age.map((age) => age * 2);
// console.log(t2);

// //........................RUNNING TWO OR MORE EQUATION WITH MAP............
// const www = age.map((age) => Math.sqrt(age)).map((age) => age * 2);

// console.log();

// // .....................SORT......................

// const sort = data.map((a, b) => (a.age > b.age ? 1 : -1));
// console.log(sort);

// //............sorting with ascending or descending order............

// const sort = data.map((a, b) => a - b); // or const sort=data.map((a,b)=> b-a)
// //....MUST LEARN MORE ON SORT..............

// //.......................REDUCE........................
// const red = age.reduce((total, age) => total + age, 0);
// console.log(red);

// const blue = data.reduce((total, age) => total + age, 0);
// console.log(blue);

// // ..................READ MORE ON SORT AND REDUCE..........

// //....................FUNCTIONS PRACTICE...........
// const book = function (name, address) {
//   console.log(`my name is ${name} and i live in ${address}`);
// };
// book("shade", "johnson street");

// //.................FUNCTION PRACTICE WITH ARROW FUNCTION......
// const ter = (rad) => rad * 78;

// const der = ter(5);

// console.log(der);

// //..............TECHSITH JAVASCRIPT TUTORIAL..........

// //.....................PROMISES.................
// let eat = new Promise(function (resolve, reject) {
//   let haveEat = false;
//   if (haveEat) {
//     resolve("eaten");
//   } else {
//     reject("not eaten");
//   }
// });

// eat
//   .then(function (fromResolve) {
//     console.log("you have" + fromResolve);
//   })
//   .catch(function (fromReject) {
//     console.log("you have" + fromReject);
//   });

// //..............SECOND PRACTICE.................
// let cook = new Promise(function (resolve, reject) {
//   let haveCook = true;
//   if (haveCook) {
//     resolve("eaten");
//   } else {
//     reject("not eaten");
//   }
// });
// cook
//   .then(function (fromResolve) {
//     console.log("you have" + fromResolve);
//   })
//   .catch(function (fromReject) {
//     console.log("you have" + fromReject);
//   });

// //..................THIRD PRACTICE...............
// let chop = new Promise(function (resolve, reject) {
//   let haveChop = false;
//   if (haveChop) {
//     resolve(" been choped");
//   } else {
//     reject(" not been choped");
//   }
// });
// chop
//   .then(function (fromResolve) {
//     console.log(`it has ${fromResolve}`);
//   })
//   .catch(function (fromReject) {
//     console.log(`it has ${fromReject}`);
//   });
// //............WRITING PROMISE...........
// let joel = function () {
//   return new Promise(function (resolve, reject) {
//     resolve("how to write promises");
//   });
// };

// //....................WRITING PROMISE.....................
// Promise(function (resolve, reject) {
//   resolve("how to write promises");

//   //..............NESTED PROMISE.............
//   let buy = function () {
//     return new Promise(function (resolve, reject) {
//       resolve("bought things");
//     });
//   };

//   let cook = function () {
//     return new Promise(function (resolve, reject) {
//       resolve("cooking already............");
//     });
//   };

//   let eat = function () {
//     return new Promise(function (resolve, reject) {
//       resolve("eaten");
//     });
//   };

//   //.........USE THIS METHOD
//   Promise.all([buy(), cook(), eat()]).then(function () {
//     console.log("all finished");
//   });

//   //............OR THIS METHOD TO CALL OUT THE ABOVE WRITTEN PROMISES............
//   buy()
//     .then(function (result) {
//       return cook(result);
//     })
//     .then(function (result) {
//       return eat(result);
//     })
//     .then(function (result) {
//       console.log("finished");
//     });

//   //......................RACE LOGS OUT WHICH PROMISE RUNS FIRST
//   Promise.race([buy(), cook(), eat()]).then(function () {
//     console.log("one is finished");
//   });

//   //.......................PRACTICE ON PROMISE...............
//   let joel = new Promise(function (resolve, reject) {
//     hasJoel = true;
//     if (hasJoel) {
//       resolve("i have joel");
//     } else {
//       reject("do not have joel");
//     }
//   });
//   joel
//     .then(function (fromResolve) {
//       console.log(`she said ${fromResolve}`);
//     })
//     .catch(function (fromReject) {
//       console.log(`she said i ${fromReject}`);
//     });

//   let joel = function () {
//     return new Promise(function (resolve, reject) {
//       resolve("promise resolved");
//     });
//   };

//   let sam = function () {
//     return new Promise(function (resolve, reject) {
//       return resolve("sam resolved");
//     });
//   };

//   let lee = function () {
//     return new Promise(function (resolve, reject) {
//       return resolve("lee resolved");
//     });
//   };

//   joel()
//     .then(function () {
//       return sam();
//     })
//     .then(function () {
//       return lee();
//     })
//     .then(function () {
//       console.log("finished");
//     });
// });

// ...............................SET TIMEOUT PRACTICE.................................
// setTimeout(bye, 10000);

// console.log("hello");

// function bye() {
//   console.log("Goodbye");
// }
// const button = document.getElementById("btn");

// let count = 0;
// var counting = setInterval(seconds, 1000);

// function seconds() {
//   button.innerHTML = count;
//   button = count++;
//   if (count <= 60) {
//     count = 0;
//   }
// }

// //....................HOW TO WRITE SETIMEOUT
// setTimeout(function chu(){

// },100)