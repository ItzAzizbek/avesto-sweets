import { useState } from 'react'
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
  Instagram,
  Facebook,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const successMsg = t.contact.form.successMessage
      .replace('{name}', formData.name)
      .replace('{email}', formData.email);
    alert(successMsg);
    setFormData({ name: '', email: '', phone: '', message: '' });
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
                  <label htmlFor="email">{t.contact.form.email} {t.contact.form.required}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
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
                <button type="submit" className="btn btn-primary btn-block">
                  {t.contact.form.submit}
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
                    {t.contact.info.addressLine1}<br />
                    {t.contact.info.addressLine2}
                  </span>
                </p>
                <p className="info-item">
                  <Phone size={18} className="info-icon" />
                  <span>
                    <strong>{t.contact.info.phone}</strong><br />
                    +1 (555) SWEETS-1<br />
                    +1 (555) 793-3871
                  </span>
                </p>
                <p className="info-item">
                  <Mail size={18} className="info-icon" />
                  <span>
                    <strong>{t.contact.info.email}</strong><br />
                    hello@avestosweets.com
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
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
                <a href="#" className="social-link" aria-label="Pinterest">
                  <Pin size={20} />
                  <span>Pinterest</span>
                </a>
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
