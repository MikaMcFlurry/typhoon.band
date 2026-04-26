import type { Locale } from "@/types/content";

export const dictionaries = {
  de: {
    meta: {
      title: "Typhoon | Blues, Funk & Turkish Soul",
      description:
        "Typhoon verbindet Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten und kraftvoller Live-Energie.",
    },
    nav: {
      home: "Start",
      band: "Band",
      music: "Musik",
      shows: "Shows",
      gallery: "Galerie",
      booking: "Booking",
      contact: "Kontakt",
    },
    common: {
      listen: "Songs anhören",
      live: "Live erleben",
      booking: "Booking anfragen",
      bandMore: "Mehr über die Band",
      allShows: "Alle Shows ansehen",
      requestPrepared: "Anfrage vorbereiten",
      demo: "Demo",
      comingSoon: "Folgt",
      inactive: "In Vorbereitung",
      backHome: "Zur Startseite",
    },
    home: {
      eyebrow: "BLUESROCK • FUNK • SOUL • JAZZ • SOUTHERN ROCK",
      headline: "SMOOTH.\nEXCEPTIONAL.\nFUNK.",
      subline:
        "Typhoon verbindet türkischsprachige Texte mit Bluesrock, Funk, Soul, Jazz und Southern Rock - kraftvoll, warm und live voller Energie.",
      musicTitle: "Songs mit Live-Kante",
      musicCopy: "Aktuelle Demo-Aufnahmen - finale Releases folgen.",
      bandTitle: "Amerikanisches Feeling. Europäische Seele. Türkische Texte.",
      bandCopy:
        "Typhoon sprengt Genregrenzen, ohne die eigene Handschrift zu verlieren: markante Blues-Riffs, funkige Grooves, soulige Melodien, jazzige Finessen und eine erfahrene Band, die live sofort zündet.",
      membersTitle: "Bandmitglieder",
      showsTitle: "Nächste Show",
      showsCopy: "Die Terminstruktur ist vorbereitet. Echte Shows werden in einem späteren Batch aus Supabase kommen.",
      bookingTitle: "Booking",
      bookingCopy: "Für Clubs, Festivals und besondere Live-Abende mit Soul, Druck und türkischem Herz.",
    },
    band: {
      title: "Band",
      intro:
        "Typhoon ist ein kraftvoller Mix aus Bluesrock, Funk, Soul, Jazz und Southern Rock mit türkischsprachigen Texten und amerikanisch-europäischem Sound.",
      long:
        "Selbstkomponierte Songs verweben markante Blues-Riffs, funkige Grooves, soulige Melodien und jazzige Finessen zu einem mitreißenden Ganzen. Ausdrucksstarke türkischsprachige Texte geben den Stücken geheimnisvolle Tiefe und kulturelle Vielfalt. Im Zentrum steht ein eingespieltes Kollektiv aus erfahrenen Musikern mit über 30 Jahren Bühnenerfahrung: Sänger Taifun, Saxophonist Jürgen, Trompeter Hardy, Funk-Bassist Stefan, Schlagzeuger Tom sowie die Gitarristen Buğra und Daniel. Im eigenen Kanzlei Studio in Hechingen entstehen Arrangements mit handwerklicher Präzision und authentischer Spielfreude.",
      note:
        "Grundlage: Typhoon-info.docx. Der finale Pressetext wird später im Admin-Bereich pflegbar.",
    },
    music: {
      title: "Musik",
      intro: "Aktuelle Demo-Aufnahmen - finale Releases folgen.",
      playerNote: "Audio-Player vorbereitet. Audiodateien werden später angebunden.",
    },
    shows: {
      title: "Shows",
      intro: "Kommende und vergangene Termine sind als Struktur vorbereitet.",
      upcoming: "Kommende Shows",
      past: "Vergangene Shows",
      status: {
        scheduled: "Geplant",
        sold_out: "Ausverkauft",
        cancelled: "Abgesagt",
        past: "Vergangen",
      },
    },
    bookingPage: {
      title: "Booking",
      intro: "Schick uns die Eckdaten für dein Event. Der Versand wird im nächsten Batch technisch angebunden.",
      notice: "Booking-Versand wird im nächsten Batch angebunden.",
      privacy:
        "Die Anfrage wird später zur Bearbeitung an booking@typhoon.band übermittelt und im Admin-Bereich gespeichert.",
    },
    legal: {
      imprintTitle: "Impressum",
      privacyTitle: "Datenschutz",
      legalReview:
        "Diese Inhalte werden später über das Admin-Menü bearbeitbar gemacht und müssen vor Livegang rechtlich geprüft werden.",
      privacyPlaceholder:
        "Diese Datenschutzseite ist ein MVP-Platzhalter. Im aktuellen Batch werden keine Formulardaten gespeichert, keine Analytics genutzt, keine externen Fonts geladen und keine externen Embeds eingebunden.",
    },
  },
  en: {
    meta: {
      title: "Typhoon | Blues, Funk & Turkish Soul",
      description:
        "Typhoon blends blues rock, funk, soul, jazz and southern rock with Turkish lyrics and powerful live energy.",
    },
    nav: {
      home: "Home",
      band: "Band",
      music: "Music",
      shows: "Shows",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
    },
    common: {
      listen: "Listen to demos",
      live: "Experience live",
      booking: "Booking request",
      bandMore: "More about the band",
      allShows: "View all shows",
      requestPrepared: "Prepare request",
      demo: "Demo",
      comingSoon: "Coming soon",
      inactive: "In preparation",
      backHome: "Back home",
    },
    home: {
      eyebrow: "BLUES ROCK • FUNK • SOUL • JAZZ • SOUTHERN ROCK",
      headline: "SMOOTH.\nEXCEPTIONAL.\nFUNK.",
      subline:
        "Typhoon blends blues rock, funk, soul, jazz and southern rock with Turkish lyrics and powerful live energy.",
      musicTitle: "Songs with a live edge",
      musicCopy: "Current demo recordings - final releases will follow.",
      bandTitle: "American feel. European soul. Turkish lyrics.",
      bandCopy:
        "Typhoon crosses genre borders without losing its own signature: blues riffs, funk grooves, soul melodies, jazz detail and a seasoned band built for the stage.",
      membersTitle: "Band members",
      showsTitle: "Next show",
      showsCopy: "The show structure is ready. Real dates will come from Supabase in a later batch.",
      bookingTitle: "Booking",
      bookingCopy: "For clubs, festivals and special live nights with soul, grit and Turkish heart.",
    },
    band: {
      title: "Band",
      intro:
        "Typhoon is a powerful blend of blues rock, funk, soul, jazz and southern rock with Turkish lyrics and an American-European sound.",
      long:
        "Original songs combine blues riffs, funk grooves, soulful melodies and jazz details. Turkish lyrics add depth and cultural character. The band brings together Taifun, Jürgen, Hardy, Stefan, Tom, Buğra and Daniel as a seasoned live collective.",
      note: "Based on Typhoon-info.docx. The final press text will later be maintained in the admin area.",
    },
    music: {
      title: "Music",
      intro: "Current demo recordings - final releases will follow.",
      playerNote: "Audio player UI is prepared. Audio files will be connected later.",
    },
    shows: {
      title: "Shows",
      intro: "Upcoming and past shows are prepared as a static structure.",
      upcoming: "Upcoming shows",
      past: "Past shows",
      status: {
        scheduled: "Scheduled",
        sold_out: "Sold out",
        cancelled: "Cancelled",
        past: "Past",
      },
    },
    bookingPage: {
      title: "Booking",
      intro: "Send the key details for your event. Real delivery will be connected in the next batch.",
      notice: "Booking delivery will be connected in the next batch.",
      privacy:
        "The request will later be sent to booking@typhoon.band for processing and stored in the admin area.",
    },
    legal: {
      imprintTitle: "Imprint",
      privacyTitle: "Privacy",
      legalReview:
        "These contents will later be editable through the admin menu and must be legally reviewed before launch.",
      privacyPlaceholder:
        "This privacy page is an MVP placeholder. This batch stores no form data, uses no analytics, loads no external fonts and includes no external embeds.",
    },
  },
  tr: {
    meta: {
      title: "Typhoon | Blues, Funk & Turkish Soul",
      description:
        "Typhoon; blues rock, funk, soul, caz ve southern rock soundunu Türkçe sözler ve güçlü sahne enerjisiyle birleştirir.",
    },
    nav: {
      home: "Ana sayfa",
      band: "Grup",
      music: "Müzik",
      shows: "Konserler",
      gallery: "Galeri",
      booking: "Booking",
      contact: "İletişim",
    },
    common: {
      listen: "Demoları dinle",
      live: "Canlı izle",
      booking: "Booking isteği",
      bandMore: "Grup hakkında",
      allShows: "Tüm konserler",
      requestPrepared: "İsteği hazırla",
      demo: "Demo",
      comingSoon: "Yakında",
      inactive: "Hazırlanıyor",
      backHome: "Ana sayfaya dön",
    },
    home: {
      eyebrow: "BLUES ROCK • FUNK • SOUL • CAZ • SOUTHERN ROCK",
      headline: "SMOOTH.\nEXCEPTIONAL.\nFUNK.",
      subline:
        "Typhoon; blues rock, funk, soul, caz ve southern rock soundunu Türkçe sözler ve güçlü sahne enerjisiyle birleştirir.",
      musicTitle: "Canlı enerjili şarkılar",
      musicCopy: "Güncel demo kayıtları - final yayınlar daha sonra gelecek.",
      bandTitle: "Amerikan hissi. Avrupa ruhu. Türkçe sözler.",
      bandCopy:
        "Typhoon blues riff'leri, funk groove'ları, soul melodileri, caz detayları ve sahne için yaşayan deneyimli bir grupla tür sınırlarını aşar.",
      membersTitle: "Grup üyeleri",
      showsTitle: "Sıradaki konser",
      showsCopy: "Konser yapısı hazır. Gerçek tarihler sonraki batch'te Supabase'ten gelecek.",
      bookingTitle: "Booking",
      bookingCopy: "Kulüpler, festivaller ve soul dolu özel canlı geceler için.",
    },
    band: {
      title: "Grup",
      intro:
        "Typhoon; Türkçe sözler ve Amerikan-Avrupa sounduyla blues rock, funk, soul, caz ve southern rock karışımıdır.",
      long:
        "Kendi besteleri blues riff'lerini, funk groove'larını, soul melodilerini ve caz detaylarını bir araya getirir. Türkçe sözler şarkılara derinlik ve kültürel karakter verir. Grup Taifun, Jürgen, Hardy, Stefan, Tom, Buğra ve Daniel'den oluşan deneyimli bir canlı kolektiftir.",
      note: "Kaynak: Typhoon-info.docx. Final basın metni daha sonra admin alanında yönetilecek.",
    },
    music: {
      title: "Müzik",
      intro: "Güncel demo kayıtları - final yayınlar daha sonra gelecek.",
      playerNote: "Audio player UI hazır. Ses dosyaları daha sonra bağlanacak.",
    },
    shows: {
      title: "Konserler",
      intro: "Yaklaşan ve geçmiş konserler statik yapı olarak hazırlandı.",
      upcoming: "Yaklaşan konserler",
      past: "Geçmiş konserler",
      status: {
        scheduled: "Planlandı",
        sold_out: "Tükendi",
        cancelled: "İptal",
        past: "Geçmiş",
      },
    },
    bookingPage: {
      title: "Booking",
      intro: "Etkinliğin temel bilgilerini gönder. Gerçek gönderim sonraki batch'te bağlanacak.",
      notice: "Booking gönderimi sonraki batch'te bağlanacak.",
      privacy:
        "İstek daha sonra işlenmek üzere booking@typhoon.band adresine iletilecek ve admin alanında saklanacak.",
    },
    legal: {
      imprintTitle: "Künye",
      privacyTitle: "Gizlilik",
      legalReview:
        "Bu içerikler daha sonra admin menüsünden düzenlenebilir olacak ve yayına çıkmadan önce hukuki olarak kontrol edilmelidir.",
      privacyPlaceholder:
        "Bu gizlilik sayfası MVP placeholder'ıdır. Bu batch form verisi saklamaz, analytics kullanmaz, harici font yüklemez ve harici embed içermez.",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
