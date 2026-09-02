import type {
  AcademicLink,
  Community,
  ConferenceWork,
  Embed,
  ExternalLink,
  Location,
  Profile,
  SkillGroup,
  SocialLink
} from './types';

export const links = {
  x: 'https://x.com/uutan1108',
  github: 'https://github.com/OHMORIYUSUKE',
  speakerdeck: 'https://speakerdeck.com/ohmori_yusuke',
  note: 'https://note.com/uutan1108',
  connpass: 'https://connpass.com/user/ohmoriyusuke/'
};

export const socialLinks: SocialLink[] = [
  {
    name: 'X / Twitter',
    handle: '@uutan1108',
    url: links.x,
    icon: 'x',
    cardClass: 'x-card'
  },
  {
    name: 'GitHub',
    handle: '@OHMORIYUSUKE',
    url: links.github,
    icon: 'github',
    cardClass: 'github'
  }
];

export const footerLinks: ExternalLink[] = [
  { title: 'X', url: links.x },
  { title: 'note', url: links.note },
  { title: 'Speaker Deck', url: links.speakerdeck },
  { title: 'connpass', url: links.connpass },
  { title: 'GitHub', url: links.github },
  { title: 'Zenn', url: 'https://zenn.dev/u_tan' },
  { title: 'Facebook', url: 'https://www.facebook.com/oy1108' },
  { title: 'LAPRAS', url: 'https://lapras.com/public/KJDZ8ZH' }
];

export const profile: Profile = {
  paragraphs: [
    '2023年、公立千歳科学技術大学 理工学部 情報システム工学科を卒業。同年から株式会社ゆめみでサーバーサイドエンジニアとして勤務し、2025年12月からアクセンチュア株式会社に在籍しています。',
    'Go・Kotlin・PHP・TypeScriptを用いた開発を中心に、API・バッチ処理の設計と実装、データベース／スキーマ設計、運用保守、ログ分析、E2Eテスト自動化、CI/CDパイプラインの改善などを経験しています。',
    '技術カンファレンスでの登壇、商業誌・技術同人誌への寄稿、勉強会の企画・運営を継続。学生・新卒エンジニアへのメンタリングやコードレビューにも取り組んできました。'
  ],
  tags: [
    { title: '#エンジニアニメ', url: 'https://engineers-anime.connpass.com/' },
    { title: '#funwari_study_lt', url: 'https://wakate-funwari-study.connpass.com/' },
    { title: '#栃木ゆる勉強会', url: 'https://tochigi-study.connpass.com/' },
    { title: '#技書博', url: 'https://gishohaku.connpass.com/' },
    { title: '#yumemi_grow', url: 'https://yumemi.connpass.com/' }
  ]
};

export const location: Location = {
  label: '練馬区、東京',
  coordinatesLabel: 'Nerima · 35.7356° N, 139.6517° E',
  latitude: 35.7356,
  longitude: 139.6517,
  zoom: 12
};

export const academicLinks: AcademicLink[] = [
  {
    title: '学生優秀発表賞',
    description: '電子情報通信学会北海道支部',
    actionLabel: '↗',
    url: 'https://www.ieice.org/hokkaido/?page_id=189'
  },
  {
    title: '卒業論文',
    description: '2022_hokkaido_a01.pdf · GitHub',
    actionLabel: 'PDF ↗',
    url: 'https://github.com/OHMORIYUSUKE/paper/blob/main/JSISE/2022_hokkaido_a01.pdf'
  }
];

export const spotifyPlaylist: Embed = {
  src: 'https://open.spotify.com/embed/playlist/4oDRaYCJo4huXskDc4muT9?utm_source=generator&theme=0',
  title: 'うーたんのSpotifyプレイリスト',
  allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
};

export const interviews: ExternalLink[] = [
  {
    title: '第4回前編　なんでもまずは飛び込んでみよう！人との繋がりから育つ技術',
    url: 'https://book.mynavi.jp/manatee/detail/id=143447'
  },
  {
    title: '第4回後半　なんでもまずは飛び込んでみよう！人との繋がりから育つ技術',
    url: 'https://book.mynavi.jp/manatee/detail/id=143645'
  },
  {
    title:
      '「小さな勉強会は、教える・教わるの壁を越える」うーたんさん｜私がアウトプットを続ける理由',
    url: 'https://findy-code.io/media/articles/my-output-story-uutan1108'
  }
];

export const magazines: ExternalLink[] = [
  { title: 'I/O 2024年3月号', url: 'https://www.kohgakusha.co.jp/books/detail/4819' },
  { title: 'I/O 2024年4月号', url: 'https://www.kohgakusha.co.jp/books/detail/4821' },
  { title: 'I/O 2025年1月号', url: 'https://www.kohgakusha.co.jp/books/detail/4844' }
];

