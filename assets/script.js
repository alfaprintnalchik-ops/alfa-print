(() => {
  const translations = {
    ru: {
      brandHome: 'АЛЬФА — на главную', logoAlt: 'Логотип АЛЬФА', avatarAlt: 'Аватар АЛЬФА', brandSub: 'типография · Нальчик',
      openMenu: 'Открыть меню', menuLabel: 'Меню', navServices: 'Услуги', navContacts: 'Контакты',
      heroBadge: 'Быстро · удобно · без лишнего', heroTitle: 'Печать и реклама<br>в одном месте.',
      heroText: 'Полиграфия, печать, брендирование и удобная связь в WhatsApp, Telegram или по телефону.',
      since: 'с 2014 года', addressShort: 'Тарчокова, 29', call: 'Позвонить', essentials: 'Самое нужное',
      servicesTitle: 'Основные услуги', service1Title: 'Полиграфия', service1Text: 'Визитки, листовки, меню, наклейки, буклеты.',
      service2Title: 'Печать', service2Text: 'Интерьерная, широкоформатная, УФ-печать.',
      service3Title: 'Брендирование', service3Text: 'Сувениры, упаковка, бирки, ленты и таблички.',
      contactsBadge: 'Контакты', contactsTitle: 'Связаться за 1 клик', phoneLabel: 'Телефон:', addressLabel: 'Адрес:',
      addressFull: 'Нальчик, ул. Тарчокова, 29', openChat: 'открыть чат', writeWhatsApp: 'Написать в WhatsApp',
      writeTelegram: 'Написать в Telegram', footerText: 'Готово для GitHub Pages', floatingCallAria: 'Позвонить в АЛЬФА'
    },
    en: {
      brandHome: 'ALFA — Home', logoAlt: 'ALFA logo', avatarAlt: 'ALFA avatar', brandSub: 'print studio · Nalchik',
      openMenu: 'Open menu', menuLabel: 'Menu', navServices: 'Services', navContacts: 'Contacts',
      heroBadge: 'Fast · easy · no clutter', heroTitle: 'Print & advertising<br>in one place.',
      heroText: 'Printing, branding and advertising production with quick contact via WhatsApp, Telegram or phone.',
      since: 'since 2014', addressShort: '29 Tarchokova St.', call: 'Call now', essentials: 'Essentials only',
      servicesTitle: 'Core services', service1Title: 'Print materials', service1Text: 'Business cards, flyers, menus, stickers and brochures.',
      service2Title: 'Printing', service2Text: 'Interior, large-format and UV printing.',
      service3Title: 'Branding', service3Text: 'Gifts, packaging, tags, ribbons and signs.',
      contactsBadge: 'Contacts', contactsTitle: 'Contact us in one tap', phoneLabel: 'Phone:', addressLabel: 'Address:',
      addressFull: '29 Tarchokova St., Nalchik', openChat: 'open chat', writeWhatsApp: 'Message on WhatsApp',
      writeTelegram: 'Message on Telegram', footerText: 'Ready for GitHub Pages', floatingCallAria: 'Call ALFA'
    }
  };

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const langButton = document.querySelector('.lang-toggle');
  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations.ru;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.dataset.i18nAria;
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.dataset.i18nAlt;
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    if (langButton) {
      langButton.textContent = lang === 'ru' ? 'EN' : 'RU';
      langButton.title = lang === 'ru' ? 'English' : 'Русский';
      langButton.setAttribute('aria-label', lang === 'ru' ? 'Switch to English' : 'Переключить на русский');
    }
    try { localStorage.setItem('alfa-lang', lang); } catch (_) {}
  };

  let currentLang = 'ru';
  try {
    const saved = localStorage.getItem('alfa-lang');
    if (saved === 'en' || saved === 'ru') currentLang = saved;
  } catch (_) {}
  applyLanguage(currentLang);

  langButton?.addEventListener('click', () => {
    currentLang = document.documentElement.lang === 'ru' ? 'en' : 'ru';
    applyLanguage(currentLang);
  });
})();
