<template>
  <div>
    <!-- Loader during Initialization -->
    <div v-if="!isInitialized && loading" class="flex items-center justify-center min-h-10">
      <UProgress animation="carousel" size="sm" />
    </div>

    <!-- Main Content -->
    <div v-else class="container p-4">
      <!-- Header -->
      <h1 class="text-3xl font-bold text-center text-red-500 mb-6">
        Campaign School List
      </h1>

      <!-- Search Input -->
      <div class="mb-4 justify-center">
        <UInput
          v-model="searchQuery"
          placeholder="Search schools..."
          clearable
          size="lg"
          @input="handleSearchInput"
          class="w-full border-2 rounded-sm p-2 max-w-lg"
        />
      </div>

      <!-- Animation Before Fetching New Results -->
      <transition name="fade">
        <div v-if="loading && isInitialized" class="flex justify-center my-6">
          <UProgress animation="carousel" size="xs"/>
        </div>
      </transition>

      <!-- School List -->
      <div v-if="schools.length > 0" class="flex flex-col gap-2">
  <UCard
    v-for="school in schools"
    :key="school.id"
    class="flex flex-nowrap bg-slate-200 shadow-md hover:shadow-2xl border-2 border-b-[#241360]"
  >
  
    <!-- School Logo -->
    

 <h2 class="text-sm font-bold uppercase text-gray-700 flex items-center gap-2">
      
      <img
        :src="school.school_logo || fallbackLogo"
        alt="School Logo"
        class="h-10 w-10 object-contain rounded-md"
      />
      {{ school.school_name }}
    </h2>
  </UCard>
</div>


      <div v-else-if="!loading && !error && schools.length === 0" class="text-gray-500 text-center">
        No schools found.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import debounce from 'lodash/debounce'; // Import debounce for lazy loading

// State Variables
const schools = ref([]);
const searchQuery = ref('');
const loading = ref(false);
const error = ref(null);
const isInitialized = ref(false);
const fallbackLogo = '/logo.png'; // Path to fallback logo

// API Endpoint
const API_URL = 'https://api.devharlemwizardsinabox.com/campaign/campaign_school_list';

// Fetch Schools Function
const fetchSchools = async () => {
  try {
    loading.value = true; // Start loading
    error.value = null; // Reset error

    const response = await axios.get(API_URL, {
      params: {
        search: searchQuery.value || '', // Pass search query if provided
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Handle Response
    if (response.data.success && response.data.school_list) {
      schools.value = response.data.school_list;
    } else {
      schools.value = [];
    }
  } catch (err) {
    console.error('Failed to fetch schools:', err);
    error.value = 'Failed to fetch schools. Please try again later.';
  } finally {
    loading.value = false; // End loading
    isInitialized.value = true; // Mark as initialized
  }
};

// Debounced Input Handler
const handleSearchInput = debounce(() => {
  fetchSchools();
}, 500); // Wait for 500ms after the user stops typing

// Initial Fetch
fetchSchools();
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
