<template>
  <main class="profile"> 
    <div class="profile__row">
      <div class="profile__sitebar">
        <button class="appBtn appBtn--meduim full" @click="tab = 1" :class="tab == 1 ? '' : 'appBtn--outline'">
          История заказов
        </button>
        <button class="appBtn appBtn--meduim full" @click="tab = 2" :class="tab == 2 ? '' : 'appBtn--outline'">
          Персональные данные
        </button>
        <button class="appBtn appBtn--meduim full" @click="logout()" :class="tab == 4 ? '' : 'appBtn--outline'">
          Выйти
        </button>
      </div>
      <div class="profile__content content" v-if="tab == 1">
        <header class="content__header">
          История заказов
        </header>
        <div class="content__body">
          <template v-if="orders?.length">
          <div class="history">       
            <div class="history__item itemSmall" v-for="item in orders" :key="item.id">
              <img src="../assets/img/order1.png" alt="" class="itemSmall__img">
              <div class="itemSmall__info">
                
                <h4 class="itemSmall__title">
                  <span 
                  v-for="(subitem, index) in item.cart"
                  :key="subitem.id"
                  >
                    {{subitem.product.name}}{{index !== item.cart.length - 1 ? ', ' : ''}}
                  </span>
                  </h4>
                <ul class="itemSmall__list">
                  <li>Заказ №: {{item.id}}</li>
                  <li>Дата: {{item?.updatedAt?.split('T')[0]}}</li>
                  <li>Статус: {{status[item.orderStatusId]}}</li>
                </ul>
                <div class="itemSmall__price">
                  <span class="itemSmall__priceinfo">{{item.price}} р.</span>
                </div>
              </div>
            </div>
          </div>
          </template>
          <template v-else>
            <div class="historyEmpty">
              <p class="content__title">У вас нет заказов на данный момент</p>
              <p class="appText">Исправьте это, заказав камень!</p>
              <router-link to="/tiles" class="appBtn">Начать шопинг</router-link>
            </div>      
          </template>
        </div>
      </div>
      <div class="profile__content content" v-if="tab == 2">
        <header class="content__header">
          Персональные данные
        </header>
        <div class="content__body">
          <Form 
            class="appform profileForm"
            @submit="saveChange()"
            :validation-schema="schema"
          >
            <div class="appForm__billingWrap">
              <div class="appForm__group appForm__group--col appForm__group--full"> 
                  <label for="fname">ФИО</label>
                  <Field v-model="user.full_name" name="first_name" id="first_name" type="text" class="appInput" placeholder="Enter the full name"/>
                  <ErrorMessage class="appError" name="first_name" />
              </div>
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="email">E-mail</label>
                  <Field v-model="user.email" name="email" id="email" type="email" class="appInput" placeholder="example@mail.com"/>
                  <ErrorMessage class="appError" name="email" />
              </div>
              <div class="appForm__group appForm__group--col appForm__group--3"> 
                  <label for="Telephone">Телефон</label>
                  <Field v-model="user.tel" name="phone" id="phone" type="phone" class="appInput" placeholder=""/>
                  <ErrorMessage class="appError" name="phone" />
              </div>
              <div class="appForm__group appForm__group--col appForm__group--3"> 
                  <label for="fname">Дата рождения</label>
                  <input name="date" v-model="user.birthday" id="date" type="date" class="appInput" placeholder="01.01.1000"/>
              </div>
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="password1">Старый пароль</label>
                  <input name="password" v-model="user.old_password" id="password1" type="password" class="appInput" placeholder="********"/>
              </div>
              <div class="appForm__group appForm__group--col appForm__group--half"> 
                  <label for="password2">Новый пароль</label>
                  <input name="password" v-model="user.new_password" id="password2" type="password" class="appInput" placeholder="********"/>
              </div>
            </div>
            <div class="appError">
                {{ errors }}
            </div>
            <button class="appBtn appBtn--meduim profileForm__btn" type="submit">SAVE CHANGES</button>
          </Form>
        </div>
      </div> 
    </div>
  </main>
</template>

<script>
import {getOrders, getUser, editUser} from '@/api/shop'
import { Form, Field, ErrorMessage, useValidateForm  } from 'vee-validate';
import * as yup from 'yup'

export default {
  data: () => ({
    tab: 1,
    orders: [],
    user: {
      full_name: '',
      email: '',
      tel: '',
      birthday: '',
      old_password: null,
      new_password: null
    },
    status: {
      1: 'В обработке',
      2: 'Собирается',
      3: 'Отправлен',
      4: 'Доставлен',
      5: 'Отменен',
    },
    errors: '',
  }),
  async mounted(){
    this.orders = await getOrders()
    this.user = (await getUser()).user
    this.user.birthday = this.user.birthday.split('T')[0]
  },
  methods: {
    async logout(){
      await this.$store.dispatch('logout')
      await this.$store.dispatch('loadCart')
      this.$router.push('/')
    },
    async saveChange(){
      this.errors = ''
      try{
        this.user = (await editUser(this.user)).user
        alert('success')
      }catch(err){
        console.log(err.error)
        if(err){
          this.errors = err.error
        }
      }
    },
  },
  computed: {
    schema() {
      return yup.object({
        email: yup.string().email('неверный email'),
      });
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
}
</script>

<style lang="less">
@import '../assets/less/profile.less';

</style>