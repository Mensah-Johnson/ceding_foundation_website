import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Life Skills Development - Ceding Foundation",
  description:
    "Building confidence and essential life skills through mentorship programs",
};

export default function LifeSkills() {
  return (
    <>
      <Header />
      <main>
        <section className="education-hero">
          <div className="hero-content">
            <h1>Life Skills Development</h1>
            <p>
              Building confidence and essential life skills through mentorship
              programs
            </p>
          </div>
        </section>

        <section className="education-overview">
          <div className="container">
            <h2>Our Life Skills Programs</h2>
            <p>
              At Ceding Foundation, we believe in developing well-rounded
              individuals. Our life skills programs focus on building
              confidence, leadership abilities, and practical skills that will
              serve our children throughout their lives.
            </p>

            <div className="education-stats">
              <div className="stat-item">
                <h3>300+</h3>
                <p>Workshop Sessions</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Mentors</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Skills Certificates</p>
              </div>
            </div>
          </div>
        </section>

        <section className="programs-section">
          <div className="container">
            <h2>Our Development Initiatives</h2>
            <div className="programs-grid">
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt="Leadership Training"
                />
                <h3>Leadership Training</h3>
                <p>
                  Developing future leaders through practical experience and
                  guidance.
                </p>
              </div>
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093"
                  alt="Financial Literacy"
                />
                <h3>Financial Literacy</h3>
                <p>
                  Teaching essential money management and financial planning
                  skills.
                </p>
              </div>
              <div className="program-card">
                <img
                  src="https://images.unsplash.com/photo-1552664688-cf412ec27db2"
                  alt="Communication Skills"
                />
                <h3>Communication Skills</h3>
                <p>Enhancing verbal and written communication abilities.</p>
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
