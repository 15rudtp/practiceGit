const subject = 'merge';
const restore = 'restore';
const test = 'test';
const number = 123;

class People {
    name;
    age;
    gender;
    constructor(age, name, gender = '남') {
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
}

const 송경세 = new People(29, '송경세');
