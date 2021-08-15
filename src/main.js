const Vue = window.Vue

Vue.config.productionTip = false

// debugger

// Vue组件
// Vue实例

import Demo from './demo.vue'
console.log(Demo.toString())
// component组件引入方式2
Vue.component('Demo2', {
    template: `
    <div>demo22222</div>
    `
})

new Vue({
    //组件引入方式1
    // components: {
    //     Winter: Demo
    // },

    // component组件引入方式3
    components: {
        Winter: {
            template: `
    <div>Winter</div>
    `
        }
    },
    data() {
        return {
            n: 0,
            array: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    template: `
    <div class="red">
    {{n}}
    <button @click="add">+1</button>
    <br/>
  <Demo2/>
  <Winter/>
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

