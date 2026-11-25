<script setup lang="ts">
import type { Employee, OpeningHours, Weekday } from '~/composables/useSalonOffer'

const props = defineProps<{ employee: Employee, openingHours: OpeningHours[] }>()

const DAYS_AHEAD = 28
const SALON_TIME_ZONE = 'Europe/Warsaw'
const WEEKDAYS: Weekday[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const WEEKDAY_SHORT = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd']

const todayFormatter = new Intl.DateTimeFormat('en-CA', { timeZone: SALON_TIME_ZONE })
const longFormatter = new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long' })
const shortFormatter = new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', day: 'numeric', month: 'short' })

interface Day {
  date: Date
  dayOfMonth: number
  label: string
  hours: string | null
}

const open = ref(false)

const days = computed<Day[]>(() => {
  if (!open.value) return []
  const [year, month, day] = todayFormatter.format(new Date()).split('-').map(Number) as [number, number, number]
  return Array.from({ length: DAYS_AHEAD }, (_, offset) => {
    const date = new Date(Date.UTC(year, month - 1, day + offset))
    const weekdayIndex = (date.getUTCDay() + 6) % 7
    const salonHours = props.openingHours[weekdayIndex]?.hours ?? null
    const works = props.employee.workDays.includes(WEEKDAYS[weekdayIndex]!)
    const hours = works ? salonHours : null
    return {
      date,
      dayOfMonth: date.getUTCDate(),
      label: `${longFormatter.format(date)}: ${hours ? `dostępny, ${hours}` : 'niedostępny'}`,
      hours
    }
  })
})

const leadingBlanks = computed(() => {
  const first = days.value[0]
  return first ? (first.date.getUTCDay() + 6) % 7 : 0
})

const rangeLabel = computed(() => {
  const first = days.value[0]
  const last = days.value.at(-1)
  return first && last ? `${shortFormatter.format(first.date)} – ${shortFormatter.format(last.date)}` : ''
})

const availableCount = computed(() => days.value.filter(day => day.hours).length)
</script>

<template>
  <UPopover v-model:open="open">
    <UButton label="Zobacz dostępność" icon="i-lucide-calendar-days" size="xs" color="neutral" variant="outline" />

    <template #content>
      <div class="w-72 p-4">
        <p class="font-bold text-highlighted">
          {{ employee.name }}
        </p>
        <p class="text-sm text-muted">
          {{ rangeLabel }} · dostępny {{ availableCount }} z {{ DAYS_AHEAD }} dni
        </p>

        <div class="mt-3 grid grid-cols-7 gap-1 text-center text-xs">
          <span v-for="name in WEEKDAY_SHORT" :key="name" class="pb-1 font-medium text-muted" aria-hidden="true">
            {{ name }}
          </span>
          <span v-for="blank in leadingBlanks" :key="`blank-${blank}`" aria-hidden="true" />
          <span
            v-for="(day, index) in days"
            :key="day.date.toISOString()"
            :title="day.label"
            :aria-label="day.label"
            role="img"
            class="flex aspect-square items-center justify-center rounded-md"
            :class="[
              day.hours ? 'bg-primary text-inverted font-bold' : 'bg-elevated text-dimmed line-through',
              index === 0 && 'ring-2 ring-offset-1 ring-primary/40'
            ]"
          >
            {{ day.dayOfMonth }}
          </span>
        </div>

        <div class="mt-3 flex gap-4 text-xs text-muted">
          <span class="flex items-center gap-1.5"><span class="size-3 rounded-sm bg-primary" />Dostępny</span>
          <span class="flex items-center gap-1.5"><span class="size-3 rounded-sm bg-elevated" />Niedostępny</span>
        </div>
      </div>
    </template>
  </UPopover>
</template>
