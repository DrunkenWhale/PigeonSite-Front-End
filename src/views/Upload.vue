<template>
<div>
   <el-card style="text-align:center">
       <el-upload class="upload-frame" :action="uploadURL" :headers="headers"  drag multiply>
          
           
       </el-upload>
   </el-card>
</div>
</template>

<script>
    import {
        url
    } from "../api.js"
    export default {
        name: "Upload",
        data() {
            return {
                uploadURL: url + "/file/upload",
                headers: {
                    "token": window.localStorage.getItem("token")
                }
            }
        },
        methods: {

        },
    }
</script>

<style>
    .upload-frame {
        position: relative;
        align-self: center;
    }
</style>