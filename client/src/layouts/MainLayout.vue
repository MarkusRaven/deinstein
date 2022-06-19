<template>
  <div>
    <header>
      <nav class="mainnav">
        <router-link to="/" class="mainnav__logo">
          <svg width="158" height="111" id="logosite">
            <use xlink:href="../assets/img/DeinSteinLogo.svg#logo"></use>
          </svg>
          <svg width="158" height="32" id="logomobile">
            <use xlink:href="../assets/img/editorLogo.svg#logo"></use>
          </svg>
        </router-link>
        <div class="mainnav__menu" @click="menu = !menu">
          <svg width="22" height="15">
              <use xlink:href="../assets/icon/mobile.svg#burger"></use>
            </svg>
        </div>
        <div 
          class="mainnav__wrapper"
          :class="menu && 'mainnav__open'"
        >
          <router-link to="/" class="mainnav__logo mainnav__mobilelogo">
            <svg width="158" height="111" id="logositemodbile">
              <use xlink:href="../assets/img/DeinSteinLogo2.svg#logo"></use>
            </svg>
          </router-link>
          <ul class="mainnav__list">
            <li class="mainnav__item">
              <router-link to="/" class="mainnav__link">Главная</router-link>
            </li>
            <li class="mainnav__item">
              <router-link to="/Tiles" class="mainnav__link">Каталог</router-link>
            </li>
          </ul>
          <div class="mainnav__icon icon">
            <a @click="onOpen()"> 
              <svg width="24" height="24">
                <use xlink:href="../assets/icon/user.svg#user"></use>
              </svg>
            </a>
            <router-link to="/cart">
              <svg width="24" height="24">
                <use xlink:href="../assets/icon/basket.svg#basket"></use>
              </svg>
              <div class="icon__counter">{{totalItems}}</div> 
            </router-link>
          </div>
        </div>
      </nav>
    </header>
    <!-- main -->
    <router-view />
    <!-- footer -->
    <footer class="mainfooter">
        <div class="mainfooter__politic">
          <p class="mainfooter__politicText">Copyright © 2022 DeinSteinDesign. Все права защищены.</p>
          <div class="mainfooter__politicWrap">
            <router-link to="/impressum" class="mainfooter__politicText">Данные о компании   </router-link>
            <router-link to="/data" class="mainfooter__politicText">   Политика конфиденциальности</router-link>
          </div>
        </div>
    </footer>
    <auth-form v-model="show" :formType="formType"></auth-form>
  </div>
</template>

<script>
import AppSelect from '../components/ui/AppSelect.vue'
import {mapGetters} from "vuex"
import AuthForm from "@/components/AuthForm"


  export default {
    data: () => ({
      items: [{name: 'de'}, {name: 'ru'}, {name: 'eng'}],
      lang: {name: 'ru'},
      show: false,
      formType: 'login', 
      menu: false
    }),
    watch: {
      "$route.path"() {
        this.menu = false
      },
      "$route.params"(value) {
        if(value.login){
          this.show = true
          this.formType = 'login'
        }
        if(value.registration){
          this.show = true 
          this.formType = 'registration'
        }
      }
    },
    methods: {
      setLocale(event){
        this.lang = event
        this.$i18n.locale = event.name
      },
      onOpen() {
        this.isLoggedIn ? 
          this.$router.push('/profile')
        :
          this.show = true
      },
    },
    components: {
      AppSelect,
      AuthForm,
    },
    computed: {
      ...mapGetters(['isLoggedIn', 'totalItems']),
    }
  }
</script>

<style lang="less" >

</style>