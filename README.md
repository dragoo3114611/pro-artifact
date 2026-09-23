# Klub Pult — game club boshqaruv paneli (prototip)

Kompyuter klubi (game club) uchun admin/operator paneli prototipi. Bitta `index.html` fayl, brauzerda ochiladi, maʼlumotlar brauzerning `localStorage`ida saqlanadi.

## Boʻlimlar
- **Zal** — 50 ta kompyuter, GameClass uslubidagi jadval va kartalar koʻrinishi. Holatlar: Boʻsh, Band, Pauza, Oʻchiq.
  Amallar: Start, Qoʻshimcha vaqt, Stop, Koʻchirish, Pauza, Qayta yuklash, Oʻchirish, Yoqish, Xabar yuborish, Bar xizmati.
  Toʻlov turlari: oldindan toʻlov, keyin toʻlov, mijoz balansidan. Pastda xabarlar jurnali bor: yuqoriga sursangiz eski yozuvlar yuklanadi, balandligini ham oʻzgartirish mumkin.
- **Mijozlar** — akkaunt (login/parol), balans, bonus darajalari, tashriflar tarixi.
- **Bar** — ichimliklar, yangi mahsulot qoʻshish, kirim, qoldiq ogohlantirishi, seans hisobiga yoki darhol sotish.
- **Qarz daftari** — avtomatik va qoʻlda yoziladi, qisman toʻlash mumkin, limit yoʻq.
- **Smena** — ochish va yopish, kassa sanash, toʻlov usullari (naqd, karta, Click, Payme).
- **Hisobot** — tushum, bandlik, top mijozlar, top ichimliklar, toʻlov usullari.
- **Foyda hisob-kitobi** (faqat admin) — xarajatlar va sof foyda.
- **Tariflar** — soatbay va paket tariflari, kun va vaqt boʻyicha. CYBER tarifi: 10 000 soʻm/soat.
- **Sozlamalar** — GameClass uslubida: chapda boʻlimlar, oʻngda tanlangan boʻlim.
  - *Kompyuterlar*: qoʻshish va oʻchirish, guruh, IP (qoʻlda), MAC (klient ulanganda avto, boʻlmasa qoʻlda), Wake-on-LAN bilan yoqish. *Guruhlar* yorligʻi: qoʻlda yaratiladi, guruhga tarif biriktiriladi.
  - *Foydalanuvchilar*, *Huquqlar* (operator uchun belgilash bilan), *Chegirmalar* (darajalar va bonus foizlari), *Tariflar va xizmatlar*.
  - *Ogohlantirishlar*: vaqt tugashiga 5 va 1 daqiqa qolganda mijozga avtomatik xabar.
  - *Qobiq (RunPad)*: qobiqdagi oʻyinlar roʻyxati. *Server interfeysi*: jadval shrifti, ustunlar, tema.
- **Mijoz ekrani** (Zal › «Mijoz ekrani») — RunPad Shell simulyatsiyasi: seans boʻlmasa qulf ekrani (akkaunt bilan kirish), vaqt qoʻshilganda qobiq ochiladi va oʻyinlar ishga tushiriladi.

Prototip parollari: `admin` / `admin`, `operator` / `1111`.

Ishga tushirish: `index.html` faylini brauzerda oching.
