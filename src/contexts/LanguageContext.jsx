import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Hero Section
    hero: {
      title: "Welcome to",
      brand: "Avesto Sweets",
      subtitle: "Handcrafted artisan pastries, custom cakes, and delightful sweets made with love and the finest ingredients",
      orderNow: "Order Now",
      viewMenu: "View Menu",
      scrollText: "Scroll to explore"
    },
    
    // About Section
    about: {
      title: "Our Sweet Story",
      subtitle: "Where passion meets perfection",
      leadText: "At Avesto Sweets, we believe every celebration deserves something extraordinary. For over a decade, we've been crafting memorable moments through our artisan baked goods.",
      description: "Each item is carefully handmade with premium ingredients, traditional techniques, and a modern twist that makes every bite unforgettable.",
      features: {
        fresh: {
          title: "Fresh Ingredients",
          description: "Only the finest, locally-sourced ingredients in every recipe"
        },
        handmade: {
          title: "Handmade Daily",
          description: "Baked fresh every morning by our expert pastry chefs"
        },
        custom: {
          title: "Custom Designs",
          description: "Personalized creations for your special occasions"
        }
      }
    },
    
    // Products Section
    products: {
      title: "Our Specialties",
      subtitle: "Discover our most popular creations",
      items: {
        cupcakes: {
          title: "Gourmet Cupcakes",
          description: "Delicate cupcakes with premium buttercream in seasonal flavors",
          price: "From $4.50"
        },
        cakes: {
          title: "Custom Cakes",
          description: "Beautiful custom-designed cakes for weddings, birthdays & more",
          price: "From $75"
        },
        pastries: {
          title: "French Pastries",
          description: "Authentic croissants, éclairs, and tarts made with European butter",
          price: "From $5"
        },
        cookies: {
          title: "Artisan Cookies",
          description: "Handcrafted cookies & macarons in unique flavor combinations",
          price: "From $3"
        }
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "Love from our sweet community",
      items: [
        {
          text: "The wedding cake was absolutely stunning! Not only beautiful but the taste was incredible. Our guests couldn't stop talking about it!",
          author: "Sarah & James",
          context: "Wedding Cake"
        },
        {
          text: "I order from Avesto Sweets every week. Their croissants are the best I've had outside of Paris. Always fresh and perfectly flaky!",
          author: "Michael Chen",
          context: "Regular Customer"
        },
        {
          text: "The custom birthday cake for my daughter exceeded all expectations. The attention to detail was amazing. Thank you for making her day special!",
          author: "Emily Rodriguez",
          context: "Birthday Cake"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "Get in Touch",
      subtitle: "Let's create something sweet together",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your.email@example.com",
        phonePlaceholder: "+1 (555) 123-4567",
        messagePlaceholder: "Tell us about your order or inquiry...",
        required: "*",
        submit: "Send Message",
        successMessage: "Thank you {name}! We'll contact you soon at {email}"
      },
      info: {
        visitTitle: "Visit Us",
        address: "Address:",
        addressLine1: "123 Sweet Street",
        addressLine2: "Bakery District, BD 12345",
        phone: "Phone:",
        email: "Email:",
        hours: "Hours:",
        hoursWeekday: "Mon-Fri: 7:00 AM - 7:00 PM",
        hoursWeekend: "Sat-Sun: 8:00 AM - 8:00 PM"
      }
    },
    
    // Footer
    footer: {
      brand: "Avesto Sweets",
      tagline: "Handcrafted with love since 2013",
      links: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact"
      },
      copyright: "© 2024 Avesto Sweets. All rights reserved. Made with ❤️ and flour."
    }
  },
  
  ru: {
    // Hero Section
    hero: {
      title: "Добро пожаловать в",
      brand: "Avesto Sweets",
      subtitle: "Ремесленная выпечка, торты на заказ и восхитительные сладости, приготовленные с любовью и из лучших ингредиентов",
      orderNow: "Заказать",
      viewMenu: "Меню",
      scrollText: "Прокрутите вниз"
    },
    
    // About Section
    about: {
      title: "Наша Сладкая История",
      subtitle: "Где страсть встречается с совершенством",
      leadText: "В Avesto Sweets мы верим, что каждое празднование заслуживает чего-то необычного. Более десяти лет мы создаём незабываемые моменты с помощью нашей ремесленной выпечки.",
      description: "Каждое изделие тщательно изготавливается вручную из премиальных ингредиентов, традиционных техник и современного подхода, что делает каждый кусочек незабываемым.",
      features: {
        fresh: {
          title: "Свежие Ингредиенты",
          description: "Только лучшие местные ингредиенты в каждом рецепте"
        },
        handmade: {
          title: "Ручная Работа",
          description: "Свежая выпечка каждое утро от наших опытных кондитеров"
        },
        custom: {
          title: "Индивидуальный Дизайн",
          description: "Персональные творения для ваших особых случаев"
        }
      }
    },
    
    // Products Section
    products: {
      title: "Наши Специальности",
      subtitle: "Откройте для себя наши самые популярные творения",
      items: {
        cupcakes: {
          title: "Изысканные Капкейки",
          description: "Нежные капкейки с премиальным кремом сезонных вкусов",
          price: "От $4.50"
        },
        cakes: {
          title: "Торты на Заказ",
          description: "Красивые торты на заказ для свадеб, дней рождения и других событий",
          price: "От $75"
        },
        pastries: {
          title: "Французская Выпечка",
          description: "Аутентичные круассаны, эклеры и тарты из европейского масла",
          price: "От $5"
        },
        cookies: {
          title: "Ремесленное Печенье",
          description: "Ручное печенье и макаронс с уникальными вкусовыми сочетаниями",
          price: "От $3"
        }
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: "Отзывы Наших Клиентов",
      subtitle: "Любовь от нашего сладкого сообщества",
      items: [
        {
          text: "Свадебный торт был абсолютно потрясающим! Не только красивым, но и невероятно вкусным. Наши гости не переставали говорить о нём!",
          author: "Сара и Джеймс",
          context: "Свадебный Торт"
        },
        {
          text: "Я заказываю в Avesto Sweets каждую неделю. Их круассаны - лучшие, которые я пробовал за пределами Парижа. Всегда свежие и идеально слоистые!",
          author: "Майкл Чен",
          context: "Постоянный Клиент"
        },
        {
          text: "Праздничный торт для моей дочери превзошёл все ожидания. Внимание к деталям было потрясающим. Спасибо, что сделали её день особенным!",
          author: "Эмили Родригес",
          context: "Торт на День Рождения"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "Свяжитесь с Нами",
      subtitle: "Давайте создадим что-то сладкое вместе",
      form: {
        name: "Полное Имя",
        email: "Email Адрес",
        phone: "Номер Телефона",
        message: "Сообщение",
        namePlaceholder: "Ваше имя",
        emailPlaceholder: "your.email@example.com",
        phonePlaceholder: "+1 (555) 123-4567",
        messagePlaceholder: "Расскажите нам о вашем заказе или запросе...",
        required: "*",
        submit: "Отправить",
        successMessage: "Спасибо {name}! Мы свяжемся с вами по адресу {email}"
      },
      info: {
        visitTitle: "Посетите Нас",
        address: "Адрес:",
        addressLine1: "Сладкая улица, 123",
        addressLine2: "Кондитерский район, BD 12345",
        phone: "Телефон:",
        email: "Email:",
        hours: "Часы работы:",
        hoursWeekday: "Пн-Пт: 7:00 - 19:00",
        hoursWeekend: "Сб-Вс: 8:00 - 20:00"
      }
    },
    
    // Footer
    footer: {
      brand: "Avesto Sweets",
      tagline: "С любовью создано с 2013 года",
      links: {
        home: "Главная",
        about: "О нас",
        products: "Продукты",
        contact: "Контакты"
      },
      copyright: "© 2024 Avesto Sweets. Все права защищены. Сделано с ❤️ и мукой."
    }
  },
  
  uz: {
    // Hero Section
    hero: {
      title: "Xush kelibsiz",
      brand: "Avesto Sweets",
      subtitle: "Qo'lda tayyorlangan nonvoyxona mahsulotlari, maxsus tortlar va eng yaxshi ingredientlardan tayyorlangan shirinliklar",
      orderNow: "Buyurtma Berish",
      viewMenu: "Menyu",
      scrollText: "Pastga aylantiring"
    },
    
    // About Section
    about: {
      title: "Bizning Shirin Hikoyamiz",
      subtitle: "Ishtiyoq va mukammallik uchrashuvi",
      leadText: "Avesto Sweets'da biz har bir bayram noyob narsa loyiq deb hisoblaymiz. O'n yildan ortiq vaqt davomida biz qo'lda tayyorlangan nonvoyxona mahsulotlarimiz orqali unutilmas lahzalarni yaratib kelmoqdamiz.",
      description: "Har bir mahsulot yuqori sifatli ingredientlar, an'anaviy usullar va zamonaviy yondashuv bilan ehtiyotkorlik bilan qo'lda tayyorlanadi, bu har bir luqmani unutilmas qiladi.",
      features: {
        fresh: {
          title: "Yangi Ingredientlar",
          description: "Har bir retseptda faqat eng yaxshi mahalliy ingredientlar"
        },
        handmade: {
          title: "Har Kuni Qo'lda",
          description: "Har kuni ertalab tajribali oshpazlarimiz tomonidan yangi pishiriladi"
        },
        custom: {
          title: "Maxsus Dizayn",
          description: "Maxsus kunlaringiz uchun shaxsiy yaratmalar"
        }
      }
    },
    
    // Products Section
    products: {
      title: "Bizning Maxsus Mahsulotlarimiz",
      subtitle: "Eng ommabop yaratmalarimizni kashf eting",
      items: {
        cupcakes: {
          title: "Gurme Kapkeyklar",
          description: "Mavsumiy ta'mlardagi premium krem bilan nozik kapkeyklar",
          price: "$4.50 dan"
        },
        cakes: {
          title: "Maxsus Tortlar",
          description: "To'ylar, tug'ilgan kunlar va boshqa tadbirlar uchun go'zal maxsus dizayn tortlar",
          price: "$75 dan"
        },
        pastries: {
          title: "Frantsuz Pirojniy",
          description: "Yevropa moyidan tayyorlangan asl kruassan, ekler va tartlar",
          price: "$5 dan"
        },
        cookies: {
          title: "Qo'lda Pechene",
          description: "Noyob ta'mlar bilan qo'lda tayyorlangan pechene va makaron",
          price: "$3 dan"
        }
      }
    },
    
    // Testimonials Section
    testimonials: {
      title: "Mijozlarimiz Fikrlari",
      subtitle: "Shirin hamjamiyatimizdan muhabbat",
      items: [
        {
          text: "To'y torti mutlaqo ajoyib edi! Faqat chiroyli emas, balki ta'mi ham aql bovar qilmaydigan edi. Mehmonlarimiz bu haqda gapirishni to'xtatmadilar!",
          author: "Sara va Jeyms",
          context: "To'y Torti"
        },
        {
          text: "Men Avesto Sweets'dan har hafta buyurtma beraman. Ularning kruassanlari Parijdan tashqarida tatib ko'rganlarimning eng yaxshisi. Har doim yangi va mukammal qatlamli!",
          author: "Maykl Chen",
          context: "Doimiy Mijoz"
        },
        {
          text: "Qizim uchun tug'ilgan kun torti barcha kutganlardan oshib ketdi. Tafsilotlarga e'tibor ajoyib edi. Uning kunini maxsus qilganingiz uchun rahmat!",
          author: "Emili Rodriges",
          context: "Tug'ilgan Kun Torti"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "Bog'laning",
      subtitle: "Keling, birgalikda shirin narsa yaratalim",
      form: {
        name: "To'liq Ism",
        email: "Email Manzil",
        phone: "Telefon Raqam",
        message: "Xabar",
        namePlaceholder: "Ismingiz",
        emailPlaceholder: "sizning.email@example.com",
        phonePlaceholder: "+998 (90) 123-4567",
        messagePlaceholder: "Buyurtmangiz yoki so'rovingiz haqida bizga xabar bering...",
        required: "*",
        submit: "Yuborish",
        successMessage: "Rahmat {name}! Biz siz bilan {email} orqali tez orada bog'lanamiz"
      },
      info: {
        visitTitle: "Bizni Tashrif Buyuring",
        address: "Manzil:",
        addressLine1: "Shirin ko'chasi, 123",
        addressLine2: "Nonvoyxona tumani, BD 12345",
        phone: "Telefon:",
        email: "Email:",
        hours: "Ish vaqti:",
        hoursWeekday: "Dush-Jum: 7:00 - 19:00",
        hoursWeekend: "Shan-Yak: 8:00 - 20:00"
      }
    },
    
    // Footer
    footer: {
      brand: "Avesto Sweets",
      tagline: "2013 yildan beri muhabbat bilan tayyorlangan",
      links: {
        home: "Bosh sahifa",
        about: "Biz haqimizda",
        products: "Mahsulotlar",
        contact: "Kontaktlar"
      },
      copyright: "© 2024 Avesto Sweets. Barcha huquqlar himoyalangan. ❤️ va un bilan tayyorlangan."
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('avesto-language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('avesto-language', language);
  }, [language]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
