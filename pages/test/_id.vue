<template>
    <div>
        <p>id:{{id}}</p>
        <el-button @click="getId">getId</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: "",
        }
    },
    methods: {
        getId(){
            this.id = this.$route.params.id
        }
    }
}
</script>

<style>

</style>