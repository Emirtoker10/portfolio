import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { BiCode } from 'react-icons/bi'
import { AiOutlineRobot } from 'react-icons/ai'
import { MdLanguage } from 'react-icons/md'
import './styles/global.scss'

// Dil çevirileri
const translations = {
  tr: {
    home: "Ana Sayfa",
    about: "Ben Kimim?",
    skills: "Neler Yapabilirim?",
    portfolio: "Portfolyo",
    contact: "İletişim",
    hello: "Merhaba, ben",
    profession: "Yapay Zeka Geliştiricisi",
    description: "Yapay zeka teknolojileri üzerinde çalışıyor, geleceğin akıllı sistemlerini geliştiriyorum. Modern çözümler ve yenilikçi yaklaşımlarla yapay zeka projelerini hayata geçiriyorum.",
    viewProjects: "Projelerimi Gör",
    contactMe: "İletişime Geç",
    aboutTitle: "Ben Kimim?",
    aboutText1: "Merhaba! Ben Emirhan Toker, bilgisayar mühendisliği öğrencisiyim. Yapay zeka alanında çalışmalar yapıyor, özellikle makine öğrenmesi, derin öğrenme ve görüntü işleme konularında kendimi geliştiriyorum.",
    aboutText2: "Şu anda bir İHA (İnsansız Hava Aracı) takımında yazılım sorumlusu olarak görev yapıyorum. Bu rolde, takımın yazılım geliştirme süreçlerini yönetiyor ve yapay zeka teknolojilerini İHA sistemlerine entegre ediyorum.",
    aboutText3: "Sürekli öğrenmeye ve yeni teknolojileri keşfetmeye olan tutkumla, her projede en iyi sonucu elde etmeyi hedefliyorum. Yapay zeka ve robotik sistemlerin geleceğin teknolojilerini şekillendireceğine inanıyorum.",
    copyright: "© 2024 Emirhan. Tüm hakları saklıdır.",
    viewOnGithub: "GitHub'da İncele",
    projectTitles: {
      dataProcessing: "Veri İşleme ve Makine Öğrenmesi",
      restaurant: "Restoran Yönetimi Uygulaması",
      aiBank: "Yapay Zeka Telefon Bankacılığı",
      imageProcessing: "Görüntü İşleme Projeleri",
      questionBank: "Soru Bankası Uygulaması",
      wordApp: "Word Uygulaması"
    },
    projectDescriptions: {
      dataProcessing: "Python ile veri analizi, pandas, numpy ve scikit-learn kullanarak makine öğrenmesi modelleri geliştirme çalışmaları. Lineer regresyon, karar ağaçları ve derin öğrenme uygulamaları içerir.",
      restaurant: "Restoran işletmeleri için kapsamlı bir yönetim sistemi. Sipariş takibi, stok yönetimi ve müşteri ilişkileri yönetimi özellikleri içerir.",
      aiBank: "Doğal dil işleme ve yapay zeka teknolojileri kullanarak geliştirilen otomatik telefon bankacılığı sistemi.",
      imageProcessing: "OpenCV ve Python kullanarak geliştirilen görüntü işleme uygulamaları. Nesne tespiti, yüz tanıma ve görüntü segmentasyonu çalışmaları.",
      questionBank: "Öğrenciler için interaktif bir soru bankası ve çalışma platformu. Konu bazlı sorular ve performans takibi özellikleri içerir.",
      wordApp: "Temel metin düzenleme özellikleri sunan bir word işlemci uygulaması. Dosya işlemleri ve metin formatlama özellikleri içerir."
    },
    formLabels: {
      name: "Ad Soyad",
      email: "E-posta",
      message: "Mesaj",
      send: "Gönder"
    },
    messageSent: "Mesajınız başarıyla gönderildi!"
  },
  en: {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    hello: "Hello, I'm",
    profession: "AI Developer",
    description: "I work on artificial intelligence technologies, developing intelligent systems of the future. I bring AI projects to life with modern solutions and innovative approaches.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    aboutTitle: "About Me",
    aboutText1: "Hello! I'm Emirhan Toker, a computer engineering student. I work in the field of artificial intelligence, developing myself especially in machine learning, deep learning, and image processing.",
    aboutText2: "I currently serve as the software lead in a UAV (Unmanned Aerial Vehicle) team. In this role, I manage the team's software development processes and integrate AI technologies into UAV systems.",
    aboutText3: "With my passion for continuous learning and exploring new technologies, I aim to achieve the best results in every project. I believe that AI and robotic systems will shape the technologies of the future.",
    copyright: "© 2024 Emirhan. All rights reserved.",
    viewOnGithub: "View on GitHub",
    projectTitles: {
      dataProcessing: "Data Processing and Machine Learning",
      restaurant: "Restaurant Management System",
      aiBank: "AI Phone Banking System",
      imageProcessing: "Image Processing Projects",
      questionBank: "Question Bank Application",
      wordApp: "Word Processing Application"
    },
    projectDescriptions: {
      dataProcessing: "Machine learning model development using Python with pandas, numpy, and scikit-learn. Includes linear regression, decision trees, and deep learning applications.",
      restaurant: "A comprehensive management system for restaurants. Features order tracking, inventory management, and customer relationship management.",
      aiBank: "An automated phone banking system developed using natural language processing and AI technologies.",
      imageProcessing: "Image processing applications developed using OpenCV and Python. Includes object detection, face recognition, and image segmentation studies.",
      questionBank: "An interactive question bank and study platform for students. Features topic-based questions and performance tracking.",
      wordApp: "A word processor application offering basic text editing features. Includes file operations and text formatting capabilities."
    },
    formLabels: {
      name: "Full Name",
      email: "Email",
      message: "Message",
      send: "Send"
    },
    messageSent: "Your message has been sent successfully!"
  }
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#0a0a0a",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: ["#00ff88", "#00ffcc", "#00f0ff"],
      },
      links: {
        color: "#00ff88",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.05,
        },
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2,
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
        random: {
          enable: true,
        },
      },
    },
    detectRetina: true,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: ["grab", "bubble"],
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.3,
          opacity: 0.8,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const t = translations[language]; // Aktif dildeki çevirileri al

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

  useEffect(() => {
    // Particles.js konfigürasyonu
    const particlesJS = window.particlesJS;
    if (particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#00ff88'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff88',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div className="app">
      <div id="particles-js" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#0a0a0a'
      }}></div>
      
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
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t.home}</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t.about}</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>{t.skills}</a></li>
            <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>{t.portfolio}</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t.contact}</a></li>
            <li>
              <button onClick={toggleLanguage} className="language-button">
                <MdLanguage /> {language.toUpperCase()}
              </button>
            </li>
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
                <BiCode className="code-icon" /> {t.hello}
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
                <h2 className="profession">{t.profession}</h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="hero-description"
              >
                {t.description}
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
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=e.toker4504@gmail.com&su=İletişim&body=Merhaba%20Emirhan%2C%0D%0A%0D%0AMesajınız:%0D%0A%0D%0A" target="_blank" rel="noopener noreferrer" className="social-link" title="Gmail ile Gönder">
                  <FaEnvelope />
                </a>
              </motion.div>
              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <a href="#portfolio" className="cta-button">{t.viewProjects}</a>
                <a href="#contact" className="cta-button secondary">{t.contactMe}</a>
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
              <h2>{t.aboutTitle}</h2>
              <div className="card">
                <p>
                  {t.aboutText1}
                </p>
                <p>
                  {t.aboutText2}
                </p>
                <p>
                  {t.aboutText3}
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
              <h2>{t.skills}</h2>
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
              <h2>{t.portfolio}</h2>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div className="card">
                  <h3>{t.projectTitles.dataProcessing}</h3>
                  <p>{t.projectDescriptions.dataProcessing}</p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/Veri_Isleme" target="_blank" rel="noopener noreferrer" className="cta-button">
                      {t.viewOnGithub}
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>{t.projectTitles.restaurant}</h3>
                  <p>{t.projectDescriptions.restaurant}</p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/Restoran-Y-netimi-Uygulamas-" target="_blank" rel="noopener noreferrer" className="cta-button">
                      {t.viewOnGithub}
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>{t.projectTitles.aiBank}</h3>
                  <p>{t.projectDescriptions.aiBank}</p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/Yapay-Zeka-Telefon-Bankac-l-" target="_blank" rel="noopener noreferrer" className="cta-button">
                      {t.viewOnGithub}
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>{t.projectTitles.imageProcessing}</h3>
                  <p>{t.projectDescriptions.imageProcessing}</p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/Goruntu-isleme" target="_blank" rel="noopener noreferrer" className="cta-button">
                      {t.viewOnGithub}
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>{t.projectTitles.questionBank}</h3>
                  <p>{t.projectDescriptions.questionBank}</p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/soru-bankas-" target="_blank" rel="noopener noreferrer" className="cta-button">
                      {t.viewOnGithub}
                    </a>
                  </div>
                </div>

                <div className="card">
                  <h3>{t.projectTitles.wordApp}</h3>
                  <p>{t.projectDescriptions.wordApp}</p>
                  <div className="project-links">
                    <a href="https://github.com/Emirtoker10/word-" target="_blank" rel="noopener noreferrer" className="cta-button">
                      {t.viewOnGithub}
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
              <h2>{t.contact}</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.formLabels.name}</label>
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
                  <label htmlFor="email">{t.formLabels.email}</label>
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
                  <label htmlFor="message">{t.formLabels.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="cta-button">{t.formLabels.send}</button>
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
                    {t.messageSent}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {t.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
