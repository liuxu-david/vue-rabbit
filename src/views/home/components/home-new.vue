<template>
     <div class="home-new">
    <homePannel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><XtxMore path="/" /></template>
      <!-- 面板内容 -->
      
     <div ref="target" style="position: relative;height: 426px;">
       <Transition name="fade">
         <ul v-if="goods.length" ref="pannel" class="goods-list">
        <li v-for="item in goods" :key="item.id">
          <RouterLink :to="`/product/${item.id}`">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{item.name}}</p>
            <p class="price">&yen;{{item.price}}</p>
          </RouterLink>
        </li>
      </ul>
    <homeSkeleton bg="#f0f9f4" v-else />
     </Transition>
   </div>
    </homePannel>
  </div>
</template>

<script>
import homePannel from '@/views/home/components/home-pannel'
import homeSkeleton from '@/views/home/components/home-skeleton'
import {findNew} from '@/api/home'
import { useLazyData} from '@/hooks'
    export default {
        name:"HomeNew",
        components:{
            homePannel,
            homeSkeleton
        },
        setup(){
         const { target, result } = useLazyData(findNew)
         return {
         goods: result,
          target 
          }
        }
    }
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>