
<template>

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" text-color="rgba(0,0,0,1)" active-text-color="rgba(44, 59, 159, 1)"  @open="handleOpen" @close="handleClose"
    :collapse="isCollapse">
    <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
        <template v-slot:title>          
          <span >{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">       
            <el-menu-item @click="clickMenu(subItem)" :index="subIndex+''">
              <i :class="'el-icon-' + subItem.icon"></i>
              <span>{{subItem.label}}</span>
              </el-menu-item> 
        </el-menu-item-group>  
      </el-submenu>     
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path+''" :key="item.path">
      
      <span>{{ item.label }}</span>
    </el-menu-item>         
      
  </el-menu>
   
</template>   
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
 
  background-color: rgba(245, 245, 245, 1);
  height: 100%;
  text-align: center;
  line-height: 48px;


}
</style>

<script>

export default {
  data() {
    return {
      isCollapse: false,//让导航栏展开
      menu: [
        {
          
          label: '数据分析',         
            children: [
            {
              path: '/SJTJ',
              name: 'SJTJ',
              label: '数据统计',
              icon: 'pie-chart',
              url: 'SJFX/SJTJ'
            },
            {
              path: '/YXYZFX',
              name: 'YXYZFX',
              label: '影响因子分析',
              icon: 'opportunity',
              url: 'SJTJ/YXYZFX'
            }
            ]

        },
        {                  
          label: '时空分析',
         
           children: [
            {
              path: '/RDFX',
              name: 'RDFX',
              label: '热点分析',
              icon: 'data-analysis',
              url: 'SKFX/RDFX'
            },
            {
              path: '/RLTFX',
              name: 'RLTFX',
              label: '热力图分析',
               icon: 'data-analysis',
              url: 'SKFX/RLTFX'
            },
            {
              path: '/GMLXFX',
              name: 'GMLXFX',
              label: '拐卖路线分析',
               icon: 'data-analysis',
              url: 'SKFX/GMLXFX'
            }
            ]

        },
        {
          path: '/YCYYJ',
          name: 'YCYYJ',
          label: '预测与预警',
          url: 'YCYYJ/YCYYJ'
        },
        {
          path: '/FZJC',
          name: 'FZJC',
          label: '辅助决策',
          url: 'FZJC/FZJC'
        },
        {
        
          name: 'user2',
          label: '数据管理',
           children: [
            {
              path: '/AJLR',
              name: 'AJLR',
              label: '案件录入',
              icon: 'document-add',
              url: 'SJGL/AJLR'
            },
            {
              path: '/AJCX',
              name: 'AJCX',
              label: '案件查询',
               icon: 'search',
              url: 'SJGL/AJCX'
            }
            
            ]
          
        },
        {
          path: '/TBZT',
          name: 'TBZT',
          label: '同步状态',      
          url: 'TBZT/TBZT'
        },
       {
          path: '/XTSZ',
          name: 'XTSZ',
          label: '系统设置',       
          url: 'XTSZ/XTSZ'
        }
          
        

      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(subItem){
      this.$router.push({
        name:subItem.name
      })
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    }
  }
}
</script>