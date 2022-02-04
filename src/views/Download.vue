<template>
    <div>   
       <FileFrame  fileName="l.logo"/>
    </div>
    </template>

<script>
    import FileFrame from '../components/FileFrame.vue'


    export default {
        name: "Download",
        components: {
            FileFrame
        },
        data() {
            return {
                file_list: [1, 1, 4, 5, 1, 4]
            }
        },
        methods: {

        },
    }
</script>

<style>

</style>