<template>
     <!-- 顶部 -->
    <app-topnav></app-topnav>
   
     <!-- 吸顶头部 -->
     <appHeaderSticky></appHeaderSticky> 
    <!-- 头部 -->
    <app-header></app-header>

   
    <main class="app-body">
        <!-- 二级路由 -->
        <router-view></router-view>
    </main>
    <!-- 底部 -->
    <app-footer></app-footer>
</template>

<script>
    import {useStore} from 'vuex'
    import AppTopnav from '@/components/app-topnav'
    import appHeader from '@/components/app-header'
    import appFooter from '@/components/app-footer'
    import appHeaderSticky from '@/components/app-header-sticky'
    export default {
        components:{
             AppTopnav,
             appHeader,
             appFooter,
             appHeaderSticky
        },
        setup(){
            const store=useStore();
            store.dispatch('category/getCategory')
        }
       
    }
</script>

<style scoped>
    .app-body {
       min-height: 600px;
      }
</style>