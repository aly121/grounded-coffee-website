
import { useEffect, useState } from "react";
import "./App.css";

const slides = [
  {
    eyebrow: "A PLACE TO SLOW DOWN",
    title: <>Good coffee.<br />Better <em>moments.</em></>,
    description:
      "Thoughtfully brewed coffee, beautiful spaces, and little moments worth remembering.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2200&q=85",
    label: "The coffee house",
    number: "01",
  },
  {
    eyebrow: "CRAFTED WITH PASSION",
    title: <>Your daily<br /><em>ritual.</em></>,
    description:
      "From the first crack of the beans to your final sip, every detail matters.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2200&q=85",
    label: "The perfect pour",
    number: "02",
  },
  {
    eyebrow: "MADE FOR YOUR MOMENTS",
    title: <>Stay for<br />the <em>feeling.</em></>,
    description:
      "Come for the coffee. Stay for the conversations, the comfort, and the company.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2200&q=85",
    label: "Your happy place",
    number: "03",
  },
];


const menuItems = [
  // COFFEE
  {
    id: 1,
    name: "Signature Iced Latte",
    category: "Coffee",
    price: 28000,
    description: "Smooth espresso blended with fresh milk over ice.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    category: "Coffee",
    price: 32000,
    description: "Rich espresso, silky milk, and sweet caramel drizzle.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=85",
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Classic Americano",
    category: "Coffee",
    price: 22000,
    description: "Bold espresso balanced with hot water.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 4,
    name: "Cappuccino",
    category: "Coffee",
    price: 28000,
    description: "A classic espresso with velvety steamed milk and foam.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 5,
    name: "Vanilla Cold Brew",
    category: "Coffee",
    price: 30000,
    description: "Slow-steeped coffee with a delicate vanilla finish.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85",
    tag: "MUST TRY",
  },
  {
    id: 6,
    name: "Mocha Delight",
    category: "Coffee",
    price: 32000,
    description: "Espresso and chocolate come together in a creamy blend.",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },

  // NON-COFFEE
  {
    id: 7,
    name: "Matcha Cloud",
    category: "Non-Coffee",
    price: 32000,
    description: "Earthy Japanese-style matcha with creamy milk.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85",
    tag: "POPULAR",
  },
  {
    id: 8,
    name: "Chocolate Bliss",
    category: "Non-Coffee",
    price: 28000,
    description: "A rich chocolate drink for your sweetest moments.",
    image: "https://images.unsplash.com/photo-1641759756615-1523c931c5d4?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 9,
    name: "Strawberry Milk",
    category: "Non-Coffee",
    price: 27000,
    description: "Fresh, fruity strawberry flavor with chilled milk.",
    image: "https://images.unsplash.com/photo-1629174113399-14e5709f5e8f?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 10,
    name: "Iced Lemon Tea",
    category: "Non-Coffee",
    price: 22000,
    description: "Refreshing black tea with a bright citrus twist.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 11,
    name: "Mango Smoothie",
    category: "Non-Coffee",
    price: 30000,
    description: "A tropical blend of sweet mango and creamy goodness.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=85",
    tag: "FRESH",
  },
  {
    id: 12,
    name: "Honey Milk",
    category: "Non-Coffee",
    price: 25000,
    description: "Comforting milk sweetened with golden honey.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },

  // FOOD
  {
    id: 13,
    name: "Butter Croissant",
    category: "Food",
    price: 22000,
    description: "Flaky, golden pastry baked to buttery perfection.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
    tag: "FRESHLY BAKED",
  },
  {
    id: 14,
    name: "Classic Pancakes",
    category: "Food",
    price: 35000,
    description: "Fluffy pancakes served with syrup and butter.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 15,
    name: "Avocado Toast",
    category: "Food",
    price: 38000,
    description: "Creamy avocado on toasted artisan bread.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85",
    tag: "LIGHT BITE",
  },
  {
    id: 16,
    name: "Classic Club Sandwich",
    category: "Food",
    price: 42000,
    description: "A hearty sandwich with fresh vegetables and savory fillings.",
    image: "https://images.unsplash.com/photo-1469648034646-7911874fe62b?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 17,
    name: "Chocolate Brownie",
    category: "Food",
    price: 25000,
    description: "A fudgy chocolate brownie with a rich cocoa finish.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85",
    tag: "SWEET TREAT",
  },
  {
    id: 18,
    name: "Blueberry Cheesecake",
    category: "Food",
    price: 35000,
    description: "Creamy cheesecake topped with sweet blueberry sauce.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
];


const categories = ["All", "Coffee", "Non-Coffee", "Food"];
const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transform: direction === "left" ? "rotate(180deg)" : undefined,
      }}
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const slide = slides[activeSlide];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  function changeSlide(direction) {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length
    );
  }

  function handleContactSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !message.trim()) {
      setFormStatus("Please complete all fields.");
      return;
    }

    const subject = encodeURIComponent("Coffee Shop Website Inquiry");
    const body = encodeURIComponent(
      `Email: ${email}\n\nMessage:\n${message}`
    );

    setFormStatus("Opening your email application...");

    window.location.href =
      `mailto:hello@yourcoffeehouse.com?subject=${subject}&body=${body}`;
  }

  function orderItem(item) {
    const phone = "6281234567890";
    const text = encodeURIComponent(
      `Hello! I would like to order ${item.name} (${item.price}). Please share the available options.`
    );

    window.open(
      `https://wa.me/${phone}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>GOOD COFFEE. GOOD COMPANY.</span>
        <span className="announcement-right">
          YOUR NEW FAVORITE CORNER <span>✳</span>
        </span>
      </div>

      <header className="navbar">
        
        <a href="#home" className="brand">
          <span className="brand-icon">
            <img src="/favicon.svg" alt="" />
          </span>

          <span className="brand-text">
            <strong>GROUNDED</strong>
            <small>COFFEE & COMPANY</small>
          </span>
        </a>


        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Our Menu</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <a
            className="nav-cta"
            href="#menu"
            onClick={() => setMenuOpen(false)}
          >
            Find Your Coffee <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div
            className="hero-background"
            key={slide.image}
            style={{ backgroundImage: `url("${slide.image}")` }}
          />
          <div className="hero-overlay" />
          
          <div className="hero-progress-track">
            <div
              key={activeSlide}
              className="hero-progress-fill"
            />
          </div>

          <div className="hero-index">
            <span>EXPERIENCE</span>
            <strong>0{activeSlide + 1}</strong>
            <span className="hero-index-divider">/</span>
            <span>03</span>
          </div>

          <div className="hero-orbit" aria-hidden="true">
            <span>GOOD COFFEE</span>
            <span className="orbit-star">✳</span>
            <span>GOOD COMPANY</span>
          </div>


          <div className="hero-content" key={slide.number}>
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              {slide.eyebrow}
            </div>

            <h1 className="hero-title">{slide.title}</h1>

            <p className="hero-description">{slide.description}</p>

            <div className="hero-actions">
              <a href="#menu" className="button button-light">
                Explore Our Menu <ArrowIcon />
              </a>
              <a href="#story" className="hero-text-link">
                Get to know us <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="slide-controls">
              <button
                onClick={() => changeSlide(-1)}
                aria-label="Previous slide"
                className="slide-arrow"
              >
                <ArrowIcon direction="left" />
              </button>

              <div className="slide-indicators">
                {slides.map((item, index) => (
                  <button
                    key={item.number}
                    className={
                      index === activeSlide
                        ? "slide-indicator active"
                        : "slide-indicator"
                    }
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeSlide ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                onClick={() => changeSlide(1)}
                aria-label="Next slide"
                className="slide-arrow"
              >
                <ArrowIcon />
              </button>
            </div>

            <div className="slide-caption">
              <span>{slide.number} / 03</span>
              <span>{slide.label}</span>
            </div>

            <a href="#story" className="scroll-cue">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </div>

          <div className="hero-side-note">BREWED WITH INTENTION · EST. 2020</div>
        </section>

        <section className="intro section-pad">
          <div className="intro-label reveal">
            <span className="section-kicker">MORE THAN A COFFEE SHOP</span>
            <span className="tiny-star">✳</span>
          </div>

          <div className="intro-copy reveal">
            <h2>
              Life moves fast.
              <br />
              <span>Let’s make room</span>
              <br />
              for the good stuff.
            </h2>
            <div className="intro-bottom">
              <p>
                A little pause can change your whole day. We bring together
                honest coffee, thoughtful details, and spaces that make
                you want to stay a little longer.
              </p>
              <a href="#story" className="circle-link" aria-label="Discover our story">
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="intro-stamp" aria-hidden="true">
            <span>GOOD DAYS START HERE</span>
            <strong>g.</strong>
            <span>COFFEE · COMMUNITY · CARE</span>
          </div>
        </section>

        <section className="story section-pad" id="story">
          <div className="story-grid">
            <div className="story-visual reveal">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1100&q=85"
                alt="Freshly prepared coffee in a welcoming coffee shop"
                loading="lazy"
              />
              <div className="image-note">
                <span>01 — THE BEGINNING</span>
                <span>A SLOWER KIND OF EVERYDAY</span>
              </div>
              <div className="floating-note">
                <span>OUR KIND OF</span>
                <strong>Everyday<br />magic.</strong>
                <span>MADE WITH CARE ♡</span>
              </div>
            </div>

            <div className="story-content reveal">
              <span className="section-kicker">A LITTLE ABOUT US</span>
              <h2>
                Rooted in
                <br />
                <em>good things.</em>
              </h2>
              <p>
                Grounded started with a simple thought: coffee should feel
                like more than a caffeine fix. It should be a reason to
                reconnect, get inspired, or simply take a breath.
              </p>
              <p>
                We care about the little things — carefully selected beans,
                considered brewing, warm hospitality, and an atmosphere that
                feels like your own corner of the world.
              </p>
              <a href="#contact" className="underlined-link">
                COME SAY HELLO <ArrowIcon />
              </a>

              <div className="story-stats">
                <div>
                  <strong>01</strong>
                  <span>GOOD CUP<br />AT A TIME</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>MADE WITH<br />INTENTION</span>
                </div>
                <div>
                  <strong>∞</strong>
                  <span>ROOM FOR<br />GOOD MOMENTS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Our philosophy">
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index}>
                SLOW MORNINGS <b>✳</b> BETTER COFFEE <b>✳</b> GOOD COMPANY <b>✳</b>
              </span>
            ))}
          </div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="menu-heading reveal">
            <div>
              <span className="section-kicker">A FEW OF OUR FAVORITES</span>
              <h2>
                Made to be
                <br />
                <em>sipped slowly.</em>
              </h2>
            </div>
            <p>
              From your first morning coffee to that afternoon pick-me-up,
              there’s always something worth coming back for.
            </p>
          </div>

          <div className="menu-toolbar reveal">
            <div className="category-filters" aria-label="Filter menu">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "category-button selected"
                      : "category-button"
                  }
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="menu-count">
              {String(filteredItems.length).padStart(2, "0")} ITEMS
            </span>
          </div>

          <div className="menu-grid">
            {filteredItems.map((item, index) => (
              <article
                className="menu-card reveal"
                key={item.id}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="menu-image-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="menu-tag">{item.tag}</span>
                  <button
                    className="menu-order-button"
                    onClick={() => orderItem(item)}
                    aria-label={`Order ${item.name} on WhatsApp`}
                  >
                    <ArrowIcon />
                  </button>
                </div>

                <div className="menu-card-info">
                  <div>
                    <span className="menu-card-category">{item.category}</span>
                    <h3>{item.name}</h3>
                  </div>
                  <span className="menu-price">{formatPrice(item.price)}
</span>
                </div>

                <p className="menu-description">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="menu-footer reveal">
            <p>GOOD THINGS TASTE EVEN BETTER TOGETHER.</p>
            <a href="#contact" className="button button-dark">
              Visit Our Coffee House <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="experience">
          <div className="experience-image">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1800&q=85"
              alt="A warm, inviting coffee shop interior"
              loading="lazy"
            />
          </div>
          <div className="experience-overlay" />
          <div className="experience-content reveal">
            <span className="section-kicker">YOUR SPACE, YOUR PACE</span>
            <h2>
              Come as
              <br />
              you <em>are.</em>
            </h2>
            <p>
              For the big ideas, the small talks, the long afternoons,
              and the moments in between.
            </p>
            <a href="#contact" className="button button-light">
              Find Your Way Here <ArrowIcon />
            </a>
          </div>
          <span className="experience-coordinate">A LITTLE PLACE TO CALL YOURS.</span>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-heading reveal">
            <span className="section-kicker">WE’D LOVE TO SEE YOU</span>
            <h2>
              Your table
              <br />
              <em>is waiting.</em>
            </h2>
            <p>
              Have a question, a collaboration idea, or just want to say hi?
              Our inbox is always open.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-details reveal">
              <div className="contact-detail">
                <span className="contact-number">01 / FIND US</span>
                <h3>Our Coffee House</h3>
                <p>123 Your Street, Your City<br />Indonesia</p>
                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underlined-link"
                >
                  GET DIRECTIONS <span>↗</span>
                </a>
              </div>

              <div className="contact-detail">
                <span className="contact-number">02 / DROP BY</span>
                <h3>Opening Hours</h3>
                <p>Monday – Sunday<br />08:00 AM – 10:00 PM</p>
              </div>

              <div className="contact-detail">
                <span className="contact-number">03 / SAY HELLO</span>
                <h3>Stay in Touch</h3>
                <p>hello@yourcoffeehouse.com<br />+62 812 3456 7890</p>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underlined-link"
                >
                  FOLLOW OUR JOURNEY <span>↗</span>
                </a>
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={handleContactSubmit}>
              <span className="section-kicker">SEND US A LITTLE NOTE</span>

              <label htmlFor="contact-email">Your email address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label htmlFor="contact-message">What’s on your mind?</label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder="Tell us a little something..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />

              <button className="button button-dark form-submit" type="submit">
                Send Your Message <ArrowIcon />
              </button>

              {formStatus && (
                <p className="form-status" role="status">{formStatus}</p>
              )}

              <p className="form-note">
                Your message will open in your default email application.
              </p>
            </form>
          </div>
        </section>
        
        {/* WEB DEVELOPMENT CTA SECTION */}
        <section className="web-cta-section" id="work-with-me">
          <div className="web-cta-decoration web-cta-decoration-one" />
          <div className="web-cta-decoration web-cta-decoration-two" />

          <div className="web-cta-content">
            <span className="web-cta-eyebrow">
              <span className="web-cta-dot" />
              WEB DESIGN & DIGITAL SOLUTIONS
            </span>

            <h2>
              Your business,
              <br />
              <span>online.</span> Your way.
            </h2>

            <p className="web-cta-description">
              We build modern websites that help businesses showcase
              their products, connect with customers, and grow online.
              Let's create something meaningful together.
            </p>

            <div className="web-cta-actions">
              <a
                href="#projects"
                className="web-cta-button web-cta-button-primary"
              >
                Explore My Work
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://wa.me/6281234567890?text=Hello%2C%20I%27m%20interested%20in%20creating%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="web-cta-button web-cta-button-secondary"
              >
                Discuss Your Project
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="web-cta-divider" />

            <div className="web-cta-features">
              <div className="web-cta-feature">
                <span className="web-cta-feature-icon">↗</span>
                <div>
                  <strong>Modern Design</strong>
                  <span>Made for your brand</span>
                </div>
              </div>

              <div className="web-cta-feature">
                <span className="web-cta-feature-icon">◎</span>
                <div>
                  <strong>Mobile Friendly</strong>
                  <span>Works on every screen</span>
                </div>
              </div>

              <div className="web-cta-feature">
                <span className="web-cta-feature-icon">✳</span>
                <div>
                  <strong>Business Focused</strong>
                  <span>Built with purpose</span>
                </div>
              </div>
            </div>
          </div>

          <div className="web-cta-side-note" aria-hidden="true">
            LET'S BUILD SOMETHING GREAT
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand">
            <span className="brand-symbol">g.</span>
            <span className="brand-name">
              GROUNDED
              <small>COFFEE & COMPANY</small>
            </span>
          </a>

          <p>Good coffee, good people, good things.</p>

          <a href="#home" className="back-to-top">
            BACK TO TOP ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GROUNDED COFFEE & COMPANY.</span>
          <span>MADE WITH CARE, SERVED WITH LOVE.</span>
          <a href="#contact">SAY HELLO ↗</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
