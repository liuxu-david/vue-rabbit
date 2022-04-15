<template>
    <div class="page-home">
     <div class="home-entry">
      <div class="container">
          <!-- 左侧分类 -->
          <home-category></home-category>
          <!-- 轮播图 -->
          <home-banner></home-banner>
      </div>
       </div>
       <!-- 新鲜好物页面 -->
        <home-new></home-new>
        <!-- 人气推荐 -->
        <home-hot></home-hot>
        <!-- 热门品牌 -->
        <home-brand></home-brand>
        <!-- 商品区域 -->
        <home-product></home-product>
        <!-- 最新专题 -->
        <home-special></home-special>
    </div>
</template>

<script>
import homeCategory from '@/views/home/components/home-category'
import homeBanner from '@/views/home/components/home-banner'
import homeNew from '@/views/home/components/home-new'
import homeHot from '@/views/home/components/home-hot'
import homeBrand from '@/views/home/components/home-brand'
import homeProduct from '@/views/home/components/home-product'
import homeSpecial from '@/views/home/components/home-special'
    export default {
        name: 'PageHome',
        components:{
            homeCategory,
            homeBanner,
            homeNew,
            homeHot,
            homeBrand,
            homeProduct,
            homeSpecial
        }
    }
</script>

<style scoped lang="less">
    .home{
        .hoverShadow ()
    }
</style>