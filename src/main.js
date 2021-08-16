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