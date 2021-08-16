// {
//     姓: "高",
//     名: "圆圆",
//     age: 18
// };


//需求1：得出姓名的值
let obj2 = {
    姓: "高",
    名: "圆圆",
    姓名() {
        return this.姓 + this.名;

    },
    age: 18
};
console.log("需求1" + obj2.姓名())

//需求2：姓名不要括号也可以得出值 
// getter
let obj3 = {
    姓: "高",
    名: "圆圆",
    get 姓名() {
        return this.姓 + this.名;

    },
    age: 18
};
console.log("需求2" + obj3.姓名)

// 需求3：姓名可以被写
// getter && setter
let obj4 = {
    姓: "高",
    名: "圆圆",
    get 姓名() {
        return this.姓 + this.名;

    },
    set 姓名(xxx) {
        this.姓 = xxx[0],
            this.名 = xxx.substring(1)
    },
    age: 18
};
obj4.姓名 = "刘诗诗"
console.log("需求3" + `姓${obj4.姓},名${obj4.名}`)
obj4.姓名 = "刘一亿"
console.log("需求3" + `姓${obj4.姓},名${obj4.名}`)

// Object.defineProperty定义好对象后，可以额外加getter、setter
var _xxx = 0
Object.defineProperty(obj4, 'xxx', {
    get() {
        return _xxx
        // 定义的xxx不存在，所以不能 return xxx，会死循环
    },
    set(value) {
        _xxx = value
    }
})