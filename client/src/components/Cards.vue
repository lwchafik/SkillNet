<script setup>
  import Card from '@/components/Card.vue';
  import { useCoursesStore } from '@/stores/courses';
  import { storeToRefs } from 'pinia';

  const courseStore = useCoursesStore()
  const { courses } = storeToRefs(courseStore)  

  // fetch courses
  courseStore.getCourses()

  defineProps({
    limit: Number
  })

 
</script>

<template>
  <section class="bg-white mb-10">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:pb-4 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-8">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Courses</h2>
        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl">Explore our courses taught by the best instructors in the industry</p>
      </div>      
    </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-8 py-2 lg:py-4">
      <div v-for="(course, index) in courses.slice(0, limit || courses.length)" :key="index">
        <Card :course="course" />
      </div>      
    </div>
    
  </section>
</template>