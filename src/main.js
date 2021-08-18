// computed 属性

const Vue = window.Vue

Vue.config.productionTip = false

new Vue({
    data() {
        return {
            user: {
                email: "1264879929@qq.com",
                nickname: "团仔",
                phone: "19140638878"
            }

        }
    },
    computed: {
        displayName() {
            return this.user.nickname || this.user.email || this.user.phone
        }
    },
    // 优先展示用户名，然后才是邮箱，再到手机号
    // 问题：每次需要展示用户名，都要重写一遍div
    template: `
    <div>
    {{displayName}}
    <div>
    {{displayName}}
    </div>
    </div>
    
    `
}).$mount('#app')