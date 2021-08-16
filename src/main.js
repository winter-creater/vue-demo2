
const Vue = window.Vue
Vue.config.productionTip = false
// 生命周期
Vue.component('Demo2', {
    data() { return { n: 0 } },
    template: `
    <div>
    <hr>
    {{n}}
    <button @click="add">+1</button>
    </div>
    `,
    created() {
        // debugger
        console.log('这玩意出现在内存中,没有出现在页面中');
    },
    mounted() {
        // debugger
        console.log('这玩意出现在页面中');
    },
    updated() {
        console.log('更新了');
        console.log(this.n);
    },
    unmounted() {
        console.log('消亡了');
    },
    methods: {
        add() {
            this.n += 1
        }
    }
})

new Vue({

    data() {
        return {
            visible: true
        }
    },

    template: `
    <div>
    <button @click="toggle">toggle</button>
    <Demo2 v-if="visible===true"/>
    </div>    
    `,

    methods: {
        toggle() {
            this.visible = !this.visible
        }
    }








    // 用render可以代替components
    // render: h => h(Destroyed)

}).$mount('#app')

