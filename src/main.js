// import APP from './App.vue'
import './demo.vue'

const Vue = window.Vue
Vue.config.productionTip = false

new Vue({
    data() {
        return {
            n: 0,
            array: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    template: `
    <div>
    {{n}}
    <button @click="add">+1</button>
    <hr>

    {{filter(array)}}
    </div>
    `,
    methods: {
        add() {
            this.n += 1
        },
        filter() {
            return this.array.filter(i => i % 2 === 0)
        }
    }
}).$mount('#app')

