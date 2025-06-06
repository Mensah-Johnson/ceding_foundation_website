import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Educational Support - Ceding Foundation",
  description: "Empowering futures through quality education and resources",
};

export default function Education() {
  return (
    <>
      <Header />
      <main>
        <section className="education-hero">
          <div className="hero-content">
            <h1>Educational Support Programs</h1>
            <p>Empowering futures through quality education and resources</p>
          </div>
        </section>

        <section className="education-overview">
          <div className="container">
            <h2>Our Educational Initiatives</h2>
            <div className="education-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Students Supported</p>
              </div>
              <div className="stat-item">
                <h3>15</h3>
                <p>Partner Schools</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Completion Rate</p>
              </div>
            </div>
          </div>
        </section>

        <section className="programs-section">
          <div className="container">
            <h2>Our Programs</h2>
            <div className="programs-grid">
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                  alt="School Supplies Program"
                />
                <h3>School Supplies Program</h3>
                <p>
                  Providing essential educational materials to students in need,
                  including textbooks, notebooks, and stationery.
                </p>
              </div>
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                  alt="Scholarship Program"
                />
                <h3>Scholarship Program</h3>
                <p>
                  Offering full and partial scholarships to promising students
                  from underprivileged backgrounds.
                </p>
              </div>
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Mentorship Program"
                />
                <h3>Mentorship Program</h3>
                <p>
                  Connecting students with experienced mentors to guide their
                  academic and personal development.
                </p>
              </div>
            </div>
          </div>
        </section>

     
        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Get in Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>WAB,22,WADIE ADWUMAKASE,NEAR METHODIST CHURCH,KUMASI,Kwabre East,ASHANTI,Ghana</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <p>+233 545256587/ +233 554508596</p>
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
