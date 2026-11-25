<script setup lang="ts">
import type { Salon } from '~/composables/useSalonOffer'

defineProps<{ photos: Salon['photos'] }>()
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-[auto_5rem] gap-1.5 overflow-hidden rounded-md sm:grid-cols-[2fr_1fr] sm:grid-rows-[repeat(3,8.5rem)]">
    <img
      v-for="(photo, index) in photos.slice(0, 4)"
      :key="photo.src"
      :src="photo.src"
      :alt="photo.alt"
      :loading="index === 0 ? 'eager' : 'lazy'"
      :fetchpriority="index === 0 ? 'high' : undefined"
      class="size-full bg-elevated object-cover first:col-span-full first:aspect-3/2 sm:first:col-span-1 sm:first:row-span-3 sm:first:aspect-auto"
    >
  </div>
</template>
