<template>

    <div style="background-color: aqua;">
        {{picType}}
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

            picType: function() {
                return '../assets/' + this.type
            },

            type: function() {
                var tempArray = this.name.split('.')
                var typeName = tempArray[tempArray.length - 1]
                return typeName
            }
        },
        props: {
            name: String,
            Size: Number,
            createTime: String
        }
    }
</script>

<style>

</style>