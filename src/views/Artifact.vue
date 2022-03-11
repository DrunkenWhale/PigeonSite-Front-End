<template>
    <el-card style="height: 100%;width:100%">
        <el-button @click="this.getRandomSexPic">随机涩图</el-button>
        <el-button @click="this.downloadArtifactPic">下载涩图</el-button>
        <img class="IMAGE" :src="this.imgURL" >
    </el-card>
</template>

<script>
    /* import {
                                                                                                                                                                                                                                                                                                                                                                                                                                    ElMessage
                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                    from "element-plus"; */
    import {
        getArtifactRandomPic,
        getSpecialPicURLByName,
        downloadPicByName
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
            }
        },
        data() {
            return {
                imgName: "",
                imgURL: ""
            }
        },
    }
</script>

<style>
    .IMAGE {
        width: 50%;
        height: 50%;
        position: relative;
        left: 7%;
    }
</style>