import { DaySchedule, ChecklistItem, LocationDetail, UsefulLink, EmergencyContact } from './types';

// Google Apps Script URL for Expenses
export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzIsTMk0jq6Wn-DpD3Is1Rivgu32815b3ziqnoBAmfGb7GV9R_haRUH_8SykqmE5QZxUA/exec';
// Google Sheet name — change this per trip, no GAS code change needed
export const GOOGLE_SHEET_NAME = import.meta.env.VITE_GOOGLE_SHEET_NAME || '2026九州';
// Optional: Google Sheet URL for direct access (Placeholder)
export const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || 'https://docs.google.com/spreadsheets/d/1GxlqNNOFl6M7GkjXaAmaFiLY90Ia_irHyerJ6_v0258/edit?gid=204762384#gid=204762384';

export const PRE_TRIP_NOTES = [
  "九州六月梅雨季，記得帶雨具",
  "注意手提、托運攜帶規定",
  "購物前先找好有沒有折價券",
  "護照務必每日隨身攜帶"
];

export const TODO_LIST: ChecklistItem[] = [
  { id: 'todo_1', text: 'eSIM (9日)' },
  { id: 'todo_2', text: '租車（宮崎 6/12 一日）' },
  { id: 'todo_3', text: '租車（熊本 6/14 租 → 由布 6/16 還）' },
  { id: 'todo_4', text: '各景點門票' },
  { id: 'todo_5', text: '北九州 JR Pass' },
  { id: 'todo_6', text: '鹿兒島中央→熊本 新幹線' },
  { id: 'todo_7', text: '預約由布院之森' },
  { id: 'todo_8', text: '預約高千穗神樂' },
];

export const PACKING_CARRY_ON: ChecklistItem[] = [
  { id: 'co_1', text: '充電用具（手機、手錶、行充）' },
  { id: 'co_2', text: '台灣駕照' },
  { id: 'co_3', text: '駕照譯本' },
  { id: 'co_4', text: '護照' },
  { id: 'co_5', text: '信用卡' },
  { id: 'co_6', text: '錢包（日幣）' },
  { id: 'co_7', text: '耳機' },
  { id: 'co_8', text: '行動電源' },
  { id: 'co_9', text: '保溫杯' },
  { id: 'co_10', text: '牙線棒' },
  { id: 'co_11', text: '護唇膏' },
  { id: 'co_12', text: '雨傘' },
  { id: 'co_13', text: '袖珍包面紙' },
  { id: 'co_14', text: '口罩' },
  { id: 'co_15', text: '眼藥水' },
  { id: 'co_16', text: '防曬用品（外套袖套）' },
];

export const PACKING_CHECKED: ChecklistItem[] = [
  { id: 'ch_1', text: '浴巾、毛巾' },
  { id: 'ch_2', text: '錢包（台幣）' },
  { id: 'ch_3', text: '換洗衣物（衣褲鞋襪）' },
  { id: 'ch_4', text: '行李袋（備用）' },
  { id: 'ch_5', text: '保養品（卸妝、小藍瓶、凝露）' },
  { id: 'ch_6', text: '化妝品（DD、遮瑕、眼線、腮紅、口紅）' },
  { id: 'ch_7', text: '防曬噴霧' },
  { id: 'ch_8', text: '護髮' },
  { id: 'ch_9', text: '牙刷牙膏' },
  { id: 'ch_10', text: '折疊衣架' },
  { id: 'ch_11', text: '毛夾、髮夾、髮圈' },
  { id: 'ch_12', text: '梳子' },
  { id: 'ch_13', text: '睡衣' },
  { id: 'ch_14', text: '藥品（內外用、痠痛藥）' },
  { id: 'ch_15', text: '小洗衣板' },
  { id: 'ch_16', text: '離子夾' },
  { id: 'ch_17', text: '定型液' },
  { id: 'ch_18', text: '指甲剪' },
];

export const USEFUL_LINKS: UsefulLink[] = [
  { title: 'Visit Japan Web（入境手續）', url: 'https://vjw-lp.digital.go.jp/zh-hant/' },
  { title: '阿蘇火山口情報', url: 'https://www.aso-volcano.jp/' },
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  { title: '警察', number: '110' },
  { title: '救護/火警', number: '119' },
  { title: '訪日外國人急難熱線 (JNTO)', number: '050-3816-2787', note: '24小時多語種對應' },
  { title: '臺北駐日經濟文化代表處', number: '+81-3-3280-7811' },
];

// 使用 GitHub Raw 連結，這是最穩定的讀取方式
const BASE_AUDIO_URL = 'https://raw.githubusercontent.com/Miyu0603/kyushu-2026/main/audio';

