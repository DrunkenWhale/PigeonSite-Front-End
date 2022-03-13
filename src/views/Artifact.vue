<template>
    <el-card style="height: 100%;width:100%;text-align:center">
        <el-scrollbar height="85vh">
             <div style="text-align: center;">
        <el-button @click="this.getRandomSexPic" >随机涩图</el-button>
        <el-button @click="this.downloadArtifactPic">下载涩图</el-button>
        <el-button @click="this.showDialog">涩图仓库</el-button>
        <el-button @click="this.expandPicRepository">更多色图</el-button>
    </div>
    <br>
        <img class="IMAGE" :src="this.imgURL" >
        </el-scrollbar>
   
    </el-card>

    <el-dialog v-model="dialogDisplay" @modal="this.modal_" :width="1000">
        <el-scrollbar height="50vh">
            <div v-for="name in name_list" :key="name" class="PicName">
                {{name}} 
                <el-button type="danger" style="float:right;margin-right:9px;" @click="this.downloadWithoutPreview({name})" >下载涩图</el-button>
                <el-button type="primary" style="float:right;margin-right:9px;" @click="this.preview({name})">预览涩图</el-button>
            </div>
        </el-scrollbar>
    </el-dialog>

</template>

<script>
    /* import {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ElMessage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    from "element-plus"; */
    import {
        getArtifactRandomPic,
        getSpecialPicURLByName,
        downloadPicByName,
        getArtifactPicList,
        expendArtifactPicRepository
    } from "../api.js"
    export default {
        name: "Artifact",
        methods: {
            getRandomSexPic: function() {
                getArtifactRandomPic().then((res) => {
                    var picName = res.data.pic
                    this.imgName = picName
                    this.imgURL = getSpecialPicURLByName(picName)
                })
            },
            downloadArtifactPic: function() {
                return downloadPicByName(this.imgName)
            },
            showDialog: function() {
                getArtifactPicList().then((res) => {
                        var pic_name_list = res.data.pic_list
                        this.name_list = pic_name_list.map(x =>
                            x.split(".")[0]
                        )
                    })
                    /*catch error*/
                this.dialogDisplay = true
            },
            preview: function(picName) {
                this.imgURL = getSpecialPicURLByName(picName.name + ".jpg")
                this.dialogDisplay = false
            },
            downloadWithoutPreview: function(picName) {
                return downloadPicByName(picName.name + ".jpg")
            },
            expandPicRepository: function() {
                expendArtifactPicRepository()
            }
        },
        data() {
            return {
                imgName: "",
                imgURL: "",
                modal_: false,
                dialogDisplay: false,
                name_list: []
            }
        }
    }
</script>

<style>
    .IMAGE {
        width: 50%;
        height: 50%;
        position: relative;
    }
    
    .PicName {
        background-color: rgb(13, 228, 174);
        height: 40px;
        margin-top: 7px;
        border-radius: 3px;
        font-size: 20px;
        color: white;
        transition-duration: 0.7s;
    }
    
    .PicName:hover {
        background-color: rgb(127, 0, 211);
    }
</style>