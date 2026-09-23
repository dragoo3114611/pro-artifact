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
- **Sozlamalar** — chapda boʻlimlar, oʻngda tanlangan boʻlim:
  - *Kompyuterlar*: jadval (qoʻshish/oʻchirish, guruh, IP qoʻlda, MAC avto yoki qoʻlda, Wake-on-LAN), *Guruhlar*, *Server ulanishi* (admin IP, port, ulanish kodi, klient xizmat paroli, vaqt sinxronizatsiyasi), *Xatti-harakat* (vaqt ochilganda avto yoqish, taymer oynachasi, vaqt tugaganda qulflash/oʻchirish, ogohlantirish, sichqoncha va klaviaturani bloklash).
  - *Qulf ekrani*: fon rasmi, 5 ta mavzu, joylashuv, qorongʻilashtirish, yozuvlar va ularning oʻlchami, oldindan koʻrish, kompyuterlarga (hammasi yoki guruh) yuborish.
  - *Foydalanuvchilar va huquqlar*, *Chegirmalar* (qarz toʻlovida: berilgan summaga foiz qoʻshib qarzdan ayriladi), *Tariflar va xizmatlar*, *Server interfeysi* (shrift turi, oʻlchami, ustunlar, tema), *Backup* (papkaga avto backup, qoʻlda yuklab olish va tiklash).
- **Mijoz ekrani** (Zal › «Mijoz ekrani») — klient kompyuter simulyatsiyasi: qulf ekrani, akkaunt bilan kirish, seans davomida taymer oynachasi va xabarlar.

Prototip parollari: `admin` / `admin`, `operator` / `1111`.

Ishga tushirish: `index.html` faylini brauzerda oching.
