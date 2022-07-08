<template>
    <el-row class="YCYYJ" :gutter="20">
        <el-col :span="8" style="margin-top:20px">
            <el-card shadow="hover" style="height:480px">
                <div class="ajjjph" style="height:280px">
                    <div class="header">
                        <div id="title">案件解决排行</div>
                        <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间" size="mini"
                            style="width:200px" prefix-icon="el-icon-search">
                        </el-date-picker>

                    </div>
                    <div class="middle">
                        <div>
                            <div style="height:280px " ref="echarts"></div>
                        </div>
                    </div>
                    <div class="footer">
                        <el-table :data="tableData" style="width: 100%;font-size:1px;overflow:hidden;">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col style="margin-top:20px" :span="8">

            <el-card shadow="hover" style="height: 480px">
                <div class="first">
                    <h3>预测案情分布地图</h3>
                    <el-time-select v-model="value" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }" placeholder="选择时间" size="mini" style="float:right ">
                    </el-time-select>
                </div>
                <div><img src="../../src/assets/images/YJ.jpeg" alt="" style="background-repeat:repeat;width:100%;
	height:auto;"></div>
            </el-card>
        </el-col>
        <el-col style="margin-top:20px" :span="8">

            <el-card shadow="hover" style="height: 480px">
                <div class="af">
                    <h1>案发风险排行</h1>
                    <p>September &nbsp; 20 </p>
                </div>
                
            <div style="height:280px " ref="ZZ"></div>
             <el-table :data="tableData" style="width: 100%;font-size:1px;overflow:hidden;">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>  
            </el-card>
        </el-col>
        <el-col style="margin-top:30px" :span="24">
            <el-card shadow="hover" style="height: 480px">
              <el-table :data="tableData" style="width: 100%;font-size:1px;overflow:hidden;">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>  
            </el-card>
        </el-col>
    </el-row>

</template>
<style>
</style>
<script>
import * as echarts from 'echarts'
import { loadModules } from "esri-loader";
export default {
    name: 'RDFX',
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        _createmap: function () {
            let options = {
                url: '',
                css: 'https://js.arcgis.com/4.23/esri/themes/light/main.css'
            };
            loadModules(["esri/Map", "esri/views/MapView"], options).then(([Map, MapView]) => {
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
    mounted: function () {
        this._createmap();
        let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }
            ]

        };
        const E = echarts.init(this.$refs.echarts)
        E.setOption(option)
        let useroption = {
            title: [
                {
                   
                }
            ],
            polar: {
                radius: [30, '80%']
            },
            angleAxis: {
                max: 4,
                startAngle: 75
            },
            radiusAxis: {
                type: 'category',
                data: ['a', 'b', 'c', 'd']
            },
            tooltip: {},
            series: {
                type: 'bar',
                data: [2, 1.2, 2.4, 3.6],
                coordinateSystem: 'polar',
                label: {
                    show: true,
                    position: 'middle',
                    formatter: '{b}: {c}'
                }
            }
        };
        const U = echarts.init(this.$refs.ZZ)
        U.setOption(useroption)
    }

}
</script>