// &&& 데이터 선언과 타입 &&&

// var a = 10 // 변수
// let b = 10 // 변수
// const c = 10  // 상수

// *호이스팅에 대해서
// 호이스팅은 끌어올린다라는 의미로 변수와 함수를 소수 맨 위로 이동시키는것을 말함
// case 1
console.log(name)
var name = 'life' // undefined

// case 2
var name // 변수를 만들경우 선언, 초기화가 동시에 일어남
console.log(name); // 'life'
name = 'life'

// case 3
console.log(name)
let name = 'life' // error

// case 4
let name; // 변수를 만들경우 선언, 초기화가 분리되어 진행
console.log(name) // undefined
name = 'life'

// const는 선언과 초기화가 반드시 동시에 이뤄져야함
const a = 10
a = 11 // error
const arr = [1, 2, 3]
arr[2] = 4 // error가 날까?


// *스코프
// var은 함수레벨 스코프, let, const는 블록레벨 스코프를 가지고 있다.
{
  var a = 10
  let b = 10
  const c = 10
}

console.log(a) // 10
console.log(b) // error
console.log(c) // error

// 웬만하면 변수선언은 let, const로
// var는 전역 스코프를 선언할때만 쓴다!


// number & bigInt
const count = 17 // int, 자스는 자동으로 자료형 할당
const number = 17.1 // decimal number
const bigInt = 123456789012345678901234567890n // 끝에 n붙여주면 big int
console.log(`${count} is ${typeof count}, ${number} is ${typeof number}, ${bigInt} is ${typeof bigInt}`)
console.log(Number.MAX_SAFE_INTEGER, Number.MAX_VALUE) // -(2^53 - 1) ~ 2^53 - 1, 2^1024
console.log(Number.MAX_VALUE + 1)


// inf, Nan
const infinity = 1 / 0 // Infinity
const negativeInfinity = -1 / 0 // -Infinity
const nAn = 'not a number' / 2; // Nan
console.log(infinity, negativeInfinity, nAn)


// string
const char = 'c'
const brendan = 'brendan'
const greeting = 'heelo' + brendan
const hi = `hi ${brendan}`


// boolean
// false, 0, null, undefined, Nan
// true, any other value
const checked = true
const test = 3 < 1 // false
let nothing = null
let x // undefined


// symbol, object 구분하는 id
const symbol1 = Symbol('value')
const symbol2 = Symbol('value')
console.log(symbol1 === symbol2)
const fsymbol1 = Symbol.for('value') // 존재하지않으면 새 심볼 생성, 있을 경우 그것 반환
const fsymbol2 = Symbol.for('value')


// object
const elice = { name: 'elice', age: 17}
console.log(elice['age'], elice.age)


// js는 dynamic type를 가지고 있다
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
// 이런 문제 때문에 타입을 명시해주는 typescript라는 것을 씀

// &&& 연산 &&&
// 문자 연결
console.log('game ' + 'over' )
// Number
console.log(1 + 1)
console.log(1 - 1)
console.log(1 / 1)
console.log(1 * 1)
console.log(1 % 1)
console.log(1 ** 1)

// 증감 연산자
let counter = 2
console.log(counter++, --counter)

// 할당
let x = 3;
let y = 6;
x += y // x = x + y
x -= y // x = x - y
x *= y
x /= y

// 비교 연산자
console.log(10 < 6)
console.log(6 <= 6)
console.log(5 > 3)
console.log(1 == '1') // 추상적 비교
console.log(1 === '1') // 엄격 비교
console.log(null == undefined)
console.log(null === undefined)

// 논리 연산자
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('XD');
  }
  return true;
}
// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// ! (not)
console.log(!true)


// &&& 조건문 &&&
const name = 'alice'
if (name === 'bob') {
  console.log('bob is here')
} else if (name === 'avar') {
  console.log('hi avar')
} else {
  console.log('unknown')
}

