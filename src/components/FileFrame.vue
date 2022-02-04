<template>

    <div style="background-color: aqua;">
        {{picPath}}
    </div>
    <img :src="this.picPath">
    
</template>

<script>
    export default {
        name: "FileFrame",
        data() {
            return {

            }
        },
        computed: {
            picPath: function() {
                return require('../assets/' + this.fileType + '.png')
            },
            fileType: function() {
                var tempArray = this.fileName.split('.')
                var typeName = tempArray[tempArray.length - 1]
                return typeName
            }
        },
        props: {
            fileName: String,
            fileSize: Number,
            fielCreateTime: String
        }
    }
</script>

<style scoped>

</style>