<template>
 
  <div>
    <NavBar class="sticky top-0 z-50"/>
    <Challange />
  </div>
</template>

<script setup>
import NavBar from '~/Components/NavBar.vue';
import Challange from '~/Pages/Challange.vue';

</script>
<style>
    body {
      font-family: 'Oswald', sans-serif;
      font-weight: 400; 
      letter-spacing: 1px;
    }
  </style>