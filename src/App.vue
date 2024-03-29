<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './Components/Navbar.vue'
import Timer from './Components/Timer.vue'
import VerticalCard from './Components/VerticalCard.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <body>
    <Timer />
    <br>
    <VerticalCard />
  </body>
</template>
