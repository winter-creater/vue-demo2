<template>
     <div class="red">
    {{n}}
    <button @click="add">+1</button>
    <br/>
    <hr>
    </div>
</template>

<script>
export default {
  data() {
        return {
            n: 0,
        }
    },
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
    destroy() { 
        console.log('消亡了');
    },
    methods: {
        add() {
            this.n += 1
        },
    }

}
</script>

<style scoped>

</style>