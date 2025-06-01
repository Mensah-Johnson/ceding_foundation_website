"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Leadership() {
  const leaders = useQuery(api.leaders.getLeaders);

  if (leaders === undefined) {
    return (
      <>
        <Header />
        <main>
          <section className="leadership-hero">
            <div className="hero-content">
              <h1 className="text-4xl font-bold pb-3 text-center leading-tight">
                Our Leadership Team
              </h1>
              <p>Meet the dedicated individuals guiding our mission forward</p>
            </div>
          </section>
          <section className="leadership-section">
            <div className="container">
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="leadership-hero">
          <div className="hero-content">
            <h1>Our Leadership Team</h1>
            <p>Meet the dedicated individuals guiding our mission forward</p>
          </div>
        </section>

        <section className="leadership-section">
          <div className="container">
            <h2 className="text-2xl font-bold pb-3">Executive Board</h2>
            <div className="leadership-grid">
              {leaders.map((leader) => (
                <div key={leader._id} className="leader-card">
                  <img src={leader.image} alt={leader.name} />
                  <div className="leader-info">
                    <h3>{leader.name}</h3>
                    <p className="position">{leader.position}</p>
                    <p className="bio">{leader.bio}</p>
                    <div className="social-links">
                      {/* {leader.socialLinks?.linkedin && (
                        <a
                          href={leader.socialLinks.linkedin}
                          aria-label="LinkedIn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      )} */}
                      {/* {leader.socialLinks?.twitter && (
                        <a
                          href={leader.socialLinks.twitter}
                          aria-label="Twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      )} */}
                      {leader.socialLinks?.facebook && (
                        <a
                          href={leader.socialLinks.facebook}
                          aria-label="Facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                      )}
                      {leader.socialLinks?.instagram && (
                        <a
                          href={leader.socialLinks.instagram}
                          aria-label="Instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
