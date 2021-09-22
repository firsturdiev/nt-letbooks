const booksData = [
  {
      "country": "Nigeria",
      "imageLink": "./posters/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958,
      "uniqueId": "Things_Fall_Apart"
  },
  {
      "country": "Denmark",
      "imageLink": "./posters/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836,
      "uniqueId": "Fairy_Tales_Told_for_Children._First_Collection."
  },
  {
      "country": "Italy",
      "imageLink": "./posters/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315,
      "uniqueId": "Divine_Comedy"
  },
  {
      "country": "Sumer and Akkadian Empire",
      "imageLink": "./posters/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700,
      "uniqueId": "Epic_of_Gilgamesh"
  },
  {
      "country": "Achaemenid Empire",
      "imageLink": "./posters/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600,
      "uniqueId": "Book_of_Job"
  },
  {
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "./posters/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200,
      "uniqueId": "One_Thousand_and_One_Nights"
  },
  {
      "country": "Iceland",
      "imageLink": "./posters/njals-saga.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Njál's Saga",
      "year": 1350,
      "uniqueId": "Nj%C3%A1ls_saga"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/pride-and-prejudice.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813,
      "uniqueId": "Pride_and_Prejudice"
  },
  {
      "country": "France",
      "imageLink": "./posters/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le Père Goriot",
      "year": 1835,
      "uniqueId": "Le_P%C3%A8re_Goriot"
  },
  {
      "country": "Republic of Ireland",
      "imageLink": "./posters/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952,
      "uniqueId": "Molloy_(novel)"
  },
  {
      "country": "Italy",
      "imageLink": "./posters/the-decameron.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351,
      "uniqueId": "The_Decameron"
  },
  {
      "country": "Argentina",
      "imageLink": "./posters/ficciones.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965,
      "uniqueId": "Ficciones"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/wuthering-heights.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847,
      "uniqueId": "Wuthering_Heights"
  },
  {
      "country": "Algeria, French Empire",
      "imageLink": "./posters/l-etranger.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      "pages": 185,
      "title": "The Stranger",
      "year": 1942,
      "uniqueId": "The_Stranger_(novel)"
  },
  {
      "country": "Romania, France",
      "imageLink": "./posters/poems-paul-celan.jpg",
      "language": "German",
      "link": "\n",
      "pages": 320,
      "title": "Poems",
      "year": 1952,
      "uniqueId": ""
  },
  {
      "country": "France",
      "imageLink": "./posters/voyage-au-bout-de-la-nuit.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
      "pages": 505,
      "title": "Journey to the End of the Night",
      "year": 1932,
      "uniqueId": "Journey_to_the_End_of_the_Night"
  },
  {
      "country": "Spain",
      "imageLink": "./posters/don-quijote-de-la-mancha.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "year": 1610,
      "uniqueId": "Don_Quixote"
  },
  {
      "country": "England",
      "imageLink": "./posters/the-canterbury-tales.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
      "pages": 544,
      "title": "The Canterbury Tales",
      "year": 1450,
      "uniqueId": "The_Canterbury_Tales"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/stories-of-anton-chekhov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
      "pages": 194,
      "title": "Stories",
      "year": 1886,
      "uniqueId": "List_of_short_stories_by_Anton_Chekhov"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/nostromo.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nostromo\n",
      "pages": 320,
      "title": "Nostromo",
      "year": 1904,
      "uniqueId": "Nostromo"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/great-expectations.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
      "pages": 194,
      "title": "Great Expectations",
      "year": 1861,
      "uniqueId": "Great_Expectations"
  },
  {
      "country": "France",
      "imageLink": "./posters/jacques-the-fatalist.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
      "pages": 596,
      "title": "Jacques the Fatalist",
      "year": 1796,
      "uniqueId": "Jacques_the_Fatalist"
  },
  {
      "country": "Germany",
      "imageLink": "./posters/berlin-alexanderplatz.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
      "pages": 600,
      "title": "Berlin Alexanderplatz",
      "year": 1929,
      "uniqueId": "Berlin_Alexanderplatz"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/crime-and-punishment.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
      "pages": 551,
      "title": "Crime and Punishment",
      "year": 1866,
      "uniqueId": "Crime_and_Punishment"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/the-idiot.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
      "pages": 656,
      "title": "The Idiot",
      "year": 1869,
      "uniqueId": "The_Idiot"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/the-possessed.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
      "pages": 768,
      "title": "The Possessed",
      "year": 1872,
      "uniqueId": "Demons_(Dostoyevsky_novel)"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/the-brothers-karamazov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
      "pages": 824,
      "title": "The Brothers Karamazov",
      "year": 1880,
      "uniqueId": "The_Brothers_Karamazov"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/middlemarch.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
      "pages": 800,
      "title": "Middlemarch",
      "year": 1871,
      "uniqueId": "Middlemarch"
  },
  {
      "country": "United States",
      "imageLink": "./posters/invisible-man.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
      "pages": 581,
      "title": "Invisible Man",
      "year": 1952,
      "uniqueId": "Invisible_Man"
  },
  {
      "country": "Greece",
      "imageLink": "./posters/medea.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
      "pages": 104,
      "title": "Medea",
      "year": -431,
      "uniqueId": "Medea_(play)"
  },
  {
      "country": "United States",
      "imageLink": "./posters/absalom-absalom.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
      "pages": 313,
      "title": "Absalom, Absalom!",
      "year": 1936,
      "uniqueId": "Absalom,_Absalom!"
  },
  {
      "country": "United States",
      "imageLink": "./posters/the-sound-and-the-fury.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
      "pages": 326,
      "title": "The Sound and the Fury",
      "year": 1929,
      "uniqueId": "The_Sound_and_the_Fury"
  },
  {
      "country": "France",
      "imageLink": "./posters/madame-bovary.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
      "pages": 528,
      "title": "Madame Bovary",
      "year": 1857,
      "uniqueId": "Madame_Bovary"
  },
  {
      "country": "France",
      "imageLink": "./posters/l-education-sentimentale.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
      "pages": 606,
      "title": "Sentimental Education",
      "year": 1869,
      "uniqueId": "Sentimental_Education"
  },
  {
      "country": "Spain",
      "imageLink": "./posters/gypsy-ballads.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
      "pages": 218,
      "title": "Gypsy Ballads",
      "year": 1928,
      "uniqueId": "Gypsy_Ballads"
  },
  {
      "country": "Colombia",
      "imageLink": "./posters/one-hundred-years-of-solitude.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
      "pages": 417,
      "title": "One Hundred Years of Solitude",
      "year": 1967,
      "uniqueId": "One_Hundred_Years_of_Solitude"
  },
  {
      "country": "Colombia",
      "imageLink": "./posters/love-in-the-time-of-cholera.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
      "pages": 368,
      "title": "Love in the Time of Cholera",
      "year": 1985,
      "uniqueId": "Love_in_the_Time_of_Cholera"
  },
  {
      "country": "Saxe-Weimar",
      "imageLink": "./posters/faust.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
      "pages": 158,
      "title": "Faust",
      "year": 1832,
      "uniqueId": "Goethe%27s_Faust"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/dead-souls.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Dead_Souls\n",
      "pages": 432,
      "title": "Dead Souls",
      "year": 1842,
      "uniqueId": "Dead_Souls"
  },
  {
      "country": "Germany",
      "imageLink": "./posters/the-tin-drum.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
      "pages": 600,
      "title": "The Tin Drum",
      "year": 1959,
      "uniqueId": "The_Tin_Drum"
  },
  {
      "country": "Brazil",
      "imageLink": "./posters/the-devil-to-pay-in-the-backlands.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
      "pages": 494,
      "title": "The Devil to Pay in the Backlands",
      "year": 1956,
      "uniqueId": "The_Devil_to_Pay_in_the_Backlands"
  },
  {
      "country": "Norway",
      "imageLink": "./posters/hunger.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
      "pages": 176,
      "title": "Hunger",
      "year": 1890,
      "uniqueId": "Hunger_(Hamsun_novel)"
  },
  {
      "country": "United States",
      "imageLink": "./posters/the-old-man-and-the-sea.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
      "pages": 128,
      "title": "The Old Man and the Sea",
      "year": 1952,
      "uniqueId": "The_Old_Man_and_the_Sea"
  },
  {
      "country": "Greece",
      "imageLink": "./posters/the-iliad-of-homer.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Iliad\n",
      "pages": 608,
      "title": "Iliad",
      "year": -735,
      "uniqueId": "Iliad"
  },
  {
      "country": "Greece",
      "imageLink": "./posters/the-odyssey-of-homer.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Odyssey\n",
      "pages": 374,
      "title": "Odyssey",
      "year": -800,
      "uniqueId": "Odyssey"
  },
  {
      "country": "Norway",
      "imageLink": "./posters/a-Dolls-house.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
      "pages": 68,
      "title": "A Doll's House",
      "year": 1879,
      "uniqueId": "A_Doll%27s_House"
  },
  {
      "country": "Irish Free State",
      "imageLink": "./posters/ulysses.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
      "pages": 228,
      "title": "Ulysses",
      "year": 1922,
      "uniqueId": "Ulysses_(novel)"
  },
  {
      "country": "Czechoslovakia",
      "imageLink": "./posters/stories-of-franz-kafka.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
      "pages": 488,
      "title": "Stories",
      "year": 1924,
      "uniqueId": "Franz_Kafka_bibliography#Short_stories"
  },
  {
      "country": "Czechoslovakia",
      "imageLink": "./posters/the-trial.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Trial\n",
      "pages": 160,
      "title": "The Trial",
      "year": 1925,
      "uniqueId": "The_Trial"
  },
  {
      "country": "Czechoslovakia",
      "imageLink": "./posters/the-castle.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
      "pages": 352,
      "title": "The Castle",
      "year": 1926,
      "uniqueId": "The_Castle_(novel)"
  },
  {
      "country": "India",
      "imageLink": "./posters/the-recognition-of-shakuntala.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
      "pages": 147,
      "title": "The recognition of Shakuntala",
      "year": 150,
      "uniqueId": "Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam"
  },
  {
      "country": "Japan",
      "imageLink": "./posters/the-sound-of-the-mountain.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
      "pages": 288,
      "title": "The Sound of the Mountain",
      "year": 1954,
      "uniqueId": "The_Sound_of_the_Mountain"
  },
  {
      "country": "Greece",
      "imageLink": "./posters/zorba-the-greek.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
      "pages": 368,
      "title": "Zorba the Greek",
      "year": 1946,
      "uniqueId": "Zorba_the_Greek"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/sons-and-lovers.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
      "pages": 432,
      "title": "Sons and Lovers",
      "year": 1913,
      "uniqueId": "Sons_and_Lovers"
  },
  {
      "country": "Iceland",
      "imageLink": "./posters/independent-people.jpg",
      "language": "Icelandic",
      "link": "https://en.wikipedia.org/wiki/Independent_People\n",
      "pages": 470,
      "title": "Independent People",
      "year": 1934,
      "uniqueId": "Independent_People"
  },
  {
      "country": "Italy",
      "imageLink": "./posters/poems-giacomo-leopardi.jpg",
      "language": "Italian",
      "link": "\n",
      "pages": 184,
      "title": "Poems",
      "year": 1818,
      "uniqueId": ""
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/the-golden-notebook.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
      "pages": 688,
      "title": "The Golden Notebook",
      "year": 1962,
      "uniqueId": "The_Golden_Notebook"
  },
  {
      "country": "Sweden",
      "imageLink": "./posters/pippi-longstocking.jpg",
      "language": "Swedish",
      "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
      "pages": 160,
      "title": "Pippi Longstocking",
      "year": 1945,
      "uniqueId": "Pippi_Longstocking"
  },
  {
      "country": "China",
      "imageLink": "./posters/diary-of-a-madman.jpg",
      "language": "Chinese",
      "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
      "pages": 389,
      "title": "Diary of a Madman",
      "year": 1918,
      "uniqueId": "A_Madman%27s_Diary"
  },
  {
      "country": "Egypt",
      "imageLink": "./posters/children-of-gebelawi.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
      "pages": 355,
      "title": "Children of Gebelawi",
      "year": 1959,
      "uniqueId": "Children_of_Gebelawi"
  },
  {
      "country": "Germany",
      "imageLink": "./posters/buddenbrooks.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
      "pages": 736,
      "title": "Buddenbrooks",
      "year": 1901,
      "uniqueId": "Buddenbrooks"
  },
  {
      "country": "Germany",
      "imageLink": "./posters/the-magic-mountain.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
      "pages": 720,
      "title": "The Magic Mountain",
      "year": 1924,
      "uniqueId": "The_Magic_Mountain"
  },
  {
      "country": "United States",
      "imageLink": "./posters/moby-dick.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
      "pages": 378,
      "title": "Moby Dick",
      "year": 1851,
      "uniqueId": "Moby-Dick"
  },
  {
      "country": "France",
      "imageLink": "./posters/essais.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
      "pages": 404,
      "title": "Essays",
      "year": 1595,
      "uniqueId": "Essays_(Montaigne)"
  },
  {
      "country": "Italy",
      "imageLink": "./posters/history.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
      "pages": 600,
      "title": "History",
      "year": 1974,
      "uniqueId": "History_(novel)"
  },
  {
      "country": "United States",
      "imageLink": "./posters/beloved.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
      "pages": 321,
      "title": "Beloved",
      "year": 1987,
      "uniqueId": "Beloved_(novel)"
  },
  {
      "country": "Japan",
      "imageLink": "./posters/the-tale-of-genji.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
      "pages": 1360,
      "title": "The Tale of Genji",
      "year": 1006,
      "uniqueId": "The_Tale_of_Genji"
  },
  {
      "country": "Austria",
      "imageLink": "./posters/the-man-without-qualities.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
      "pages": 365,
      "title": "The Man Without Qualities",
      "year": 1931,
      "uniqueId": "The_Man_Without_Qualities"
  },
  {
      "country": "Russia/United States",
      "imageLink": "./posters/lolita.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Lolita\n",
      "pages": 317,
      "title": "Lolita",
      "year": 1955,
      "uniqueId": "Lolita"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/nineteen-eighty-four.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
      "pages": 272,
      "title": "Nineteen Eighty-Four",
      "year": 1949,
      "uniqueId": "Nineteen_Eighty-Four"
  },
  {
      "country": "Roman Empire",
      "imageLink": "./posters/the-metamorphoses-of-ovid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
      "pages": 576,
      "title": "Metamorphoses",
      "year": 100,
      "uniqueId": "Metamorphoses"
  },
  {
      "country": "Portugal",
      "imageLink": "./posters/the-book-of-disquiet.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
      "pages": 272,
      "title": "The Book of Disquiet",
      "year": 1928,
      "uniqueId": "The_Book_of_Disquiet"
  },
  {
      "country": "United States",
      "imageLink": "./posters/tales-and-poems-of-edgar-allan-poe.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
      "pages": 842,
      "title": "Tales",
      "year": 1950,
      "uniqueId": "Edgar_Allan_Poe_bibliography#Tales"
  },
  {
      "country": "France",
      "imageLink": "./posters/a-la-recherche-du-temps-perdu.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
      "pages": 2408,
      "title": "In Search of Lost Time",
      "year": 1920,
      "uniqueId": "In_Search_of_Lost_Time"
  },
  {
      "country": "France",
      "imageLink": "./posters/gargantua-and-pantagruel.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
      "pages": 623,
      "title": "Gargantua and Pantagruel",
      "year": 1533,
      "uniqueId": "Gargantua_and_Pantagruel"
  },
  {
      "country": "Mexico",
      "imageLink": "./posters/pedro-paramo.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
      "pages": 124,
      "title": "Pedro Páramo",
      "year": 1955,
      "uniqueId": "Pedro_P%C3%A1ramo"
  },
  {
      "country": "Sultanate of Rum",
      "imageLink": "./posters/the-masnavi.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Masnavi\n",
      "pages": 438,
      "title": "The Masnavi",
      "year": 1236,
      "uniqueId": "Masnavi"
  },
  {
      "country": "United Kingdom, India",
      "imageLink": "./posters/midnights-children.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
      "pages": 536,
      "title": "Midnight's Children",
      "year": 1981,
      "uniqueId": "Midnight%27s_Children"
  },
  {
      "country": "Persia, Persian Empire",
      "imageLink": "./posters/bostan.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
      "pages": 298,
      "title": "Bostan",
      "year": 1257,
      "uniqueId": "Bustan_(book)"
  },
  {
      "country": "Sudan",
      "imageLink": "./posters/season-of-migration-to-the-north.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
      "pages": 139,
      "title": "Season of Migration to the North",
      "year": 1966,
      "uniqueId": "Season_of_Migration_to_the_North"
  },
  {
      "country": "Portugal",
      "imageLink": "./posters/blindness.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
      "pages": 352,
      "title": "Blindness",
      "year": 1995,
      "uniqueId": "Blindness_(novel)"
  },
  {
      "country": "England",
      "imageLink": "./posters/hamlet.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Hamlet\n",
      "pages": 432,
      "title": "Hamlet",
      "year": 1603,
      "uniqueId": "Hamlet"
  },
  {
      "country": "England",
      "imageLink": "./posters/king-lear.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/King_Lear\n",
      "pages": 384,
      "title": "King Lear",
      "year": 1608,
      "uniqueId": "King_Lear"
  },
  {
      "country": "England",
      "imageLink": "./posters/othello.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Othello\n",
      "pages": 314,
      "title": "Othello",
      "year": 1609,
      "uniqueId": "Othello"
  },
  {
      "country": "Greece",
      "imageLink": "./posters/oedipus-the-king.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
      "pages": 88,
      "title": "Oedipus the King",
      "year": -430,
      "uniqueId": "Oedipus_the_King"
  },
  {
      "country": "France",
      "imageLink": "./posters/le-rouge-et-le-noir.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
      "pages": 576,
      "title": "The Red and the Black",
      "year": 1830,
      "uniqueId": "The_Red_and_the_Black"
  },
  {
      "country": "England",
      "imageLink": "./posters/the-life-and-opinions-of-tristram-shandy.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "year": 1760,
      "uniqueId": "The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman"
  },
  {
      "country": "Italy",
      "imageLink": "./posters/confessions-of-zeno.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
      "pages": 412,
      "title": "Confessions of Zeno",
      "year": 1923,
      "uniqueId": "Zeno%27s_Conscience"
  },
  {
      "country": "Ireland",
      "imageLink": "./posters/gullivers-travels.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
      "pages": 178,
      "title": "Gulliver's Travels",
      "year": 1726,
      "uniqueId": "Gulliver%27s_Travels"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/war-and-peace.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
      "pages": 1296,
      "title": "War and Peace",
      "year": 1867,
      "uniqueId": "War_and_Peace"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/anna-karenina.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
      "pages": 864,
      "title": "Anna Karenina",
      "year": 1877,
      "uniqueId": "Anna_Karenina"
  },
  {
      "country": "Russia",
      "imageLink": "./posters/the-death-of-ivan-ilyich.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
      "pages": 92,
      "title": "The Death of Ivan Ilyich",
      "year": 1886,
      "uniqueId": "The_Death_of_Ivan_Ilyich"
  },
  {
      "country": "United States",
      "imageLink": "./posters/the-adventures-of-huckleberry-finn.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
      "pages": 224,
      "title": "The Adventures of Huckleberry Finn",
      "year": 1884,
      "uniqueId": "Adventures_of_Huckleberry_Finn"
  },
  {
      "country": "India",
      "imageLink": "./posters/ramayana.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Ramayana\n",
      "pages": 152,
      "title": "Ramayana",
      "year": -450,
      "uniqueId": "Ramayana"
  },
  {
      "country": "Roman Empire",
      "imageLink": "./posters/the-aeneid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Aeneid\n",
      "pages": 442,
      "title": "The Aeneid",
      "year": -23,
      "uniqueId": "Aeneid"
  },
  {
      "country": "India",
      "imageLink": "./posters/the-mahab-harata.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
      "pages": 276,
      "title": "Mahabharata",
      "year": -700,
      "uniqueId": "Mahabharata"
  },
  {
      "country": "United States",
      "imageLink": "./posters/leaves-of-grass.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
      "pages": 152,
      "title": "Leaves of Grass",
      "year": 1855,
      "uniqueId": "Leaves_of_Grass"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/mrs-dalloway.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
      "pages": 216,
      "title": "Mrs Dalloway",
      "year": 1925,
      "uniqueId": "Mrs_Dalloway"
  },
  {
      "country": "United Kingdom",
      "imageLink": "./posters/to-the-lighthouse.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
      "pages": 209,
      "title": "To the Lighthouse",
      "year": 1927,
      "uniqueId": "To_the_Lighthouse"
  },
  {
      "country": "France/Belgium",
      "imageLink": "./posters/memoirs-of-hadrian.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
      "pages": 408,
      "title": "Memoirs of Hadrian",
      "year": 1951,
      "uniqueId": "Memoirs_of_Hadrian"
  }
]