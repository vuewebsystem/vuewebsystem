<template>
    <div id="pmap">
    </div>

</template>
<script>
import { loadModules } from "esri-loader";

export default {
    name: 'RDFX',
    methods: {
        _createmap: function () {
            let options = {
                url: 'https://js.arcgis.com/4.24/',
                css: 'https://js.arcgis.com/4.23/esri/themes/light/main.css'
            };
            loadModules(["esri/Map", "esri/views/MapView", "esri/Basemap", "esri/layers/TileLayer", "esri/layers/FeatureLayer"], options).then(([Map, MapView, Basemap, TileLayer, FeatureLayer]) => {
                
                 let basemap=new Basemap({
                  baseLayers:[
                      new TileLayer({
                          url:"https://localhost:6443/arcgis/rest/services/%E5%9C%B0%E5%9B%BE/MapServer?f=jsapi",
                          title:"Basemap"
                      })
                  ],
                  title:"basemap",
                  id:"basemap"

// 

               });
               let map = new Map({
                    basemap: basemap
                   
                });
                let view=new MapView({
                    container:"pmap",
                    map:map,
                    zoom:6,
                    center:[105.52,32.28]
                });
                console.log(view)
              let layer=new FeatureLayer({
                  url:"https://edutrial.geoscene.cn/geoscene/rest/services/%E5%89%91%E9%98%81%E5%8E%BF/MapServer"
              })
             map.add(layer)
            }).catch((err)=>{
                console.log('底图创建失败，'+err);
            });
            
        }
    },
    mounted: function () {

        this._createmap();
    }

}
</script>
<style>
#pmap {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>