<template>
    <div class="h-12 items-center place-content-center text-center">
         <NuxtImg format="webp" src="/banner.png" alt="banner"  class="h-auto w-full py-1" />
        <div class="flex place-self-center p-5 ">
            <h1 class=" text-red-500 font-bold text-5xl p-2">What is Wizfit Challenge ?</h1>
            <UButton class="bg-red-500 w-32 justify-center">Watch Now</UButton>
        </div>
        <ChallengeBox/>
    </div>
</template>
<script setup>
import ChallengeBox from '~/components/ChallengeBox.vue';

</script>