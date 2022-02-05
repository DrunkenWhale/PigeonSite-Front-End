<template>
<div>
   <el-card style="text-align:center">
       <el-upload class="upload-frame" :action="uploadURL" :headers="headers"  drag multiple>
          <img src="../assets/monster.png" height="110">
          <div>
           <em style="color: rgba(140, 90, 221, 0.808);">drag your file here</em>
           <br>
           <span style="color: rgba(156, 17, 184, 0.712);">or</span>
           <br>
           <em style="color: rgba(18, 129, 180, 0.753);">click to upload file</em>
        </div>
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