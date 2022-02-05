<template>
  <el-scrollbar height="87vh" style="overflow-x: hidden"
    ><el-card>
      <el-row :gutter="37">
        <div v-for="file in file_list" :key="file">
          <FileFrame
            :fileName="file.file_name"
            :fileSize="file.file_size"
            :fileCreateTime="file.file_time"
          />
        </div>
      </el-row>
    </el-card>
  </el-scrollbar>
</template>

<script>
    import {
        getFileList
    } from "../api.js";
    import FileFrame from "../components/FileFrame.vue";
    import {
        ElMessage
    } from "element-plus";
    export default {
        name: "Download",
        components: {
            FileFrame,
        },
        data() {
            return {
                file_list: [],
            };
        },
        methods: {},
        created() {
            var result = getFileList();
            result.then((res) => {
                this.file_list = res.data;
            })
            result.catch((err) => {
                const errorCode = err.response.status;
                if (errorCode === 702) {
                    ElMessage("Not Logged In");
                } else {
                    ElMessage("Unknown Error, Please check out network");
                }
            });
        },
    };
</script>

<style></style>