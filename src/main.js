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
            ],
            displayUsers: []

        };
    },
    created() {

        this.displayUsers = this.users;
        // console.log(this.displayUsers === this.users);
        // console.log(this.displayUsers);
    },
    methods: {
        showAll() {
            console.log('all');
            this.displayUsers = this.users;
            console.log(this.displayUsers);
        },
        showMale() {
            console.log("nan");
            this.displayUsers = this.users.filter(u => u.gender === "男");
            console.log(this.displayUsers);
        },
        showFemale() {
            console.log('nv');
            this.displayUsers = this.users.filter(u => u.gender === "女");

        }
    },
    template: `
    <div>
    <div>
    <button  @click="showAll">全部</button>
    <button  @click="showMale">男</button>
    <button  @click="showFemale">女</button>
    </div>
    <ul>
    <li v-for="(u,index) in displayUsers" :key="index">{{u.name}}-{{u.gender}}</li>
     </ul>
    </div>
    `
}).$mount('#app')