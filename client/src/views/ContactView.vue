<template>
  <section class="bg-white">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
      >
        Contact Us
      </h2>
      <p
        class="mb-8 lg:mb-16 font-light text-center text-gray-800 sm:text-xl"
      >
        Got a question about our courses? Want to send feedback about your experience? Let us know.
      </p>
      <form @submit.prevent="submitForm" class="space-y-8">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your email</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@skillnet.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Subject</label
          >
          <input
            type="text"
            v-model="subject"
            id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your message</label
          >
          <textarea
            v-model="comment"
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

  const email = ref("")
  const subject = ref("")
  const comment = ref("")

  // const contact = {
  //   email: email.value,
  //   subject: subject.value,
  //   comment: comment.value
  // }

  const submitForm = async () => {
    const res = await fetch('https://skillnet-server.onrender.com/contact-form', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        subject: subject.value,
        comment: comment.value
      }),
      headers: {'Content-type': 'application/json'},
    })

    if (res.err) {
      console.log(res.err)
    } else {
      email.value = ""
      subject.value = ""
      comment.value = ""
    }
  }
</script>