export const techBooks: ExternalLink[] = [
  {
    title: 'cistLT Book',
    url: 'https://techbookfest.org/product/6TSJb6UBKpzbkHNuFkZPGy?productVariantID=5dTrZnEjHn5fapSYPE0Yci'
  },
  {
    title: "ゆめみ大技林 '24",
    url: 'https://techbookfest.org/product/v0MeXEsV6CZyFMmgDj7yFV?productVariantID=1FXpr2iLmhKrgCHvsAs9gk'
  },
  {
    title: "ゆめみ大技林 '24 (2)",
    url: 'https://techbookfest.org/product/bmgvUqvwm1G28JwPeW2XAP?productVariantID=22bTE7RkYez7uPRcbg417U'
  },
  {
    title: "ゆめみ大技林 '25",
    url: 'https://techbookfest.org/product/kdUdfz8a1KZQJZvJxRVu8V?productVariantID=3PtDPisanjt1xTD47yyVYK'
  },
  {
    title: "ゆめみ大技林 '25 (2)",
    url: 'https://techbookfest.org/product/ajJSVxhQcQ0YDRnq0b4fx7?productVariantID=1Ti99niE3YdH2efHegvqZk'
  },
  {
    title: 'エンジニアニメ Anthology Tech Book 1st Season',
    url: 'https://techbookfest.org/product/n5jRU01unxcQHkqtP6FVki?productVariantID=w2KmdN0jmXCKxhdyqpZRK'
  },
  {
    title: 'エンジニアニメ Anthology Tech Book 2nd Season',
    url: 'https://techbookfest.org/product/4G9rM59Pse9Yf5eiQbNMB3?productVariantID=wDrwnvxBskLFMwQczTiwwj'
  },
  {
    title: 'エンジニアニメ Anthology Tech Book 3rd Season',
    url: 'https://techbookfest.org/product/eyQpgXTJXx0mvTLNudCy7T?productVariantID=7PAn6Y9YmHfrf6j3Nq3TMj'
  }
];

export const talks: ExternalLink[] = [
  {
    title: 'Designing a Cross-Disciplinary Engineering Community Through Anime',
    url: 'https://speakerdeck.com/ohmori_yusuke/designing-a-cross-disciplinary-engineering-community-through-anime'
  },
  {
    title: '未来を拓く若手エンジニアの興味関心と目指すキャリア',
    url: 'https://speakerdeck.com/ohmori_yusuke/wei-lai-wotuo-kuruo-shou-ensinianoxing-wei-guan-xin-tomu-zhi-sukiyaria'
  },
  {
    title:
      'Laravel を学ぶ前に書いていた require と Laravel 使い始めてから躓いた use 宣言と namespace',
    url: 'https://speakerdeck.com/ohmori_yusuke/laravel-woxue-buqian-nishu-iteita-require-to-laravel-shi-ishi-metekarazhi-ita-use-xuan-yan-to-namespace'
  },
  {
    title:
      '学生の時に開催したPerl入学式をきっかけに、勉強会を主催や仲間と参加して職能間の境界を越えていく',
    url: 'https://speakerdeck.com/ohmori_yusuke/xue-sheng-noshi-nikai-cui-sitaperlru-xue-shi-wokitukakenienziniagazu-zhi-nixun-ran-mutamenimian-qiang-hui-wozhu-cui-yazhong-jian-tocan-jia-sitezhi-neng-jian-nojing-jie-woyue-eteiku'
  },
  {
    title: 'OpenAPIにも静的解析とフォーマッターを導入して快適にスキーマ定義する',
    url: 'https://speakerdeck.com/ohmori_yusuke/openapinimojing-de-jie-xi-tohuomatutawodao-ru-sitekuai-shi-nisukimading-yi-suru'
  },
  {
    title: 'プログラミング＆実行できるWEBアプリを手作り',
    url: 'https://speakerdeck.com/ohmori_yusuke/hurokuraminku-and-shi-xing-tekiruwebahuriwoshou-zuo-ri'
  },
  {
    title: '新卒エンジニアが組織に馴染むために勉強会を主催してチームの壁を越える',
    url: 'https://speakerdeck.com/ohmori_yusuke/xin-zu-ensiniagazu-zhi-nixun-ran-mutamenimian-qiang-hui-wozhu-cui-sitetimunobi-woyue-eru-592b2796-35ff-49f4-888b-7756404834a9'
  },
  {
    title:
      '「何か」を求めて参加したカンファレンスから持ち帰ってきた「熱」を維持して、活用するために',
    url: 'https://speakerdeck.com/ohmori_yusuke/he-ka-woqiu-metecan-jia-sitakanhuarensukarachi-tigui-tutekita-re-wowei-chi-site-huo-yong-surutameni'
  },
  {
    title: '１人１５０秒、２人で５分 LT',
    url: 'https://speakerdeck.com/ohmori_yusuke/1ren-150miao-2ren-de5fen-lt'
  },
  {
    title: 'エンジニアが組織に馴染むために勉強会を主催してチームの壁を越える',
    url: 'https://speakerdeck.com/ohmori_yusuke/xin-zu-ensiniakazu-zhi-nixun-ran-mutamenimian-qiang-hui-wozhu-cui-sitetimunobi-woyue-eru'
  },
  {
    title: 'PHPで始める振る舞い駆動開発（Behaviour-Driven Development）',
    url: 'https://speakerdeck.com/ohmori_yusuke/phpteshi-meruzhen-ruwu-iqu-dong-kai-fa-behaviour-driven-development'
  },
  {
    title: '組織が大きく変わろうとするとき、自分はどうありたいかを考えている',
    url: 'https://speakerdeck.com/ohmori_yusuke/zu-zhi-gada-kikubian-waroutosurutoki-zi-fen-hadouaritaikawokao-eteiru'
  },
  {
    title: 'アニメがエンジニアをつなぐ！「エンジニアニメ」勉強会が巻き起こすCo-Creationの波',
    url: 'https://speakerdeck.com/ohmori_yusuke/animegaenziniawotunagu-enzinianime-mian-qiang-hui-gajuan-kiqi-kosuco-creationnobo'
  },
  {
    title: 'WebエンジニアがSwiftをブラウザで動かすプレイグラウンドを作ってみた',
    url: 'https://speakerdeck.com/ohmori_yusuke/webenziniagaswiftwoburauzadedong-kasupureiguraundowozuo-tutemita'
  },
  {
    title: '勉強会から始まった僕のDevRel〜新卒エンジニアがつないだ2年間の軌跡〜',
    url: 'https://speakerdeck.com/ohmori_yusuke/mian-qiang-hui-karashi-matutapu-nodevrel-xin-zu-ensiniakatunaita2nian-jian-nogui-ji'
  },
  {
    title: '仕様がそのままテストになる！Javaで始める振る舞い駆動開発',
    url: 'https://speakerdeck.com/ohmori_yusuke/shi-yang-gasonomamatesutoninaru-javadeshi-meruzhen-ruwu-iqu-dong-kai-fa'
  },
  {
    title: 'MDN Web Docs に日本語翻訳でコントリビュート',
    url: 'https://speakerdeck.com/ohmori_yusuke/mdn-web-docs-niri-ben-yu-fan-yi-tekontorihiyuto'
  }
];

