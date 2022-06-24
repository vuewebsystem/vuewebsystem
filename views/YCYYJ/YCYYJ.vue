<template>
     <el-row class="YCYYJ" :gutter="20" >
        <el-col :span="8" style="margin-top:20px">
             <el-card shadow="hover" style="height:480px">
                 <div class="ajjjph" style="height:280px">
                    <div class="header">
                    <div id="title">案件解决排行</div>
                    <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择日期时间" size="mini" style="width:200px"
                    prefix-icon="el-icon-search">
    
              
                  </el-date-picker>
                    </div>
                      <div class="middle" >
                      <div >

                      </div>
                 </div>
                 <div class="footer">
                     
                 </div>
                 </div>                 
             </el-card>   
             </el-col>
             <el-col  style="margin-top:20px" :span="8">
                 
                 <el-card shadow="hover" style="height: 480px">
                     <div id="map" style="height:280px " ref="echarts">

                     </div>
                 </el-card>
             </el-col>
             <el-col  style="margin-top:20px" :span="8">
                 
                 <el-card shadow="hover" style="height: 480px">
                     <div style="height:280px " ref="echarts"></div>
                 </el-card>
             </el-col>
            <el-col style="margin-top:30px" :span="24">
                  <el-card shadow="hover" style="height: 480px">
                     <div style="height:280px " ref="echarts">

                     </div>
                 </el-card>
            </el-col>
    </el-row>
   
</template>
<script>
import { loadModules } from "esri-loader";
export default{
    name:'RDFX',
    methods:{
       _createmap:function(){
           let options={
               url:'',
               css:'https://js.arcgis.com/4.23/esri/themes/light/main.css'
           };
    loadModules(["esri/Map", "esri/views/MapView"],options).then(([Map,MapView])=>{
        let map = new Map({
             basemap: "topo-vector"
        });

        let view = new MapView({
             container: "map", // Reference to the DOM node that will contain the view
             map: map // References the map object created in step 3
                 });
                 console.log(view)
           })
       }
    },
    mounted:function(){
        this._createmap();
    }

}
</script>