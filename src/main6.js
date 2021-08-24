//  watch 撤销的例子
const Vue = window.Vue

Vue.config.productionTip = false

new Vue({
    data() {
        return {
            n: 0,
            history: [],
            inUndoMode: false
        }
    },
    watch: {
        n(newValue, oldValue) {
            console.log(`${this.inUndoMode}`);
            if (!this.inUndoMode) {
                this.history.push({ from: oldValue, to: newValue })
            }
        }
    },
    template: `
    <div>
    {{n}}
    <hr/>
    <button @click="add1">+1</button>
    <button @click="add2">+2</button>
    <button @click="minus1">-1</button>
    <button @click="minus2">-2</button>
    <hr/>
    <button @click="undo">撤销</button>
    <hr/>
    {{history}}
    </div>
    `,
    methods: {
        add1() { this.n += 1 },
        add2() { this.n += 2 },
        minus1() { this.n -= 1 },
        minus2() { this.n -= 2 },
        undo() {
            const last = this.history.pop();
            console.log(last);
            const old = last.from
            this.inUndoMode = true
            this.n = old //watch是异步的
            // this.inUndoMode = false //顺序不对，执行完了，才去执行watch
            // 应先执行watch，再执行this.inUndoMode = false
            // $nextTick(()=>{},time) Vue的计时器，类似于setTimeout((=>{},time),也是异步
            this.$nextTick(() => {
                this.inUndoMode = false
            }, 0)
        }
    }

}).$mount('#app')