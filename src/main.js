// computed属性   列表展示

const Vue = window.Vue

Vue.config.productionTip = false

let id = 0
const createUser = (name, gender) => {
    id += 1
    return { id: id, name: name, gender: gender }

}

new Vue({
    data() {
        return {
            users: [
                createUser('方方', '男'),
                createUser('圆圆', '女'),
                createUser('小方', '男'),
                createUser('圆方', '女')
            ]

        }


    },
    template: `
    <div>
    <div>
    <button>全部</button><button>男</button><button>女</button>
    </div>
    <ul>
    <li v-for="u in users">{{u.name}}-{{u.gender}}</li>
     </ul>
    </div>
    `,

}).$mount('#app')