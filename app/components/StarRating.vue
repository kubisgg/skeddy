<script setup lang="ts">
const props = defineProps<{ average: number, count: number }>()

const MAX_STARS = 5
const STAR_PATH = 'M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z'

const fillPercent = computed(() => `${Math.min(Math.max(props.average / MAX_STARS, 0), 1) * 100}%`)
const label = computed(() => `Ocena ${formatRating(props.average)} na ${MAX_STARS}, na podstawie ${props.count} opinii`)
</script>

<template>
  <p class="flex items-center gap-1.5 text-sm" :aria-label="label" :title="label">
    <span class="relative inline-flex" aria-hidden="true">
      <span class="flex text-(--ui-border-accented)">
        <svg v-for="star in MAX_STARS" :key="star" viewBox="0 0 24 24" class="size-4 fill-current"><path :d="STAR_PATH" /></svg>
      </span>
      <span class="absolute inset-y-0 left-0 flex overflow-hidden text-amber-500" :style="{ width: fillPercent }">
        <svg v-for="star in MAX_STARS" :key="star" viewBox="0 0 24 24" class="size-4 shrink-0 fill-current"><path :d="STAR_PATH" /></svg>
      </span>
    </span>
    <span class="font-medium text-highlighted" aria-hidden="true">({{ formatRating(average) }})</span>
  </p>
</template>
