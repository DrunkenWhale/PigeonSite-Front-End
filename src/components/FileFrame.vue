<template>
  <el-col :span="6">
    <div class="FileFrame" @click="showDialog" @mouseenter="display" @mouseleave="hidden">
         <img :src="this.picPath" height="115" width="115" />
        <div class="FileName">{{ this.fileName }}</div>

    <el-dialog v-model="dialogVisable" :center="true">
     <div @click="download" class="DownloadButton">
        <span style="position:relative;top:32%">Download</span>
    </div>
            <div style="height: 72.5px;background-color:rgb(0, 255, 136)">
                size: {{this.fileSizeFormat}} <br>
                time: {{this.fileCreateTimeFormat}}
            </div>
    </el-dialog>
      
    </div>
  </el-col>
</template>

<script>
    import {
        download
    } from "../api.js"
    export default {
        name: "FileFrame",
        data() {
            return {
                dialogVisable: false
            };
        },
        methods: {
            showDialog: function() {
                this.dialogVisable = true;
            },

            download: function() {
                download(this.fileName)
            }
        },
        computed: {
            picPath: function() {
                try {
                    return require("../assets/" + this.fileType + ".png");
                } catch {
                    return require("../assets/UnknownFileType.png");
                }
            },
            fileType: function() {
                var tempArray = this.fileName.split(".");
                var typeName = tempArray[tempArray.length - 1];
                return typeName;
            },
            fileSizeFormat: function() {
                var size = this.fileSize
                if (size < 1024) {
                    return size.toFixed(3) + "B"
                }
                size /= 1024;
                if (size < 1024) {
                    return size.toFixed(3) + "KB"
                }
                size /= 1024;
                if (size < 1024) {
                    return size.toFixed(3) + "MB"
                }
                return (size / 1024).toFixed(3) + "GB"
            },
            fileCreateTimeFormat: function() {
                var createTimeDate = (new Date(this.fileCreateTime * 1000))
                return createTimeDate.getFullYear() + " " + createTimeDate.getMonth() + "" + createTimeDate.getDay() + " " + createTimeDate.getHours()
            }
        },
        props: {
            fileName: String,
            fileSize: Number,
            fileCreateTime: Number,
        },
    };
</script>

<style scoped>
    .FileFrame {
        width: 115px;
        height: 20%;
        text-align: center;
        margin: 5px 5px 5px 0;
        transition-duration: 1s;
        border-style: solid;
        border-color: transparent;
        border-width: 5px;
    }
    
    .FileFrame:hover {
        border-radius: 10px;
        border-color: rgba(16, 6, 107, 0.473);
        background-color: rgba(112, 16, 221, 0.267);
        color: white;
    }
    
    .FileName {
        width: 115px;
        display: inline-block;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }
    
    .DownloadButton {
        position: relative;
        align-items: center;
        left: 34%;
        width: 30%;
        height: 60px;
        text-align: center;
        background-color: rgba(13, 214, 171, 0.952);
        color: white;
        transition-duration: 0.7s;
        margin: 10px 10px 10px 10px;
        border-style: solid;
        border-radius: 7px;
    }
    
    .DownloadButton:hover {
        background-color: white;
        color: rgba(13, 214, 171, 0.952);
    }
</style>