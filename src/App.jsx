import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLanguage } from './contexts/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import ThemeSwitcher from './components/ThemeSwitcher'
import { 
  Wheat, 
  ChefHat, 
  Palette, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CupSoda,
  Cake,
  Croissant,
  Cookie,
  Pin
} from 'lucide-react'
import './App.css'

function App() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Snow particle effect
  useEffect(() => {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    document.body.appendChild(snowContainer);

    const snowflakes = ['❄', '❅', '❆'];
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
      
      // Randomize properties for each snowflake
      const startPositionX = Math.random() * 100; // 0-100%
      const endSway = (Math.random() - 0.5) * 100; // -50px to 50px horizontal sway
      const duration = 8 + Math.random() * 10; // 8-18 seconds
      const delay = Math.random() * 5; // 0-5 second delay
      const size = 0.5 + Math.random() * 1; // 0.5-1.5 size multiplier
      const opacity = 0.4 + Math.random() * 0.6; // 0.4-1.0 opacity
      
      snowflake.style.left = `${startPositionX}%`;
      snowflake.style.fontSize = `${20 * size}px`;
      snowflake.style.opacity = opacity;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${delay}s`;
      snowflake.style.setProperty('--sway', `${endSway}px`);
      
      snowContainer.appendChild(snowflake);
    }

    return () => {
      document.body.removeChild(snowContainer);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields (Name, Phone, Message)
    if (!formData.name || !formData.phone || !formData.message) {
      alert(t.contact.form.errorMessage || 'Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        throw new Error('Telegram credentials not configured');
      }

      // Format message for Telegram
      const telegramMessage = `
🍰 *Новая заявка на контактную форму*

👤 *Имя:* ${formData.name}
📱 *Телефон:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}
💬 *Сообщение:*
${formData.message}
      `.trim();

      // Send message directly to Telegram API
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      });

      // Show success message
      const successMsg = t.contact.form.successMessage
        .replace('{name}', formData.name)
        .replace('{email}', formData.email || 'your email');
      alert(successMsg);
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t.contact.form.errorMessage || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-controls">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <div className="hero-content container">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              {t.hero.title} <span className="text-accent">{t.hero.brand}</span>
            </h1>
            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">{t.hero.orderNow}</a>
              <a href="#products" className="btn btn-secondary">{t.hero.viewMenu}</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>{t.hero.scrollText}</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>{t.about.title}</h2>
            <p className="subtitle">{t.about.subtitle}</p>
          </div>
          <div className="about-content">
            <div className="about-text fade-in-up">
              <p className="lead">
                {t.about.leadText}
              </p>
              <p>
                {t.about.description}
              </p>
            </div>
            <div className="features grid grid-3">
              <div className="feature-card card fade-in-up delay-1">
                <div className="feature-icon">
                  <Wheat size={56} strokeWidth={1.5} />
                </div>
                <h3>{t.about.features.fresh.title}</h3>
                <p>{t.about.features.fresh.description}</p>
              </div>
              <div className="feature-card card fade-in-up delay-2">
                <div className="feature-icon">
                  <ChefHat size={56} strokeWidth={1.5} />
                </div>
                <h3>{t.about.features.handmade.title}</h3>
                <p>{t.about.features.handmade.description}</p>
              </div>
              <div className="feature-card card fade-in-up delay-3">
                <div className="feature-icon">
                  <Palette size={56} strokeWidth={1.5} />
                </div>
                <h3>{t.about.features.custom.title}</h3>
                <p>{t.about.features.custom.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products" id="products">
        <div className="container">
          <div className="section-title">
            <h2>{t.products.title}</h2>
            <p className="subtitle">{t.products.subtitle}</p>
          </div>
          <div className="products-grid grid grid-4">
            <div className="product-card card scale-in delay-1">
              <div className="product-image">
                <div className="product-icon" style={{background: 'linear-gradient(135deg, #ffd1dc 0%, #ffb6c1 100%)'}}>
                  <CupSoda size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="product-info">
                <h3>{t.products.items.cupcakes.title}</h3>
                <p>{t.products.items.cupcakes.description}</p>
                <span className="price">{t.products.items.cupcakes.price}</span>
              </div>
            </div>
            <div className="product-card card scale-in delay-2">
              <div className="product-image">
                <div className="product-icon" style={{background: 'linear-gradient(135deg, #fff5e6 0%, #ffe4d1 100%)'}}>
                  <Cake size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="product-info">
                <h3>{t.products.items.cakes.title}</h3>
                <p>{t.products.items.cakes.description}</p>
                <span className="price">{t.products.items.cakes.price}</span>
              </div>
            </div>
            <div className="product-card card scale-in delay-3">
              <div className="product-image">
                <div className="product-icon" style={{background: 'linear-gradient(135deg, #f0e6d2 0%, #e8dcc4 100%)'}}>
                  <Croissant size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="product-info">
                <h3>{t.products.items.pastries.title}</h3>
                <p>{t.products.items.pastries.description}</p>
                <span className="price">{t.products.items.pastries.price}</span>
              </div>
            </div>
            <div className="product-card card scale-in delay-4">
              <div className="product-image">
                <div className="product-icon" style={{background: 'linear-gradient(135deg, #e6f0e6 0%, #d4e8d4 100%)'}}>
                  <Cookie size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="product-info">
                <h3>{t.products.items.cookies.title}</h3>
                <p>{t.products.items.cookies.description}</p>
                <span className="price">{t.products.items.cookies.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-title">
            <h2>{t.testimonials.title}</h2>
            <p className="subtitle">{t.testimonials.subtitle}</p>
          </div>
          <div className="testimonials-grid grid grid-3">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className={`testimonial-card card glass fade-in-up delay-${index + 1}`}>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.context}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>{t.contact.title}</h2>
            <p className="subtitle">{t.contact.subtitle}</p>
          </div>
          <div className="contact-content">
            <div className="contact-form-wrapper fade-in-up">
              <form className="contact-form card" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.contact.form.name} {t.contact.form.required}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t.contact.form.phone} {t.contact.form.required}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t.contact.form.message} {t.contact.form.required}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (t.contact.form.sending || 'Sending...') : t.contact.form.submit}
                </button>
              </form>
            </div>
            <div className="contact-info fade-in-up delay-1">
              <div className="info-card card">
                <h3>{t.contact.info.visitTitle}</h3>
                <p className="info-item">
                  <MapPin size={18} className="info-icon" />
                  <span>
                    <strong>{t.contact.info.address}</strong><br />
                    {t.contact.info.addresses.map((addr, index) => (
                      <span key={index} style={{display: 'block', marginBottom: '4px'}}>{addr}</span>
                    ))}
                  </span>
                </p>
                <p className="info-item">
                  <Phone size={18} className="info-icon" />
                  <span>
                    <strong>{t.contact.info.phone}</strong><br />
                    {t.contact.info.phoneNumbers.map((phone, index) => (
                      <span key={index} style={{display: 'block', marginBottom: '4px'}}>{phone}</span>
                    ))}
                  </span>
                </p>

                <p className="info-item">
                  <Clock size={18} className="info-icon" />
                  <span>
                    <strong>{t.contact.info.hours}</strong><br />
                    {t.contact.info.hoursWeekday}<br />
                    {t.contact.info.hoursWeekend}
                  </span>
                </p>
              </div>
              <div className="social-links">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>{t.footer.brand}</h3>
              <p>{t.footer.tagline}</p>
            </div>
            <div className="footer-links">
              <a href="#home">{t.footer.links.home}</a>
              <a href="#about">{t.footer.links.about}</a>
              <a href="#products">{t.footer.links.products}</a>
              <a href="#contact">{t.footer.links.contact}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
