// 원본 ChatGPT 대화(로마 가족여행 일정 정리)의 최종 확정본 기준.
// 11/17 바티칸 · 11/19 콜로세움. 모든 날은 숙소에서 출발해 숙소로 돌아옵니다.
window.HOTEL = {
  name: '폰타나 피우 스텔라',
  en: 'Fontana Più Stella',
  addr: 'Piazza del Porto di Ripetta 1, 00186 Roma',
  lat: 41.9068, lng: 12.4751
};

window.DAYS = [
  {
    date: '11/16', dow: '월', marble: 'PORFIDO', marbleKo: '포르피도',
    color: '#8C2F3D', colorDark: '#E2687B',
    theme: '나보나 · 판테온 · 산티냐치오 · 소품샵',
    sub: '구시가지 도보 관광 · 점심과 카페 휴식 포함',
    notes: ['숙소에서 가장 가까운 코스라 첫 관광일로 배치.'],
    stops: [
      { n: '나보나 광장',       en: "Piazza Navona",              lat: 41.8992, lng: 12.4731 },
      { n: '판테온',            en: 'Pantheon',                   lat: 41.8986, lng: 12.4769 },
      { n: '산티냐치오 성당',   en: "Sant'Ignazio di Loyola",     lat: 41.8990, lng: 12.4797, note: '천장 트롱프뢰유' },
      { n: 'Chez Dede',         en: 'Via di Monserrato 35',       lat: 41.8965, lng: 12.4682, note: '화~금 11:00–19:30 · 월/토 단축' },
      { n: '파르네세 광장',     en: 'Piazza Farnese',             lat: 41.8951, lng: 12.4714 },
      { n: '캄포 데 피오리',    en: "Campo de' Fiori",            lat: 41.8956, lng: 12.4722, note: '오전 시장' }
    ]
  },
  {
    date: '11/17', dow: '화', marble: 'SERPENTINO', marbleKo: '세르펜티노',
    color: '#2F6B55', colorDark: '#6FB795',
    theme: '바티칸 반나절 투어 · 성 베드로 · 산탄젤로',
    sub: '오전 박물관 투어 · 오후 성 베드로 관람',
    notes: [
      '바티칸 박물관 공식 운영: 월~토 08:00–20:00 (최종 입장 18:00).',
      '예약한 투어에 성 베드로 대성당 내부가 포함되는지 확인. 포함이면 오후가 크게 여유로워집니다.'
    ],
    stops: [
      { n: '바티칸 박물관',       en: 'Musei Vaticani',            lat: 41.9064, lng: 12.4536, note: '입구는 Viale Vaticano' },
      { n: '시스티나 예배당',     en: 'Cappella Sistina',          lat: 41.9029, lng: 12.4545, note: '박물관 동선 내부' },
      { n: '성 베드로 대성당',    en: 'Basilica di San Pietro',    lat: 41.9022, lng: 12.4539 },
      { n: '성 베드로 광장',      en: 'Piazza San Pietro',         lat: 41.9022, lng: 12.4572 },
      { n: '산탄젤로성',          en: "Castel Sant'Angelo",        lat: 41.9031, lng: 12.4663, note: '외관' },
      { n: '산탄젤로 다리',       en: "Ponte Sant'Angelo",         lat: 41.9015, lng: 12.4664 }
    ]
  },
  {
    date: '11/18', dow: '수', marble: 'GIALLO ANTICO', marbleKo: '자이알로 안티코',
    color: '#A8762B', colorDark: '#D2A250',
    theme: '진실의 입 · 트라스테베레 · 오렌지 정원',
    sub: '노을 시각 16:46 전후 — 오렌지 정원 도착 기준',
    notes: [
      '숙소에서 진실의 입까지가 이 날 가장 긴 구간입니다. 테베레 강변을 따라 남쪽으로 내려갑니다.',
      '오렌지 정원에서 로마 시내와 성 베드로 돔을 보며 노을 감상.'
    ],
    stops: [
      { n: '진실의 입',                 en: 'Bocca della Verità',            lat: 41.8881, lng: 12.4815, note: '09:30–17:50' },
      { n: '티베리나섬',                en: 'Isola Tiberina',                lat: 41.8906, lng: 12.4779 },
      { n: '산타 마리아 인 트라스테베레', en: 'S. Maria in Trastevere',      lat: 41.8894, lng: 12.4696, note: '점심·휴식' },
      { n: '오렌지 정원',               en: 'Giardino degli Aranci',         lat: 41.8843, lng: 12.4796, note: '노을 16:46' }
    ]
  },
  {
    date: '11/19', dow: '목', marble: 'PAVONAZZETTO', marbleKo: '파보나체토',
    color: '#6B4C7A', colorDark: '#B08CC4',
    theme: '콜로세움 통합 투어',
    sub: '오전 통합 투어 · 오후 휴식',
    notes: [
      '콜로세움·포로 로마노·팔라티노는 통합권 한 장으로 이어집니다.',
      '공식 입장권은 방문 30일 전부터 판매 — 11/19 기준 10월 20일경.',
      '이날은 다른 관광지를 넣지 않고 오후를 비워둔 날입니다.'
    ],
    stops: [
      { n: '콜로세움',      en: 'Colosseo',        lat: 41.8902, lng: 12.4922 },
      { n: '포로 로마노',   en: 'Foro Romano',     lat: 41.8925, lng: 12.4853 },
      { n: '팔라티노 언덕', en: 'Palatino',        lat: 41.8893, lng: 12.4874 }
    ]
  },
  {
    date: '11/20', dow: '금', marble: 'AFRICANO', marbleKo: '아프리카노',
    color: '#7A4632', colorDark: '#CE8A6B',
    theme: '콜론나 궁전 · 도리아 팜필리 · 트레비',
    sub: '콜론나 10:00 영어 가이드 · 도리아 팜필리 14:00',
    notes: [
      '콜론나 궁전은 금·토 오전만 개방. 금요일은 예약제 가이드 투어(영어 09:30 또는 10:00).',
      '두 예약 사이 간격이 짧으니 이날은 도보 순서를 지키는 게 좋습니다.'
    ],
    stops: [
      { n: '콜론나 궁전',          en: 'Palazzo Colonna',          lat: 41.8970, lng: 12.4842, note: '10:00 투어' },
      { n: '조국의 제단',          en: 'Altare della Patria',      lat: 41.8947, lng: 12.4831 },
      { n: '도리아 팜필리 미술관', en: 'Galleria Doria Pamphilj',  lat: 41.8977, lng: 12.4809, note: '14:00 관람' },
      { n: '트레비 분수',          en: 'Fontana di Trevi',         lat: 41.9009, lng: 12.4833 },
      { n: '알베르토 소르디 갤러리아', en: 'Galleria Alberto Sordi', lat: 41.9006, lng: 12.4801 }
    ]
  },
  {
    date: '11/21', dow: '토', marble: 'CIPOLLINO', marbleKo: '치폴리노',
    color: '#5F7A45', colorDark: '#9FBE78',
    theme: '보르게세 · 스페인 광장 · 핀초 노을',
    sub: '보르게세 09:00–11:00 · 핀초 노을 16:44 전후',
    notes: [
      '보르게세 미술관은 2시간 시간제 입장. 09:00 입장이면 11:00에 나옵니다.',
      '보르게세에서 스페인 광장까지는 빌라 보르게세 공원을 가로지르는 내리막 산책로입니다.',
      '마지막 핀초 전망대는 숙소에서 걸어서 10분 거리 — 노을 보고 바로 복귀 가능.'
    ],
    stops: [
      { n: '보르게세 미술관',  en: 'Galleria Borghese',        lat: 41.9142, lng: 12.4922, note: '09:00 입장' },
      { n: '스페인 광장',      en: 'Piazza di Spagna',         lat: 41.9058, lng: 12.4823 },
      { n: '비아 콘도티',      en: 'Via Condotti',             lat: 41.9055, lng: 12.4802 },
      { n: '비아 마르구타 51', en: 'Via Margutta 51',          lat: 41.9086, lng: 12.4790, note: '로마의 휴일 촬영지' },
      { n: '포폴로 광장',      en: 'Piazza del Popolo',        lat: 41.9107, lng: 12.4763 },
      { n: '핀초 전망대',      en: 'Terrazza del Pincio',      lat: 41.9112, lng: 12.4784, note: '노을 16:44' }
    ]
  }
];
