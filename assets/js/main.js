// 메인 페이지 스크립트
const data = [
    {
        id: 1,
        title: 'SPiDER ExD',
        contents:
            '포괄적 관점에서 보안 운영 효율성을 높이는 통합형 보안 정보 및 이벤트 탐지 분석(SIEM) 솔루션',
        imgurl: './assets/images/common/con1_img1.png',
    },
    {
        id: 2,
        title: 'SPiDER SOAR',
        contents:
            '20여년간 고객사에서 검증된 플레이북을 토대로 국내 보안 환경에 최적화된  활용도 높은 자동화 기능을 제공하는 SOAR 솔루션',
        imgurl: './assets/images/common/con1_img1.png',
    },
    {
        id: 3,
        title: 'SPiDER TM',
        contents: '보안관제 수행 경험 및 빅테이터 활용 역량이 집약된 통합보안관제 솔루션',
        imgurl: './assets/images/common/con1_img1.png',
    },
    {
        id: 4,
        title: 'SPiDER TM AI Edition',
        contents:
            '인공지능(Al) 기술을 접목한 지능형 보안관제제계를 통해 관제 효율성 극대화 및 정보 인프라 자기방어 능력 강화',
        imgurl: './assets/images/common/con1_img1.png',
    },
    {
        id: 5,
        title: 'SPiDER OT',
        contents: '스마트 시티·스마트 빌딩·스마트 팩토리에 최적화된 OT 보안관리 솔루션',
        imgurl: './assets/images/common/con1_img1.png',
    },
    {
        id: 6,
        title: 'SPiDER Logbox',
        contents:
            '모든 시스템에서 원본로그의 저장, 분석, 관리, 모니터링까지 올인원 로그관리 환경을 제공하는 빅데이터 기반의 통합로그관리솔루션',
        imgurl: './assets/images/common/con1_img1.png',
    },
    {
        id: 7,
        title: 'Smart[Guard]',
        contents:
            '온프레미스, 하이브리드·멀티 클라우드 환경을 아우르는 자산 위협 관리·보안 진단 자동화 솔루션',
        imgurl: './assets/images/common/con1_img1.png',
    },
    {
        id: 8,
        title: 'WEBMON',
        contents:
            '종합모니터링 감시를 통해 홈페이지 위변조 발생을 탐지하는 웹페이지 위변조 모니터링 솔루션',
        imgurl: './assets/images/common/con1_img1.png',
    },
    {
        id: 9,
        title: 'Partner Solution',
        contents:
            '안티 랜섬웨어, 다크웹 위협정보 수집·검색, 엔드포인트 보안 등 이글루코퍼레이션이 검증한 파트너사의 다양한 보안솔루션',
        imgurl: './assets/images/common/con1_img1.png',
    },
];

//메인 배너 swiper
const con1_h4 = document.querySelector('.con1 .content1 .left h4');
const con1_p = document.querySelector('.con1 .content1 .left p');

let swiper_wrapper = document.querySelector('.mainBanner .swiper-wrapper');
const swiper_slide = document.createElement('div');
swiper_slide.classList.add('swiper-slide');

let prev = 0;
let active = 0;
let next = 0;

// data.forEach((item, idx) => {
//     con1_h4.textContent = item.title;
//     con1_p.textContent = item.contents;
//     console.log(con1_h4);
// });



//Initialize Swiper
var swiper = new Swiper('.mainBanner', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        slideChange: function () {
            // this.activeIndex: 현재 보고 있는 슬라이드 번호
            // this.previousIndex: 직전에 봤던 슬라이드 번호
        },
    },
});
