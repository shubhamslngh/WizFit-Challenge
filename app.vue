<template>
  <div class="relative">
    <Navbar />

    <main class="pt-[1fr]">
      <Challange />
      <div class="h-[100vh]"> 
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
import Challange from '~/pages/Challange.vue';

</script>
<style>
    body {
      font-family: 'Oswald', sans-serif;
      font-weight: 400; 
      letter-spacing: 1px;
    }
  </style>