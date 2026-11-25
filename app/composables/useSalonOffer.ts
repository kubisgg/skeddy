import salonData from '~/data/salon.json'

export interface Service {
  id: string
  name: string
  price: number
  durationMinutes: number
  active: boolean
}

export interface OpeningHours {
  day: string
  hours: string | null
}

export interface Salon {
  name: string
  category: string
  description: string
  address: { street: string, postalCode: string, city: string }
  openingHours: OpeningHours[]
  photos: { src: string, alt: string }[]
  services: Service[]
}

export function useSalonOffer() {
  const salon = salonData as Salon
  const { services, ...details } = salon

  return {
    salon: details,
    services: services.filter(service => service.active)
  }
}
