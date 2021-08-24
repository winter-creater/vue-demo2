const Vue = window.Vue

Vue.config.productionTip = false

new Vue({
    data() {
        return {
            n: 0,
            obj: {
                a: "a",
            }
        }

    },
    template: `
    <div>
    <button @click="n+=1">n+1</button>
    <button @click="obj.a+='qq'">obj.a+qq</button>
    <button @click="obj={a:'a'}">obj=新对象</button>
    </div>  `,
    watch: {
        n() {
            console.log('n变了');
            console.log(this.n);
        },
        obj: {
            handler() {
                console.log('obj变了');
            },
            deep: true
        },
        "obj.a"() {
            console.log('obj.a变了');
            console.log(`${this.obj.a}`);

        }

    }
}).$mount("#app")