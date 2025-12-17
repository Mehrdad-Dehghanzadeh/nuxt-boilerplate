<script lang="ts" setup>
import type { TSnackbarElement, TSnackbarDetail } from './types'

const snackbarRef = useTemplateRef<TSnackbarElement>('snackbar-ref')
const show = ref<boolean>(false)
const detail = shallowRef<TSnackbarDetail | null>(null)

function hide() {
  show.value = false
  detail.value = null
}

function handleEvent(e: CustomEvent) {
  detail.value = { ...e.detail }
  if (!isEmptyObj(detail.value)) {
    nextTick()
    show.value = true
    setTimeout(hide, detail.value?.config.delay)
  }
}

function setEvent() {
  if (snackbarRef.value && !snackbarRef.value?.isSetEvent) {
    snackbarRef.value?.addEventListener('showSnackbar', handleEvent as EventListener)
    snackbarRef.value.isSetEvent = true
  }
}

onMounted(() => {
  setEvent()
})
</script>

<template>
  <div
    :class="[
      'snackbar',
      `${detail?.type ? `snackbar-${detail?.type}` : ''}`,
      { 'snackbar--show': show }
    ]"
    :id="SNACKBAR_ELEMENT_ID"
    ref="snackbar-ref"
  ></div>
</template>

<style lang="scss" src="./Snackbar.scss" />
