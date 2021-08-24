//  watch 模拟computed属性的例子
const Vue = window.Vue

Vue.config.productionTip = false

new Vue({
    data() {
        return {
            user: {
                email: "winter@qq.com",
                nickname: "winter",
                phone: "13438456321"
            },
            displayName: ""
        }
    },
    watch: {
        'user.email': {
            handler() {
                console.log('email变了');
                const { user: { email, nickname, phone } } = this
                this.displayName = nickname || email || phone
            },
            immediate: true

        },
        'user.phone': {
            handler() {
                console.log('phone变了');
                const { user: { email, nickname, phone } } = this
                this.displayName = nickname || email || phone
            },
            immediate: true

        },
        'user.nickname': {
            // 处理change
            handler() {
                console.log('nickname变了');
                const { user: { email, nickname, phone } } = this
                this.displayName = nickname || email || phone
            },
            immediate: true //第一次也运行

        },


    },
    // displayName不展示，watch第一次的值不监听，从无变成有，是出生的部分，不是change
    template: `
    <div>
    {{displayName}}
    <button @click="user.nickname=undefined">remove nickname</button>
    
    </div>
    `,
    methods: {

    }


}).$mount("#app")