export const JAPANESE_PHRASES = [
  {
    category: '飯店',
    vocab: [
      { jp: '送迎 (そうげい)', cn: '接送', audio: `${BASE_AUDIO_URL}/Hotel/shuttle_pickup.mp3` },
      { jp: 'シャトルバス', cn: '接駁巴士', audio: `${BASE_AUDIO_URL}/Hotel/shuttle_bus.mp3` },
      { jp: '預かり (あずかり)', cn: '寄放', audio: `${BASE_AUDIO_URL}/Hotel/luggage_storage.mp3` },
      { jp: '門限 (もんげん)', cn: '門禁時間', audio: `${BASE_AUDIO_URL}/Hotel/curfew.mp3` },
      { jp: 'ART宮崎スカイタワーホテル', cn: 'ART 宮崎天空塔酒店' },
      { jp: 'スーパーホテル熊本駅前', cn: 'Super Hotel 熊本站前天然溫泉' },
      { jp: 'ゲストハウス静穂', cn: '高千穗民宿 靜穗' },
      { jp: '古都の花心', cn: '由布 古都花心旅館' },
      { jp: 'ヴィアイン博多口駅前', cn: 'Via Inn 博多口站前' },
    ],
    sentences: [
      { jp: 'すみません、駅まで送迎（そうげい）バス（シャトルバス）をお願いできますか？', cn: '不好意思，可以請你們安排到車站的接駁車嗎？', audio: `${BASE_AUDIO_URL}/Hotel/sentence_request_bus.mp3` },
      { jp: '荷物を預かっていただけますか？', cn: '可以幫我寄放行李嗎？', audio: `${BASE_AUDIO_URL}/Hotel/sentence_store_luggage.mp3` },
      { jp: '何時まで預けることができますか？', cn: '最晚可以寄放到幾點呢？', audio: `${BASE_AUDIO_URL}/Hotel/sentence_storage_time.mp3` },
      { jp: '今日の17時ごろに荷物を取りに来ます。', cn: '我今天下午5點左右會回來拿行李。', audio: `${BASE_AUDIO_URL}/Hotel/sentence_pickup_time.mp3` },
    ]
  },
  {
    category: '租車',
    vocab: [
      { jp: 'レギュラー', cn: '普通汽油', audio: `${BASE_AUDIO_URL}/CarRental/gas_regular.mp3` },
      { jp: 'ハイオク', cn: '高級汽油', audio: `${BASE_AUDIO_URL}/CarRental/gas_high_octane.mp3` },
      { jp: '輕油 (けいゆ)', cn: '柴油', audio: `${BASE_AUDIO_URL}/CarRental/gas_diesel.mp3` },
      { jp: '滿タン (まんたん)', cn: '加滿', audio: `${BASE_AUDIO_URL}/CarRental/gas_full_tank.mp3` },
      { jp: '免責補償 (めんせきほしょう)', cn: '免責補償保險', audio: `${BASE_AUDIO_URL}/CarRental/insurance.mp3` },
      { jp: '運轉免許（うんてんめんきょ）', cn: '駕照', audio: `${BASE_AUDIO_URL}/CarRental/license.mp3` },
      { jp: '滑る（すべる）', cn: '打滑', audio: `${BASE_AUDIO_URL}/CarRental/slip.mp3` },
      { jp: '路面凍結（ろめんとうけつ）', cn: '路面結冰', audio: `${BASE_AUDIO_URL}/CarRental/road_freeze.mp3` },
      { jp: 'スタッドレスタイヤ', cn: '雪胎', audio: `${BASE_AUDIO_URL}/CarRental/studless_tire.mp3` },
    ],
    sentences: [
      { jp: 'この車の油種はレギュラーでいいですか？', cn: '這台車是加 Regular 汽油就可以了嗎？', audio: `${BASE_AUDIO_URL}/CarRental/sentence_gas_type.mp3` },
      { jp: 'この近くにガソリンスタンドはありますか？', cn: '這附近有加油站嗎？', audio: `${BASE_AUDIO_URL}/CarRental/sentence_gas_station.mp3` },
      { jp: 'この時期、道が凍って(こおって)滑る(すべる)ことはありますか？', cn: '這個時期，路面會結冰導致打滑嗎？', audio: `${BASE_AUDIO_URL}/CarRental/sentence_road_condition.mp3` },
      { jp: 'レギュラーを滿タンでお願いします。', cn: '請幫我加滿 Regular。', audio: `${BASE_AUDIO_URL}/CarRental/sentence_fill_up.mp3` },
      { jp: 'この車はスタッドレスタイヤを履いていますか？', cn: '這台車有換上雪胎嗎？', audio: `${BASE_AUDIO_URL}/CarRental/sentence_check_tire.mp3` },
    ]
  },
  {
    category: '聊天與社交',
    vocab: [
      { jp: '絕景 (ぜっけい)', cn: '絕美風景', audio: `${BASE_AUDIO_URL}/Social/view_superb.mp3` },
      { jp: '綺麗 (きれい)', cn: '漂亮、美', audio: `${BASE_AUDIO_URL}/Social/beautiful.mp3` },
      { jp: '地元 (じもと)', cn: '在地、當地', audio: `${BASE_AUDIO_URL}/Social/local.mp3` },
      { jp: '初めて (はじめて)', cn: '第一次', audio: `${BASE_AUDIO_URL}/Social/first_time.mp3` },
      { jp: 'お勧め (おすすめ)', cn: '推薦', audio: `${BASE_AUDIO_URL}/Social/recommendation.mp3` },
    ],
    sentences: [
      { jp: '阿蘇山が本当に綺麗ですね！こんな絶景は初めて見ました。', cn: '阿蘇山真的好美喔！我第一次看到這種絕景。' },
      { jp: 'この近くで、地元の人に人気のお勧めレストランはありますか？', cn: '這附近有沒有在地人也常去、推薦的餐廳呢？', audio: `${BASE_AUDIO_URL}/Social/sentence_restaurant.mp3` },
      { jp: '台湾から来ました。日本はとても楽しいです。', cn: '我從台灣來的。日本真的很好玩。', audio: `${BASE_AUDIO_URL}/Social/sentence_from_taiwan.mp3` },
    ]
  },
  {
    category: '地名',
    vocab: [
      { jp: '宮崎空港 (みやざきくうこう)', cn: '宮崎機場' },
      { jp: '宮崎駅 (みやざきえき)', cn: '宮崎車站' },
      { jp: '青島神社 (あおしまじんじゃ)', cn: '青島神社' },
      { jp: '鵜戶神宮 (うどじんぐう)', cn: '鵜戶神宮' },
      { jp: '隼人駅 (はやとえき)', cn: '隼人車站' },
      { jp: '鹿児島神宮 (かごしまじんぐう)', cn: '鹿兒島神宮' },
      { jp: '鹿児島中央駅 (かごしまちゅうおうえき)', cn: '鹿兒島中央車站' },
      { jp: '熊本駅 (くまもとえき)', cn: '熊本車站' },
      { jp: '熊本城 (くまもとじょう)', cn: '熊本城' },
      { jp: '上色見熊野座神社 (かみしきみくまのいますじんじゃ)', cn: '上色見熊野座神社' },
      { jp: '高千穂 (たかちほ)', cn: '高千穗' },
      { jp: '高千穂峡 (たかちほきょう)', cn: '高千穗峽' },
      { jp: '天岩戸神社 (あまのいわとじんじゃ)', cn: '天岩戶神社' },
      { jp: '阿蘇山 (あそさん)', cn: '阿蘇山' },
      { jp: '草千里ヶ浜 (くさせんりがはま)', cn: '草千里之濱' },
      { jp: '別府 (べっぷ)', cn: '別府' },
      { jp: '由布院 (ゆふいん)', cn: '由布院' },
      { jp: '金鱗湖 (きんりんこ)', cn: '金鱗湖' },
      { jp: '博多駅 (はかたえき)', cn: '博多車站' },
      { jp: '太宰府天満宮 (だざいふてんまんぐう)', cn: '太宰府天滿宮' },
      { jp: '櫛田神社 (くしだじんじゃ)', cn: '櫛田神社' },
      { jp: '門司港 (もじこう)', cn: '門司港' },
      { jp: '福岡空港 (ふくおかくうこう)', cn: '福岡機場' },
    ]
  }
];

