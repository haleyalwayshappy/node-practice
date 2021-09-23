import getType from "./js/getType";
import random from "./js/getRandom";

console.log(getType("hello world"));

// 산술 연산자

console.log(1 + 2);
console.log(4 - 2);
console.log(5 * 2);
console.log(10 / 2);
console.log(7 % 5);

// ------------------

// 할당 연산자 (assignment operator)

const a = 2; //const 는 재 할당 불가

let ab = 2; //let 재할당 가능

// ab = ab+3 <=> ab+=3 같음
// ab = ab+3 <=> ab +=3
// ab = ab-3 <=> ab -= 3
// ab = ab*3 <=> ab *=3
// ab = ab/3 <=> ab /=3
// ab = ab%3 <=> ab %=3

console.log(ab);

// ------------------

// 비교 연산자

const a = 1;
const b = 1;

console.log(a === b); //일치하면 불린 데이터 true 가 나옴

function isEqual(x, y) {
  return x === y;
}

// console.log(isEqual(1, 1))
// console.log(isEqual(4, 1))
// console.log(isEqual(1, '1'))  // false 데이터 타입이 다르기 때문

const c = 1;
const d = 3;
console.log(c !== d); // 불일치 연산자  : c 와 d 가 다른가? 라는 질문이므로 답은 true

console.log(a < b); //false a가 b보다 작은가?
console.log(a < d); //true a가 b보다 작은가?

// boolean 타입으로 반환
// (a<b) a가 b보다 작은가?
// (a>b) a가 b보다 큰가가?
// (a<=b)a가 b보다 작거나 같은가?
// (a>=b)a가 b보다 크거나 같은가?

//  논리 연산자

const a = 1 === 1;
const b = "AB" === "AB";
const c = true;

console.log(a);
console.log(b);
console.log(c);

console.log("&&: ", a && b && c); //and 연산자 ;a,b,c가 전부 true?
// 만약 하나라도 틀리다면 false값이 나온다.

console.log("||: ", a || b || c); // or 연산자 ; a 또는 b또는 c 중 true가 있는가?
// 하나라도 true가 있으면 true
// 전부다 false 일때만 false

console.log("!: ", a); // not 연산자 ; 해당되는 true, false 의 부정을 묻기에 반대값이 나온다.

//삼항 연산자

const a = 1 < 2;

if (a) {
  console.log("참");
} else {
  console.log("거짓");
}

//  =>if 문을 아래와 같이 줄일 수 있다.

console.log(a ? "참" : "거짓");

//  console.log([값]a ? [true면 앞부분] '참' : [false면 뒷부분]'거짓') 실행됨

// 조건문(If statement)

const a = random();

if (a === 0) {
  console.log("a is 0");
} else if (a === 2) {
  console.log("a is 2");
} else if (a === 4) {
  console.log("a is 4");
} else if (a === 6) {
  console.log("a is 6");
} else {
  console.log("rest...");
}

// 조건문 (Switch statement)

const a = random();

switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 2:
    console.log("a is 2");
    break;
  case 4:
    console.log("a is 4");
    break;

  default:
    console.log("rest...");
}

//반복문 (For statement)
//for (시작조건 ; 종료조건; 변화조건 ){}

for (let i = 0; i < 3; i += 1) {
  console.log(i);
}

// ---예시---

const ulEl = document.querySelector("ul");

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}

// 변수 유효범위 (Variable Scope)
// var,let,const
// var는 쓸모없는 데이터를 많이 잡아먹기에 잘 쓰지 않는다 let/const를 쓰는것이 좋다.

function scope() {
  // console.log(a); 이 위치에 있으면 변수가 선언이 되기 전이라 나타나지 않는다
  if (true) {
    const a = 123;
    console.log(a);
  }
  // console.log(a); 유효 범위를 벗어 났기때문에 콘솔이 뜨지 ㅇ낳는다
}

scope();

// 형변환 ( Type conversion )
const a = 1;
const b = "1";

console.log(a === b);
// ===는 int / string 을 구분하기떄문에 false로 나오지만
console.log(a == b);
// ==는 형변환을 해서 비교하기 때문에 의도치 않은 상황에서 true가 나올 수 있다.
// 데이터 비교할때는 일치연산자인 (a === b)를 쓰는것이 좋다.

// truthy(참 같은 값)
// true, {},[],1,2,'false',-12,'3.14' ...

// Falsy(거짓 같은 값)
// false,'',null,undefined,0,-0,NaN

if ("false") {
  console.log(123);
}

// ==============================

//함수 복습

function sum(x, y) {
  return x + y;
  console.log(x + y);
}

const a = sum(1, 3);

const b = sum(4, 12);

console.log(a);
console.log(b);
console.log(a + b);

console.log(sum(1, 3));
console.log(sum(4, 12));
console.log(sum(1, 3) + sum(4, 12));

function sum(x, y) {
  if (x < 2) {
    return;
  }
  return x + y;
}

console.log(sum(7, 3));

function sum() {
  console.log(arguments);
  return arguments[0] + arguments[1];
}
console.log(sum(7, 3));

//화살표 함수
//  ()=>{} vs function(){}

const double = function (x) {
  return x * 2;
};
console.log("double: ", double(7));

const doubleArrow = (x) => x * 2;

console.log("doubleArrow", doubleArrow(7));

// 즉시 실행 함수
//IIFE, Immediately-Invoked Function Expression

const a = 7;

function double() {
  console.log(a * 2);
}
double();

(function () {
  console.log(a * 2);
})();
(function () {
  console.log(a * 2);
}()));


// 호이스팅