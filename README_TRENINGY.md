# OŠK Kamenná Poruba - Tréningový Systém

## Súbory

- **Fotball Team Kamenna poruba concept.html** - Hlavný HTML súbor s navigáciou a loginom
- **database.js** - Databáza všetkých používateľov, hráčov, trénersov a rodín
- **trainings.js** - Kompletný systém správy tréningov (novo oddělené)

## Ako to funguje

### 1. Prihlásenie

- Klikni na "Prihlásiť sa" v hornom paneli
- Vyber si rolu: Tréner, Hráč alebo Rodič
- Zadaj používateľské meno a heslo (všetci: `heslo123`)

### Testovateľne účty:

```
Tréneri:
- jan_klimo
- marian_horvath
- peter_novak

Hráči:
- jozef_adamcik
- marko_adamcik
- lukas_kuba
- jakub_horvath
- robert_sabo
- stefan_polak
- tomas_kamenicky

Rodičia:
- anna_adamcikova
- milan_kuba
- eva_horvathova
- julius_kamenicky
```

### 2. Tréningy v Navigácii

- Po prihlásení sa v navigácii objaví "Tréningy" link
- Kliknutím na neho sa načítajú všetky funkcie z `trainings.js`

### 3. Podľa Roly:

**Tréner:**

- Vytvára nové tréningy (dátum, čas, typ, trvanie, kategória)
- Všetci hráči v kategórii sa automaticky pridajú so stavom "neviem"
- Vidí tri skupiny hráčov: Prídu | Neprídú | Nevedia
- Môže kliknutím "Začať tréning" uzavrieť zmeny (hráči potom nemôžu meniť odpoveď)
- Vidí percentá účasti

**Hráč:**

- Vidí všetky dostupné tréningy svojej kategórie
- Môže kliknúť: "Prídem" | "Neprídnem" | "Neviem"
- Aktivne tréningy môže meniť, uzavreté nie

**Rodič:**

- Pridá si svoje deti
- Za každé dieťa môže značiť účasť na tréningoch
- Vidí rovnaké tréningy ako hráči

## Stavy Tréningu

### Aktívny (🟢 zelený)

- Hráči môžu zmeniť svoju odpoveď
- Vidí sa štyri možnosti pre každého hráča v liste

### Uzavretý (🔴 červený)

- Po kliknutí "Začať tréning" sa tréning uzavrie
- Hráči nemôžu zmeniť odpoveď
- Vidí sa iba finálny stav (Prídem/Neprídnem/Neviem)

## Stavy Účasti

- **Prídu** (🟢 zelené) - Hráč potvrdil "Prídem"
- **Neprídú** (🔴 červené) - Hráč potvrdil "Neprídnem"
- **Nevedia** (⚪ sivé) - Hráč zatiaľ neodpovedal alebo klikol "Neviem"

## Kategórie Hráčov

- Prípravky (U8-U9)
- Žiaci (U10-U12)
- Dorastenci (U13-U18)
- Dospelí - Mladí (18-25)
- Dospelí - Skúsení (25+)

## Typy Tréningov

- Technický tréning
- Taktický tréning
- Fyzický tréning
- Prieťahový zápas

## Dáta

Všetky dáta sa ukladajú v:

- `localStorage` - tréningy, účasť, deti rodičov
- `database.js` - predefined dáta o používateľoch, hráčoch atď.

## Aktualizácie

V verzii s oddelenými kódmi:

- **trainings.js** - všetky funkcie: createTraining(), refreshPlayerTrainings(), etc.
- HTML načítava `trainings.js` cez `<script src="trainings.js"></script>`
- Pri kliknutí "Tréningy" sa spustí `showTrainingView()` ktorá inicializuje všetko
