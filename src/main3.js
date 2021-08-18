// // 代理和监听
// let data0 = {
//     n: 0
// }

//需求1：用Object.defineProperty定义 n
let data1 = {}

Object.defineProperty(data1, 'n', {
    value: 0
})

console.log(`需求1:${data1.n}`);

// 需求2： n不能小于0
// 即data2.n=-1无效，但data2.n=1有效

let data2 = {}
data2._n = 0 //_n用来偷偷存储n的值
Object.defineProperty(data2, 'n', {
    get() {
        return this._n
    },
    set(value) {
        if (value < 0) { return } else {
            this._n = value
        }
    }
})

console.log(`需求2：${data2.n}`);
data2.n = -1
console.log(`需求2：${data2.n} 设置为-1失败`);
data2.n = 1
console.log(`需求2：${data2.n} 设置为${data2.n}成功`);
data2.n = 2
console.log(`需求2：${data2.n} 设置为${data2.n}成功`);

//如果对方直接使用data2._n,则不满足需求

// 需求3：使用代理

let data3 = proxy({ data: { n: 0 } })//括号里的对象是匿名对象，无法访问
// function proxy(options){
//     const {data}=options;解构赋值
// }

function proxy({ data }) {
    const obj = {}
    Object.defineProperty(obj, 'n', {
        get() {
            return data.n
        },
        set(value) {
            if (value < 0) { return } else {
                data.n = value
            }
        }
    })
    return obj //obj就是代理
}

//data3就是obj
console.log(`需求3:${data3.n}`);
data3.n = -1
console.log(`需求3:${data3.n},设置为-1 失败`);
data3.n = 1
console.log(`需求3:${data3.n},设置为${data3.n} 成功`);

// 需求4：绕过代理,漏洞

let myData = { n: 0 }
let data4 = proxy({ data: myData })//括号里的对象是匿名对象，无法访问

console.log(`杠精：${data4.n}`);
myData.n = -1
console.log(`杠精：${data4.n},设置为-1 失败了吗？`);

// 需求5：就算用户擅自修改myData,也要拦截他
let myData5 = { n: 0 }
let data5 = proxy2({ data: myData5 })
function proxy2({ data }) {
    let value = data.n
    // delete data.n ,可以省略，下面声明的n会覆盖之前的n
    Object.defineProperty(data, 'n', {
        get() {
            return value
        },
        set(newValue) {
            if (newValue < 0) { return } else {
                value = newValue
            }
        }
    })
    // 就加了上面几句，这几句话就会监听data,监听逻辑
    // 下面是代理逻辑
    const obj = {}
    Object.defineProperty(obj, 'n', {
        get() {
            return data.n
        },
        set(value) {
            if (value < 0) { return } else {
                data.n = value
            }
        }
    })

    return obj
}
console.log(`需求5：${data5.n}`);
myData5.n = -1
console.log(`需求5：${data5.n},设置为-1 失败了`);
myData5.n = 1
console.log(`需求5：${data5.n},设置为1 成功了`);