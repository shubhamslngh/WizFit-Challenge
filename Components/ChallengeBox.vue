<template>
  <div class="flex flex-col shadow-md  items-center justify-center  py-8 px-4 md:px-12 lg:px-24">
 
    <!-- Player Image -->
    <div class="relative mb-6">
      <img src="/player.png" alt="Player" class="max-w-full h-80 " />
    </div>
   
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-6 text-center">
      Are You Ready to Take the Challenge?
    </h2>
>
    <div class="bg-white shadow-md  rounded-lg p-6 w-full max-w-md">
      <h3 class="text-xl font-semibold text-center text-red-500 mb-4">
        Download Harlem Wizards App
      </h3>

      <!-- App Store Buttons -->
      <div class="flex justify-center gap-4 mb-6">
        <img src="/google-play.png" alt="Google Play" class="h-10" />
        <img src="/app-store.png" alt="App Store" class="h-10" />
      </div>
        <Schools />
      </div>
    </div>
</template>

<script setup>
import Schools from '~/Components/Schools.vue';
</script>
