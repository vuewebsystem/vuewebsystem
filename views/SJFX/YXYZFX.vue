<template>
    <div class="YXYZFX">
        <div class="header" >
            <p>影响因子分析</p>           
        </div>
        <el-divider></el-divider>
        <div class="body">
            <!-- 地图展示框 -->
            <el-col :span="6" class="imgbox" id="imgbox">  </el-col>
            <el-col :span="6" class="imgbox" id="imgbox2"></el-col>
            <el-col :span="6" class="imgbox" id="imgbox3"></el-col>
            <!-- 数据表格 -->
            <el-col :span="7" class="databox">
                <el-table  :data="tabledata1">
                    <el-table-column
                        prop="name"
                        label=""
                        width="100"
                    ></el-table-column>
                    <el-table-column
                        prop="sig"
                        label="SIG"
                        width="100"
                    ></el-table-column>
                    <el-table-column
                        prop="AICc"
                        label="AICc"
                        width="100"
                    ></el-table-column>
                    <el-table-column
                        prop="r2"
                        label="R平方"
                        width="100"
                    ></el-table-column>
                    <el-table-column
                        prop="radj"
                        label="RAdj平方"
                        width="100"
                    ></el-table-column>
                </el-table>
            </el-col>                      
        </div> 
        <div class="button">
           <!-- 年份选项 -->
            <el-col :span="5" class="conditionbox">请选择年份： 
              <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in years"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-col> 
            <!-- 影响因素一 -->
            <el-col :span="5" class="conditionbox">请选择影响因素一:
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                    v-for="item in yxys1"
                    :key="item.value1"
                    :label="item.label"
                    :value="item.value1">
                </el-option>
              </el-select>
            </el-col>            
             <!-- 影响因素二: -->
            <el-col :span="5" class="conditionbox">请选择影响因素二:
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                    v-for="item in  yxys2"
                    :key="item.value2"
                    :label="item.label"
                    :value="item.value2">
                </el-option>
              </el-select>
            </el-col>             
            <!-- 影响因素三:  -->
            <el-col :span="5" class="conditionbox">请选择影响因素三: 
              <el-select v-model="value3" placeholder="请选择">
                <el-option
                    v-for="item in  yxys3"
                    :key="item.value3"
                    :label="item.label"
                    :value="item.value3">
                </el-option>
              </el-select>
            </el-col> 
            <!-- 执行分析按钮 -->
            <el-col :span="10" class="zxfx">
                <el-button type="primary" v-on:click="fenxi()">执行分析</el-button>
            </el-col>
        </div>
     </div>
