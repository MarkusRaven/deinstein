<template>
    <main class="DeinSteinDesign">
    <div class="DeinSteinDesign__wrapper">
      <div class="breadcrumbs">
        <router-link to="/" class="breadcrumbs__link appText">Главная</router-link>
        <span>/</span>
        <a class="breadcrumbs__active">Каталог</a>
      </div>
      <section class="shop">
        <h1 class="appTitle--left appTitle">
          Все наши плитки
        </h1>
        <p class="shop__text appText">
          В DeinSteinDesign мы гордимся тем, что помогаем клиентам найти идеальную плитку для их ванных комнат. С нашим вдохновляющим ассортиментом вы создадите ванную комнату своей мечты.
        </p>
        <div class="shop__row">
          <div class="shop__sidebar sidebar">
            <AppFilter @filterItems="UpdateItems($event)" :Tiles="true"/>           
          </div>
          <div class="shop__items">
            <shop-item v-for="item in shopItems" :key="item.id" :itemInfo="item"></shop-item>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import {getItems} from '@/api/shop'
import AppFilter from "@/components/Filter"
import ShopItem from "@/components/ShopItem"

export default {
  components: {
    AppFilter,
    'shop-item': ShopItem
  },
  data: () => ({
    shopItems: [],
  }),
  async mounted(){
    this.shopItems = await getItems();
  },
  methods: {
    UpdateItems(result){
      this.shopItems = result
    } 
  }
}
</script>

<style lang="less">
@import '../assets/less/shop.less';

</style>