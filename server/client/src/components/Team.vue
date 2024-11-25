<template>
  <div class="text-center text-gray-500 dark:text-gray-400">
    <img
      class="mx-auto mb-4 w-36 h-36 rounded-full"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
      alt="Bonnie Avatar"
    />
    <h3
      class="mb-1 text-2xl font-bold tracking-tight text-gray-900"
    >
      <a href="#">{{instructor.firstName}} {{ instructor.lastName }}</a>
    </h3>
    <p>{{instructor.job}}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  instructor: Object,
});
</script>

<style>
#avatar {
  color: #94a3b8;
}
</style>
