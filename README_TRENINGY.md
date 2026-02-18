# OŠK Kamenná Poruba — Webová stránka

Komplexný koncept webu futbalového klubu OŠK Kamenná Poruba. Stránka obsahuje modernú navigáciu, prehľad hráčov, zápasov, tréningov, galériu, kontaktný formulár a login systém s rolami (tréner, hráč, rodič).

## Hlavné sekcie a funkcionality

- **Domov** — Úvodná sekcia s informáciami o klube a histórii
- **O nás** — Prehľad histórie, úspechov a komunity
- **Hráči** — Zoznam hráčov podľa kategórií, štatistiky, detailné karty hráčov (tréneri majú rozšírené možnosti)
- **Zápasy** — Prehľad všetkých zápasov, detail zápasu, štatistiky
- **Tréningy** — Systém správy tréningov (tréneri vytvárajú, hráči a rodičia potvrdzujú účasť)
- **Galéria** — Fotogaléria z klubových akcií a zápasov
- **Kontakt** — Kontaktný formulár, adresa, telefón, email
- **Prihlásenie** — Login systém s výberom roly (tréner, hráč, rodič)

## Prihlásenie a roly

- Prihlásenie cez tlačidlo v hornom paneli
- Výber roly: Tréner, Hráč, Rodič
- Testovacie účty (všetci heslo: `heslo123`):

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

## Tréningový systém

- Tréner: vytvára tréningy, spravuje účasť, uzatvára tréningy
- Hráč: potvrdzuje účasť na tréningoch svojej kategórie
- Rodič: potvrdzuje účasť za svoje deti
- Účasť: Prídem / Neprídem / Neviem
- Stav tréningu: Aktívny (možno meniť odpoveď) / Uzavretý (len na čítanie)

## Zápasy

- Zoznam všetkých zápasov (importované zo Sportsnet)
- Detail zápasu, štatistiky, udalosti, zostavy

## Hráči

- Zoznam hráčov podľa kategórií
- Detailné karty hráčov (tréneri môžu upravovať)

## Galéria

- Fotky z klubových akcií a zápasov (lokálne obrázky v images/galeria)

## Kontakt

- Kontaktný formulár, adresa, telefón, email

## Technológie a dáta

- HTML, CSS, JavaScript (statický frontend)
- Dáta o používateľoch, hráčoch, tréningoch v `database.js` a `localStorage`
- Žiadny backend — všetko beží v prehliadači

## Súbory

- `index.html` — hlavná stránka s navigáciou a všetkými sekciami
- `database.js` — databáza používateľov, hráčov, trénerov, rodičov
- `trainings.js` — logika tréningového systému
- `matches.html` — stránka so zápasmi
- `players_list_coach.html` — zoznam hráčov pre trénera
- `player_detail_coach.html` — detail hráča pre trénera

## Ako spustiť

1. Otvor `index.html` v prehliadači (stačí dvojklik alebo cez VS Code Live Server)
2. Prihlás sa testovacím účtom podľa roly
3. Skúšaj navigáciu, tréningy, zápasy, galériu, kontakty

---

Tento projekt je koncept — všetky dáta sú ilustračné a demo účely.
