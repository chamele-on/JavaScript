// in 연산자
// 프로퍼티 존재 여부 확인

var student = {
    name : '조평훈',
    age : 20,
    test : undefined
};

console.log(student.name === undefined); // false
console.log(student.height === undefined); // true
console.log(student.test === undefined);
//프로퍼티 값이 undefined 이기 때문에 프로퍼티는 존재하지만, true - 존재하지 않음으로 판별되는 문제

// in
console.log('==========================');
console.log('name' in student);         //true - 존재한다.
console.log('height' in student);       //false - 존재하지 않는다.
console.log('test' in student);         //true - 존재한다.
