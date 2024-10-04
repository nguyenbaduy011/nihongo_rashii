import { db } from "@/lib/drizzle/db";
import { grammars } from "@/lib/drizzle/schema";

export async function InsertN3Grammars() {
  return await db.insert(grammars).values([
    {
      id: "N3_1",
      romajiRead: "ageru",
      japaneseRead: "上げる",
      level: "N3",
      explain: ``,
      meaning: "Làm...xong",
      usingWay: ``,
    },
    {
      id: "N3_2",
      romajiRead: "au",
      japaneseRead: "合う",
      level: "N3",
      explain: ``,
      meaning: "Làm điều gì đó cùng nhau...",
      usingWay: ``,
    },
    {
      id: "N3_3",
      romajiRead: "ba yokatta",
      japaneseRead: "ばよかった",
      level: "N3",
      explain: ``,
      meaning: "Giá mà...thì tốt rồi",
      usingWay: ``,
    },
    {
      id: "N3_4",
      romajiRead: "ba～hodo",
      japaneseRead: "ば～ほど",
      level: "N3",
      explain: ``,
      meaning: "Càng...càng",
      usingWay: ``,
    },
    {
      id: "N3_5",
      romajiRead: "ba～noni",
      japaneseRead: "ば～のに",
      level: "N3",
      explain: ``,
      meaning: "Thế mà/giá mà",
      usingWay: ``,
    },
    {
      id: "N3_6",
      romajiRead: "bakari",
      japaneseRead: "ばかり",
      level: "N3",
      explain: ``,
      meaning: "Toàn.../chỉ.../lúc nào cũng",
      usingWay: ``,
    },
    {
      id: "N3_7",
      romajiRead: "bakarika～mo",
      japaneseRead: "ばかりか～も",
      level: "N3",
      explain: ``,
      meaning: "Không chỉ có...mà còn",
      usingWay: ``,
    },
    {
      id: "N3_8",
      romajiRead: "beki da",
      japaneseRead: "べきだ",
      level: "N3",
      explain: ``,
      meaning: "Phải/nên làm gì",
      usingWay: ``,
    },
    {
      id: "N3_9",
      romajiRead: "betsu ni~nai",
      japaneseRead: "別に～ない",
      level: "N3",
      explain: ``,
      meaning: "không thực sự/ không hẳn....",
      usingWay: ``,
    },
    {
      id: "N3_10",
      romajiRead: "buri ni",
      japaneseRead: "ぶりに",
      level: "N3",
      explain: ``,
      meaning: "sau (mới lại)...",
      usingWay: ``,
    },
    {
      id: "N3_11",
      romajiRead: "chatta",
      japaneseRead: "ちゃった",
      level: "N3",
      explain: ``,
      meaning: "(Lỡ)Làm gì đó mất rồi",
      usingWay: ``,
    },
    {
      id: "N3_12",
      romajiRead: "dake",
      japaneseRead: "だけ",
      level: "N3",
      explain: ``,
      meaning: "đến mức tối đa có thể.../ được chừng nào hay chừng đó...",
      usingWay: ``,
    },
    {
      id: "N3_13",
      romajiRead: "dake de naku",
      japaneseRead: "だけでなく",
      level: "N3",
      explain: ``,
      meaning: "không chỉ...mà còn/ không những...mà còn...",
      usingWay: ``,
    },
    {
      id: "N3_14",
      romajiRead: "dake shika",
      japaneseRead: "だけしか",
      level: "N3",
      explain: ``,
      meaning: "Chỉ ... mà thôi",
      usingWay: ``,
    },
    {
      id: "N3_15",
      romajiRead: "dakedo",
      japaneseRead: "だけど",
      level: "N3",
      explain: ``,
      meaning: "Nhưng mà",
      usingWay: ``,
    },
    {
      id: "N3_16",
      romajiRead: "desu kara",
      japaneseRead: "ですから",
      level: "N3",
      explain: ``,
      meaning: "Vì vậy",
      usingWay: ``,
    },
    {
      id: "N3_17",
      romajiRead: "donnani～temo",
      japaneseRead: "donnani～temo",
      level: "N3",
      explain: ``,
      meaning: "Cho dù có như thế nào/cho dù là bao nhiêu đi nữa",
      usingWay: ``,
    },
    {
      id: "N3_18",
      romajiRead: "doushitemo",
      japaneseRead: "どうしても",
      level: "N3",
      explain: ``,
      meaning: "bằng bất cứ giá nào, dù thế nào đi chăng nữa",
      usingWay: ``,
    },
    {
      id: "N3_19",
      romajiRead: "furi wo suru",
      japaneseRead: "ふりをする",
      level: "N3",
      explain: ``,
      meaning: "Giả vờ làm gì/Tỏ ra như thể là...",
      usingWay: ``,
    },
    {
      id: "N3_20",
      romajiRead: "futo",
      japaneseRead: "ふと",
      level: "N3",
      explain: ``,
      meaning: "Đột nhiên/bất ngờ/chợt",
      usingWay: ``,
    },
    {
      id: "N3_21",
      romajiRead: "garu",
      japaneseRead: "がる",
      level: "N3",
      explain: ``,
      meaning: "Ý muốn(của người khác)",
      usingWay: ``,
    },
    {
      id: "N3_22",
      romajiRead: "goran",
      japaneseRead: "ごらん",
      level: "N3",
      explain: ``,
      meaning: "Hãy làm/thử xem...",
      usingWay: ``,
    },
    {
      id: "N3_23",
      romajiRead: "goto ni",
      japaneseRead: "ごとに",
      level: "N3",
      explain: ``,
      meaning: "mỗi/cứ mỗi/cứ...lại...",
      usingWay: ``,
    },
    {
      id: "N3_24",
      romajiRead: "hazu da",
      japaneseRead: "はずだ",
      level: "N3",
      explain: ``,
      meaning: "Chắc chắn là…",
      usingWay: ``,
    },
    {
      id: "N3_25",
      romajiRead: "hodo",
      japaneseRead: "ほど",
      level: "N3",
      explain: ``,
      meaning: "Thường...(hơn)",
      usingWay: ``,
    },
    {
      id: "N3_26",
      romajiRead: "hodo~nai",
      japaneseRead: "ほど～ない",
      level: "N3",
      explain: ``,
      meaning: "Không bằng như.../không tới mức như...",
      usingWay: ``,
    },
    {
      id: "N3_27",
      romajiRead: "ichido ni",
      japaneseRead: "一度に",
      level: "N3",
      explain: ``,
      meaning: "Cùng một lúc/tất cả trong một...",
      usingWay: ``,
    },
    {
      id: "N3_28",
      romajiRead: "ikura~temo",
      japaneseRead: "いくら～ても",
      level: "N3",
      explain: ``,
      meaning: "bất kể thế nào/dù thế nào đi chăng nữa...",
      usingWay: ``,
    },
    {
      id: "N3_29",
      romajiRead: "ittai",
      japaneseRead: "一体",
      level: "N3",
      explain: ``,
      meaning: "Rốt cuộc/ không biết là/ vậy thì",
      usingWay: ``,
    },
    {
      id: "N3_30",
      romajiRead: "ka nani ka",
      japaneseRead: "か何か",
      level: "N3",
      explain: ``,
      meaning: "Hay gì đó",
      usingWay: ``,
    },
    {
      id: "N3_31",
      romajiRead: "kakeru",
      japaneseRead: "かける",
      level: "N3",
      explain: ``,
      meaning: "Chưa xong/dở dang",
      usingWay: ``,
    },
    {
      id: "N3_32",
      romajiRead: "kanaa",
      japaneseRead: "かなあ",
      level: "N3",
      explain: ``,
      meaning: "Hay sao/mong sao/có...không đây",
      usingWay: ``,
    },
    {
      id: "N3_33",
      romajiRead: "kanarazu shimo~towa kagiranai",
      japaneseRead: "必ずしも～とは限らない",
      level: "N3",
      explain: ``,
      meaning: "Không nhất thiết là...",
      usingWay: ``,
    },
    {
      id: "N3_34",
      romajiRead: "kara~nikakete",
      japaneseRead: "から～にかけて",
      level: "N3",
      explain: ``,
      meaning: "Từ...đến",
      usingWay: ``,
    },
    {
      id: "N3_35",
      romajiRead: "kawari ni",
      japaneseRead: "代わりに",
      level: "N3",
      explain: ``,
      meaning: "Thay vì/đổi lại/thay cho",
      usingWay: ``,
    },
    {
      id: "N3_36",
      romajiRead: "kekkyoku",
      japaneseRead: "結局",
      level: "N3",
      explain: ``,
      meaning: "Sau tất cả/ cuối cùng",
      usingWay: ``,
    },
    {
      id: "N3_37",
      romajiRead: "kesshite~nai",
      japaneseRead: "決して～ない",
      level: "N3",
      explain: ``,
      meaning: "Nhất định không/tuyệt đối không",
      usingWay: ``,
    },
    {
      id: "N3_38",
      romajiRead: "kiri",
      japaneseRead: "きり",
      level: "N3",
      explain: ``,
      meaning: "Chỉ có/có",
      usingWay: ``,
    },
    {
      id: "N3_39",
      romajiRead: "kiru / kireru / kirenai",
      japaneseRead: "切る・切れる・切れない",
      level: "N3",
      explain: ``,
      meaning: "Hết/không hết",
      usingWay: ``,
    },
    {
      id: "N3_40",
      romajiRead: "kke",
      japaneseRead: "っけ",
      level: "N3",
      explain: ``,
      meaning: "Có phải...đúng không/có phải là",
      usingWay: ``,
    },
    {
      id: "N3_41",
      romajiRead: "komu",
      japaneseRead: "込む",
      level: "N3",
      explain: ``,
      meaning: "(Nhét) vào/ (chất) lên",
      usingWay: ``,
    },
    {
      id: "N3_42",
      romajiRead: "koso",
      japaneseRead: "こそ",
      level: "N3",
      explain: ``,
      meaning: "Chính là.../nhất định là",
      usingWay: ``,
    },
    {
      id: "N3_43",
      romajiRead: "koto",
      japaneseRead: "こと",
      level: "N3",
      explain: ``,
      meaning: "Về việc",
      usingWay: ``,
    },
    {
      id: "N3_44",
      romajiRead: "koto da",
      japaneseRead: "ことだ",
      level: "N3",
      explain: ``,
      meaning: "Nên/không nên",
      usingWay: ``,
    },
    {
      id: "N3_45",
      romajiRead: "koto ni naru",
      japaneseRead: "ことになる",
      level: "N3",
      explain: ``,
      meaning: "Sẽ/được quy định là",
      usingWay: ``,
    },
    {
      id: "N3_46",
      romajiRead: "koto ni suru",
      japaneseRead: "ことにする",
      level: "N3",
      explain: ``,
      meaning: "Cố gắng/quyết định(làm gì)",
      usingWay: ``,
    },
    {
      id: "N3_47",
      romajiRead: "koto wa nai",
      japaneseRead: "ことはない",
      level: "N3",
      explain: ``,
      meaning: "Không cần phải",
      usingWay: ``,
    },
    {
      id: "N3_48",
      romajiRead: "kotowa~ga",
      japaneseRead: "ことは～が",
      level: "N3",
      explain: ``,
      meaning: "Thì...nhưng mà",
      usingWay: ``,
    },
    {
      id: "N3_49",
      romajiRead: "kurai",
      japaneseRead: "くらい",
      level: "N3",
      explain: ``,
      meaning: "Đến cỡ/đến mức/cỡ",
      usingWay: ``,
    },
    {
      id: "N3_50",
      romajiRead: "kurai~wanai",
      japaneseRead: "くらい～はない",
      level: "N3",
      explain: ``,
      meaning: "Cỡ như...thì không",
      usingWay: ``,
    },
    {
      id: "N3_51",
      romajiRead: "kure to",
      japaneseRead: "くれと",
      level: "N3",
      explain: ``,
      meaning: "Được nói/bị nói/bị nhắc nhở",
      usingWay: ``,
    },
    {
      id: "N3_52",
      romajiRead: "kuseni",
      japaneseRead: "くせに",
      level: "N3",
      explain: ``,
      meaning: "Dù.../mà.../lại còn",
      usingWay: ``,
    },
    {
      id: "N3_53",
      romajiRead: "made",
      japaneseRead: "まで",
      level: "N3",
      explain: ``,
      meaning: "Cho đến khi",
      usingWay: ``,
    },
    {
      id: "N3_54",
      romajiRead: "made",
      japaneseRead: "まで",
      level: "N3",
      explain: ``,
      meaning: "Cho đến mức/đến cả",
      usingWay: ``,
    },
    {
      id: "N3_55",
      romajiRead: "mama",
      japaneseRead: "まま",
      level: "N3",
      explain: ``,
      meaning: "Cứ để nguyên/giữ nguyên",
      usingWay: ``,
    },
    {
      id: "N3_56",
      romajiRead: "marude~yo",
      japaneseRead: "まるで～よう",
      level: "N3",
      explain: ``,
      meaning: "Cứ như là/giống như là",
      usingWay: ``,
    },
    {
      id: "N3_57",
      romajiRead: "masaka",
      japaneseRead: "まさか",
      level: "N3",
      explain: ``,
      meaning: "Không thể nào/ lẽ nào/ làm gì có chuyện",
      usingWay: ``,
    },
    {
      id: "N3_58",
      romajiRead: "masu you ni",
      japaneseRead: "ますように",
      level: "N3",
      explain: ``,
      meaning: "Mong sao",
      usingWay: ``,
    },
    {
      id: "N3_59",
      romajiRead: "mattaku~nai",
      japaneseRead: "まったく～ない",
      level: "N3",
      explain: ``,
      meaning: "Hoàn toàn không",
      usingWay: ``,
    },
    {
      id: "N3_60",
      romajiRead: "mettani nai",
      japaneseRead: "めったにない",
      level: "N3",
      explain: ``,
      meaning: "Hiếm khi",
      usingWay: ``,
    },
    {
      id: "N3_61",
      romajiRead: "mi",
      japaneseRead: "み",
      level: "N3",
      explain: ``,
      meaning: "Điểm/sự(danh từ)",
      usingWay: ``,
    },
    {
      id: "N3_62",
      romajiRead: "mitai",
      japaneseRead: "みたい",
      level: "N3",
      explain: ``,
      meaning: "Giống như là.../có vẻ như là.../giống như",
      usingWay: ``,
    },
    {
      id: "N3_63",
      romajiRead: "mono da",
      japaneseRead: "ものだ",
      level: "N3",
      explain: ``,
      meaning: "Đã thường làm gì",
      usingWay: ``,
    },
    {
      id: "N3_64",
      romajiRead: "moshi ~ta nara",
      japaneseRead: "もし～たなら",
      level: "N3",
      explain: ``,
      meaning: "Giả sử là...thì",
      usingWay: ``,
    },
    {
      id: "N3_65",
      romajiRead: "moshi~to shitemo",
      japaneseRead: "もし～としても",
      level: "N3",
      explain: ``,
      meaning: "Giả sử là...thì cũng",
      usingWay: ``,
    },
    {
      id: "N3_66",
      romajiRead: "moshika suru to ~kamo shirenai",
      japaneseRead: "もしかすると～かもしれない",
      level: "N3",
      explain: ``,
      meaning: "Có lẽ là/có khả năng là",
      usingWay: ``,
    },
    {
      id: "N3_67",
      romajiRead: "moshimo~nara",
      japaneseRead: "もしも～なら",
      level: "N3",
      explain: ``,
      meaning: "Giả sử/nếu...thì/thì cũng",
      usingWay: ``,
    },
    {
      id: "N3_68",
      romajiRead: "mushiro",
      japaneseRead: "むしろ",
      level: "N3",
      explain: ``,
      meaning: "Hơn là/ thà là...còn hơn",
      usingWay: ``,
    },
    {
      id: "N3_69",
      romajiRead: "n damon/ n damono",
      japaneseRead: "んだもん・んだもの",
      level: "N3",
      explain: ``,
      meaning: "Thì là vì",
      usingWay: ``,
    },
    {
      id: "N3_70",
      romajiRead: "n datte",
      japaneseRead: "んだって",
      level: "N3",
      explain: ``,
      meaning: "Nghe nói là",
      usingWay: ``,
    },
    {
      id: "N3_71",
      romajiRead: "nai to",
      japaneseRead: "ないと",
      level: "N3",
      explain: ``,
      meaning: "Phải/bắt buộc.",
      usingWay: ``,
    },
    {
      id: "N3_72",
      romajiRead: "naikoto wa nai",
      japaneseRead: "ないことはない",
      level: "N3",
      explain: ``,
      meaning: "Không phải là không",
      usingWay: ``,
    },
    {
      id: "N3_73",
      romajiRead: "nakanaka",
      japaneseRead: "なかなか",
      level: "N3",
      explain: ``,
      meaning: "Rất/ khá/ mãi mà/ khó mà",
      usingWay: ``,
    },
    {
      id: "N3_74",
      romajiRead: "nanka",
      japaneseRead: "なんか",
      level: "N3",
      explain: ``,
      meaning: "Mấy thứ như/mấy chuyện như",
      usingWay: ``,
    },
    {
      id: "N3_75",
      romajiRead: "nazenara",
      japaneseRead: "なぜなら",
      level: "N3",
      explain: ``,
      meaning: "Bởi vì",
      usingWay: ``,
    },
    {
      id: "N3_76",
      romajiRead: "ni kanshite",
      japaneseRead: "に関して",
      level: "N3",
      explain: ``,
      meaning: "Về/Liên quan đến",
      usingWay: ``,
    },
    {
      id: "N3_77",
      romajiRead: "ni kawatte",
      japaneseRead: "に代わって",
      level: "N3",
      explain: ``,
      meaning: "Thay cho/thay mặt",
      usingWay: ``,
    },
    {
      id: "N3_78",
      romajiRead: "ni nareru",
      japaneseRead: "に慣れる",
      level: "N3",
      explain: ``,
      meaning: "Quen với một cái gì đó",
      usingWay: ``,
    },
    {
      id: "N3_79",
      romajiRead: "ni oite",
      japaneseRead: "において",
      level: "N3",
      explain: ``,
      meaning: "Tại, ở, trong",
      usingWay: ``,
    },
    {
      id: "N3_80",
      romajiRead: "ni taishite",
      japaneseRead: "に対して",
      level: "N3",
      explain: ``,
      meaning: "Đối với",
      usingWay: ``,
    },
    {
      id: "N3_81",
      romajiRead: "ni totte",
      japaneseRead: "にとって",
      level: "N3",
      explain: ``,
      meaning: "Đối với",
      usingWay: ``,
    },
    {
      id: "N3_82",
      romajiRead: "ni tsuite",
      japaneseRead: "について",
      level: "N3",
      explain: ``,
      meaning: "Về",
      usingWay: ``,
    },
    {
      id: "N3_83",
      romajiRead: "ni yoreba",
      japaneseRead: "によれば",
      level: "N3",
      explain: ``,
      meaning: "Theo... / Dựa vào",
      usingWay: ``,
    },
    {
      id: "N3_84",
      romajiRead: "ni yotte",
      japaneseRead: "によって",
      level: "N3",
      explain: ``,
      meaning: "Được/bởi",
      usingWay: ``,
    },
    {
      id: "N3_85",
      romajiRead: "(ni)～reru",
      japaneseRead: "（に）～れる",
      level: "N3",
      explain: ``,
      meaning: "Bị(ai đó/ cái gì đó)/ được",
      usingWay: ``,
    },
    {
      id: "N3_86",
      romajiRead: "ni kurabete",
      japaneseRead: "に比べて",
      level: "N3",
      explain: ``,
      meaning: "So với",
      usingWay: ``,
    },
    {
      id: "N3_87",
      romajiRead: "ni shitemo",
      japaneseRead: "にしても",
      level: "N3",
      explain: ``,
      meaning: "Cho dù",
      usingWay: ``,
    },
    {
      id: "N3_88",
      romajiRead: "ni shite wa",
      japaneseRead: "にしては",
      level: "N3",
      explain: ``,
      meaning: "Vậy mà",
      usingWay: ``,
    },
    {
      id: "N3_89",
      romajiRead: "no",
      japaneseRead: "の",
      level: "N3",
      explain: ``,
      meaning: "Việc(danh từ)",
      usingWay: ``,
    },
    {
      id: "N3_90",
      romajiRead: "okage de",
      japaneseRead: "おかげで",
      level: "N3",
      explain: ``,
      meaning: "Nhờ vào/nhờ có",
      usingWay: ``,
    },
    {
      id: "N3_91",
      romajiRead: "ppanashi",
      japaneseRead: "っぱなし",
      level: "N3",
      explain: ``,
      meaning: "Để nguyên,giữ nguyên",
      usingWay: ``,
    },
    {
      id: "N3_92",
      romajiRead: "ppoi",
      japaneseRead: "っぽい",
      level: "N3",
      explain: ``,
      meaning: "Giống như là",
      usingWay: ``,
    },
    {
      id: "N3_93",
      romajiRead: "rashii",
      japaneseRead: "らしい",
      level: "N3",
      explain: ``,
      meaning: "Cảm thấy như là.../giống như là",
      usingWay: ``,
    },
    {
      id: "N3_94",
      romajiRead: "sae",
      japaneseRead: "さえ",
      level: "N3",
      explain: ``,
      meaning: "Ngay cả.../thậm chí",
      usingWay: ``,
    },
    {
      id: "N3_95",
      romajiRead: "saichuu ni",
      japaneseRead: "最中に",
      level: "N3",
      explain: ``,
      meaning: "Đúng lúc đang,ngay giữa lúc đang",
      usingWay: ``,
    },
    {
      id: "N3_96",
      romajiRead: "seide",
      japaneseRead: "せいで",
      level: "N3",
      explain: ``,
      meaning: "Vì/do",
      usingWay: ``,
    },
    {
      id: "N3_97",
      romajiRead: "seizei",
      japaneseRead: "せいぜい",
      level: "N3",
      explain: ``,
      meaning: "Tối đa/ nhiều lắm cũng chỉ",
      usingWay: ``,
    },
    {
      id: "N3_98",
      romajiRead: "sete kudasai",
      japaneseRead: "せてください",
      level: "N3",
      explain: ``,
      meaning: "Có thể cho phép tôi ~ làm gì",
      usingWay: ``,
    },
    {
      id: "N3_99",
      romajiRead: "shibaraku",
      japaneseRead: "しばらく",
      level: "N3",
      explain: ``,
      meaning: "Một lúc/ trong một thời gian",
      usingWay: ``,
    },
    {
      id: "N3_100",
      romajiRead: "shikanai",
      japaneseRead: "しかない",
      level: "N3",
      explain: ``,
      meaning: "Chỉ có thể",
      usingWay: ``,
    },
    {
      id: "N3_101",
      romajiRead: "sono kekka",
      japaneseRead: "その結果",
      level: "N3",
      explain: ``,
      meaning: "Kết quả là",
      usingWay: ``,
    },
    {
      id: "N3_102",
      romajiRead: "sono tame ni",
      japaneseRead: "そのために",
      level: "N3",
      explain: ``,
      meaning: "Vì thế/do đó",
      usingWay: ``,
    },
    {
      id: "N3_103",
      romajiRead: "sono ue",
      japaneseRead: "その上",
      level: "N3",
      explain: ``,
      meaning: "Thêm vào đó/hơn nữa",
      usingWay: ``,
    },
    {
      id: "N3_104",
      romajiRead: "sore to",
      japaneseRead: "それと",
      level: "N3",
      explain: ``,
      meaning: "Và/vẫn còn",
      usingWay: ``,
    },
    {
      id: "N3_105",
      romajiRead: "sore to mo",
      japaneseRead: "それとも",
      level: "N3",
      explain: ``,
      meaning: "Hay là/hoặc là",
      usingWay: ``,
    },
    {
      id: "N3_106",
      romajiRead: "sude ni",
      japaneseRead: "すでに",
      level: "N3",
      explain: ``,
      meaning: "Đã...rồi",
      usingWay: ``,
    },
    {
      id: "N3_107",
      romajiRead: "sukoshimo~nai",
      japaneseRead: "少しも～ない",
      level: "N3",
      explain: ``,
      meaning: "Một chút cũng không",
      usingWay: ``,
    },
    {
      id: "N3_108",
      romajiRead: "ta tokoro",
      japaneseRead: "たところ",
      level: "N3",
      explain: ``,
      meaning: "Sau khi thử làm",
      usingWay: ``,
    },
    {
      id: "N3_109",
      romajiRead: "ta totan ni",
      japaneseRead: "たとたんに",
      level: "N3",
      explain: ``,
      meaning: "Vừa mới(làm gì)thì...",
      usingWay: ``,
    },
    {
      id: "N3_110",
      romajiRead: "tabi ni",
      japaneseRead: "たびに",
      level: "N3",
      explain: ``,
      meaning: "Mỗi khi,mỗi lần",
      usingWay: ``,
    },
    {
      id: "N3_111",
      romajiRead: "tashika ni",
      japaneseRead: "確かに",
      level: "N3",
      explain: ``,
      meaning: "Chắc chắn/Không sai/chính xác là như vậy",
      usingWay: ``,
    },
    {
      id: "N3_112",
      romajiRead: "tate",
      japaneseRead: "たて",
      level: "N3",
      explain: ``,
      meaning: "Mới...xong",
      usingWay: ``,
    },
    {
      id: "N3_113",
      romajiRead: "tatoe~temo",
      japaneseRead: "たとえ～ても",
      level: "N3",
      explain: ``,
      meaning: "Giả sử/thậm chí là...thì cũng",
      usingWay: ``,
    },
    {
      id: "N3_114",
      romajiRead: "tatoeba",
      japaneseRead: "例えば",
      level: "N3",
      explain: ``,
      meaning: "Ví dụ như/chẳng hạn như",
      usingWay: ``,
    },
    {
      id: "N3_115",
      romajiRead: "te hajimete",
      japaneseRead: "てはじめて",
      level: "N3",
      explain: ``,
      meaning: "Làm gì đó thì bắt đầu",
      usingWay: ``,
    },
    {
      id: "N3_116",
      romajiRead: "te hoshii",
      japaneseRead: "てほしい",
      level: "N3",
      explain: ``,
      meaning: "Muốn(ai đó)làm gì",
      usingWay: ``,
    },
    {
      id: "N3_117",
      romajiRead: "te sumu",
      japaneseRead: "て済む",
      level: "N3",
      explain: ``,
      meaning: "Chỉ tốn (có)/giải quyết xong (chỉ bằng)/chỉ cần...là xong",
      usingWay: ``,
    },
    {
      id: "N3_118",
      romajiRead: "zu ni",
      japaneseRead: "ずに",
      level: "N3",
      explain: ``,
      meaning: "Không",
      usingWay: ``,
    },
    {
      id: "N3_119",
      romajiRead: "you ni suru",
      japaneseRead: "ようにする",
      level: "N3",
      explain: ``,
      meaning: "Cố gắng làm",
      usingWay: ``,
    },
    {
      id: "N3_120",
      romajiRead: "you ni naru",
      japaneseRead: "ようになる",
      level: "N3",
      explain: ``,
      meaning: "Trở thành",
      usingWay: ``,
    },
    {
      id: "N3_121",
      romajiRead: "teki",
      japaneseRead: "的",
      level: "N3",
      explain: ``,
      meaning: "Mang tính/ mang tính chất/về mặt...",
      usingWay: ``,
    },
    {
      id: "N3_122",
      romajiRead: "temo",
      japaneseRead: "ても",
      level: "N3",
      explain: ``,
      meaning: "Dù là/cho dẫu là",
      usingWay: ``,
    },
    {
      id: "N3_123",
      romajiRead: "to iinaa",
      japaneseRead: "といいなあ",
      level: "N3",
      explain: ``,
      meaning: "Ước gì/mong sao",
      usingWay: ``,
    },
    {
      id: "N3_124",
      romajiRead: "to ittemo",
      japaneseRead: "といっても",
      level: "N3",
      explain: ``,
      meaning: "Dù nói là...nhưng",
      usingWay: ``,
    },
    {
      id: "N3_125",
      romajiRead: "to iu",
      japaneseRead: "という",
      level: "N3",
      explain: ``,
      meaning: "Cái gọi là",
      usingWay: ``,
    },
    {
      id: "N3_126",
      romajiRead: "to iu koto da",
      japaneseRead: "ということだ",
      level: "N3",
      explain: ``,
      meaning: "Dường như là/có nghĩa là",
      usingWay: ``,
    },
    {
      id: "N3_127",
      romajiRead: "to iu no",
      japaneseRead: "というの",
      level: "N3",
      explain: ``,
      meaning: "Cái việc/ cái gọi là",
      usingWay: ``,
    },
    {
      id: "N3_128",
      romajiRead: "to iu no wa",
      japaneseRead: "というのは",
      level: "N3",
      explain: ``,
      meaning: "Nghĩa là",
      usingWay: ``,
    },
    {
      id: "N3_129",
      romajiRead: "to iu to",
      japaneseRead: "というと",
      level: "N3",
      explain: ``,
      meaning: "Nói đến",
      usingWay: ``,
    },
    {
      id: "N3_130",
      romajiRead: "to iu yori",
      japaneseRead: "というより",
      level: "N3",
      explain: ``,
      meaning: "Hơn là nói",
      usingWay: ``,
    },
    {
      id: "N3_131",
      romajiRead: "tokoro datta",
      japaneseRead: "ところだった",
      level: "N3",
      explain: ``,
      meaning: "Suýt chút nữa thì",
      usingWay: ``,
    },
    {
      id: "N3_132",
      romajiRead: "tokoro de",
      japaneseRead: "ところで",
      level: "N3",
      explain: ``,
      meaning: "Nhân tiện thì/nhân dịp",
      usingWay: ``,
    },
    {
      id: "N3_133",
      romajiRead: "tokoro ga",
      japaneseRead: "ところが",
      level: "N3",
      explain: ``,
      meaning: "Nhưng mà",
      usingWay: ``,
    },
    {
      id: "N3_134",
      romajiRead: "toku",
      japaneseRead: "とく",
      level: "N3",
      explain: ``,
      meaning: "Làm sẵn, làm trước việc gì",
      usingWay: ``,
    },
    {
      id: "N3_135",
      romajiRead: "toori",
      japaneseRead: "とおり",
      level: "N3",
      explain: ``,
      meaning: "Đúng như",
      usingWay: ``,
    },
    {
      id: "N3_136",
      romajiRead: "toosu",
      japaneseRead: "通す",
      level: "N3",
      explain: ``,
      meaning: "Làm cho đến cùng/liên tục làm/qua...",
      usingWay: ``,
    },
    {
      id: "N3_137",
      romajiRead: "toshitara",
      japaneseRead: "としたら",
      level: "N3",
      explain: ``,
      meaning: "Giả sử/nếu cho rằng",
      usingWay: ``,
    },
    {
      id: "N3_138",
      romajiRead: "tsuideni",
      japaneseRead: "ついでに",
      level: "N3",
      explain: ``,
      meaning: "Nhân tiện.../Tiện thể",
      usingWay: ``,
    },
    {
      id: "N3_139",
      romajiRead: "tsumari",
      japaneseRead: "つまり",
      level: "N3",
      explain: ``,
      meaning: "Hay nói cách khác là",
      usingWay: ``,
    },
    {
      id: "N3_140",
      romajiRead: "tsumori deshita",
      japaneseRead: "つもりでした",
      level: "N3",
      explain: ``,
      meaning: "Đã dự định/không dự định(làm gì)",
      usingWay: ``, 
    },
    {
      id: "N3_141",
      romajiRead: "uchi ni",
      japaneseRead: "うちに",
      level: "N3",
      explain: ``,
      meaning: "Trong lúc/trong khi",
      usingWay: ``,
    },
    {
      id: "N3_142",
      romajiRead: "wa betsu toshite",
      japaneseRead: "は別として",
      level: "N3",
      explain: ``,
      meaning: "Ngoại trừ/...thì không nói/không quan trọng",
      usingWay: ``,
    },
    {
      id: "N3_143",
      romajiRead: "wa mochiron",
      japaneseRead: "はもちろん",
      level: "N3",
      explain: ``,
      meaning: "Không chỉ/không những...mà còn",
      usingWay: ``,
    },
    {
      id: "N3_144",
      romajiRead: "wa～de yuumei",
      japaneseRead: "は～で有名",
      level: "N3",
      explain: ``,
      meaning: "Nổi tiếng vì.../nổi tiếng với...",
      usingWay: ``,
    },
    {
      id: "N3_145",
      romajiRead: "wake da",
      japaneseRead: "わけだ",
      level: "N3",
      explain: ``,
      meaning: "Hèn chi/chẳng trách là",
      usingWay: ``,
    },
    {
      id: "N3_146",
      romajiRead: "wake dewa nai",
      japaneseRead: "わけではない",
      level: "N3",
      explain: ``,
      meaning: "Không phải là/không hẳn là",
      usingWay: ``,
    },
    {
      id: "N3_147",
      romajiRead: "wake ga nai",
      japaneseRead: "わけがない",
      level: "N3",
      explain: ``,
      meaning: "Không lý nào/không có khả năng",
      usingWay: ``,
    },
    {
      id: "N3_148",
      romajiRead: "wake ni wa ikanai",
      japaneseRead: "わけにはいかない",
      level: "N3",
      explain: ``,
      meaning: "Nên không thể/đành phải",
      usingWay: ``,
    },
    {
      id: "N3_149",
      romajiRead: "wariniwa",
      japaneseRead: "わりには",
      level: "N3",
      explain: ``,
      meaning: "Dù.../tuy...nhưng",
      usingWay: ``,
    },
    {
      id: "N3_150",
      romajiRead: "wazato",
      japaneseRead: "わざと",
      level: "N3",
      explain: ``,
      meaning: "Cố tình/cố ý...",
      usingWay: ``,
    },
    {
      id: "N3_151",
      romajiRead: "wazawaza",
      japaneseRead: "わざわざ",
      level: "N3",
      explain: ``,
      meaning: "Cất công....",
      usingWay: ``,
    },
    {
      id: "N3_152",
      romajiRead: "yori mo",
      japaneseRead: "よりも",
      level: "N3",
      explain: ``,
      meaning: "Hơn/so với/hơn là...",
      usingWay: ``,
    },
    {
      id: "N3_153",
      romajiRead: "you to omou",
      japaneseRead: "ようと思う",
      level: "N3",
      explain: ``,
      meaning: "Dự định làm gì",
      usingWay: ``,
    },
    {
      id: "N3_154",
      romajiRead: "you to shinai",
      japaneseRead: "ようとしない",
      level: "N3",
      explain: ``,
      meaning: "Không định làm gì",
      usingWay: ``,
    },
    {
      id: "N3_155",
      romajiRead: "you to suru",
      japaneseRead: "ようとする",
      level: "N3",
      explain: ``,
      meaning: "Định làm gì",
      usingWay: ``,
    },
    {
      id: "N3_156",
      romajiRead: "you ni",
      japaneseRead: "ように",
      level: "N3",
      explain: ``,
      meaning: "Như là/giống như là",
      usingWay: ``,
    },
    {
      id: "N3_157",
      romajiRead: "you ni",
      japaneseRead: "ように",
      level: "N3",
      explain: ``,
      meaning: "Hãy ...làm gì/không được làm gì",
      usingWay: ``,
    },
    {
      id: "N3_158",
      romajiRead: "you ni",
      japaneseRead: "ように",
      level: "N3",
      explain: ``,
      meaning: "Hãy/đừng",
      usingWay: ``,
    },
    {
      id: "N3_159",
      romajiRead: "you ni iu",
      japaneseRead: "ように言う",
      level: "N3",
      explain: ``,
      meaning: "Nói(ai)/nhờ(ai)...hãy/không làm gì đó",
      usingWay: ``,
    },
  ]);
}
