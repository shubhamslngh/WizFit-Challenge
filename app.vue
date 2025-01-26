<template>
  <div class="relative">
    <NavBar />

    <main class="pt-1">
      <Challange />
      <div class="h-[100vh]"> 
      </div>
    </main>
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
import Challange from '~/pages/Challange.vue';

</script>
<style>
    body {
      font-family: 'Oswald', sans-serif;
      font-weight: 400; 
      letter-spacing: 1px;
    }
  </style>