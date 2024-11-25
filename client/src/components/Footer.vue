<template>
  <footer class="p-4 bg-primary-800 md:p-8 lg:p-10">
    <div class="mx-auto max-w-screen-xl text-center">
      <a
        href="#"
        class="flex justify-center items-center text-2xl font-bold text-white"
      >        
        SkillNet
      </a>
      <p class="my-6 text-gray-100">
        First school in Algeria teaching digital skills
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
        </li>
      </ul>
      <span class="text-sm text-gray-100 sm:text-center"
        >&copy; 2021-{{currentYear}} <router-link to="/" class="hover:underline">Skillnet</router-link>. All
        Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<script setup>
  const currentYear = new Date().getFullYear()
</script>