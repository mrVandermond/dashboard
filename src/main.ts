import { createApp } from "vue";
import { createPinia } from "pinia";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import App from "@/App.vue";
import '@mdi/font/css/materialdesignicons.css'
import router from "@/router";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
});

/* var mockUsers = [
  {
    "Name": "Ириней",
    "Surname": "Цветанков",
    "email": "depression2004@duck.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Босния и Герцеговина",
    "status": "578",
    "skills levels": 55,
    "role": "Groovy",
    "id": "102203",
    "timestamp": 1221135837
  },
  {
    "Name": "Эдуард",
    "Surname": "Анюков",
    "email": "discrimination2012@example.org",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Китай",
    "status": "690",
    "skills levels": 34,
    "role": "PowerShell",
    "id": "133208",
    "timestamp": 1099596579
  },
  {
    "Name": "Глафира",
    "Surname": "Феонина",
    "email": "characteristics1886@live.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Афганистан",
    "status": "1048",
    "skills levels": 18,
    "role": "Lisp",
    "id": "297410",
    "timestamp": 1346759925
  },
  {
    "Name": "Элеонора",
    "Surname": "Алексина",
    "email": "edition1997@outlook.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Сен-Бартельми",
    "status": "1006",
    "skills levels": 54,
    "role": "Common Lisp",
    "id": "916542",
    "timestamp": 970093843
  },
  {
    "Name": "Луна",
    "Surname": "Голубев",
    "email": "inquiries1890@yahoo.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Германия",
    "status": "158",
    "skills levels": 54,
    "role": "J#",
    "id": "737165",
    "timestamp": 1219798196
  },
  {
    "Name": "Даяна",
    "Surname": "Лукошина",
    "email": "divx1803@example.org",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Ватикан",
    "status": "1291",
    "skills levels": 41,
    "role": "R",
    "id": "127146",
    "timestamp": 1604414331
  },
  {
    "Name": "Аркадий",
    "Surname": "Заволокина",
    "email": "increasing2055@live.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Бахрейн",
    "status": "875",
    "skills levels": 22,
    "role": "PowerShell",
    "id": "125683",
    "timestamp": 1078988739
  },
  {
    "Name": "Авксентий",
    "Surname": "Щепило",
    "email": "chorus2001@example.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Суринам",
    "status": "589",
    "skills levels": 63,
    "role": "Prolog",
    "id": "511389",
    "timestamp": 1139629140
  },
  {
    "Name": "Мина",
    "Surname": "Мухина",
    "email": "movie2039@example.org",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Тувалу",
    "status": "26",
    "skills levels": 53,
    "role": "Awk",
    "id": "569017",
    "timestamp": 1702678966
  },
  {
    "Name": "Куприян",
    "Surname": "Проклова",
    "email": "reductions2063@example.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Науру",
    "status": "1130",
    "skills levels": 19,
    "role": "Transact-SQL",
    "id": "692780",
    "timestamp": 1079534995
  },
  {
    "Name": "Гульшат",
    "Surname": "Балдина",
    "email": "expenses1904@protonmail.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Новая Каледония",
    "status": "1286",
    "skills levels": 43,
    "role": "JavaScript",
    "id": "859767",
    "timestamp": 1183699369
  },
  {
    "Name": "Алексей",
    "Surname": "Веденская",
    "email": "radius1837@example.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Канада",
    "status": "840",
    "skills levels": 27,
    "role": "Fortran",
    "id": "552760",
    "timestamp": 1283172440
  },
  {
    "Name": "Забава",
    "Surname": "Осинский",
    "email": "raymond1893@gmail.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Белиз",
    "status": "161",
    "skills levels": 44,
    "role": "Elixir",
    "id": "705923",
    "timestamp": 1491931053
  },
  {
    "Name": "Иоанна",
    "Surname": "Родченкова",
    "email": "behavioral2034@example.org",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Черногория",
    "status": "815",
    "skills levels": 26,
    "role": "Smalltalk",
    "id": "544985",
    "timestamp": 1537780700
  },
  {
    "Name": "Александр",
    "Surname": "Окунева",
    "email": "pixel1994@example.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Буркина-Фасо",
    "status": "835",
    "skills levels": 60,
    "role": "PHP",
    "id": "625963",
    "timestamp": 1436466906
  },
  {
    "Name": "Милен",
    "Surname": "Хераскова",
    "email": "concepts1962@live.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Конго - Киншаса",
    "status": "339",
    "skills levels": 36,
    "role": "Ruby",
    "id": "479583",
    "timestamp": 1288448637
  },
  {
    "Name": "Клара",
    "Surname": "Прокопов",
    "email": "dev2088@protonmail.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "о-в Вознесения",
    "status": "610",
    "skills levels": 32,
    "role": "D",
    "id": "497965",
    "timestamp": 1513574830
  },
  {
    "Name": "Дженна",
    "Surname": "Чижова",
    "email": "button1963@protonmail.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Лаос",
    "status": "403",
    "skills levels": 52,
    "role": "OCaml",
    "id": "775202",
    "timestamp": 1442688068
  },
  {
    "Name": "Кирилл",
    "Surname": "Богомолов",
    "email": "guitars2094@yahoo.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Сирия",
    "status": "1107",
    "skills levels": 21,
    "role": "Assembly",
    "id": "097444",
    "timestamp": 1264446655
  },
  {
    "Name": "Дарина",
    "Surname": "Додолева",
    "email": "briefly1850@live.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Сент-Люсия",
    "status": "376",
    "skills levels": 51,
    "role": "GNU Octave",
    "id": "853475",
    "timestamp": 1477989003
  },
  {
    "Name": "Ириней",
    "Surname": "Наумов",
    "email": "sign1994@live.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Сьерра-Леоне",
    "status": "98",
    "skills levels": 61,
    "role": "R",
    "id": "734080",
    "timestamp": 1234647016
  },
  {
    "Name": "Богдан",
    "Surname": "Звоницкий",
    "email": "sexually1908@protonmail.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Монако",
    "status": "316",
    "skills levels": 33,
    "role": "Mathematica",
    "id": "715649",
    "timestamp": 1268452326
  },
  {
    "Name": "Мина",
    "Surname": "Сахарнова",
    "email": "trading2024@protonmail.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Бруней-Даруссалам",
    "status": "962",
    "skills levels": 31,
    "role": "Kotlin",
    "id": "503396",
    "timestamp": 1093535087
  },
  {
    "Name": "Наргиза",
    "Surname": "Гостев",
    "email": "younger2007@yandex.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Аруба",
    "status": "953",
    "skills levels": 26,
    "role": "AutoIt",
    "id": "069750",
    "timestamp": 1138252245
  },
  {
    "Name": "Ляля",
    "Surname": "Зондберг",
    "email": "lover1831@yahoo.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Эфиопия",
    "status": "116",
    "skills levels": 65,
    "role": "Io",
    "id": "873899",
    "timestamp": 1330750612
  },
  {
    "Name": "Геннадий",
    "Surname": "Бирюков",
    "email": "arrangements1820@gmail.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Мартиника",
    "status": "1094",
    "skills levels": 19,
    "role": "Delphi",
    "id": "127274",
    "timestamp": 1103003530
  },
  {
    "Name": "Эльмира",
    "Surname": "Вакулина",
    "email": "gathering1895@live.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Того",
    "status": "1345",
    "skills levels": 23,
    "role": "Ruby",
    "id": "862515",
    "timestamp": 1412018713
  },
  {
    "Name": "Филат",
    "Surname": "Абрамов",
    "email": "carried1900@yahoo.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Французская Полинезия",
    "status": "815",
    "skills levels": 66,
    "role": "PL-I",
    "id": "795402",
    "timestamp": 1464239190
  },
  {
    "Name": "Алтын",
    "Surname": "Чулаки",
    "email": "vary1879@yandex.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Внешние малые о-ва",
    "status": "790",
    "skills levels": 51,
    "role": "C#",
    "id": "193773",
    "timestamp": 990415335
  },
  {
    "Name": "Юния",
    "Surname": "Скоробогатова",
    "email": "encyclopedia1866@duck.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Бонэйр, Синт-Эстатиус и Саба",
    "status": "801",
    "skills levels": 31,
    "role": "Falcon",
    "id": "480049",
    "timestamp": 1169627541
  },
  {
    "Name": "Гаяна",
    "Surname": "Носков",
    "email": "powered2005@duck.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Мартиника",
    "status": "1068",
    "skills levels": 62,
    "role": "Lua",
    "id": "571887",
    "timestamp": 1690705413
  },
  {
    "Name": "Лукьян",
    "Surname": "Сажин",
    "email": "universities1850@yahoo.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Австрия",
    "status": "947",
    "skills levels": 40,
    "role": "JavaScript",
    "id": "192419",
    "timestamp": 1625375812
  },
  {
    "Name": "Ариадна",
    "Surname": "Ярин",
    "email": "silence2064@yahoo.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Доминика",
    "status": "1360",
    "skills levels": 34,
    "role": "Assembly",
    "id": "029893",
    "timestamp": 1496648849
  },
  {
    "Name": "Германн",
    "Surname": "Москвин",
    "email": "millennium1889@outlook.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Фарерские о-ва",
    "status": "650",
    "skills levels": 60,
    "role": "PL-I",
    "id": "850812",
    "timestamp": 1258667572
  },
  {
    "Name": "Авдей",
    "Surname": "Малышева",
    "email": "raises2078@yahoo.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Зимбабве",
    "status": "485",
    "skills levels": 29,
    "role": "Lisp",
    "id": "513610",
    "timestamp": 1607593546
  },
  {
    "Name": "Мстислав",
    "Surname": "Северянина",
    "email": "mauritius2079@outlook.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Ливия",
    "status": "1087",
    "skills levels": 34,
    "role": "Haskell",
    "id": "914087",
    "timestamp": 1674788297
  },
  {
    "Name": "Сельма",
    "Surname": "Григорьева",
    "email": "remarkable1813@yandex.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Руанда",
    "status": "1074",
    "skills levels": 41,
    "role": "Racket",
    "id": "742299",
    "timestamp": 1404569992
  },
  {
    "Name": "Василий",
    "Surname": "Казакевич",
    "email": "theory2061@yahoo.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Белиз",
    "status": "689",
    "skills levels": 44,
    "role": "PL-SQL",
    "id": "065656",
    "timestamp": 1662028097
  },
  {
    "Name": "Савва",
    "Surname": "Фандеев",
    "email": "lamps1872@gmail.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Польша",
    "status": "257",
    "skills levels": 45,
    "role": "CoffeeScript",
    "id": "508863",
    "timestamp": 1481697234
  },
  {
    "Name": "Таяна",
    "Surname": "Абакумов",
    "email": "airline2064@duck.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Бруней-Даруссалам",
    "status": "1386",
    "skills levels": 48,
    "role": "D",
    "id": "747439",
    "timestamp": 994824037
  },
  {
    "Name": "Агапия",
    "Surname": "Гладилина",
    "email": "loose1977@live.com",
    "post": "Жен.",
    "duties": "Жен.",
    "country": "Сербия",
    "status": "1106",
    "skills levels": 42,
    "role": "Prolog",
    "id": "960000",
    "timestamp": 1437459976
  },
  {
    "Name": "Альберт",
    "Surname": "Скороходов",
    "email": "david2092@yandex.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Филиппины",
    "status": "705",
    "skills levels": 27,
    "role": "Lisp",
    "id": "227880",
    "timestamp": 1682687985
  },
  {
    "Name": "Валерьян",
    "Surname": "Петров",
    "email": "ralph1986@live.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Мали",
    "status": "1288",
    "skills levels": 62,
    "role": "Groovy",
    "id": "304902",
    "timestamp": 1058915328
  },
  {
    "Name": "Констанция",
    "Surname": "Басинская",
    "email": "automatic1842@protonmail.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Сеута и Мелилья",
    "status": "667",
    "skills levels": 59,
    "role": "Julia",
    "id": "574644",
    "timestamp": 1339112211
  },
  {
    "Name": "Фёдор",
    "Surname": "Шамбарова",
    "email": "wheels1993@example.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Ливия",
    "status": "16",
    "skills levels": 35,
    "role": "R",
    "id": "855397",
    "timestamp": 1324993929
  },
  {
    "Name": "Паула",
    "Surname": "Жуков",
    "email": "hobby2074@outlook.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Люксембург",
    "status": "540",
    "skills levels": 65,
    "role": "Awk",
    "id": "929388",
    "timestamp": 1582649699
  },
  {
    "Name": "Люция",
    "Surname": "Парменьев",
    "email": "shaw2046@yandex.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Фиджи",
    "status": "490",
    "skills levels": 31,
    "role": "Objective-C",
    "id": "215790",
    "timestamp": 1151239745
  },
  {
    "Name": "Алтын",
    "Surname": "Сокова",
    "email": "developer2057@yahoo.com",
    "post": "Жен.",
    "duties": "Муж.",
    "country": "Гренада",
    "status": "856",
    "skills levels": 43,
    "role": "Clojure",
    "id": "160498",
    "timestamp": 1057372803
  },
  {
    "Name": "Ея",
    "Surname": "Живетьев",
    "email": "emily2013@yahoo.com",
    "post": "Муж.",
    "duties": "Жен.",
    "country": "Чад",
    "status": "1278",
    "skills levels": 41,
    "role": "Falcon",
    "id": "126143",
    "timestamp": 1330280383
  },
  {
    "Name": "Зита",
    "Surname": "Первушин",
    "email": "basket2018@gmail.com",
    "post": "Муж.",
    "duties": "Муж.",
    "country": "Соединенные Штаты",
    "status": "151",
    "skills levels": 66,
    "role": "AutoIt",
    "id": "771259",
    "timestamp": 1626697984
  }
] */

//void set(ref(DB, 'users'), mockUsers);