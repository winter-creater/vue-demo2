const Vue = window.Vue

Vue.config.productionTip = false

new Vue({
    data() {
        return {
            n: 0,
            history: []
        }
    },
    watch: {
        n(newValue, oldValue) {
            this.history.push({ from: oldValue, to: newValue })
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
        undo() { }
    }

}).$mount('#app')