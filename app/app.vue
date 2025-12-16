<script lang="ts" setup>
import Snackbar from '@includes/Snackbar/Snackbar.client.vue'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nuxt Boilerplate` : 'Nuxt Boilerplate'
  }
})
</script>

<template>
  <Snackbar />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
