<template>
  <div
    class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
  >
    <!-- <div class="h-56 w-full">
      <a href="#">
        <img
          class="mx-auto h-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
          alt=""
        />
        <img
          class="mx-auto hidden h-full dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
          alt=""
        />
      </a>
    </div> -->
    <div>
      <!-- <a
        href="#"
        class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max</a
      > -->
      <p
        class="text-lg font-semibold leading-tight text-gray-900 hover:underline hover:cursor-pointer"
        @click="getCourse(course.id)"
      >
        {{ course.title }}
      </p>

      <div class="mt-2">
        <p class="text-sm font-medium text-gray-500 ">
          {{ course.category.title }}
        </p>
      </div>

      <div class="mt-2">
        <p class="text-sm font-medium text-gray-800 ">
          {{ course.description }}
        </p>
      </div>

      <div class="mt-4 flex items-center justify-between gap-4">
        <p
          class="text-2xl font-extrabold leading-tight text-gray-900"
        >
          ${{ course.price }}
        </p>

        <button
          type="button"
          class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Buy Course
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  course: Object,
});

const getCourse = async (id) => {
  await fetch(`http://localhost:5000/courses/${id}`).then(res => res.json())
}
</script>
