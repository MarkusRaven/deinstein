<template>
  <main class="tile">
    <div class="tile__wrapper">
      <div class="tile__row">
        <div class="tile__img">
          <img :src="`${ApiInstance}${tile?.photo?.[0]}`" alt="">
        </div>
        <div class="tile__info">
          <div class="appTitle tile__title">
            {{tile?.name}}
          </div>
          <div class="appText tile__text">
            {{tile?.item_desc}}
          </div>
          <div class="tile__price">
            {{tile?.price}} р.
          </div>
          <div 
            class="appBtn tile__btn"
            @click="addHandler()"
          >Купить</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ApiInstance } from '../config'
import {getOneItem} from '@/api/shop'


export default {
  data: () => ({
    ApiInstance,
    tile: {}
  }),
  async mounted(){
    this.tile = await getOneItem(this.$route.params.id)
  },
  methods: {
    addHandler(){
      this.$store.dispatch('addToCart', this.tile)
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="less">
@import '../assets/less/tile.less';
</style>