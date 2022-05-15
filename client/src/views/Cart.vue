<template>
  <main class="cart appWrapper">
    <div class="breadcrumbs">
      <router-link to="/" class="breadcrumbs__link appText">{{$t('home')}}</router-link>
      <span>/</span>
      <a class="breadcrumbs__active">{{$t('deinsteindesign')}}</a>
    </div>
    <div class="cart__row">
      <div class="cart__info">
        <h1 class="cart__title appTitle appTitle--left">
          Корзина
        </h1>
        <p class="appText">
          Проверьте выбранные товары
        </p>
        <div class="cart__items">
          <div class="cart__item itemSmall" v-for="item in cart.cart" :key="item.id">
            <img 
              src="../assets/img/close.svg" 
              class="itemSmall__close"
              @click="deleteItem(item)"
            >
            <img :src="`${ApiInstance}${item.product?.photo?.[0]}`" class="itemSmall__img">
            <div class="itemSmall__info">
              <h4 class="itemSmall__title">{{item.product?.name}}</h4>
              <p class="itemSmall__desc">
                Shower tray silver sparkie granite stone.
              </p>
              <div class="itemSmall__price">
                <p>Price:</p> 
                <span class="itemSmall__priceinfo">{{item?.price}} р.</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__total total">
        <h4 class="total__title">
          Total:
        </h4>
        <div class="total__price price">
          <div class="price__info">
            <p><b>Total Order</b></p>
            <p>Guaranteed Readiness day: August 21, 2021</p>
          </div>
          <div class="price__count">
            {{totalPrice}} р.
          </div>
        </div>  
        <button 
          class="appBtn appBtn--outline total__btn"
          @click="goToPayment()"
        >
          Оформить заказ
        </button>     
      </div>
    </div>
    
  </main>  
</template>

<script>
import {mapGetters} from "vuex"
import { ApiInstance } from '../config'

export default {
  name: 'Cart',
  data: () => ({ApiInstance}),
  mounted(){
    console.log(this.cart)
  },
  methods: {
    deleteItem(item){
      this.$store.dispatch('deleteCartItem', item.id)
    },
    toOrder(){
      this.$router.push(this.isLoggedIn ? '/payment' : {name: 'Home', params: {
          login: true,
          message: 'Для оформления заказа, нужно быть авторизованым'
        }})
    },
    goToPayment(){
      this.cart.cart.length
        ? this.toOrder() : alert('Корзина пустая')
    }
  },
  computed: {
    ...mapGetters(['cart', 'totalPrice', 'isLoggedIn']),
  }
}
</script>

<style lang="less">
@import '../assets/less/cart.less';

</style>