</template>
<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import esriConfig from "@arcgis/core/config";
import Basemap from "@arcgis/core/Basemap";
import MapImageLayer from"@arcgis/core/layers/MapImageLayer";
import FeatureLayer from"@arcgis/core/layers/FeatureLayer";
export default{
    name:'YXYZFX',
    async mounted() {
      esriConfig.apiKey = "AAPKb5dc6257f36d412b88112fd1842d3304gMOhvopgAcDPI-8NOAqrZpguUefOuiVBXFY2I8pLp6fjLBHjGc2c9-BMcD7wu00L";
      //底图定义
      let basemap = new Basemap({
        baseLayers: [
          new MapImageLayer({
            url: "https://localhost:6443/arcgis/rest/services/123456/MapServer",
            title: "Basemap"
          })
      ],
        title: "basemap",
        id: "basemap"
      });
      //地图一
      const layer = new FeatureLayer({
        title: "heatmap",
        url: "https://localhost:6443/arcgis/rest/services/123456/MapServer"  
      });
      const colors = ["rgba(115, 0, 115, 0)", "#820082", "#910091", "#a000a0", "#af00af", "#c300c3", "#d700d7", "#eb00eb", "#ff00ff", "#ff58a0", "#ff896b", "#ffb935", "#ffea00"];
      layer.renderer = {
          type: "heatmap",
          field: "省代码 ", 
          colorStops: [
            { color: colors[0], ratio: 0 },
            { color: colors[1], ratio: 0.083 },
            { color: colors[8], ratio: 0.166 },
            { color: colors[3], ratio: 0.249 },
            { color: colors[4], ratio: 0.332 },
            { color: colors[5], ratio: 0.415 },
            { color: colors[6], ratio: 0.498 },
            { color: colors[7], ratio: 0.581 },
            { color: colors[8], ratio: 0.664 },
            { color: colors[9], ratio: 0.747 },
            { color: colors[10], ratio: 0.83 },
            { color: colors[11], ratio: 0.913 },
            { color: colors[12], ratio: 1 }
          ],
          radius:12,
          maxDensity: 5000,
          minDensity: 0
      };
      const map = new Map({
        zoom: 10, 
        logo: true, 
        maxZoom: 18, 
        sliderPosition: "bottom-right", 
        basemap: basemap,
        layers: [ layer ]
      });
      const view = new MapView({
        container:"imgbox",
        map: map,
      });
      //地图二
      let layer2 = new FeatureLayer({
        url: "https://localhost:6443/arcgis/rest/services/123456/MapServer"
      });
      const map2 = new Map({
          zoom: 10, 
          logo: true, 
          maxZoom: 18, 
          sliderPosition: "bottom-right", 
          basemap: basemap,
          layers: [ layer2 ]
      });
      const view2 = new MapView({
        container:"imgbox2",
        map: map2,
      });
      // const { renderer } = await colorRendererCreator.createContinuousRenderer({
      //   layer: layer2,
      //   view: view2,
      //   field: "省代码",
      //   theme: "above-and-below"
      // });
      // layer2.renderer = renderer;
      //地图三
      const popupOpenspaces = {
        "title": "{省}",
        "content": [{
          "type": "fields",
          "fieldInfos": [
            {
              "fieldName": "省代码",
              "label": "省代码",
              "isEditable": true,
              "tooltip": "",
              "visible": true,
              "format": null,
              "stringFieldOption": "text-box"
            },
            {
              "fieldName": "test",
              "label": "test",
              "isEditable": true,
              "tooltip": "",
              "visible": true,
              "format": null,
              "stringFieldOption": "text-box"
            },           
            // {
            //   "fieldName": "GIS_ACRES",
            //   "label": "Acres",
            //   "isEditable": true,
            //   "tooltip": "",
            //   "visible": true,
            //   "format": {
            //     "places": 2,
            //     "digitSeparator": true
            //   },

            //   "stringFieldOption": "text-box"
            // }
          ]
        }]
      }
      let layer3 = new FeatureLayer({
        url: "https://localhost:6443/arcgis/rest/services/123456/MapServer",
        outFields: ["省代码"],
        popupTemplate: popupOpenspaces
      });
      const map3 = new Map({
          zoom: 10, 
          logo: true, 
          maxZoom: 18, 
          sliderPosition: "bottom-right", 
          basemap: basemap,
          layers: [ layer3 ]
      });
      const view3 = new MapView({
        container:"imgbox3",
        map: map3,
      });
     
    },
    data(){
        return{
          tabledata1: [{
              name:'GWR:',
              sig:'114514',
              AICc:'123456',
              r2:'12313',
              radj:'1231'
          },{
              name:'OLS:' ,
              sig:'114514',
              AICc:'123456',
              r2:'12313',
              radj:'1231'
          }],
          years:[{
          value: '2016',
          label: '2016'
          },{
          value: '2017',
          label: '2017'
          },{
          value: '2018',
          label: '2018'
          },{
          value: '2019',
          label: '2019'
          }],
          yxys1:[{
          value1: '教育水平',
          label: '教育水平'
          },{
          value1: '经济状况',
          label: '经济状况'
          },{
          value1: '地理位置',
          label: '地理位置'
          }],
          yxys2:[{
          value2: '选项1',
          label: '2016'
          },{
          value2: '选项2',
          label: '2017'
          },{
          value2: '选项3',
          label: '2018'
          },{
          value2: '选项4',
          label: '2019'
          }],
          yxys3:[{
          value3: '选项1',
          label: '2016'
          },{
          value3: '选项2',
          label: '2017'
          },{
          value3: '选项3',
          label: '2018'
          },{
          value3: '选项4',
          label: '2019'
          }],
          value: '',
          value1: '',
          value2: '',
          value3: ''
              
        }
    },
    methods:{
      fenxi(){

      }
    }
}
</script>

<style>
@import 'https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/light/main.css';
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.mapdiv {
  padding: 0;
  margin: 0;
  height: 600px;
}
</style>