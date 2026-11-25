<script setup lang="ts">
import type { Salon } from '~/composables/useSalonOffer'

defineProps<{ salon: Omit<Salon, 'services'> }>()

const SALON_TIME_ZONE = 'Europe/Warsaw'
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const weekdayFormatter = new Intl.DateTimeFormat('en-US', { timeZone: SALON_TIME_ZONE, weekday: 'short' })

function salonWeekdayIndex() {
  return WEEKDAYS.indexOf(weekdayFormatter.format(new Date()))
}

const todayIndex = ref<number | null>(null)
let refreshTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  todayIndex.value = salonWeekdayIndex()
  refreshTimer = setInterval(() => {
    todayIndex.value = salonWeekdayIndex()
  }, 60_000)
})

onBeforeUnmount(() => clearInterval(refreshTimer))
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
