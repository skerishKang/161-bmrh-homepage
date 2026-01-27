// Translation Data
const translations = {
    ko: {
        nav: {
            brand: '방림명지로드힐',
            home: '홈',
            notice: '알림마당',
            community: '커뮤니티',
            services: '생활편의',
            about: '단지소개',
            login: '로그인'
        },
        hero: {
            subtitle: '방림동 프리미엄 아파트',
            title: '방림명지의 품격이\n삶의 여유가 되다',
            description: '광주 남구의 중심, 우수한 교육 환경과 편리한 교통망을 갖춘 리얼 프리미엄 라이프를 경험하세요.',
            cta1: '단지 시설 둘러보기'
        },
        actions: {
            voting: '전자투표',
            votingDesc: '단지 주요 안건 투표',
            booking: '시설예약',
            bookingDesc: '커뮤니티 시설 예약',
            parking: '방문차량',
            parkingDesc: '방문객 차량 미리 등록',
            complaint: '민원접수',
            complaintDesc: '관리사무소 민원 신청'
        },
        complexInfo: {
            subtitle: 'COMPLEX INFO',
            title: '단지 기본 정보',
            address: '주소',
            addressValue: '광주광역시 남구 대남대로85번길 3',
            households: '세대수',
            householdsValue: '197세대 (1개동)',
            year: '준공년도',
            yearValue: '2015년 10월',
            heating: '난방방식',
            heatingValue: '개별난방 (도시가스)',
            floors: '층수',
            floorsValue: '지상 24층 / 지하 2층',
            builder: '시공사',
            builderValue: '명지주택건설(주)',
            kapt: 'K-APT 정보 확인'
        },
        footer: {
            description: '방림명지로드힐은 남구의 중심부에서 실거주자의 편의를 최우선으로 생각하는 주거 공간을 제공합니다.',
            office: '관리사무소',
            contact: 'T. 062-671-0000',
            hours: '평일 09:00 - 18:00',
            holiday: '주말/공휴일 휴무',
            location: '관리사무소 1층',
            services: '주요 서비스'
        }
    },
    en: {
        nav: {
            brand: 'B.M. Roadhill',
            home: 'Home',
            notice: 'Notice',
            community: 'Community',
            services: 'Services',
            about: 'About',
            login: 'Login'
        },
        hero: {
            subtitle: 'Premium Residences in Bangrim',
            title: 'Dignity of Bangrim,\nEase of Your Life',
            description: 'Experience a premium lifestyle in the heart of Nam-gu, Gwangju, with excellent schools and convenient transport links.',
            cta1: 'Explore Facilities'
        },
        actions: {
            voting: 'E-Voting',
            votingDesc: 'Vote on complex matters',
            booking: 'Booking',
            bookingDesc: 'Reserve community facilities',
            parking: 'Parking',
            parkingDesc: 'Pre-register visitor vehicles',
            complaint: 'Complaints',
            complaintDesc: 'Apply for management service'
        },
        complexInfo: {
            subtitle: 'COMPLEX INFO',
            title: 'Property Overview',
            address: 'Address',
            addressValue: '3, Daenam-daero 85beon-gil, Nam-gu, Gwangju',
            households: 'Households',
            householdsValue: '197 Units (1 Building)',
            year: 'Completed',
            yearValue: 'Oct 2015',
            heating: 'Heating',
            heatingValue: 'Individual (City Gas)',
            floors: 'Floors',
            floorsValue: '24F / B2',
            builder: 'Builder',
            builderValue: 'Myeongji Construction',
            kapt: 'Check K-APT Info'
        },
        footer: {
            description: 'Bangrim Myeongji Roadhill provides a residential space that prioritizes the convenience of actual residents in the heart of Nam-gu.',
            office: 'Management Office',
            contact: 'T. +82 62-671-0000',
            hours: 'Mon-Fri 09:00 - 18:00',
            holiday: 'Closed on Weekends/Holidays',
            location: '1F Management Office',
            services: 'Key Services'
        }
    }
};

// State
let currentLang = 'ko';
let activeTab = 'home';

// DOM Elements
const navbar = document.getElementById('navbar');
const langText = document.getElementById('lang-text');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

// Scroll Logic
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Translation Logic
function updateTranslations() {
    const t = translations[currentLang];

    // Find all elements with data-t attribute
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        const keys = key.split('.');
        let text = t;

        keys.forEach(k => {
            text = text[k];
        });

        if (text) {
            // Check if title has \n for line breaks
            if (typeof text === 'string' && text.includes('\n')) {
                el.innerHTML = text.replace(/\n/g, '<br>');
            } else {
                el.textContent = text;
            }
        }
    });

    // Update Language Toggle Text
    langText.textContent = currentLang === 'ko' ? 'EN' : 'KO';
}

function toggleLang() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    document.documentElement.lang = currentLang;
    updateTranslations();
}

// Tab Switching Logic
function setActiveTab(tabId) {
    activeTab = tabId;

    // Update Nav Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const homeContent = document.getElementById('tab-home');
    const placeholderContent = document.getElementById('tab-placeholder');
    const placeholderTitle = document.getElementById('placeholder-title');
    const placeholderDesc = document.getElementById('placeholder-desc');

    if (tabId === 'home') {
        homeContent.classList.add('active');
        placeholderContent.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        homeContent.classList.remove('active');
        placeholderContent.classList.add('active');

        // Update Placeholder Content
        const t = translations[currentLang].nav;
        placeholderTitle.textContent = t[tabId];
        placeholderDesc.textContent = currentLang === 'ko' ?
            `${t[tabId]} 서비스를 준비 중입니다.` :
            `${t[tabId]} service is being prepared.`;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Mobile Menu Logic
function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
        mobileMenu.classList.remove('open');
        menuIcon.setAttribute('data-lucide', 'menu');
    } else {
        mobileMenu.classList.add('open');
        menuIcon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
}

// Scroll to ID
function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) {
        const offset = navbar.offsetHeight;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
});
