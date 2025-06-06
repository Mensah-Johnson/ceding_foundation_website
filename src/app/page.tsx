import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="text-4xl font-bold pb-3 text-center leading-tight">
              We Live to Serve and We Serve to Live
            </h1>
            <p>
              Empowering orphaned children, the old age, sick and less
              privileged people through love, education, and support since 2020
            </p>
            <a href="#about" className="cta-button">
              Learn More
            </a>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <h2 className="text-2xl font-bold pb-3">Our Story</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Ceding Foundation was established on September 20th, 2020 and
                  officially registered with the Ghana Registrar General's
                  Authority on October 10th, 2021. Founded by Mr. Godfred Akwasi
                  Frimpong and Mr. Johnson Mensah, who serve as President and
                  Vice President respectively, our organization is guided by the
                  motto "We live to serve and we serve to live." This reflects
                  our core mission of serving communities through charitable
                  giving and public education on social responsibility.
                </p>
                <p>
                Since our inception, we have undertaken several impactful initiatives that reflect our dedication to creating positive change. These include community outreach programs in the streets of Kejetia, an educational tour, our official foundation launch event, and recent donations aimed at supporting widows within our community. Each of these activities underscores our unwavering commitment to making a meaningful and lasting difference in the lives of those we serve.
                </p>
                <p>
                  Our enduring mission is to nurture and empower young lives,
                  helping them develop into confident, capable individuals who
                  will become catalysts for positive change in their
                  communities. Through education, support, and guidance, we aim
                  to create lasting impact that spans generations.
                </p>
              </div>
              <div className="stats-container">
                <div className="stat-item">
                  <h3>1000+</h3>
                  <p>Children Supported</p>
                </div>
                <div className="stat-item">
                  <h3>5</h3>
                  <p>Years of Service</p>
                </div>
                <div className="stat-item">
                  <h3>20+</h3>
                  <p>Partner Organizations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="container">
            <h2 className="text-2xl font-bold pb-3">Our Impact</h2>
            <div className="impact-stories">
              <div className="impact-card">
                <img
                  src="./impacts/image_1.jpg"
                  alt="Education Support"
                />
                <h3>Education Support</h3>
                <p>
                  Providing quality education and learning resources to help
                  children build their future.
                  <Link href="/education" className="learn-more">
                    Learn More
                  </Link>
                </p>
              </div>
              <div className="impact-card">
                <img
                  src="impacts/image_2.jpg"
                  alt="Healthcare Access"
                />
                <h3>Healthcare Access</h3>
                <p>
                  Ensuring comprehensive healthcare and medical support for
                  every child.
                  <Link href="/healthcare" className="learn-more">
                    Learn More
                  </Link>
                </p>
              </div>
              <div className="impact-card">
                <img
                  src="/impacts/image_3.jpg"
                  alt="Life Skills Development"
                />
                <h3>Life Skills Development</h3>
                <p>
                  Building confidence and essential life skills through
                  mentorship programs.
                  <Link href="/life-skills" className="learn-more">
                    Learn More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="text-2xl font-bold pb-3">Get in Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>KUMASI MAMPONTENG</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <p>+233 545256587/ +233 554508594</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <p>cedingfoundation@gmail.com</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