export const LOCATION_DETAILS: Record<string, LocationDetail> = {
  // ===== 住宿 =====
  'art_miyazaki': {
    id: 'art_miyazaki',
    title: 'ART 宮崎天空塔酒店',
    description: 'Klook 訂房，11 點前退房。位於宮崎市中心高千穗通，鄰近宮崎車站，交通便利。',
    address: '2 Chome-1-26 Takachihodori, Miyazaki, 880-0812',
    mapUrl: 'https://maps.app.goo.gl/LHMyCwGWuMwEtPB96',
  },
  'super_hotel_kumamoto': {
    id: 'super_hotel_kumamoto',
    title: 'Super Hotel 熊本站前天然溫泉',
    description: 'Agoda 訂房，10 點退房。位於熊本車站前，附天然溫泉，含免費早餐。',
    address: '2 Chome-3-23 Kasuga, Nishi Ward, Kumamoto, 860-0047',
    mapUrl: 'https://maps.app.goo.gl/7W6shMAAb6qswNPj9',
  },
  'guesthouse_shizuho': {
    id: 'guesthouse_shizuho',
    title: 'ゲストハウス静穂（高千穗民宿）',
    description: 'Agoda 訂房，9 點退房。位於高千穗町，現場付款。',
    address: 'Mitai 814-6, 高千穗, 882-1101',
    mapUrl: 'https://maps.app.goo.gl/yMvp27fwA1aHknCU6',
  },
  'koto_hanagokoro': {
    id: 'koto_hanagokoro',
    title: '旅館 古都の花心',
    description: 'Agoda 訂房，9 點退房。位於由布院溫泉區，現場付款。',
    address: '1018-7 Yufuincho Kawakami, 由布, 879-5102',
    mapUrl: 'https://maps.app.goo.gl/kpYzAxj4xGtx9WSP7',
  },
  'via_inn_hakata': {
    id: 'via_inn_hakata',
    title: 'Via Inn 博多口站前維亞飯店',
    description: 'Agoda 訂房，已付款。位於博多車站前，連住四晚 (6/16–6/20)。',
    address: '2 Chome-17-11 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011',
    mapUrl: 'https://maps.app.goo.gl/7RikENXPYuJ9szba7',
  },

  // ===== 租車 =====
  'budget_miyazaki': {
    id: 'budget_miyazaki',
    title: 'BUDGET 租車（宮崎）',
    description: '宮崎機場取車 → 宮崎站還車。還車前記得加油。',
    address: '宮崎機場',
    reservation: {
      id: 'BUDGET-0612',
      sections: [
        {
          title: '車輛配置 VEHICLE',
          items: [
            { label: '車型', value: '大發 Move 或同級（小型轎車）' },
            { label: '油種', value: 'レギュラー（普通汽油）' },
          ]
        },
        {
          title: '時程安排 SCHEDULE',
          items: [
            { label: '取車', value: '6/12 (五) 10:30 宮崎機場', isFullWidth: true },
            { label: '還車', value: '6/12 (五) 20:00 宮崎站', isFullWidth: true },
          ]
        },
        {
          title: '費用總計 TOTAL',
          items: [
            { label: '合計費用', value: '台幣 144 + 日幣 4,960' },
            { label: '支付方式', value: '已付 + 現場付款' },
          ]
        }
      ]
    }
  },
  'nissan_kumamoto': {
    id: 'nissan_kumamoto',
    title: 'NISSAN 租車（熊本→由布院）',
    description: 'NISSAN 熊本店取車 → 湯布院店還車。兩天一夜自駕行程。',
    address: 'NISSAN 熊本店',
    reservation: {
      id: 'NISSAN-0614',
      sections: [
        {
          title: '車輛配置 VEHICLE',
          items: [
            { label: '車型', value: 'Dayz 同等級' },
            { label: '油種', value: 'レギュラー（普通汽油）' },
          ]
        },
        {
          title: '時程安排 SCHEDULE',
          items: [
            { label: '取車', value: '6/14 (日) 13:00 NISSAN 熊本店', isFullWidth: true },
            { label: '還車', value: '6/16 (二) 13:00 湯布院店', isFullWidth: true },
          ]
        },
        {
          title: '費用總計 TOTAL',
          items: [
            { label: '合計費用', value: '33,748 JPY' },
            { label: '支付方式', value: '現場付款' },
          ]
        }
      ]
    }
  },

  // ===== Day 1 景點 =====
  'aoshima_shrine': {
    id: 'aoshima_shrine',
    title: '青島神社 & 鬼之洗衣板',
    description: '位於被亞熱帶植物環繞的青島上，以獨特的「鬼之洗衣板」波狀岩石海岸聞名。神社供奉山幸彥，是祈求結緣與安產的名所。',
    address: '宮崎縣宮崎市青島2-13-1',
    openingHours: '境內 24 小時開放；社務所 9:00–17:00',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Aoshima+Shrine+Miyazaki',
    mapCode: '66 241 413*61',
    websiteUrl: 'https://aoshima-jinja.jp/',
  },
  'nichinan_sun_garden': {
    id: 'nichinan_sun_garden',
    title: '日南太陽花園 (Sun Messe Nichinan)',
    description: '擁有世界唯一獲准復刻的摩艾石像群，面向太平洋的壯觀景色。園內還有許多藝術作品和花園，自駕可停在最靠近入口的停車場。',
    address: '宮崎縣日南市宮浦2650',
    openingHours: '9:30–17:00（最後入園 16:00）；週三休館',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sun+Messe+Nichinan',
    mapCode: '66 032 547*67',
    websiteUrl: 'https://www.sun-messe.co.jp/',
  },
  'udo_shrine': {
    id: 'udo_shrine',
    title: '鵜戶神宮',
    description: '建在面向太平洋的懸崖洞窟中的神社，以「運玉」投擲祈願聞名。下到洞窟的階梯沿途風景壯麗，是日南海岸的代表景點。',
    address: '宮崎縣日南市大字宮浦3232',
    openingHours: '6:00–19:00（4月–9月）；6:00–17:00（10月–3月）；全年無休',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Udo+Shrine+Miyazaki',
    mapCode: '66 001 521*41',
    websiteUrl: 'https://www.udojingu.com/',
  },

  // ===== Day 2 景點 =====
  'nishitachi': {
    id: 'nishitachi',
    title: 'ニシタチ (NightSpot NISHITACHI)',
    description: '宮崎市中心的繁華夜生活街區，集結居酒屋、烤雞串（地雞）、在地美食。是宮崎人的深夜食堂，推薦嘗試宮崎地雞炭火燒與冷汁。',
    address: '宮崎縣宮崎市橘通西3丁目',
    openingHours: '各店不同；多數店家約 18:00–24:00 營業',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nishitachi+Miyazaki',
    mapCode: '66 343 095*74',
  },
  'kagoshima_jingu': {
    id: 'kagoshima_jingu',
    title: '鹿兒島神宮',
    description: '位於隼人附近的古老神社，供奉神武天皇之父。境內莊嚴寧靜，是南九州地區的重要信仰中心。',
    address: '鹿兒島縣霧島市隼人町內2496-1',
    openingHours: '境內 24 小時開放；社務所 9:00–17:00',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kagoshima+Jingu+Shrine',
  },
  'kumamoto_yataimura': {
    id: 'kumamoto_yataimura',
    title: '熊本屋台村 + AMU PLAZA 熊本',
    description: '位於熊本車站旁，集結多家居酒屋和小吃攤的屋台村，可品嚐熊本當地美食。AMU PLAZA 則是車站直結的購物商場。',
    address: '熊本縣熊本市西區春日3丁目',
    openingHours: '屋台村 17:00–23:00；AMU PLAZA 10:00–21:00（餐廳至 22:00）',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=AMU+PLAZA+Kumamoto',
  },

  // ===== Day 3 景點 =====
  'kumamoto_castle': {
    id: 'kumamoto_castle',
    title: '熊本城 & 櫻之馬場 城彩苑',
    description: '日本三大名城之一，由加藤清正於1607年建造。2016年熊本地震後持續修復中，天守閣已重新開放。城彩苑是城下的觀光商業設施，可用餐購物。',
    address: '熊本縣熊本市中央區本丸1-1',
    openingHours: '9:00–17:00（最後入園 16:00）；全年無休',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kumamoto+Castle',
    websiteUrl: 'https://castle.kumamoto-guide.jp/',
  },
  'kamishikimi_shrine': {
    id: 'kamishikimi_shrine',
    title: '上色見熊野座神社',
    description: '被約100座石燈籠和參天杉木包圍的神秘神社，苔蘚覆蓋的石階彷彿通往異世界。據說是動畫《螢火之森》的靈感來源。',
    address: '熊本縣阿蘇郡高森町上色見2619',
    openingHours: '境內 24 小時自由參拜',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kamishikimi+Kumanoimasu+Shrine',
    mapCode: '232 885 584*74',
    websiteUrl: 'https://kyushu.letsgojp.com/archives/763007/',
  },
  'takachiho_kagura': {
    id: 'takachiho_kagura',
    title: '高千穗神樂',
    description: '每晚在高千穗神社舉辦的傳統神樂舞蹈表演，再現日本神話中天照大神的故事。需提前一個月預約，19:00 可入場，20:00 開演。',
    address: '宮崎縣西臼杵郡高千穗町三田井1037',
    openingHours: '每日 19:00 開門入場，20:00 開演，演出約 1 小時；需提前一個月預約',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Takachiho+Shrine',
    mapCode: '330 202 715*77',
    websiteUrl: 'https://takachiho-kanko.info/kagura/information/',
  },

  // ===== Day 4 景點 =====
  'kunimigaoka': {
    id: 'kunimigaoka',
    title: '國見之丘',
    description: '高千穗地區的展望台，海拔513公尺。秋冬清晨可看到壯觀的雲海，夏季則可欣賞日出。2026/6/15 預估日出時間 05:09。',
    address: '宮崎縣西臼杵郡高千穗町押方',
    openingHours: '24 小時開放（展望台）；無休',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kunimigaoka+Takachiho',
    mapCode: '330 172 228*11',
  },
  'amaterasu_railway': {
    id: 'amaterasu_railway',
    title: '高千穗天照鐵道',
    description: '利用廢棄鐵道改建的觀光小火車，行駛在高千穗鐵橋上，距離地面105公尺，是日本最高的鐵道橋。小火車 9:40 開始運行，建議 9:25 到場登記。',
    address: '宮崎縣西臼杵郡高千穗町三田井1425-1',
    openingHours: '9:00–17:00；首班 9:40，約 30 分鐘一班；票券當日現場購買（現金）',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Amaterasu+Railway+Takachiho',
    mapCode: '330 202 541*55',
    websiteUrl: 'https://amaterasu-railway.jp/',
  },
  'takachiho_gorge': {
    id: 'takachiho_gorge',
    title: '高千穗峽',
    description: '由阿蘇火山噴發的熔岩侵蝕形成的V字形峽谷，高達100公尺的斷崖綿延7公里。真名井瀑布從17公尺高處落下，可划船近距離欣賞。導航至御塩井停車場。',
    address: '宮崎縣西臼杵郡高千穗町三田井御塩井',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Takachiho+Gorge',
    mapCode: '330 202 570*85',
    openingHours: '峽谷步道全天開放；小船租借 8:30–17:00（最後受理 16:30）；⚠️ 旺季建議 8:30 開門即到',
    websiteUrl: 'https://takachiho-kanko.info/sightseeing/takachiho_gorge.php',
  },
  'amanoiwato_shrine': {
    id: 'amanoiwato_shrine',
    title: '天岩戶神社 & 天安河原',
    description: '供奉天照大神的神社，傳說天照大神曾隱身於此處的岩洞中。沿仰慕之大橋步道步行約10分鐘可抵達天安河原，洞窟內堆疊著無數祈願石堆。',
    address: '宮崎縣西臼杵郡高千穗町岩戶1073-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Amanoiwato+Shrine',
    mapCode: '330 172 818*11',
    openingHours: '社務所 8:00–18:00（4–9月）；天安河原全天開放；無休',
    websiteUrl: 'https://amanoiwato-jinja.jp/',
  },
  'aso_nakadake': {
    id: 'aso_nakadake',
    title: '阿蘇中岳火山口 & 草千里之濱',
    description: '阿蘇山是世界最大的破火山口之一，中岳火山口至今仍活躍噴發。草千里之濱是火山口旁的大草原，夏季翠綠如茵。火山口開放狀況需當日確認。',
    address: '熊本縣阿蘇市黑川',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Aso+Nakadake+Crater',
    mapCode: '256 252 126*22',
    openingHours: '8:30–18:00（夏季 3/20–10/31）；⚠️ 火山活動可能臨時關閉，出發前務必查詢官網',
    websiteUrl: 'https://www.aso-volcano.jp/',
  },

  // ===== Day 5 景點 =====
  'beppu_jigoku': {
    id: 'beppu_jigoku',
    title: '別府地獄巡禮 & 世界之塔',
    description: '別府溫泉的特色景觀，包含海地獄、血之池地獄、龍捲地獄等多個「地獄」溫泉。每個地獄都有不同顏色和特性，是別府的代表觀光景點。',
    address: '大分縣別府市鉄輪559-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Beppu+Jigoku+Meguri',
    mapCode: '46 494 592*70',
    openingHours: '8:00–17:00；全年無休',
    websiteUrl: 'https://www.beppu-jigoku.com/',
  },
  'yufuin_kinrinko': {
    id: 'yufuin_kinrinko',
    title: '由布院湯之坪街道 & 金鱗湖',
    description: '由布院的主要散策路線，從由布院車站延伸至金鱗湖。沿途有各式雜貨店、甜點店和美術館。金鱗湖因湖底溫泉湧出，清晨常有夢幻的晨霧景象。',
    address: '大分縣由布市湯布院町川上',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kinrin+Lake+Yufuin',
    mapCode: '269 032 470*78',
    openingHours: '湯之坪街道各店約 10:00–17:00；金鱗湖全天開放',
  },
  'yufuin_no_mori': {
    id: 'yufuin_no_mori',
    title: '觀光特急「由布院之森」',
    description: '連接由布院與博多的 JR 九州觀光列車，全車以木質裝潢打造森林意象。車內設有沙龍空間和販賣部，行駛約2小時。需事先預約指定席。',
    websiteUrl: 'https://www.jrkyushu.co.jp/chinese/train/yufuin_no_mori.html',
  },

  // ===== Day 6 景點 =====
  'oouo_shrine': {
    id: 'oouo_shrine',
    title: '大魚神社 海中鳥居',
    description: '位於佐賀縣太良町的海中鳥居，退潮時可步行至鳥居下方，漲潮時鳥居沒入海中，景色隨潮汐變化。務必事先查詢潮汐時間。',
    address: '佐賀縣藤津郡太良町多良',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Oouo+Shrine+Tara',
    openingHours: '全天開放；退潮時可步行至鳥居（出發前務必查詢當日潮汐時間）',
  },
  'yuutoku_shrine': {
    id: 'yuutoku_shrine',
    title: '祐德稻荷神社',
    description: '日本三大稻荷神社之一，以朱紅色的豪華樓門和本殿聞名。建在山坡上，從奧之院可俯瞰鹿島市平原和有明海的壯麗景色。',
    address: '佐賀縣鹿島市古枝乙1855',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yutoku+Inari+Shrine',
    openingHours: '9:00–17:00（社務所）；境內全天開放；全年無休',
    websiteUrl: 'https://www.yutokusan.jp/',
  },

  // ===== Day 7 景點 =====
  'mojiko': {
    id: 'mojiko',
    title: '門司港車站周邊',
    description: '大正時代的復古港口區域，門司港車站本身即為國家重要文化財。周邊有許多大正浪漫風格的西洋建築，以及著名的「燒咖哩」美食。',
    address: '福岡縣北九州市門司區西海岸1-5-31',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mojiko+Retro',
    openingHours: '周邊街道全天開放；商店街約 10:00–20:00；各店不同',
  },
  'kanmon_museum': {
    id: 'kanmon_museum',
    title: '關門海峽博物館',
    description: '位於門司港旁的互動式博物館，介紹關門海峽的歷史、文化和自然生態。可從展望台眺望關門海峽大橋和對岸的下關市。',
    address: '福岡縣北九州市門司區西海岸1-3-3',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kanmon+Straits+Museum',
    openingHours: '9:00–17:00（最後入館 16:30）；週二休館',
    websiteUrl: 'https://www.klook.com/zh-TW/activity/81214-kanmon-strait-museum-ticket-in-fukuoka/',
  },
  'kushida_shrine': {
    id: 'kushida_shrine',
    title: '櫛田神社 & 博多祇園山笠',
    description: '博多的總鎮守神社，有超過750年歷史。以每年7月舉辦的「博多祇園山笠」祭典聞名，境內常年展示巨大的「飾り山笠」。',
    address: '福岡縣福岡市博多區上川端町1-41',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kushida+Shrine+Fukuoka',
    openingHours: '境內全天開放；社務所 9:00–17:00',
  },

  // ===== Day 8 景點 =====
  'nanzoin': {
    id: 'nanzoin',
    title: '南藏院 釋迦涅槃像',
    description: '擁有全世界最大的銅製釋迦涅槃像（全長41公尺），橫臥在寧靜的山林中，氣勢震撼。寺院本身也是「篠栗四國八十八箇所」的第一番札所。',
    address: '福岡縣糟屋郡篠栗町篠栗1035',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nanzoin+Temple+Sasaguri',
    openingHours: '9:00–17:00（最後受理 16:30）；入場費 500 日圓（外國人）',
    websiteUrl: 'https://nanzoin.net/',
  },
  'dazaifu': {
    id: 'dazaifu',
    title: '太宰府天滿宮 & 九州國立博物館',
    description: '供奉「學問之神」菅原道真的神社，是日本全國天滿宮的總本宮之一。參道上的梅枝餅是必嚐名物。九州國立博物館就在天滿宮後方。',
    address: '福岡縣太宰府市宰府4-7-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu',
    openingHours: '天滿宮 6:30–19:00（夏季）；九州國立博物館 9:30–17:00（週一休）',
    websiteUrl: 'https://www.dazaifutenmangu.or.jp/',
  },
  'kamado_shrine': {
    id: 'kamado_shrine',
    title: '寶滿宮 竈門神社',
    description: '位於寶滿山麓的神社，以結緣和除厄聞名。因被認為是《鬼滅之刃》中「竈門炭治郎」名字的由來而爆紅，社殿和自然景觀都十分美麗。',
    address: '福岡縣太宰府市內山883',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kamado+Shrine+Dazaifu',
    openingHours: '社務所 9:00–17:00；境內全天開放',
    websiteUrl: 'https://kamadojinja.or.jp/',
  },
  'canal_city': {
    id: 'canal_city',
    title: '博多運河城 (Canal City)',
    description: '福岡最大的複合商業設施，擁有運河水景、購物、美食和劇場。每天定時上演噴水秀和水舞秀，夜間的燈光演出特別精彩。',
    address: '福岡縣福岡市博多區住吉1-2',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Canal+City+Hakata',
    openingHours: '商店 10:00–21:00；餐廳 11:00–23:00',
    websiteUrl: 'https://canalcity.co.jp/',
  },

  // ===== Day 9 景點 =====
  'marine_world': {
    id: 'marine_world',
    title: '海洋世界 海之中道',
    description: '九州最大的水族館，展示約350種3萬隻海洋生物。以「九州之海」為主題，有精彩的海豚和海獅表演。位於海之中道海濱公園內。',
    address: '福岡縣福岡市東區西戶崎18-28',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Marine+World+Uminonakamichi',
    openingHours: '9:30–17:30（3–10月）；全年無休',
    websiteUrl: 'https://marine-world.jp/',
  },
  'lalaport_fukuoka': {
    id: 'lalaport_fukuoka',
    title: 'LaLaport 福岡（實物大鋼彈）',
    description: '2022年開幕的大型購物中心，最大亮點是高約25公尺的實物大自由鋼彈立像。內有山響屋等人氣店舖，適合最後一天購物。',
    address: '福岡縣福岡市博多區那珂6-23-1',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=LaLaport+Fukuoka',
    openingHours: '10:00–21:00；全年無休（部分店鋪不同）',
    websiteUrl: 'https://mitsui-shopping-park.com/lalaport/fukuoka/',
  },
};

