<template>
  <header class="flex flex-col flex-wrap w-full mx-auto h-[160px] bg-[#241360] text-white shadow-xl shadow-white sticky top-0 z-50">
    <!-- Top Header -->
    <div class="bg-black h-14 flex flex-row flex-nowrap items-start justify-between px-4">
      <!-- Logo -->
      <NuxtLink to="/" class=" ">
        <NuxtImg format="webp" src="/logo.png" alt="logo" class=" h-auto w-[160px] object-contain" />
        
      </NuxtLink>
     
      <!-- Buttons -->
      <div class="m-2 ">
        <UButton class="bg-[#fdbb00] py-[8px] px-[16px] m-2 rounded-none" size="md">SCHEDULE & TICKETS</UButton>
        <UButton class="bg-[#ee1f51] py-[8px] px-[16px] m-2 rounded-none" size="md">CONTACT & BOOKING</UButton>
      </div>

      <!-- Hamburger Menu -->
  
    </div>


         <button
        class="block place-self-end md:hidden text-white focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    <div
      class="container mx-auto py-4 md:flex md:items-end md:justify-end"
      :class="{ 'hidden': !isMenuOpen, 'block ': isMenuOpen }"
    >
      <nav>
        <ul class="flex flex-row sm:flex-col md:flex-row p-2 sm:bg-[#241360] bg-transparent items-end md:gap-6 gap-4">
          <li>
            <NuxtLink to="/" class="hover:text-gray-300">FUNDRAISING GAME</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/WizFit Challenge" class="hover:text-gray-300">WIZFIT CHALLENGE</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Programs" class="hover:text-gray-300">PROGRAMS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/About Us" class="hover:text-gray-300">ABOUT US</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/The Players" class="hover:text-gray-300">THE PLAYERS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Store" class="hover:text-gray-300">STORE</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, 
    };
  },
};
</script>

<style>
</style>
