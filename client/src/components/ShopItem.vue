<template>
  <div class="shop__item shopitem">
    <router-link class="shopitem__link" :to="{ name: 'Tile', params: {id: itemInfo.id}}">
      <img :src="`${ApiInstance}${itemInfo.photo?.[0]}`" alt="">
    </router-link> 
    <div class="shopitem__body">
      <div class="shopitem__header">
        <h4 class="shopitem__title">{{itemInfo?.name}}</h4>
      </div> 
      <p class="shopitem__text appText">{{description}}</p>
      <div class="shopitem__footer">
        <div class="shopitem__pricewrapper">
          <span class="shopitem__priceinfo">Цена за m²</span>
          <span class="shopitem__price">{{itemInfo?.price}} р.</span>
        </div>
        <button 
          type="button" 
          class="shopitem__btn appBtn appBtn--outline"
          @click="addHandler()"
        >в корзину</button>
      </div>
    </div> 
  </div>
</template>

<script>
import { ApiInstance } from '../config'

export default {
  props: {
    itemInfo: {
      type: Object,
      default: {}
    },
    tile: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    ApiInstance
  }),
  computed: {
    description(){
      return this.itemInfo.item_desc.substring(0, 100) + '...'
    }
  },
  methods: {
    addHandler(){
      this.$store.dispatch('addToCart', this.itemInfo)
    }
  }
}
</script>

<style>

</style>