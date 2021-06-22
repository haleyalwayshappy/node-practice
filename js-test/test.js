import getType from './js/getType'
import random from './js/getRandom'

console.log(getType('hello world'));



// 산술 연산자

console.log(1 + 2)
console.log(4 - 2)
console.log(5 * 2)
console.log(10 / 2)
console.log(7 % 5)


// ------------------

// 할당 연산자 (assignment operator)

const a = 2 //const 는 재 할당 불가

let ab = 2 //let 재할당 가능 

// ab = ab+3 <=> ab+=3 같음
// ab = ab+3 <=> ab +=3
// ab = ab-3 <=> ab -= 3
// ab = ab*3 <=> ab *=3
// ab = ab/3 <=> ab /=3
// ab = ab%3 <=> ab %=3


console.log(ab)

// ------------------

// 비교 연산자

const a = 1
const b = 1

console.log(a === b) //일치하면 불린 데이터 true 가 나옴

function isEqual(x, y) {
  return x === y
}

// console.log(isEqual(1, 1))
// console.log(isEqual(4, 1))
// console.log(isEqual(1, '1'))  // false 데이터 타입이 다르기 때문


const c = 1
const d = 3
console.log(c !== d) // 불일치 연산자  : c 와 d 가 다른가? 라는 질문이므로 답은 true 

console.log(a<b) //false a가 b보다 작은가? 
console.log(a<d) //true a가 b보다 작은가? 

// boolean 타입으로 반환
// (a<b) a가 b보다 작은가?
// (a>b) a가 b보다 큰가가?
// (a<=b)a가 b보다 작거나 같은가?
// (a>=b)a가 b보다 크거나 같은가?

//  논리 연산자

const a = 1 === 1
const b = 'AB' === 'AB'
const c = true

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && b && c) //and 연산자 ;a,b,c가 전부 true? 
// 만약 하나라도 틀리다면 false값이 나온다.

console.log('||: ', a || b || c)  // or 연산자 ; a 또는 b또는 c 중 true가 있는가? 
// 하나라도 true가 있으면 true
// 전부다 false 일때만 false

console.log('!: ',a) // not 연산자 ; 해당되는 true, false 의 부정을 묻기에 반대값이 나온다.


 //삼항 연산자

 const a = 1 < 2

 if (a) {
   console.log('참')
 } else {
   console.log('거짓')
 }

//  =>if 문을 아래와 같이 줄일 수 있다. 

 console.log(a ? '참' : '거짓')
 
//  console.log([값]a ? [true면 앞부분] '참' : [false면 뒷부분]'거짓') 실행됨






// 조건문(If statement)

const a = random()

if (a === 0) {
  console.log('a is 0')
} else if (a===2) {
  console.log('a is 2')
} else if (a===4) {
  console.log('a is 4')
} else if (a===6) {
  console.log('a is 6')
} else {
  console.log('rest...')
}