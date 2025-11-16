<template>
  <section
    id="projects"
    class="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-900 text-white"
  >
    <h2 class="text-4xl font-bold mb-8">Projects</h2>
    <div class="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="project-card bg-gray-800 p-6 rounded-xl shadow-lg text-center opacity-0"
      >
        <h3 class="font-semibold text-xl mb-2">{{ project.title }}</h3>
        <p class="opacity-80">{{ project.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

const projects = [
  { title: "Project One", desc: "Interactive Vue portfolio demo." },
  { title: "Project Two", desc: "GSAP-powered card animations." },
  { title: "Project Three", desc: "Responsive Tailwind UI showcase." },
];

onMounted(async () => {
  const cards = gsap.utils.toArray<HTMLElement>(".project-card");

  // explicitly set starting state
  gsap.set(cards, { opacity: 0, y: 40 });

  // animate to visible
  gsap.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
</script>