export const moreTalksLink: ExternalLink = {
  title: 'その他の登壇資料',
  url: links.speakerdeck
};

export const communities: Community[] = [
  { title: 'エンジニアニメ', description: '主催', url: 'https://engineers-anime.connpass.com/' },
  {
    title: '若手ふんわり勉強部',
    description: '主催',
    url: 'https://wakate-funwari-study.connpass.com/'
  },
  { title: 'YUMEMI.grow', description: '企画・運営', url: 'https://yumemi.connpass.com/' },
  {
    title: '技術書同人誌博覧会',
    description: 'コアスタッフ',
    url: 'https://gishohaku.connpass.com/'
  }
];

export const anime: ExternalLink[] = [
  { title: '輪るピングドラム', url: 'https://penguindrum10th.jp/' },
  { title: 'ハイスコアガール', url: 'http://hi-score-girl.com/' },
  { title: '宇宙よりも遠い場所', url: 'https://www.web.nhk/tv/pl/series-tep-9W6P8KV8N7' },
  { title: 'C', url: 'https://noitamina-control.jp/' }
];

export const skills: SkillGroup[] = [
  { area: 'Languages', items: ['Go', 'Kotlin', 'PHP', 'TypeScript', 'SQL', 'Shell Script'] },
  { area: 'Backend', items: ['NestJS', 'Spring Boot', 'FuelPHP', 'Laravel', 'Express'] },
  { area: 'Testing', items: ['Playwright', 'JUnit', 'MockK', 'Jest', 'PHPUnit'] },
  { area: 'Infrastructure / DevOps', items: ['AWS', 'Docker', 'Terraform', 'GitHub Actions'] },
  { area: 'Design / Development', items: ['OpenAPI', 'Database Design', 'Scrum', 'TDD', 'DDD'] }
];

export const conferenceWork: ConferenceWork[] = [
  { title: 'PHPカンファレンス関西2024', role: '制作物の手配・会場設営・当日運営' },
  { title: 'PHPカンファレンス北海道2024', role: 'ノベルティ制作・当日運営' },
  { title: 'フロントエンドカンファレンス北海道2024', role: '広報・ノベルティ手配・当日運営' },
  { title: '大学技術サークル', role: '代表・技術同人誌の共同執筆・技術書典への出展' }
];
