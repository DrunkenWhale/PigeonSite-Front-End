<template>
  <el-col :span="6">
    <div
      class="FileFrame"
      @click="showDialog"
      @mouseenter="display"
      @mouseleave="hidden"
    >
      <img :src="this.picPath" height="115" width="115" />
      <div class="FileName">{{ this.fileName }}</div>

      <el-dialog v-model="dialogVisable" :center="true">
        <div style="height: 72.5px; background-color: rgba(114, 129, 133, 0.37);color:rgba(167, 28, 202, 0.644);text-align:center">
          size  : {{ this.fileSizeFormat }} <br><br>
          time  : {{ this.fileCreateTimeFormat }}
        </div>

        <div @click="downloadFile" class="DownloadButton">
          <span style="position: relative; top: 32%">Download</span>
        </div>

        <div @click="deleteFile" class="DeleteButton">
          <span style="position: relative; top: 32%">Delete</span>
        </div>
      </el-dialog>
    </div>
  </el-col>
</template>

<script>
    import {
        download,
        delete_
    } from "../api.js";
    export default {
        name: "FileFrame",
        data() {
            return {
                dialogVisable: false,
            };
        },
        methods: {
            showDialog: function() {
                this.dialogVisable = true;
            },

            downloadFile: function() {
                download(this.fileName);
            },

            deleteFile: function() {
                delete_(this.fileName);
            },
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
                var size = this.fileSize;
                if (size < 1024) {
                    return size.toFixed(3) + "B";
                }
                size /= 1024;
                if (size < 1024) {
                    return size.toFixed(3) + "KB";
                }
                size /= 1024;
                if (size < 1024) {
                    return size.toFixed(3) + "MB";
                }
                return (size / 1024).toFixed(3) + "GB";
            },
            fileCreateTimeFormat: function() {
                var createTimeDate = new Date(this.fileCreateTime * 1000);
                return (
                    createTimeDate.getFullYear() +
                    " 年 " +
                    createTimeDate.getMonth() +
                    " 月 " +
                    createTimeDate.getDay() +
                    " 日 " +
                    createTimeDate.getHours() +
                    " 时 "
                );
            },
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
    
    .DeleteButton {
        position: relative;
        align-items: center;
        left: 34%;
        width: 30%;
        height: 60px;
        text-align: center;
        background-color: rgba(228, 9, 9, 0.952);
        color: white;
        transition-duration: 0.7s;
        margin: 10px 10px 10px 10px;
        border-style: solid;
        border-radius: 7px;
    }
    
    .DeleteButton:hover {
        background-color: white;
        color: rgba(228, 9, 9, 0.952);
    }
</style>