export const ITINERARY: DaySchedule[] = [
  {
    date: '6/12',
    weekday: '星期五',
    title: '南國宮崎日南海岸自駕',
    accommodation: 'ART 宮崎天空塔酒店',
    accommodationMapUrl: 'https://maps.app.goo.gl/LHMyCwGWuMwEtPB96',
    mapUrl: 'https://www.google.com/maps/dir/Miyazaki+Airport/Aoshima+Shrine/Sun+Messe+Nichinan/Udo+Shrine/Miyazaki+Station',
    events: [
      { time: '09:20', description: '抵達宮崎機場 (KMI)，辦理入境手續', note: '航班 IT742，06:20 桃園起飛' },
      { time: '10:00', description: '宮崎機場 BUDGET 取車', locationId: 'budget_miyazaki', isHighlight: true },
      { time: '10:30', description: '青島神社 & 鬼之洗衣板', note: '停留 2 小時', locationId: 'aoshima_shrine' },
      { time: '13:30', description: '日南太陽花園（Sun Messe Nichinan）', note: '停留 1.5 小時，自駕停靠近入口停車場', locationId: 'nichinan_sun_garden' },
      { time: '15:30', description: '鵜戶神宮', note: '停留 1.5 小時', locationId: 'udo_shrine' },
      { time: '19:00', description: '開回宮崎車站（可提早）' },
      { time: '20:00', description: '宮崎車站還車（還車前記得加油）' },
      { time: '20:10', description: '入住 ART 宮崎天空塔酒店', locationId: 'art_miyazaki' },
      { time: '20:30', description: 'ニシタチ (NightSpot NISHITACHI) 晚餐', locationId: 'nishitachi' },
    ]
  },
  {
    date: '6/13',
    weekday: '星期六',
    title: '鹿兒島北上熊本',
    accommodation: 'Super Hotel 熊本站前天然溫泉',
    accommodationMapUrl: 'https://maps.app.goo.gl/7W6shMAAb6qswNPj9',
    mapUrl: 'https://www.google.com/maps/dir/ART+Miyazaki+Sky+Tower/Hayato+Station/Kagoshima+Jingu/Kagoshima-Chuo+Station/Kumamoto+Station',
    events: [
      { time: '09:00', description: '從 ART 飯店出發' },
      { time: '09:20', description: '搭 JR 霧島特急到隼人站先放行李', isHighlight: true },
      { time: '11:00', description: '鹿兒島神宮周邊', note: '停留 3 小時，含午餐', locationId: 'kagoshima_jingu' },
      { time: '13:50', description: '從隼人搭車往鹿兒島中央站', note: '霧島特急 13:58–14:28' },
      { time: '14:45', description: '搭九州新幹線到熊本', isHighlight: true, note: '‼️ 先在熊本站取北九州 JR Pass' },
      { time: '15:41', description: '到熊本飯店入住', locationId: 'super_hotel_kumamoto' },
      { time: '18:00', description: '熊本屋台村 + AMU PLAZA 熊本', locationId: 'kumamoto_yataimura' },
    ]
  },
  {
    date: '6/14',
    weekday: '星期日',
    title: '熊本名城與秘境探索',
    accommodation: 'ゲストハウス静穂（高千穗）',
    accommodationMapUrl: 'https://maps.app.goo.gl/yMvp27fwA1aHknCU6',
    mapUrl: 'https://www.google.com/maps/dir/Kumamoto+Castle/Kamishikimi+Kumanoimasu+Shrine/Takachiho',
    events: [
      { time: '09:30', description: '熊本城 & 櫻之馬場 城彩苑', note: '停留 3 小時，含午餐', locationId: 'kumamoto_castle' },
      { time: '13:00', description: '熊本市區 NISSAN 租車', note: '開始自駕', locationId: 'nissan_kumamoto', isHighlight: true },
      { time: '14:30', description: '上色見熊野座神社', note: '停留 2.5 小時', locationId: 'kamishikimi_shrine' },
      { time: '18:30', description: '抵達高千穗民宿 靜穗入住', locationId: 'guesthouse_shizuho' },
      { time: '20:00', description: '高千穗神樂', note: '前一個月預約，19:00 可入場', locationId: 'takachiho_kagura' },
    ]
  },
  {
    date: '6/15',
    weekday: '星期一',
    title: '高千穗神話秘境',
    accommodation: '旅館 古都の花心',
    accommodationMapUrl: 'https://maps.app.goo.gl/kpYzAxj4xGtx9WSP7',
    mapUrl: 'https://www.google.com/maps/dir/Kunimigaoka/Amaterasu+Railway+Takachiho/Takachiho+Gorge/Amanoiwato+Shrine/Aso+Nakadake/Yufuin',
    events: [
      { time: '05:00', description: '國見之丘看日出', note: '爬得起來再去，預估日出 05:09', locationId: 'kunimigaoka' },
      { time: '09:25', description: '高千穗天照鐵道', note: '小火車 9:40 開始，9:25 登記，停留 1 小時', locationId: 'amaterasu_railway', isHighlight: true },
      { time: '10:30', description: '高千穗峽', note: '停留 1 小時，導航御塩井停車場', locationId: 'takachiho_gorge' },
      { time: '11:30', description: '附近午餐', note: '有點想吃高千穗牛' },
      { time: '13:00', description: '天岩戶神社 & 天安河原', note: '走仰慕之大橋步道約10分鐘，停留 1 小時', locationId: 'amanoiwato_shrine' },
      { time: '14:00', description: '阿蘇中岳火山口 & 草千里之濱', note: '停留 2.5 小時', locationId: 'aso_nakadake' },
      { time: '18:00', description: '入住古都花心旅館', locationId: 'koto_hanagokoro' },
    ]
  },
  {
    date: '6/16',
    weekday: '星期二',
    title: '別府地獄與夢幻觀光火車',
    accommodation: 'Via Inn 博多口站前維亞飯店',
    accommodationMapUrl: 'https://maps.app.goo.gl/7RikENXPYuJ9szba7',
    mapUrl: 'https://www.google.com/maps/dir/Beppu+Jigoku/Yufuin/Hakata+Station',
    events: [
      { time: '09:00', description: '別府地獄巡禮 & 世界之塔', note: '停留 3 小時', locationId: 'beppu_jigoku' },
      { time: '12:30', description: '抵達由布院並辦理還車', note: '結束自駕，最晚 13:00 還車' },
      { time: '13:00', description: '由布院湯之坪街道 & 金鱗湖 散策', note: '停留 2 小時', locationId: 'yufuin_kinrinko' },
      { time: '15:56', description: '搭乘觀光特急「由布院之森」前往博多', isHighlight: true, locationId: 'yufuin_no_mori' },
      { time: '18:10', description: '抵達博多站，入住飯店', locationId: 'via_inn_hakata' },
    ]
  },
  {
    date: '6/17',
    weekday: '星期三',
    title: '佐賀海中鳥居',
    accommodation: 'Via Inn 博多口站前維亞飯店',
    accommodationMapUrl: 'https://maps.app.goo.gl/7RikENXPYuJ9szba7',
    mapUrl: 'https://www.google.com/maps/dir/Hakata+Station/Hizen-Kashima+Station/Oouo+Shrine+Tara/Yutoku+Inari+Shrine/Hakata+Station',
    events: [
      { time: '09:30', description: '搭乘 JR 前往肥前鹿島駅', isHighlight: true, note: '轉車前往祐德神社方向' },
      { time: '12:30', description: '大魚神社 海中鳥居', note: '注意潮汐時間，停留 1.5 小時', locationId: 'oouo_shrine' },
      { time: '15:00', description: '祐德稻荷神社', note: '停留 1.5 小時', locationId: 'yuutoku_shrine' },
      { time: '18:30', description: '返回博多市區，享用博多屋台美食' },
    ]
  },
  {
    date: '6/18',
    weekday: '星期四',
    title: '門司港復古與博多',
    accommodation: 'Via Inn 博多口站前維亞飯店',
    accommodationMapUrl: 'https://maps.app.goo.gl/7RikENXPYuJ9szba7',
    mapUrl: 'https://www.google.com/maps/dir/Hakata+Station/Mojiko+Station/Kanmon+Straits+Museum/Kushida+Shrine+Fukuoka/Hakata+Station',
    events: [
      { time: '10:00', description: '門司港車站周邊散策', note: '停留 3.5 小時', locationId: 'mojiko' },
      { time: '10:30', description: '關門海峽博物館', locationId: 'kanmon_museum' },
      { time: '15:00', description: '返回福岡市區' },
      { time: '16:00', description: '櫛田神社 & 博多祇園山笠', note: '停留 1.5 小時', locationId: 'kushida_shrine' },
      { time: '18:00', description: '博多車站或中洲屋台晚餐' },
    ]
  },
  {
    date: '6/19',
    weekday: '星期五',
    title: '釋迦涅槃大佛與太宰府',
    accommodation: 'Via Inn 博多口站前維亞飯店',
    accommodationMapUrl: 'https://maps.app.goo.gl/7RikENXPYuJ9szba7',
    mapUrl: 'https://www.google.com/maps/dir/Hakata+Station/Nanzoin+Temple+Sasaguri/Dazaifu+Tenmangu/Kamado+Shrine/Canal+City+Hakata',
    events: [
      { time: '09:30', description: '南藏院 釋迦涅槃像', note: '停留 2 小時', locationId: 'nanzoin' },
      { time: '13:00', description: '太宰府天滿宮 & 九州國立博物館', note: '停留 3 小時', locationId: 'dazaifu' },
      { time: '16:30', description: '寶滿宮 竈門神社', note: '停留 1 小時', locationId: 'kamado_shrine' },
      { time: '19:00', description: '博多運河城 購物與水舞秀', locationId: 'canal_city' },
    ]
  },
  {
    date: '6/20',
    weekday: '星期六',
    title: '水族館＆購物 → 歸國',
    mapUrl: 'https://www.google.com/maps/dir/Hakata+Station/Marine+World+Uminonakamichi/LaLaport+Fukuoka/Fukuoka+Airport',
    events: [
      { time: '09:30', description: '退房寄放行李', locationId: 'via_inn_hakata' },
      { time: '10:00', description: '附近買早餐' },
      { time: '10:20', description: '從博多搭 JR 到海之中道', isHighlight: true, note: '音速・日輪・日向 → 香椎站轉香椎線' },
      { time: '11:00', description: '海洋世界 海之中道', note: '停留 3 小時，含午餐', locationId: 'marine_world' },
      { time: '13:30', description: '離開海之中道前往 LaLaport' },
      { time: '15:00', description: 'LaLaport 福岡（實物大鋼彈）', note: '最後購物，停留 3 小時（山響屋）', locationId: 'lalaport_fukuoka' },
      { time: '18:30', description: '返回飯店拿行李並前往福岡機場' },
      { time: '19:00', description: '抵達機場櫃檯辦理登機', note: '華航 CL117，21:00 班機' },
      { time: '21:00', description: '搭機返回桃園', isHighlight: true, note: '22:30 抵達桃園機場' },
    ]
  }
];
