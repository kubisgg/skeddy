import salonData from '~/data/salon.json'

export interface Service {
  id: string
  name: string
  price: number
  durationMinutes: number
  active: boolean
}

export type EmployeeCategory = 'Włosy' | 'Broda' | 'Farbowanie'

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export interface Employee {
  id: string
  name: string
  role: string
  categories: EmployeeCategory[]
  workDays: Weekday[]
  rating: { average: number, count: number }
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
  employees: Employee[]
}

export function useSalonOffer() {
  const salon = salonData as Salon
  const { services, employees, ...details } = salon

  return {
    salon: details,
    services: services.filter(service => service.active),
    employees: employees.filter(employee => employee.active)
  }
}
