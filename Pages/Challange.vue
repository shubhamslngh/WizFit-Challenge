<template>
    <div class=" flex flex-col flex-nowrap text-center w-full h-[100vh]">
         <NuxtImg format="webp" src="/banner.png" alt="banner" width="100%" height="100" class="py-1 w-full" />
        <div class=" flex flex-wrap place-content-center place-self-center p-5 ">
            <h1 class=" text-red-500 font-bold text-5xl p-2">What is Wizfit Challenge ?</h1>
            <UButton class="bg-red-500 m-2 p-2 w-32 justify-center">Watch Now</UButton>
        </div>
        <ChallengeBox/>
    </div>
</template>
<script setup>
import ChallengeBox from '~/components/ChallengeBox.vue';

</script>