<template>
  <main class="home">
     <div class="intro__wrapper">
        <div class="intro">
          <section class="intro__info">
            <h1 class="intro__title">Выберите дизайн плитки под себя</h1>
            <p class="intro__text appText">Как это работает:</p>
            <p class="appText">Выберите свой камень, выберите свой дизайн, введите свое имя, Вы заказываете, и мы доставляем.</p>  
            <router-link to="/tiles" class="appBtn intro__btn">Каталог</router-link>
          </section>
          <div class="intro__images images">
            <div class="images__arearight">
              <img src="../assets/img/intro1.png" class="images__img images__img--1">       
            </div>
            <div class="images__arealeft">
              <img src="../assets/img/intro2.png" class="images__img images__img--2">
              <img src="../assets/img/intro3.png" class="images__img images__img--3">
            </div>
            <div class="images__areabottom">
                <img src="../assets/img/intro4.png" class="images__img images__img--4">
               <img src="../assets/img/intro5.png" class="images__img images__img--5">
            </div>   
          </div>
        </div>
      </div>
      <section class="recommend">
        <h2 class="appTitle">
          Популярные товары
        </h2>
        <div class="recommend__wrapper product">
          <div class="product__item" v-for="item in shopItems" :key="item.id">
            <router-link class="shopitem__link" :to="{ name: 'Tile', params: {id: item.id}}">
              <img :src="`${ApiInstance}${item.photo}`" alt="Modern Kitchens" class="product__img">
            </router-link>
            <div class="product__body">
              <h3 class="product__title">{{item.name}}</h3>
              <p class="appText product__text">{{item.item_desc.substring(0, 100) + '...'}}</p>
              <router-link :to="{ name: 'Tile', params: {id: item.id}}" class="product__btn appBtn appBtn--outline">Подробнее</router-link>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-grey">
        <div class="createnow">
          <div class="createnow__wrapper">
            <img src="../assets/img/createnowimg.png" alt="" class="createnow__img">
            <section class="createnow__info">
              <h2 class="appTitle createnow__title">Выберите ваш дизайн</h2>
              <p class="createnow__text appText">Выберите дизайн камня под ваш интерьер</p>
              <router-link  to="/Tiles" class="createnow__btn appBtn appBtn--outline">Выбрать сейчас</router-link>
            </section>
          </div>
        </div>  
      </div>
  </main>
</template>

<script>

import { ApiInstance } from '../config'
import {getItems} from '@/api/shop'
export default {
  name: 'Home',
  data: () =>({
    shopItems: [],
    ApiInstance
  }),
  async mounted(){
    this.shopItems = (await getItems()).slice(0, 6)
  },
}
</script>
<style lang="less">
@import '../assets/less/home.less';

</style>