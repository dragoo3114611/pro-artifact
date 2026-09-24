# Klub Pult — game club boshqaruv paneli (prototip)

Kompyuter klubi (game club) uchun admin/operator paneli prototipi. Bitta `index.html` fayl, brauzerda ochiladi, maʼlumotlar brauzerning `localStorage`ida saqlanadi.

## Boʻlimlar
- **Zal** — 50 ta kompyuter, GameClass uslubidagi jadval va kartalar koʻrinishi. Holatlar: Boʻsh, Band, Pauza, Oʻchiq.
  Amallar: Start, Qoʻshimcha vaqt, Stop, Koʻchirish, Pauza, Qayta yuklash, Oʻchirish, Yoqish, Xabar yuborish, Bar xizmati, Jarayonlar (bir yoki bir nechta kompyuterda qaysi ilova ochiq, tugatish, tozalash; «Saqlansin» belgilangan ilova tozalashda yopilmaydi), Mijoz ekrani. Klaviatura: Shift/Ctrl bilan bir nechta PC belgilab *Enter* — hammasiga birdaniga vaqt qoʻshish, *Delete* — oʻchirish oynasi.
  Toʻlov turlari: oldindan toʻlov, keyin toʻlov, mijoz balansidan. Pastda xabarlar jurnali jadval koʻrinishida (sana, vaqt, turi, PC, xabar): yuqoriga sursangiz eski yozuvlar yuklanadi, balandligini ham oʻzgartirish mumkin.
- **Mijozlar** — akkaunt (login/parol), balans, bonus darajalari, tashriflar tarixi.
- **Bar** — ikki yorliq. *Sotuv*: mahsulot kartalari, savat, «Kimga yoziladi» (kassa yoki PC seansi), Chiqim kiritish, Mahsulot sotish. *Ombor*: tan narxi, sotuv narxidagi qiymat, foyda/dona, qoldiq va chegara, Tovar kirimi (yetkazuvchi, kassadan toʻlash), Sanash, kirim va sanash tarixi.
- **Qarz daftari** — har bir qarzdor bitta hisobda (qarzlar va toʻlovlar), qidiruv (ism yoki telefon), toʻlanganlarni koʻrsatish, Excelga eksport, qarzdor tarixi (har bir yozuvni tahrirlash va oʻchirish), toʻlovda chegirma.
- **Smena** — ochish va yopish, kassa sanash, toʻlov usullari (naqd, karta, Click, Payme).
- **Hisobot** — davr (Bugun, Kecha, Shu hafta, Shu oy yoki Dan–Gacha sana va vaqt); kartalar: Jami ishlandi, Kompyuterlar, Bar, Qarz boʻldi, Qarz toʻlandi, Kassadan chiqim, Kassada naqd; «Kassa harakati (naqd)» jadvali; grafiklar va toplar.
- **Foyda hisob-kitobi** (faqat admin) — xarajatlar va sof foyda.
- **Tariflar** — soatbay va paket tariflari, kun va vaqt boʻyicha. CYBER tarifi: 10 000 soʻm/soat.
- **Sozlamalar** — chapda boʻlimlar, oʻngda tanlangan boʻlim:
  - *Kompyuterlar*: jadval (qoʻshish/oʻchirish, guruh, IP qoʻlda, MAC avto yoki qoʻlda, Wake-on-LAN), *Guruhlar*, *Server ulanishi* (admin IP, port, ulanish kodi, klient xizmat paroli, vaqt sinxronizatsiyasi), *Xatti-harakat* (vaqt ochilganda avto yoqish, taymer oynachasi, vaqt tugaganda qulflash/oʻchirish, ogohlantirish, sichqoncha va klaviaturani bloklash).
  - *Qulf ekrani*: fon rasmi, 5 ta mavzu, joylashuv, qorongʻilashtirish, yozuvlar va ularning oʻlchami, oldindan koʻrish, kompyuterlarga (hammasi yoki guruh) yuborish.
  - *Foydalanuvchilar va huquqlar* (har bir operatorning oʻz ruxsatlari, parol, bloklash; ruxsat yoʻq amalda administrator paroli soʻraladi), *Server interfeysi* (shrift turi va oʻlchami, tema, jadval ustunlari va karta maʼlumotlarini tanlash va tartibini oʻzgartirish), *Backup* (papkaga avto backup, qoʻlda yuklab olish va tiklash, arxiv nusxalar — tozalash va tiklashdan oldin avtomatik olinadi, ulardan orqaga qaytish mumkin; holati Zalda soat yonida koʻrinadi), *Maʼlumotlarni tozalash* (kassa operatsiyalari, jurnal, qarz daftari, smenalar, ombor tarixi, klient soʻrovlari, foyda yozuvlari, ochiq seanslar, mijoz akkauntlari — boʻlimlab).
- Qarz toʻlovida chegirma toʻlov oynasining oʻzida qoʻllanadi: berilgan summaga foiz qoʻshib qarzdan ayriladi.
- **Mijoz ekrani** (Zal › «Mijoz ekrani») — klient kompyuter simulyatsiyasi: qulf ekrani, akkaunt bilan kirish, seans davomida taymer oynachasi va xabarlar.

Namuna maʼlumotlarda parol yoʻq — dastur parolsiz ochiladi. Parol oʻrnatilsa, ochilganda kirish oynasi chiqadi.

Ishga tushirish: `index.html` faylini brauzerda oching.
