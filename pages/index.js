import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';

export default function Home() {
  const linksContainerRef = useRef();
  const navbarRef = useRef();
  const topBtnRef = useRef();
  const [showMobileLinks, setShowMobileLinks] = useState({
    show: false,
    linksHeight: '0px',
  });

  useEffect(() => {
    // let navbarHeight = navbar.getBoundingClientRect().height;
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    const height = window.scrollY;
    if (height > navbarRef.current.offsetHeight) {
      navbarRef.current.classList.add('white-navbar');
    } else {
      navbarRef.current.classList.remove('white-navbar');
    }

    if (height > 600) {
      topBtnRef.current.classList.add('show-topbtn');
    } else {
      topBtnRef.current.classList.remove('show-topbtn');
    }
  };

  const linkClickHandler = (e) => {
    e.preventDefault();
    const link = e.target;
    const id = link.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    setShowMobileLinks({ height: '0', show: false });

    window.scrollTo({
      // top: position - navbarRef.current.offsetHeight,
      top:
        position -
        (navbarRef.current.offsetHeight -
          linksContainerRef.current.offsetHeight),
      left: 0,
    });
  };

  return (
    <>
      <nav ref={navbarRef} className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <h2 className="logo">
              Chenna <span>Sreenu</span>
            </h2>
            <button
              className="nav-btn"
              onClick={() => {
                setShowMobileLinks({
                  show: !showMobileLinks.show,
                  linksHeight: `${linksContainerRef.current.offsetHeight}px`,
                });
              }}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            style={{
              height: `${
                !showMobileLinks.show ? '0' : showMobileLinks.linksHeight
              }`,
            }}
            className="links-container"
          >
            <ul ref={linksContainerRef} className="links">
              {['home', 'about', 'services', 'tours'].map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={`#${link}`}
                      onClick={linkClickHandler}
                      className="scroll-link"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <main className="main" id="home">
        <Image
          fill
          src="/main-img.jpg"
          sizes="50vw"
          className="main-bg-img"
        ></Image>
        <div className="bg-overlay"></div>
        <div className="banner">
          <h1>forest roads</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut
            soluta voluptatum laudantium, adipisci nam esse magni pariatur est.
          </h4>
          <a href="#tours" className="white-btn scroll-link">
            explore our tours
          </a>
        </div>
      </main>

      <button ref={topBtnRef} className="top-btn">
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* <!---------------------about------------------------------> */}
      <section className="about section" id="about">
        <h2 className="title tc">
          about <span>us</span>
        </h2>
        <div className="section-center about-center">
          <div className="about-img-container">
            <Image sizes="50vw" fill src="/image-1.jfif" alt="about-image" />
          </div>
          <div className="about-info">
            <h2>explore the difference</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur sunt reiciendis quam asperiores pariatur quo vero rem
              repellat, similique deserunt.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur sunt reiciendis quam asperiores pariatur quo vero rem
              repellat, similique deserunt.
            </p>
            <a href="#tours" className="btn scroll-link">
              read more
            </a>
          </div>
        </div>
      </section>

      {/* <!---------------------services------------------------------> */}
      <section className="section services" id="services">
        <h2 className="title tc">
          our <span>services</span>
        </h2>
        <div className="section-center services-center">
          <article>
            <span className="service-icon">
              <i className="fas fa-wallet"></i>
            </span>
            <div className="serive-info">
              <h3 className="thin">saving money</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                culpa officia voluptatibus
              </p>
            </div>
          </article>
          <article>
            <span className="service-icon">
              <i className="fas fa-tree"></i>
            </span>
            <div className="serive-info">
              <h3 className="thin">endless hiking</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                culpa officia voluptatibus
              </p>
            </div>
          </article>
          <article>
            <span className="service-icon">
              <i className="fas fa-socks"></i>
            </span>
            <div className="serive-info">
              <h3 className="thin">amazing effort</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                culpa officia voluptatibus
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* <!---------------------tours------------------------------> */}
      <section className="section tours" id="tours">
        <h2 className="title tc">
          featured <span>tours</span>
        </h2>
        <div className="section-center tours-center">
          <article>
            <div className="tour-img-container">
              <Image sizes="50vw" fill src="/nature-1.jfif" />
              <span className="date">August 14th, 2019</span>
            </div>
            <div className="tour-info">
              <h3 className="thin mb-2">tibet adevnture</h3>
              <div>
                <span className="country">
                  <i className="fas fa-map"></i>china
                </span>
                <span>
                  6 days <br />
                  from $2100
                </span>
              </div>
            </div>
          </article>

          <article>
            <div className="tour-img-container">
              <Image fill sizes="50vw" src="/nature-2.jfif" alt="tour-image" />
              <span className="date">August 14th, 2019</span>
            </div>
            <div className="tour-info">
              <h3 className="thin mb-2">best of java</h3>
              <div>
                <span className="country">
                  <i className="fas fa-map"></i>indonesia
                </span>
                <span>
                  6 days <br />
                  from $2100
                </span>
              </div>
            </div>
          </article>

          <article>
            <div className="tour-img-container">
              <Image fill sizes="50vw" src="/nature-3.jfif" alt="tour-img" />
              <span className="date">August 14th, 2019</span>
            </div>
            <div className="tour-info">
              <h3 className="thin mb-2">Explore the hongkong</h3>
              <div>
                <span className="country">
                  <i className="fas fa-map"></i>hongkong
                </span>
                <span>
                  6 days <br />
                  from $2100
                </span>
              </div>
            </div>
          </article>

          <article>
            <div className="tour-img-container">
              <Image fill sizes="50vw" src="/nature-4.jfif" alt="tour-img" />
              <span className="date">August 14th, 2019</span>
            </div>
            <div className="tour-info">
              <h3 className="thin mb-2">Kenya highlights</h3>
              <div>
                <span className="country">
                  <i className="fas fa-map"></i>kenya
                </span>
                <span>
                  6 days <br />
                  from $2100
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section gallery">
        <h2 className="title tc">
          our <span>gallery</span>
        </h2>
        <div className="gallery-center">
          <article>
            <Image
              fill
              sizes="50vw"
              className="gallery-img"
              src="/nature-1.jfif"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </article>
          <article>
            <Image
              fill
              sizes="50vw"
              className="gallery-img"
              src="/nature-2.jfif"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </article>
          <article>
            <Image
              fill
              sizes="50vw"
              className="gallery-img"
              src="/nature-3.jfif"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </article>
          <article>
            <Image
              fill
              sizes="50vw"
              className="gallery-img"
              src="/nature-4.jfif"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </article>
          <article>
            <Image
              fill
              sizes="50vw"
              className="gallery-img"
              src="/nature-1.jfif"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </article>
          <article>
            <Image
              fill
              sizes="50vw"
              className="gallery-img"
              src="/nature-3.jfif"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </article>
        </div>
      </section>
      <footer className="section">
        <p className="mb-0 section-center">
          copy &copy; <span id="date"></span>, Chenna Sreenu all rights reserved
        </p>
      </footer>
    </>
  );
}
