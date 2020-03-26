// module.exports.test1 = function test1() {

//     console.log("test 1");
// }

// module.exports.test2 = function test2() {

//     console.log("Test 2");
// }

// module.exports = {
//     name: "Kaan",
//     test1: function () {
//         console.log("test 1");
//      },
//      person: {
//          name: "kaan",
//          mail: "kaancakici510@gmail.com"
//      }
//  }
export const name = "Mustafa";
export function Test() {
    console.log("Test func");
}
export class Person {
    static Test() {
        console.log("Person test");
    }
}
export const employee = {
    name: "Kaan",
    salary: 1000
}

export class Proto {
    static test2() {
        console.log("default proto");
    }
}