<template>
<div>
    <div v-for="file in file_list" :key="file">{{file}}</div>
</div>
</template>

<script>
    export default {
        name: "Upload",
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