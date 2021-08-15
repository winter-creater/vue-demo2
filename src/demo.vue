<template>
    <div class="red">
        demo
    </div>
</template>

<script>
export default {
   data(){
       return{n:0}
   },
   methods:{
       add(){
           this.n+=1
       }
   }
}
</script>


<style scoped>
.red{
    color: red;
}
</style>

