<template>
  <div>
    <template v-if="selectedFilter?.length">
      <p class="sidebar__itemtitle">Выбранные параметры: </p>
      <div class="sidebar__selectedWrapper">
        <div v-for="item in selectedFilter" :key="item.id" class="sidebar__selected">
          <span>{{item.name}}</span>
          <img src="../assets/img/close.svg" alt="close" @click="item.checked = false">
        </div>
      <button class="sidebar__clear appLink" @click="clear">Очистить</button>      
      </div>     
    </template>
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <p class="sidebar__itemtitle">Материалы</p>  
        <ul class="sidebar__sublist">
          <li class="sidebar__subitem appText appCheckbox" v-for="item in filter" :key="item">
            <input type="checkbox" :id="item.id" :name="item.name" v-model="item.checked">
            <label :for="item.id">{{item.name}}</label>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import {getFilter, getItemsType} from '@/api/shop'


export default {
  name: 'AppFilter',
  props: {
    Tiles: Boolean,
    default: false,
  },
  data: () => {
    return {
      filter: [],
    }
  },
  async mounted(){
    this.filter = (await getFilter()).map(item => ({ 
      ...item,
      checked: false
    }))
    console.log(this.filter )
  },
  methods: {
    clear(){
      this.filter = this.filter.map(item => ({...item, checked: false}))
    },
    async filterForType(id){ 
      this.$emit('filterItems', (await getItemsType(id)))
    }
  },
  watch: {
    filter: {
        async handler() {
          const idChecked = []
          this.filter.forEach(item => {
            item.checked && idChecked.push(item.id)
          });
          if(idChecked.length){
            let result = await getItemsType({productTypeId: idChecked})
            this.$emit('filterItems', result)
          }
        },
        deep: true
     },
  },
  computed: {
    selectedFilter() {
       return this.filter.filter(item => item.checked)
    },
  },
}
</script>

<style src="@vueform/slider/themes/default.css"></style>