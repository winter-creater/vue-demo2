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
    <li>{{users[0].name}}-{{users[0].gender}}</li>
    <li>{{users[1].name}}-{{users[1].gender}}</li>
    <li>{{users[2].name}}-{{users[2].gender}}</li>
    <li>{{users[3].name}}-{{users[3].gender}}</li>
   
     </ul>
    </div>
    `,

}).$mount('#app')