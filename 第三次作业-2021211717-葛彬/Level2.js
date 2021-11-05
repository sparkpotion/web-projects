// 我们创建了一个对象
let obj = {name:"Billy",age:21,gender:'male'};

// 手写一个复制函数
function copy(insertObj){
    let newObj = {};
    newObj = insertObj;
    return newObj;
}

// 使用复制函数复制对象
let obj1 = copy(obj);
let obj2 = copy(obj);
let obj3 = copy(obj);

//创建一个空数组用来接收对象
let arr = [];

//将对象压入数组
arr.push(obj1,obj2,obj3);

//控制台输出
console.table(arr);