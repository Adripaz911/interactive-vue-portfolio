<template>
  <section
    id="contact"
    class="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-800 text-white"
  >
    <h2 class="text-4xl font-bold mb-6">Contact</h2>
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col gap-4 w-full max-w-md"
      ref="formRef"
    >
      <input
        v-model="name"
        type="text"
        placeholder="Name"
        class="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <textarea
        v-model="message"
        placeholder="Message"
        class="px-4 py-2 rounded-lg bg-gray-700 text-white h-32 focus:outline-none focus:ring-2 focus:ring-green-400"
      ></textarea>
      <button
        type="submit"
        class="px-6 py-3 bg-green-400 hover:bg-green-500 rounded-lg font-semibold transition-colors duration-300 cursor-pointer"
      >
        Send
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
import { gsap } from "gsap";

const name = ref("");
const email = ref("");
const message = ref("");

const { appContext } = getCurrentInstance()!;
const notyf = appContext.config.globalProperties.$notyf;

const formRef = ref<HTMLElement | null>(null);

const onSubmit = () => {
  notyf.success("Message sent successfully!");
  name.value = "";
  email.value = "";
  message.value = "";
};

onMounted(() => {
  if (formRef.value) {
    gsap.from(formRef.value, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      scrollTrigger: { trigger: formRef.value, start: "top 90%" },
      ease: "power3.out",
    });
  }
});
</script>
