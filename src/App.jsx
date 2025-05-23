import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { BiCode } from 'react-icons/bi'
import { AiOutlineRobot } from 'react-icons/ai'
import './styles/global.scss'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowNotification(true);
    setFormData({ name: '', email: '', message: '' }); // Form alanlarını temizle
    
    // 3 saniye sonra bildirimi kaldır
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <div className="background-animation" />
      
      <header className="header">
        <nav className="container flex-center">
          <motion.div 
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AiOutlineRobot className="logo-icon" />
            Emirhan
          </motion.div>
          <ul className="nav-links flex">
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Ana Sayfa</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Ben Kimim?</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Neler Yapabilirim?</a></li>
            <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>Portfolyo</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container flex-center">
            <motion.div 
              className="hero-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="welcome-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <BiCode className="code-icon" /> Merhaba, ben
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Emirhan
              </motion.h1>
              <motion.div
                className="typewriter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h2 className="profession">Yapay Zeka Geliştiricisi</h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="hero-description"
              >
                Yapay zeka teknolojileri üzerinde çalışıyor, geleceğin akıllı sistemlerini geliştiriyorum.
                Modern çözümler ve yenilikçi yaklaşımlarla yapay zeka projelerini hayata geçiriyorum.
              </motion.p>
              <motion.div
                className="social-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <a href="https://github.com/Emirtoker10" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/emirhan-toker-0a9b24291/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/emr.toker/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="mailto:e.toker4504@gmail.com" title="E-posta Gönder">
                  <FaEnvelope />
                </a>
              </motion.div>
              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <a href="#portfolio" className="cta-button">Projelerimi Gör</a>
                <a href="#contact" className="cta-button secondary">İletişime Geç</a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Ben Kimim?</h2>
              <div className="card">
                <p>
                  Merhaba! Ben Emirhan Toker, bilgisayar mühendisliği öğrencisiyim. Yapay zeka alanında çalışmalar yapıyor,
                  özellikle makine öğrenmesi, derin öğrenme ve görüntü işleme konularında kendimi geliştiriyorum.
                </p>
                <p>
                  Şu anda bir İHA (İnsansız Hava Aracı) takımında yazılım sorumlusu olarak görev yapıyorum. Bu rolde,
                  takımın yazılım geliştirme süreçlerini yönetiyor ve yapay zeka teknolojilerini İHA sistemlerine entegre ediyorum.
                </p>
                <p>
                  Sürekli öğrenmeye ve yeni teknolojileri keşfetmeye olan tutkumla, her projede en iyi sonucu
                  elde etmeyi hedefliyorum. Yapay zeka ve robotik sistemlerin geleceğin teknolojilerini şekillendireceğine inanıyorum.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Neler Yapabilirim?</h2>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <div className="card">
                  <h3>Yapay Zeka Geliştirme</h3>
                  <p>TensorFlow, PyTorch ve scikit-learn ile makine öğrenmesi modelleri</p>
                </div>
                <div className="card">
                  <h3>Derin Öğrenme</h3>
                  <p>CNN, RNN, ve Transformer tabanlı derin öğrenme modelleri</p>
                </div>
                <div className="card">
                  <h3>Veri Analizi</h3>
                  <p>Python, Pandas ve NumPy ile veri analizi ve görselleştirme</p>
                </div>
                <div className="card">
                  <h3>Web Geliştirme</h3>
                  <p>React, Node.js ve Python Flask ile modern web uygulamaları</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Portfolyo</h2>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div className="card">
                  <h3>Veri İşleme ve Makine Öğrenmesi</h3>
                  <p>
                    Python ile veri analizi, pandas, numpy ve scikit-learn kullanarak makine öğrenmesi
                    modelleri geliştirme çalışmaları. Lineer regresyon, karar ağaçları ve derin öğrenme
                    uygulamaları içerir.
                  </p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/Veri_Isleme" target="_blank" rel="noopener noreferrer" className="cta-button">
                      GitHub'da İncele
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>Restoran Yönetimi Uygulaması</h3>
                  <p>
                    Restoran işletmeleri için kapsamlı bir yönetim sistemi. Sipariş takibi,
                    stok yönetimi ve müşteri ilişkileri yönetimi özellikleri içerir.
                  </p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/Restoran-Y-netimi-Uygulamas-" target="_blank" rel="noopener noreferrer" className="cta-button">
                      GitHub'da İncele
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>Yapay Zeka Telefon Bankacılığı</h3>
                  <p>
                    Doğal dil işleme ve yapay zeka teknolojileri kullanarak geliştirilen
                    otomatik telefon bankacılığı sistemi.
                  </p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/Yapay-Zeka-Telefon-Bankac-l-" target="_blank" rel="noopener noreferrer" className="cta-button">
                      GitHub'da İncele
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>Görüntü İşleme Projeleri</h3>
                  <p>
                    OpenCV ve Python kullanarak geliştirilen görüntü işleme uygulamaları.
                    Nesne tespiti, yüz tanıma ve görüntü segmentasyonu çalışmaları.
                  </p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/Goruntu-isleme" target="_blank" rel="noopener noreferrer" className="cta-button">
                      GitHub'da İncele
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>Soru Bankası Uygulaması</h3>
                  <p>
                    Öğrenciler için interaktif bir soru bankası ve çalışma platformu.
                    Konu bazlı sorular ve performans takibi özellikleri içerir.
                  </p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/soru-bankas-" target="_blank" rel="noopener noreferrer" className="cta-button">
                      GitHub'da İncele
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>Word Uygulaması</h3>
                  <p>
                    Temel metin düzenleme özellikleri sunan bir word işlemci uygulaması.
                    Dosya işlemleri ve metin formatlama özellikleri içerir.
                  </p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/word-" target="_blank" rel="noopener noreferrer" className="cta-button">
                      GitHub'da İncele
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>İletişim</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="cta-button">Gönder</button>
              </form>
              
              <AnimatePresence>
                {showNotification && (
                  <motion.div
                    className="notification"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                  >
                    Mesajınız başarıyla gönderildi!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Emirhan. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
