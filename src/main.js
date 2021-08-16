
const Vue = window.Vue
Vue.config.productionTip = false

import Demo from './demo.vue'
// console.log(Demo)
new Vue({
    components: { Demo },
    template: `
   <div>
   <Demo message="你好2"/>
   </div>
    `,

    methods: {

    }
}).$mount('#app')

