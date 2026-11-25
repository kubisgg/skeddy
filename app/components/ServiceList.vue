<script setup lang="ts">
import type { Service } from '~/composables/useSalonOffer'

const props = defineProps<{ services: Service[] }>()

const query = ref('')

const visibleServices = computed(() => {
  const needle = normalizeForSearch(query.value)
  if (!needle) return props.services
  return props.services.filter(service => normalizeForSearch(service.name).includes(needle))
})

function pluralizeServices(count: number) {
  if (count === 1) return 'usługa'
  const lastDigit = count % 10
  const lastTwo = count % 100
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14)) return 'usługi'
  return 'usług'
}

const resultLabel = computed(() => {
  const count = visibleServices.value.length
  return `${count} ${pluralizeServices(count)}`
})
</script>

<template>
  <section aria-labelledby="services-title">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <h2 id="services-title" class="text-3xl font-extrabold tracking-tight text-highlighted">
        Usługi
      </h2>
      <UInput
        v-model="query"
        type="search"
        icon="i-lucide-search"
        size="lg"
        placeholder="Szukaj usługi"
        aria-label="Szukaj usługi po nazwie"
        autocomplete="off"
        class="w-full sm:w-72"
      />
    </div>

    <p class="mt-2 mb-3 text-sm text-muted" aria-live="polite">
      {{ resultLabel }}
    </p>

    <ul v-if="visibleServices.length" class="divide-y divide-default border-y border-default">
      <li v-for="service in visibleServices" :key="service.id" class="flex items-center justify-between gap-3 py-4 sm:gap-6">
        <div>
          <h3 class="text-[1.0625rem] font-medium leading-snug text-highlighted">
            {{ service.name }}
          </h3>
          <p class="mt-1 text-sm text-muted">
            {{ formatDuration(service.durationMinutes) }}
          </p>
        </div>
        <div class="flex items-center gap-2.5 sm:gap-4">
          <p class="text-[1.0625rem] font-bold whitespace-nowrap text-highlighted">
            {{ formatPrice(service.price) }}
          </p>
          <UButton label="Umów" />
        </div>
      </li>
    </ul>

    <UEmpty
      v-else
      icon="i-lucide-search-x"
      title="Brak pasujących usług"
      :description="`Żadna usługa nie pasuje do „${query.trim()}”. Sprawdź pisownię albo wpisz krótszą frazę.`"
      :actions="[{ label: 'Wyczyść wyszukiwanie', color: 'neutral', variant: 'outline', onClick: () => { query = '' } }]"
      variant="soft"
    />
  </section>
</template>
