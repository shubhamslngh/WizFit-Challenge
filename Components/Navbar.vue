<template>
  <header class="w-full h-fit bg-[#241360] text-white shadow-md sticky top-0 z-50">
    <!-- Top Header -->
    <div class="bg-black h-14 sm:h-10 flex items-start justify-between px-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex ">
        <img src="/logo.png" alt="logo" class="scale-100 xs:scale-50 h-auto w-[160px]" />
      </NuxtLink>

      <!-- Buttons -->
      <div class="hidden md:flex m-2 gap-4">
        <UButton class="bg-[#fdbb00] py-[8px] px-[16px] rounded-none" size="md">SCHEDULE & TICKETS</UButton>
        <UButton class="bg-[#ee1f51] py-[8px] px-[16px] rounded-none" size="md">CONTACT & BOOKING</UButton>
      </div>

      <!-- Hamburger Menu -->
      <button
        class="block md:hidden text-white focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Navigation Bar -->
    <div
      class="container mx-auto py-4 md:flex md:items-center md:justify-end"
      :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }"
    >
      <nav>
        <ul class="flex flex-col md:flex-row items-center md:gap-6 gap-4">
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
      isMenuOpen: false, // State to toggle mobile menu visibility
    };
  },
};
</script>

<style>
/* Add custom styles if needed */
</style>
