<script setup>
import List from './components/student/List.vue';
import axios from 'axios';




import { RouterView } from 'vue-router'
</script>

<template>
  
  <div class="bg-green-600 p-5">
    <h1 class="text-3xl md:text-5xl font-bold text-center text-white">Vue3 composition CRUD operatioln</h1>
  </div>
  <div id="app">
    <h1>welcome</h1>
    <input type="text" v-model="seachQuery">
    <div>
      <ist v-for="list in seachQuery" :key="list.id" :listFirstName="list.fname" :listLastName="list.lname" :listEmail-ID="list.email" :listNMLS="list.nml"></ist>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>

</style>
