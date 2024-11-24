<template>
  <section class="bg-white mb-10">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:pb-4 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Team</h2>
        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl">Get to know our highly skilled instructors in the industry with dozens of year experience at different national and international companies</p>
      </div>  
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 lg:px-8 py-2 lg:py-4">
      <div v-for="instructor in instructors" :key="instructor.id">
        <Team :instructor="instructor" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import Team from '@/components/Team.vue';
  import { useInstructorStore } from '@/stores/instructor';
  import { storeToRefs } from 'pinia';

  const instructorStore = useInstructorStore()
  const { instructors } = storeToRefs(instructorStore)

  

  // fetch instructors
  instructorStore.getInstructors()
</script>