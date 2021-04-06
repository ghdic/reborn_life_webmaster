// var a = 10 // 변수
// let b = 10 // 변수
// const c = 10  // 상수

// *호이스팅에 대해서
// 호이스팅은 끌어올린다라는 의미로 변수와 함수를 소수 맨 위로 이동시키는것을 말함
// // case 1
// console.log(name)
// var name = 'life' // undefined

// // case 2
// var name // 변수를 만들경우 선언, 초기화가 동시에 일어남
// console.log(name); // 'life'
// name = 'life'

// // case 3
// console.log(name)
// let name = 'life' // error

// // case 4
// let name; // 변수를 만들경우 선언, 초기화가 분리되어 진행
// console.log(name) // undefined
// name = 'life'

// const는 선언과 초기화가 반드시 동시에 이뤄져야함

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