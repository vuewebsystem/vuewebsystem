<template>
    <el-row class="SJTJ" :gutter="20">
        <el-col :span="8" style="margin-top:20px">
             <el-card shadow="hover">
                 <div class="user">
                 <img :src="userImg" >
                 <div class="userinfo">
                      <p class="name">Admin</p>
                      <p class="access">超级管理员</p>
                 </div>
                 </div>
                 <div class="login-info">
                        <p>上次登陆时间：<span>2022-6-7</span></p>
                        <p>上次登录地点：<span>武汉</span> </p>
                 </div>
             </el-card>
             <el-card style="margin-top: 20px; height:460px;">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">
                    </el-table-column>
                </el-table>
             </el-card>
             </el-col>
             <el-col style="margin-top:20px" :span="16">
                 <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                        <i class="icon" :class="'el-icon-'+item.icon" :style=" {background: item.color}"></i>
                        <div class="detail">
                            <p class="num">{{item.value}}</p>
                            <p class="txt">{{item.name}}</p>
                        </div>
                    </el-card>
                 </div>
                 <el-card style="height: 280px">
                     <div style="height:280px " ref="echarts"></div>
                 </el-card>
                 <div class="graph">
                     <el-card style="height:260px">
                         <div style="height:240px" ref="userEcharts"></div>
                     </el-card>
                     <el-card style="height:260px">
                         <div style="height:240px" ref="videoEcharts"></div>
                     </el-card>
                 </div>
             </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import {getData} from '../../api1/data.js'
// import {getSJTJ} from '../../api/data.js'


export default{
    name:'SJTJ',
    data(){
        return{
            userImg:require('../../src/assets/images/user.png'),
            tableData: [
         
        ],
        tableLabel:{
            name:'省份',
            todayBuy:'今日失踪儿童人数',
            monthBuy:'本月失踪儿童数',
            totalBuy:'总失踪儿童数'
        },
        countData: [
        {
          name: "今日失踪儿童数",
          value: 1234,
          icon: "warning",
          color: "red",
        },
        {
          name: "今日已处理案件",
          value: 210,
          icon: "success",
          color: "green",
        },
        {
          name: "今日未处理案件",
          value: 1234,
          icon: "bell",
          color: "red",
        },
        {
          name: "本月失踪儿童数",
          value: 1234,
          icon: "warning",
          color: "red",
        },
        {
          name: "本月已处理案件",
          value: 210,
          icon: "success",
          color: "green",
        },
        {
          name: "本月未处理案件",
          value: 1234,
          icon: "bell",
          color: "red",
        },
      ]

        }
    },
    mounted(){
      getData().then(res=>{
        const{code,data}=res.data
        if(code===20000){
          this.tableData=data.tableData
          const order=data.orderData
          const xData=order.date
          const keyArray= Object.keys(order.data[0])
          const series=[]
          keyArray.forEach(key=>{
            series.push({
              name:key,
              data:order.data.map(item=>item[key]),
              type:'line'
            })
          })
          const option={
            xAxis:{
              data:xData
            },         
            yAxis:{},
            legend:{
              data:keyArray
            },
            series           
        }
         const E= echarts.init(this.$refs.echarts)
           E.setOption(option)
           //用户图
           const userOption={
            legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: data.userData.map(item=>item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [{
            name:'新增案件',
            data:data.userData.map(item=>item.new),
            type:'bar'
          },
          {
            name:'未处理案件',
            data:data.userData.map(item =>item.active),
            type:'bar'
          }
          ],
        }
       
           
           const U= echarts.init(this.$refs.userEcharts)
            U.setOption(userOption)    
            //饼图
             const videoOption=  {
                tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data:data.videoData,
              type:'pie'
            }
          ],
             }
             const V=echarts.init(this.$refs.videoEcharts)
                V.setOption(videoOption)
        }
       console.log(res)
      })
      // getSJTJ().then(res=>{
      //   const {code,data}=res.data
      //   if(code===20000){
      //     this.tableData=data.tableData
      //     // const order=data.orderData
           
      //   }
      //   console.log(res)
      // })
        // getSJTJ().then(res=>{
        //     const {code,data}=res.data
        //     if(code===20000){
        //         this.tableData=data.tableData
        //         const order= data.orderData
        //         const xData=order.date
        //         const keyArray= Object.keys(order.data[0])
        //         const series=[]
        //         keyArray.forEach(key=>{
        //             series.push({
        //                 name:key,
        //                 data:order.data.map(item=>item[key]),
        //                 type:'line'
        //             })
        //         })
        //         const option={
        //             xAxis:{
        //                 data:xData
        //             },
        //             yAxis:{},
        //             legend:{
        //                 data:keyArray
        //             },
        //             series
        //         }
        //       const E=  echarts.init(this.$ref.echarts)
        //       E.setOption(option)
        //     }
           
        // })
  }
}
</script>
<style>

</style>