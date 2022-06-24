<template>
<div id="pmap">

</div>
</template>
<script>
import { loadModules } from "esri-loader";
export default{
    name:'RDFX',
    methods:{
       _createmap:function(){
           let options={
               url:'https://edutrial.geoscene.cn/geoscene/rest/services/%E5%89%91%E9%98%81%E5%8E%BF/MapServer',
               css:'https://js.arcgis.com/4.23/esri/themes/light/main.css'
           };
    loadModules(["esri/Map", "esri/views/MapView"],options).then(([Map,MapView])=>{
        let map = new Map({
             basemap: "topo-vector"
        });

        let view = new MapView({
             container: "pmap", // Reference to the DOM node that will contain the view
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
<style>
#pmap{
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>