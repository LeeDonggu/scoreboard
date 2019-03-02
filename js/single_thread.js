// 자바스크립트 실행순서 알기: 싱글쓰레드이다.
// 코드를 모두 실행하고 마지막에 예약된 큐를 확인해서 실행한다.
// 따라서 실행결과는 항상 동일하다.

console.log('A');

// 예약
setTimeout(function () {
  console.log('B');
}, 0);

console.log('C');

// 단일 루프가 돌면?
// while(true) {}

// 예약목록 확인 및 실행