import kiyim from "../../img/kiyim.jpg";
import kopilka from "../../img/kopilka.jpg";
import lenova from "../../img/lenova.jpg";
import noutbook from "../../img/noutbook-asij.jpg";
import skarvodka from "../../img/skarvodka.jpg";
import telefon from "../../img/telefon-W&O.jpg";

const data = [
  { id: 1, img: kiyim, nomi: "Sport Kiyim", pul: 250000, tavsif: "Yuqori sifatli sport kiyim, qulay va bardoshli." },
  { id: 2, img: kopilka, nomi: "Chiroyli Kopilka", pul: 120000, tavsif: "Bolalar va kattalar uchun ideal jamg‘arma qutisi." },
  { id: 3, img: lenova, nomi: "Lenovo Laptop", pul: 6500000, tavsif: "Ish va o‘qish uchun kuchli va samarali laptop." },
  { id: 4, img: noutbook, nomi: "Gaming Noutbook", pul: 12000000, tavsif: "Yuqori tezlikdagi protsessor va kuchli grafika kartasi bilan." },
  { id: 5, img: skarvodka, nomi: "Smart Soat", pul: 500000, tavsif: "Sport va sog‘liqni kuzatish uchun aqlli soat." },
  { id: 6, img: telefon, nomi: "iPhone Telefon", pul: 3200000, tavsif: "Yangi avlod iPhone, yuqori sifatli kamera va tezkor ishlash." },
  { id: 7, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/e98c4c8c9777457d86f61b6fd91bae272024072315343464292gF2ep3amql.webp", nomi: "Naushnik", pul: 150000, tavsif: "Ovoz izolyatsiyasi bilan ajoyib eshitish tajribasi." },
  { id: 8, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c40032d7e5743f5b760fc6d88ea49c842024080515475656637uuFip6xt4z.webp", nomi: "Qo‘l Soati", pul: 450000, tavsif: "Brendli qo‘l soati, klassik dizayn va suvga chidamli." },
  { id: 9, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/7647966b7343c29048673252e490f7362024120212564055532PxZbzFNkzG.jpg", nomi: "Ofis Kreslosi", pul: 2000000, tavsif: "Ergonomik dizayn, qulay va mustahkam ofis kreslosi." },
  { id: 10, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/4432507929ad5f22b0c3a16681e1058c20250314132513607036NIceLUIPK.jpg", nomi: "Gaming Klaviatura", pul: 500000, tavsif: "RGB yoritish va tezkor javob berish funksiyasiga ega." },
  { id: 11, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/cd5a526766f83260d496b0f44580e1752024093020183172489jWjK78AxyS.webp", nomi: "Dasturiy Sichqoncha", pul: 300000, tavsif: "Kuchli sensor va qulay tutqichli sichqoncha." },
  { id: 12, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/1ff8a7b5dc7a7d1f0ed65aaa29c04b1e2024020717133039530QXf2J0jTaa.jpg.webp", nomi: "Samsung Planshet", pul: 2700000, tavsif: "O‘qish va ko‘ngilochar dasturlar uchun mukammal tanlov." },
  { id: 13, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/1e079115d84fcdb2fe300fae146bfc4720240709153753573734aljcPedQV.webp", nomi: "Laptop Sumkasi", pul: 250000, tavsif: "Laptop uchun xavfsiz va qulay sumka." },
  { id: 14, img: "https://cdn.asaxiy.uz/asaxiy-content/product/main_image/desktop/67b7013b78ea1.png", nomi: "LG Monitor", pul: 3500000, tavsif: "Keng ko‘rish burchagi va yuqori aniqlikdagi ekran." },
  { id: 15, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/55095dcc1ea9d42f2fde336893ad7eff20240727094207734876CziUdCC0R.jpg", nomi: "HP Printer", pul: 1800000, tavsif: "Ofis va uy foydalanishi uchun ideal printer." },
  { id: 16, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/9bf31c7ff062936a96d3c8bd1f8f2ff32023110712423096207b7goSWdWgf.jpg.webp", nomi: "16GB USB Flash", pul: 80000, tavsif: "Kichik va qulay USB fleshka, tezkor ma’lumot uzatish." },
  { id: 17, img: "https://cdn.asaxiy.uz/asaxiy-content/product/main_image/desktop/642fdeeed51cf.jpg.webp", nomi: "Powerbank 10000mAh", pul: 220000, tavsif: "Sayohat uchun ideal, tez zaryadlovchi Powerbank." },
  { id: 18, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/0b593883a6f2f1ebf8856a177d7971562024112019074939661Gs4HnnDgyX.png", nomi: "Kamerali Drone", pul: 4500000, tavsif: "Yuoqori aniqlikdagi kamera bilan dron." },
  { id: 19, img: "https://assets.asaxiy.uz/product/items/desktop/445fbf6bd1d77c56ace4dc68b8cd8fa82023022312170915579RkwafF5toW.jpg.webp", nomi: "Yangi Oyna", pul: 350000, tavsif: "O‘zgacha dizaynli yuqori sifatli oynalar." },
  { id: 20, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/e2ef524fbf3d9fe611d5a8e90fefdc9c2024100217562953944LupalADxzd.jpg", nomi: "Apple AirPods", pul: 1200000, tavsif: "Simsiz eshitish vositasi, yuqori sifatli tovush bilan." },
  { id: 21, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/81b2f242381b313d331a6a9e2986b9c32025031414362550833ppsYmBjx5x.webp", nomi: "Podkast Mikrofon", pul: 750000, tavsif: "Professional ovoz yozish uchun mukammal mikrofon." },
  { id: 22, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/09a04bee31fe5ffdca5e565358e0c2c32024092619250954643QubYkQxJlY.png", nomi: "Kofe Mashinasi", pul: 950000, tavsif: "Har kuni mazali kofe tayyorlash uchun mo‘ljallangan." },
  { id: 23, img: "https://assets.asaxiy.uz/product/items/desktop/0ed61134d13df79bffb8811697d7474f2021032518494020783KB0YMNcrdx.jpg.webp", nomi: "Sport Velosiped", pul: 5000000, tavsif: "Sportchilar va sayr qilishni sevuvchilar uchun ideal." },
  { id: 24, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/dcb4fa6a8602aa4cbc9b3e5f396b85c72024071509303868095nJ2HPgzMCG.jpg", nomi: "Brendli Oyoq Kiyim", pul: 600000, tavsif: "Yuqori sifatli, qulay va bardoshli oyoq kiyim." },
  { id: 25, img: "https://cdn.asaxiy.uz/asaxiy-content/product/main_image/desktop/6410b21409266.jpg.webp", nomi: "Elektr Gitara", pul: 2200000, tavsif: "Ovoz sifati a’lo darajadagi elektr gitara." },
  { id: 26, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/3b5e1035a5fe52e2b9ed36c0931e9a672024121715151251962BrprcfsPox.webp", nomi: "Sony Kamera", pul: 8700000, tavsif: "Professional suratga olish uchun ideal kamera." },
  { id: 27, img: "https://cdn.asaxiy.uz/asaxiy-content/product/main_image/desktop/64a5549081ebc.jpg.webp", nomi: "Termos", pul: 140000, tavsif: "Issiq va sovuq ichimliklarni uzoq vaqt saqlaydi." },
  { id: 28, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/a684eceee76fc522773286a895bc843620240404114720877786p9YsvqZiz.jpg.webp", nomi: "Sayohat Chemodani", pul: 800000, tavsif: "Katta hajmli va mustahkam sayohat chemodani." },
  { id: 29, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/32d0bf3cbff8b572b000626fe5f8095a2024112110183332329P4oluMno7t.png", nomi: "Samsung 4K TV", pul: 7000000, tavsif: "Yuqori aniqlikdagi 4K televizor, smart funksiya bilan." },
  { id: 30, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c81e728d9d4c2f636f067f89cc14862c2022060912370816734Q0U6o1nJwG.png.webp", nomi: "Konditsioner", pul: 3500000, tavsif: "Yozning issiq kunlari uchun eng yaxshi yechim." },

  // Ikkinchi blok, yangi unikal id'lar bilan
  { id: 31, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/4ffce04d92a4d6cb21c1494cdfcd6dc12024012013362683201jqRctSTla2.png.webp", nomi: "Samsung Galaxy S24", tavsif: "Yangi avlod smartfon", pul: 12000000 },
  { id: 32, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/7ba71824bcb8d11670d06973cea5de4e2024073017033550066o5LxGCIDIE.jpg", nomi: "MacBook Pro M2", tavsif: "Tezkor ishlash va yuqori sifatli Retina displey", pul: 22000000 },
  { id: 33, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/3928445a22db77f3849a5827556eeda92024043013170782422AakRttkAqr.jpg.webp", nomi: "Sony PlayStation 5", tavsif: "O‘yin konsoli, ultra tez SSD", pul: 7500000 },
  { id: 34, img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/3c59dc048e8850243be8079a5c74d0792023110921454896552Qdpq7bqRfA.jpg.webp", nomi: "Apple Watch Series 9", tavsif: "Sog‘liq monitoringi", pul: 6000000 },
  { id: 35, img: "https://cdn.asaxiy.uz/asaxiy-content/product/main_image/desktop/5fe1a0f389dc5.jpg.webp", nomi: "JBL PartyBox 310", tavsif: "Kuchli ovoz va yorug‘lik effektlari", pul: 4500000 },
  { id: 36, img: "https://assets.asaxiy.uz/product/main_image/desktop/617aa2b9a1601.jpg.webp", nomi: "Dell XPS 15", tavsif: "Yuqori samarali noutbuk", pul: 18000000 },
  { id: 37, img: "https://cdn.asaxiy.uz/asaxiy-content/product/main_image/desktop/64ba1c11f02a0.jpg.webp", nomi: "Samsung 65\" QLED TV", tavsif: "Aqlli televizor, UHD 4K", pul: 14000000 },
  { id: 38, img: "https://assets.asaxiy.uz/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2023051311265071205bQJwCyMc0K.jpg.webp", nomi: "Nintendo Switch OLED", tavsif: "O'yin konsoli, OLED ekran", pul: 5500000 },
  { id: 39, img: "https://assets.asaxiy.uz/product/items/desktop/9766527f2b5d3e95d4a733fcfb77bd7e2023052710012961269bnQDQN7jYB.jpg.webp", nomi: "Bose QuietComfort 45", tavsif: "Shovqinni pasaytiruvchi quloqchin", pul: 3000000 },
  { id: 40, img: "https://assets.asaxiy.uz/product/items/desktop/7250eb93b3c18cc9daa29cf58af7a0042022112015195920865R67ISAaYbX.png.webp", nomi: "Canon EOS R6 Mark II", tavsif: "Professional kamera", pul: 20000000 },
];

export default data;
