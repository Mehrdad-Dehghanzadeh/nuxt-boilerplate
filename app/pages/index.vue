<script lang="ts" setup>
import { showSnackbar } from '~/utils/snackbar'

useHead({
  title: 'صفحه اصلی'
})

onMounted(() => {
  if (window) {
    showSnackbar('error', 'adad')
  }
})
</script>

<template>
  <main></main>
</template>
