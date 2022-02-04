<template>
  <el-col :span="6">
    <div class="FileFrame" @mouseenter="display" @mouseleave="hidden">
      
        <transition name="shadow">
        <div v-if="flag" class="Shade">
            <div @click="download" style="height: 72.5px;background-color:rgb(13, 163, 233)">Download</div>
            <div style="height: 72.5px;background-color:rgb(0, 255, 136)">
                {{this.fileSizeFormat}} MB
            </div>
        </div>
      </transition>

      <transition name="knife">
        <img v-if="!flag" :src="this.picPath" height="115" width="115" />
       </transition>
       <transition name="shadow">
        <div v-if="!flag" class="FileName">{{ this.fileName }}</div>
      </transition>

    </div>
  </el-col>
</template>

<script>
    export default {
        name: "FileFrame",
        data() {
            return {
                flag: false,
            };
        },
        methods: {
            display: function() {
                this.flag = true;
            },
            hidden: function() {
                this.flag = false;
            },
            download: function() {
                return 1;
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

                return (((this.fileSize * 1.0 / 1024) / 1024)).toString().substring(0, 5)

            }
        },
        props: {
            fileName: String,
            fileSize: Number,
            fielCreateTime: Number,
        },
    };
</script>

<style scoped>
    .FileFrame {
        width: 115px;
        height: 20%;
        background-color: rgb(255, 255, 255);
        text-align: center;
        margin: 10px 10px 10px 0;
        transition-duration: 1.3s;
    }
    /*.FileFrame:hover {
        background-color: black;
        color: white;
    }
    */
    
    .FileName {
        width: 115px;
        display: inline-block;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }
    
    .Shade {
        position: absolute;
        height: 145px;
        width: 115px;
        background-color: black;
    }
    
    .shadow-enter-from,
    .shadow-leave-to {
        transition: 1s;
        opacity: 0;
    }
    
    .shadow-leave-active {
        color: transparent;
    }
    
    .shadow-leave-from,
    .shadow-enter-to {
        transition: 1s;
        opacity: 1;
    }
    
    .knife-enter-from,
    .knife-leave-to {
        transition: 1s;
        opacity: 0;
    }
    
    .knife-leave-from,
    .knife-enter-to {
        transition: 1s;
        opacity: 1;
    }
</style>