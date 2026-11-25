<script setup lang="ts">
import type { Salon } from '~/composables/useSalonOffer'

defineProps<{ salon: Omit<Salon, 'services'> }>()

// Set after mount: the server's weekday may differ from the visitor's,
// which would cause a hydration mismatch.
const todayIndex = ref<number | null>(null)
onMounted(() => {
  todayIndex.value = (new Date().getDay() + 6) % 7
})
</script>

<template>
  <UCard as="aside" variant="soft" aria-label="Informacje o zakładzie" :ui="{ body: 'divide-y divide-accented py-1 sm:py-1' }">
    <section class="py-5">
      <h2 class="mb-2 font-bold text-highlighted">
        O zakładzie
      </h2>
      <p class="leading-relaxed">
        {{ salon.description }}
      </p>
    </section>

    <section class="py-5">
      <h2 class="mb-2 font-bold text-highlighted">
        Adres
      </h2>
      <address class="not-italic leading-relaxed">
        {{ salon.address.street }}<br>
        {{ salon.address.postalCode }} {{ salon.address.city }}
      </address>
    </section>

    <section class="py-5">
      <h2 class="mb-2 font-bold text-highlighted">
        Godziny otwarcia
      </h2>
      <dl>
        <div
          v-for="(entry, index) in salon.openingHours"
          :key="entry.day"
          class="flex justify-between gap-4 py-1.5"
          :class="{ 'font-bold text-primary': index === todayIndex }"
        >
          <dt class="flex items-center gap-2">
            {{ entry.day }}
            <UBadge v-if="index === todayIndex" label="dziś" size="sm" />
          </dt>
          <dd>{{ entry.hours ?? 'Zamknięte' }}</dd>
        </div>
      </dl>
    </section>
  </UCard>
</template>
