<template>
  <div class="flex flex-col shadow-md  items-center justify-center py-8 px-4 md:px-12 lg:px-24">
 
    <!-- Player Image -->
    <div class="relative mb-6">
       <NuxtImg format="webp"  src="/player.png" alt="Player" class="max-w-full h-80 " />
    </div>
   
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-6 text-center">
      Are You Ready to Take the Challenge?
    </h2>

    <div class="bg-white shadow-md  rounded-lg p-6 w-[50%] min-w-fit ">
      <h3 class="text-sm font-light text-center text-black mb-1">
        Download Harlem Wizards App
      </h3>

      <!-- App Store Buttons -->
      <div class="flex justify-center gap-4 mb-6">
         <NuxtImg format="webp"  src="/google-play.png" alt="Google Play" class="h-10" />
         <NuxtImg format="webp"  src="/app-store.png" alt="App Store" class="h-10" />
      </div>
      <div class="flex items-center justify-center mb-1">
  <!-- Left Line -->
  <div class="border-t border-gray-300 flex-grow"></div>

  <!-- Text -->
  <h4 class="text-sm font-light text-center text-black px-4">
    or you can sign up with your email
  </h4>

  <!-- Right Line -->
  <div class="border-t border-gray-300 flex-grow"></div>
</div>

<Schools />
      </div>
    </div>
</template>

<script setup>
import Schools from '~/components/Schools.vue';
</script>
