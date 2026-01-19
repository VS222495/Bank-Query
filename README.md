# Banking System Frontend

Next.js aplikace pro správu bankovního systému připojená k API na `https://v0-banking-system-backend-phi.vercel.app/`.

## Funkce

- 📊 **Dashboard** - Přehled transakcí, zákazníků a účtů
- 💳 **Transakce** - Seznam všech transakcí s detaily (vklady, výběry, převody)
- 👥 **Zákazníci** - Správa zákaznických účtů
- 🏦 **Bankovní účty** - Přehled všech účtů se zůstatky
- ⚡ **React Query** - Automatický caching, real-time aktualizace, loading stavy
- 🔄 **Auto-refresh** - Data se automaticky obnovují při přepnutí okna

## Technologie

- **Next.js 14** - React framework s App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Styling
- **React Query (TanStack Query)** - Datový caching a synchronizace
- **Banking API** - RESTful API backend

## Instalace

### Rychlá instalace (Windows)

1. **Nainstaluj Node.js** z [https://nodejs.org/](https://nodejs.org/)
2. **Otevři PowerShell** v adresáři projektu a spusť:

```powershell
.\setup.ps1
```

Skript automaticky zkontroluje Node.js a nainstaluje všechny závislosti.

### Manuální instalace

#### 1. Nainstaluj Node.js

Stáhni a nainstaluj Node.js z [https://nodejs.org/](https://nodejs.org/) (doporučená verze LTS).

#### 2. Nainstaluj závislosti

Otevři PowerShell v adresáři projektu (`bank-query`) a spušť:

```powershell
npm install
```

#### 3. Spušť vývojový server

```powershell
npm run dev
```

Aplikace bude dostupná na [http://localhost:3000](http://localhost:3000)

## Skripty

- `npm run dev` - Spustí vývojový server
- `npm run build` - Vytvoří production build
- `npm start` - Spustí production server
- `npm run lint` - Zkontroluje kód

## Struktura projektu

```
bank-query/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout s navigací
│   ├── page.tsx           # Dashboard (hlavní stránka)
│   ├── transactions/      # Stránka transakcí
│   ├── customers/         # Stránka zákazníků
│   └── accounts/          # Stránka účtů
├── components/            # React komponenty
│   └── TransactionList.tsx
├── lib/                   # Utility funkce
│   └── api.ts            # API klient
├── types/                 # TypeScript typy
│   └── index.ts
└── public/               # Statické soubory
```

## API Endpoints

Aplikace se připojuje k těmto endpointům:

- `GET /api/transactions` - Seznam transakcí
- `GET /api/customers` - Seznam zákazníků
- `GET /api/accounts` - Seznam účtů
- `POST /api/transactions` - Vytvoření nové transakce
- A další...

## React Query výhody

Aplikace využívá React Query (TanStack Query) pro:

- **Automatický caching** - Data se ukládají do cache a nemusí se stahovat opakovaně
- **Background refetch** - Data se automaticky aktualizují na pozadí
- **Loading stavy** - Hezké loading indikátory během načítání
- **Error handling** - Automatická správa chyb
- **Mutations** - Jednoduché vytváření, aktualizace a mazání dat
- **Optimistic updates** - UI se aktualizuje ještě před dokončením požadavku

Všechny React Query hooks najdeš v `hooks/useQueries.ts`.

📖 **[Příklady použití React Query](REACT_QUERY_EXAMPLES.md)** - Kompletní průvodce s příklady kódu

## VS Code

Doporučené rozšíření pro VS Code:
- ESLint
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

Otevři projekt ve VS Code:

```powershell
cd bank-query
code .
```
