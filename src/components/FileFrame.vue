<template>

    <div class="FileFrame">
        <img :src="this.picPath" >
    </div>
    
    
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
                try {
                    return require('../assets/' + this.fileType + '.png')
                } catch {
                    return require('../assets/UnknownFileType.png');
                }


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
    .FileFrame {
        height: 20%;
        width: 20%;
    }
</style>