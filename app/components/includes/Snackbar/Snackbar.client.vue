<script lang="ts" setup>
const snackbarRef = useTemplateRef('snackbar-ref')
const isSetEvent = ref<boolean>(false)

function showSnackbar() {
  console.log('show')
}

function setEvent() {
  if (!isSetEvent.value) {
    snackbarRef.value?.addEventListener('showSnackbar', showSnackbar)
    isSetEvent.value = true
  }
}

onMounted(() => {
  setEvent()
})
</script>

<template>
  <div class="snackbar" id="snackbar" ref="snackbar-ref"></div>
</template>

<style lang="scss" src="./Snackbar.scss" />
