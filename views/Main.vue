<template>
 
   <el-container style="height:100%">
  <el-header>
    <common-header></common-header>
  </el-header>
  <el-container>
    <el-aside width="200px">
       <common-aside></common-aside>
    </el-aside>
    <el-main>
      <router-view></router-view> 
    </el-main>
  </el-container>
</el-container>
</template>
  <script >
  import CommonAside from  '../src/components/commonAside.vue'
  import CommonHeader from '../src/components/commonHeader.vue'
  export default{
      name:'vueHome',
      components:{
        CommonAside,
        CommonHeader
      },
      data(){
          return{}
      }
  }
  </script>
  <style lang="less" scoped>
        .el-header{
            background-color:rgba(62, 82, 193, 1);

        }
        .el-main{
            padding-top: 0;
        }
  </style>
//  项目版本：Node v14.18.0   npm 6.14.15