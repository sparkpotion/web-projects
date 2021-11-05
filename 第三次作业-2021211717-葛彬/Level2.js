// 我们创建了一个对象
let obj = {name:"Billy",age:21,gender:'male'};

// 手写一个复制函数
function copy(insertObj){
    let newObj = {};
  	//for-in循环遍历的是传入对象的属性，使用中括号语法可以访问属性，并将属性存到空对象的属性上
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