<template>
  <section
    id="about"
    ref="aboutRef"
    class="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-900 text-white opacity-0"
  >
    <h2 class="text-4xl font-bold mb-6">About</h2>
    <p class="max-w-xl text-center opacity-80">{{ aboutText }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const aboutRef = ref<HTMLElement | null>(null);
const aboutText =
  "CodeSculptor builds modern, interactive web interfaces using Vue, TypeScript, Tailwind, and GSAP animations.";

onMounted(() => {
  if (aboutRef.value) {
    gsap.to(aboutRef.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.value,
        start: "top 80%",
      },
    });
  }
});
</script>
