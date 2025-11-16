<template>
  <nav
    ref="nav"
    class="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 p-4 flex justify-center gap-8 transition-all duration-300"
  >
    <a
      v-for="link in links"
      :key="link.id"
      :href="`#${link.id}`"
      class="text-white hover:text-green-400 transition-colors"
    >
      {{ link.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const nav = ref<HTMLElement | null>(null);

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY > 50 && nav.value) {
      nav.value.classList.add("shadow-lg", "bg-black/70");
    } else if (nav.value) {
      nav.value.classList.remove("shadow-lg", "bg-black/70");
    }
  };
  window.addEventListener("scroll", handleScroll);
});
</script>