// 삼항 연산자
console.log(name === 'alice' ? 'yes' : 'no')

// switch - case
const browser = `IE`;
switch (browser) {
  case `IE`:
    console.log(`go away!`);
    break;
  case `Chrome`:
  case `Firefox`:
    console.log(`love you!`);
    break;
  default:
    console.log(`some all!`);
    break;
}

// &&& 반복문 &&&
// while
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while
let i = 3;
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

let = arr[1, 2, 3, 4]
arr.forEach((item, index, arr2) => {
  console.log(item, index, arr2[index+1])
})


// &&& 함수(Function) &&&
// function 함수이름(매개변수) {}
function func(msg="default msg") {
  alert(msg)
}

func("Hello World!") // 함수 호출

// // if using TS
// function func(msg: string): number {
//   alert(msg)
// }

const print_console = function () { console.log("print") } // 변수처럼 할당 ok
print_console()

const simple_print = () => console.log("print") // arrow function
simple_print()

(function hell() {
  console.log("hello")
})() // 함수 선언&실행 동시


// &&& DOM Interface 조작 &&&
// Document를 통해서 브라우저에서의 웹페이즈 콘텐츠에 접근이 가능
let item = document.querySelector('#test') // element 반환
document.querySelectorAll('.test') // 해당하는 Node들의 NodeList반환
item.style.color = 'red'; // style 바꾸기
item.textContent = 'hi'; // text 바꾸기
item.id = 'newId' // id 접근
item.classList.add('newClass') // class 추가

// &&& Event &&&
/* 
  onclick
  onchange
  onfocus
  onblur
  hover
*/

let element = document.querySelector("#test")
let isClicked = () => alert("클릭되었습니다")
element.addEventListener("click", isClicked) // (event, handler, [options ...])
element.removeEventListener("click", isClicked)


// &&& Class &&&
class Person {

  // init
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // method
  speak() {
    console.log(`$(this.name): hello!`)
  }
}

const bob = new Person('bob', 20)
console.log(bob['age'])
console.log(bob.name)

// getter, setter 정의
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() { // 값 가져올때 행위 정의
    return this._age;
  }

  set age(value) { // 값 설정할때 행위 정의
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

// public, private
class Experiment {
  publicField = 2;
  #privateField = 0; // private
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined


// 상속
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() { // 재정의
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// instanceOf로 어떤 클래스인지 확인
console.log(triangle instanceof Rectangle)
console.log(triangle instanceof Triangle)
console.log(triangle instanceof Shape)


// &&& 배열 &&&
// 선언 방식
const arr1 = new Array(1, 2, 3, 4. 5);
const arr2 = [1, 2];

// 접근, 사용
console.log(arr1[0])
arr1[0] = 10
console.log(arr1[0])
console.log(arr1.length)
console.log(arr1[arr1.length - 1])

// 배열 반복문 돌리기
for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}

// for of
for (let item of arr1) {
  console.log(item)
}

// forEach
arr1.forEach((item) => console.log(item))

// 배열 기능들
// 추가, 삭제, 복사
arr1.push(20, 30)
console.log(arr1)

const item = arr1.pop() // 맨뒤에 원소 삭제
console.log(item)

arr1.unshift(20, 100) // 앞에 원소 추가
console.log(arr1)

arr1.shift() // 앞에 원소 삭제
console.log(arr1)

// 배열 수정(삭제, 추가)
arr1.splice(1, 1) // splice(start[, deleteCount], item1, item2...)
console.splice()
arr1.splice(1, 0, 1, 2)

console.log(arr1.indexOf(1)) // 해당 값을 가진 원소의 index위치 반환
console.log(arr1.lastIndexOf(1)) // 해당 값을 가진 원소중 마지막 원소 반환
let index = -1
do {
  index = arr1.index(1, index + 1) // 모든 1값을 가진 element index찾기
  console.log(index)
} while(index === -1)

// Exist?
console.log(arr1.includes(1))
