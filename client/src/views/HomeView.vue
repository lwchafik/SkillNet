<template>
  <!-- Hero section -->
  <section class="bg-white">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
        >
          Your gate to future digital skills
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          Learn a new digital skill with the best instructors and gain a real
          world experience with us.
        </p>
        <router-link
          to="courses"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Get started
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </router-link>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="../assets/images/7 SCENE.png" alt="mockup" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- social proof-->
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:pb-4 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-8">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black">
          Our School in Numbers
        </h2>
      </div>
    </div>
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl
        class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3"
      >
        <div class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-3xl md:text-4xl font-extrabold">9k+</dt>
          <dd class="font-light text-gray-700">students</dd>
        </div>
        <div class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-3xl md:text-4xl font-extrabold">25+</dt>
          <dd class="font-light text-gray-700">courses</dd>
        </div>
        <div class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-3xl md:text-4xl font-extrabold">10+</dt>
          <dd class="font-light text-gray-700">Instructors</dd>
        </div>
      </dl>
    </div>
  </section>

  <!-- About section -->
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:pb-4 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-2">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">About us</h2>
      </div>      
    </div>
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
    >
      <img
        class="w-full dark:hidden"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
        alt="dashboard image"
      />
      <img
        class="w-full hidden dark:block"
        src="../assets/images/SkillNet.jpg"
        alt="dashboard image"
      />
      <div class="mt-4 md:mt-0">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Let's create more digital skill holders today.
        </h2>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          SkillNet helps you learn with confident and communities of people who
          share your interests. Connecting with your friends and family as well
          as discovering new ones is easy with features like Groups.
        </p>
      </div>
    </div>
  </section>

  <!-- Courses section -->
  <Cards :limit="3" />
  <div class="text-center mb-24">
    <RouterLink
      to="/courses"
      class="text-center text-md font-semibold text-white bg-primary-700 px-4 py-2 my-5 rounded-lg"
    >
      View more
    </RouterLink>
  </div>

  <!-- Newsletter section -->
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center">
        <h2
          class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white"
        >
          Sign up for our newsletter
        </h2>
        <p
          class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400"
        >
          Stay up to date with the announcements and exclusive discounts feel
          free to sign up with your email.
        </p>
        <form @submit.prevent="emailSignup">
          <div
            class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0"
          >
            <div class="relative w-full">
              <label
                for="email"
                class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Email address</label
              >
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
              </div>
              <input
                v-model="email"
                class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div
            class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300"
          >
            We care about the protection of your data.
            <a
              href="#"
              class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >Read our Privacy Policy</a
            >.
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Testimonial section -->
  <section class="bg-white">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
        <svg
          class="h-12 mx-auto mb-3 text-gray-400"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p class="text-2xl font-medium text-gray-900">
            "SkillNet is an excellent school for learning digital skills. The
            courses are practical, engaging, and taught by experienced
            instructors who are passionate about helping students succeed in the
            digital world."
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <img
            class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
            alt="profile picture"
          />
          <div
            class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
          >
            <div class="pr-3 font-medium text-gray-900">Micheal Gough</div>
            <div
              class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"
            >
              CEO at SkillNet
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import Cards from "@/components/Cards.vue";
import { ref } from "vue";

const email = ref("");

const emailSignup = async () => {
  await fetch("https://skillnet-server.onrender.com/contact-form/emails", {
    method: "POST",
    body: JSON.stringify({ email: email.value }),
    headers: { "Content-type": "application/json" },
  }).then((res) => {
    if (res.err) {
      console.log(res.err);
    } else {
      email.value = "";
    }
  });
};
</script>
