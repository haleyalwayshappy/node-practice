import { Fragment } from "react";
import ReactDOM from "react-dom";
// jsx에서 클래스 속성을 작성하려면 
// className 이라는 속성을 설정해줘야한다.
// for 속성을 사용하려면 htmlFor 속성을 작성해줘야 한다. 
// html 속성을 사용하려면 camelCase 속성을 사용해 주어야 한다. 

/**
 * 가슴속에 하나둘 새겨지는 별을 이제 다 못헤는 것은 쉬이 아침이 오는 까닭이요 내일 밤이 남은 까닭이요 아직 나의 청춘이 다 하지 ㅇ낳은까닭ㅇ입니다
 * 가슴속에 하나둘 새겨지는 별을 이제 다 못헤는 것은 쉬이 아침이 오는 ㄱㄱ
 */
// fragment 는 div 대신에 많이 쓰이는 코드다. 
// fragment 를 축약해서 사용할 수 있는데 <> 이름없는 태그로 사용할 수 있다. (이때 fragment를 따로 import 할 필요는 없다.)


const product = 'lessmorethan';
const model = 'Air';
const item = product + model;
const imageUrl = '이미지 url';
ReactDOM.render(
  <h1>나만의 {item} 주문하기</h1>
<img src={image}></img>

,document.getElementById("root")
);
ddddsjdfsfghjksa