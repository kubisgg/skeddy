# KARTA PROJEKTU

**Data:** 15.10.2026

## 1. Zespół i projekt

**Nazwa projektu:** Skeddy

**Członkowie zespołu i loginy GitHub:**

| Lp. | Login GitHub |
| --- | --- |
| 1 | [kubisgg](https://github.com/kubisgg) |
| 2 | [stolicaaa](https://github.com/stolicaaa) |

## 2. Branża, problem i użytkownicy

### Wybrana branża

Salon fryzjerski

### Problem do rozwiązania

Uniknięcie ograniczenia rezerwowania wizyt wyłącznie telefonicznie lub osobiście. Usprawnienie procesu przez możliwość sprawdzania kalendarza wizyt (dni oraz godziny) w UI na stronie internetowej dla klientów, zarządzanie bookowaniem wizyt po stronie salonu w szybki, jasny oraz przyjemny sposób.

### Użytkownicy docelowi

Właściciele salonów fryzjerskich szukający możliwości usprawnienia działania swojego salonu.

## 3. Główne funkcje aplikacji

| Nr | Funkcja | Krótki opis |
| --- | --- | --- |
| 1 | Kalendarz i rezerwacja wizyt | Użytkownik może wejść na stronę, sprawdzić dostępność godzinową w danym dniu dla każdego fryzjera oraz zarezerwować wizytę na wybrany termin. |
| 2 | Przedstawienie oferty z cenami | Umożliwienie zapoznania się z ofertą salonu i zatrudnionymi w nim pracownikami, łącznie z cenami wcześniej ustalonych usług. |
| 3 | Panel wyświetlania nadchodzących wizyt dla pracowników | Pracownik może podejrzeć nadchodzące wizyty i informacje o kliencie, np. numer telefonu do kontaktu. |
| 4 | Panel zarządzania dla właściciela salonu | Możliwość dodawania nowych pracowników, ustalania grafików oraz edytowania oferty salonu i osób w nim pracujących. |

## 4. Zakres projektu

### W zakresie MVP

Działająca aplikacja internetowa umożliwiająca klientom przeglądanie oferty salonu, sprawdzanie dostępnych terminów oraz rezerwowanie wizyt u wybranych fryzjerów.

Aplikacja będzie zawierać panel pracownika do przeglądania nadchodzących wizyt oraz panel administratora umożliwiający zarządzanie pracownikami, ich grafikami, usługami i rezerwacjami.

System będzie uwzględniał dostępność pracowników i zapobiegał rezerwowaniu zajętych terminów. Projekt zostanie przygotowany do uruchamiania i testowania w środowisku lokalnym.

### Poza zakresem

Integracja z płatnościami internetowymi, powiadomienia SMS oraz e-mail, dedykowana aplikacja iOS/Android, wdrożenie produkcyjne na zewnętrznym serwerze.

## 5. Stos technologiczny

| Warstwa / obszar | Wybrane technologie |
| --- | --- |
| Frontend | [Nuxt](https://nuxt.com/) |
| Backend / API | [Nitro](https://nitro.build/) |
| Baza danych | SQLite lub rozwiązanie chmurowe |
| Hosting / środowiska testowe | GitHub Actions, wdrożenie (np. Docker) na serwerze lub rozwiązanie chmurowe (np. [Vercel](https://vercel.com/home)) |

## 6. Podział ról i odpowiedzialności

| Członek zespołu | Rola / odpowiedzialność |
| --- | --- |
| kubisgg | Kierownik, programista, testy, dokumentacja |
| stolicaaa | Programista, testy, dokumentacja |

## 7. Repozytorium projektu

[Link do GitHub](https://github.com/kubisgg/skeddy)
