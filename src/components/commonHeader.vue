<template >
<header>
    <div class="left">
      <p >儿童拐卖分析及预警系统</p> 
    </div>
      <div class="mian">
         <el-input placeholder="请输入内容"  size="small">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    <div class="right"  >      
      <el-dropdown display="inline">        
         <span> 
             欢迎你，警官
             <img class="user" :src="userImg" >
         </span>
         <template v-slot:dropdown>
             <el-dropdown-menu >
                 <el-dropdown-item>个人中心</el-dropdown-item>
                 <el-dropdown-item> 退出</el-dropdown-item>
             </el-dropdown-menu>
          </template>
      </el-dropdown>   
    </div>
</header>
</template>
<script>
export default{
    name:'commonHeader',
    data(){
        return{
            userImg:require('../assets/images/user.png')
        }
    }
}

</script>
<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
  
}
.right{
   background: rgba(62, 82, 193, 1);
   .user { 
       
     width:40px;
     height:40px;
     border-radius:50%;
        }
    span{
        font-family: 楷体;
        color: black;
        font-size: 25px;
    }
}
.left{
   
 
    width: 200px;
    height: 100%;
    position: relative;
    margin-left:-20px ;
    background: rgba(41, 58, 167, 1);
    color: aliceblue;

    p{
        margin: 10px 10px 10px 50px;
        width: 100px;
        height: 20px;
        text-align: center;
        vertical-align: middle;
    }

}
.main{
   
.el-select .el-input {
  width: 70px;

}
}

</style>