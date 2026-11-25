<script setup lang="ts">
const { salon, services } = useSalonOffer()

useHead({ title: `${salon.name} | Skeddy` })
useSeoMeta({ description: salon.description })
</script>

<template>
  <UContainer as="main" class="grid items-start gap-10 py-6 pb-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:pt-8">
    <div>
      <SalonGallery :photos="salon.photos" />

      <div class="mt-7 mb-10">
        <h1 class="text-4xl font-extrabold leading-none tracking-tighter text-balance text-highlighted sm:text-5xl">
          {{ salon.name }}
        </h1>
        <p class="mt-2.5 text-muted">
          {{ salon.category }}, {{ salon.address.street }}, {{ salon.address.city }}
        </p>
      </div>

      <ServiceList :services="services" />
    </div>

    <SalonDetails :salon="salon" class="lg:sticky lg:top-[calc(var(--ui-header-height)+1.5rem)]" />
  </UContainer>
</template>
