<template>
  <div class="red">
        这里是demo的内部
        
        {{this.message}}
    </div>  
</template>

<script>
export default ({

props:['message']

})
</script>


<style scoped>
.red{
    color: red;
    border:1px solid red;
}
</style>

