## 비동기 처리 방식

- 자바스크립트는 싱글 스레드 프로그래밍 언어이기 때문에 비동기 처리가 기반입니다.
- 비동기 처리는 그 결과가 언제 반환될 지 알 수 없기 때문에 동기식으로 처리하는 기법들이 사용되어야 하는데요.
- 대표적인 동기식 처리 방식에는 setTimeout이 있고, callback, promise가 있습니다.

## Promise 코드

```
function p() {
return new Promise((resolve, reject) => {
	resolve('hello');
    // or reject(new Error('error'));
	});
}

p().then((n) => console.log(n));
```

## async 코드

```
// async을 지정해주면 Promise를 리턴하는 함수로 만들어줍니다.
async function p2(){
	return 'hello';
}

p2().then((n) => console.log(n));
```

## async await 사용법

```
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000);
    })
}

async function getApple() {
    await delay();
    return "apple";
}

async function getBanana() {
    await delay();
    return "banana";
}

function getFruites() {
    getApple()
        .then((a) => { // 리턴값이 promise의 resolve()이므로 then 가능
            getBanana()
                .then((b) => console.log(`${a} and ${b}`));
        })
}

getFruites(); // 결과 : apple and banana
```
