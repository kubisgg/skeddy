<script setup lang="ts">
import type { Employee, OpeningHours } from '~/composables/useSalonOffer'

defineProps<{ employees: Employee[], openingHours: OpeningHours[] }>()
</script>

<template>
  <UCard as="section" variant="soft" aria-labelledby="employees-title">
    <h2 id="employees-title" class="mb-3 font-bold text-highlighted">
      Pracownicy
    </h2>

    <ul v-if="employees.length" class="divide-y divide-accented">
      <li v-for="employee in employees" :key="employee.id" class="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
        <UAvatar :alt="employee.name" size="lg" />
        <div class="min-w-0 flex-1">
          <h3 class="font-medium leading-snug text-highlighted">
            {{ employee.name }}
          </h3>
          <p class="text-sm text-muted">
            {{ employee.role }}
          </p>
          <StarRating :average="employee.rating.average" :count="employee.rating.count" class="mt-1" />
          <ul v-if="employee.categories.length" class="mt-1.5 flex flex-wrap gap-1" aria-label="Kategorie">
            <li v-for="category in employee.categories" :key="category">
              <UBadge :label="category" color="neutral" variant="outline" size="sm" />
            </li>
          </ul>
          <div class="mt-2.5">
            <EmployeeAvailability :employee="employee" :opening-hours="openingHours" />
          </div>
        </div>
      </li>
    </ul>

    <p v-else class="text-muted">
      Ten salon nie ma jeszcze dodanych pracowników.
    </p>
  </UCard>
</template>
