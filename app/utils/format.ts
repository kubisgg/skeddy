const priceFormatter = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
  minimumFractionDigits: 0
})

export function formatPrice(pln: number) {
  return priceFormatter.format(pln)
}

const ratingFormatter = new Intl.NumberFormat('pl-PL', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
})

export function formatRating(rating: number) {
  return ratingFormatter.format(rating)
}

export function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  if (!hours) return `${rest} min`
  return rest ? `${hours} godz. ${rest} min` : `${hours} godz.`
}

export function normalizeForSearch(text: string) {
  return text
    .toLocaleLowerCase('pl-PL')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ł/g, 'l')
    .trim()
}
