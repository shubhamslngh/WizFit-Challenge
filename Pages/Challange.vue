<template>
    <div class="h-12 items-center place-content-center text-center">
        <img src="/banner.png" alt="banner" class="h-auto max-w-full py-1" />
        <div class="flex place-self-center p-5 ">
            <h1 class=" text-red-500 font-bold text-5xl p-2">What is Wizfit Challenge ?</h1>
            <UButton class="bg-red-500 w-32 justify-center">Watch Now</UButton>
        </div>
        <ChallengeBox/>
    </div>
</template>
<script setup>
import ChallengeBox from '~/Components/ChallengeBox.vue';

</script>