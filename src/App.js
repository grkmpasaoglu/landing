import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

// Constants
const cards = [
  {
    id: 1,
    title: "NFT Nedir?",
    videoSrc: "/videos/LAND1.mp4",
    description:
      "NFT, dijital sanat ve koleksiyon ürünlerinin alınıp satılmasına olanak tanır.",
  },
  {
    id: 2,
    title: "Token Nedir?",
    videoSrc: "/videos/LAND3.mp4",
    description:
      "Token, bir blockchain ağında değer taşır ve dijital varlıkları temsil eder.",
  },
  {
    id: 3,
    title: "Coin Nedir?",
    videoSrc: "/videos/LAND4.mp4",
    description:
      "Coin, dijital para birimleri olup, genellikle bir blockchain üzerinde işlem yapar.",
  },
  {
    id: 4,
    title: "Blockchain Nedir?",
    videoSrc: "/videos/LAND5.mp4",
    description:
      "Blockchain, merkezi olmayan, şeffaf ve güvenli bir dijital defter sistemidir.",
  },
  {
    id: 5,
    title: "Akıllı Kontrat Nedir?",
    videoSrc: "/videos/LAND6.mp4",
    description:
      "Akıllı kontratlar, blok zincirinde otomatik olarak yürütülen dijital anlaşmalardır.",
  },
  {
    id: 6,
    title: "DeFi Nedir?",
    videoSrc: "/videos/LAND10.mp4",
    description:
      "DeFi, finansal hizmetlerin merkeziyetsiz bir şekilde sunulmasını sağlayan bir platformdur.",
  },
  {
    id: 7,
    title: "Metaverse Nedir?",
    videoSrc: "/videos/money.mp4",
    description:
      "Metaverse, sanal dünyalarda insanların etkileşimde bulunduğu dijital bir evrendir.",
  },
  {
    id: 8,
    title: "Kripto Madenciliği Nedir?",
    videoSrc: "/videos/LAND11.mp4",
    description:
      "Kripto madenciliği, dijital para birimlerini üretmek ve işlemleri doğrulamak için yapılan bir işlemdir.",
  },
];

const App = () => {
  // Refs
  const sliderRef = useRef(null);
  const videoRefs = useRef({});
  const sectionRef = useRef(null);
  const topVectorRef = useRef(null);
  const bottomVectorRef = useRef(null);
  const leftTopRef = useRef(null);
  const rightDownRef = useRef(null);
  const vector13Ref = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div5Ref = useRef(null);
  const div7Ref = useRef(null);
  const div8Ref = useRef(null);

  // States
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [activeTypewriters, setActiveTypewriters] = useState({
    div2: false,
    div3: false,
    div5: false,
    div7: false,
  });
  const [paragraphAnimations, setParagraphAnimations] = useState({
    paragraph1: false,
    paragraph2: false,
    paragraph3: false,
  });

  // Effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    if (!isPaused) {
      scrollInterval = setInterval(() => {
        if (slider) {
          slider.scrollLeft += 2;
          if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
          }
        }
      }, 20);
    }

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  useEffect(() => {
    const observers = [];
    const divRefs = [
      { ref: div2Ref, key: "div2" },
      { ref: div3Ref, key: "div3" },
      { ref: div5Ref, key: "div5" },
      { ref: div7Ref, key: "div7" },
      { ref: div8Ref, key: "div8" },
    ];

    const createObserver = (ref, key) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (key.startsWith("div")) {
                setActiveTypewriters((prev) => ({ ...prev, [key]: true }));
              }

              if (key === "div8") {
                setTimeout(
                  () =>
                    setParagraphAnimations((prev) => ({
                      ...prev,
                      paragraph1: true,
                    })),
                  300
                );
                setTimeout(
                  () =>
                    setParagraphAnimations((prev) => ({
                      ...prev,
                      paragraph2: true,
                    })),
                  600
                );
                setTimeout(
                  () =>
                    setParagraphAnimations((prev) => ({
                      ...prev,
                      paragraph3: true,
                    })),
                  900
                );
              }
            } else {
              if (key.startsWith("div")) {
                setActiveTypewriters((prev) => ({ ...prev, [key]: false }));
              }

              if (key === "div8") {
                setParagraphAnimations({
                  paragraph1: false,
                  paragraph2: false,
                  paragraph3: false,
                });
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    divRefs.forEach(({ ref, key }) => {
      const observer = createObserver(ref, key);
      observers.push({ observer, ref: ref.current });
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibility = entry.intersectionRatio;
        setOpacity(1 - visibility);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    if (div7Ref.current) {
      observer.observe(div7Ref.current);
    }

    return () => {
      if (div7Ref.current) {
        observer.unobserve(div7Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      if (div1Ref.current) {
        const div1Bounds = div1Ref.current.getBoundingClientRect();
        if (div1Bounds.top === 0) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  // Event Handlers
  const handleModalOpen = (description, title) => {
    setModalDescription(description);
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleCardMouseEnter = (cardId) => {
    setHoveredCard(cardId);
    const videoRef = videoRefs.current[cardId];
    if (videoRef) {
      videoRef.play();
    }
  };

  const handleCardMouseLeave = (cardId) => {
    setHoveredCard(null);
    const videoRef = videoRefs.current[cardId];
    if (videoRef) {
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  };

  const handleExploreClick = () => {
    if (div2Ref.current) {
      div2Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* DIV 1*/}
      <div className="h-screen w-full relative">
        <div className="absolute top-0 left-0 w-full flex justify-between items-center py-4 md:px-32 px-4 bg-opacity-60 z-50">
          <img src="/images/nftconnectiologo.png" alt="Logo" className="h-20" />
          <div className="text-white font-semibold flex space-x-12">
            <span>
              <img src="/images/twitter.png" alt="Logo" className="h-8" />
            </span>
            <span>
              <img src="/images/discord.png" alt="Logo" className="h-8" />
            </span>
          </div>
        </div>

        <video
          src="/videos/LAND1.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Button */}
        <button
          onClick={handleExploreClick}
          className="absolute w-32 bottom-16 left-1/2 transform -translate-x-1/2 p-4 transition-all duration-300 hover:bottom-16 bg-gradient-to-r from-[#A1F96F] to-[#18B124] text-white font-semibold rounded-[10px] border-none cursor-pointer"
          style={{
            borderRadius: "0px 10px 0px 10px",
          }}
        >
          Keşfet
        </button>
      </div>

      {/* DIV 2*/}
      <div
        ref={div2Ref}
        className="bg-[#080E0C] bg-cover bg-center h-screen p-4 flex flex-col"
        style={{ backgroundImage: "url('/images/backgroundLines.png')" }}
      >
        <div className="font-be-vietnam flex flex-col md:flex-row w-full h-1/3 justify-center">
          <div className="md:w-6/12 w-full flex items-center justify-center md:mt-0 mt-16 xl:justify-start px-4 md:px-32 relative">
            <img
              src="/images/circleYellow.png"
              alt="Yellow Circle"
              className="absolute md:top-20 md:left-72 top-10 left-10 w-40 h-40 md:w-80 md:h-80 object-contain z-0"
            />
            <h1 className="text-[#D9FFDE] text-3xl md:text-5xl font-bold text-center md:text-left z-10 xl:mb-0 my-6">
              Yatırımınız <br /> Güvende!
            </h1>
            <img
              src="/images/shinyStar.png"
              alt="Shiny Star"
              className="floating-star absolute -bottom-8 md:-bottom-16 left-20 md:left-72 transform -translate-x-1/2 object-contain z-50"
            />
          </div>
          <div className="md:w-6/12 w-full p-4 md:p-12 relative flex flex-col justify-center">
            <div className="relative">
              <img
                src="/images/greenStar.png"
                alt="Green Star"
                className="floating-star absolute -top-6 -left-6 md:-top-10 md:-left-10"
              />
              <h6 className="text-3xl lg:text-5xl font-normal text-[#708676] text-center md:text-left">
                8 hafta içinde ödediğiniz <br /> kadar kazanın!
              </h6>
            </div>
            <h6 className="text-2xl mt-3 md:text-4xl font-normal bg-gradient-to-r from-[#97F46A] to-[#0C5E15] text-transparent bg-clip-text text-center md:text-left">
              Kazanamazsanız paranız iade!
            </h6>
          </div>
        </div>
        <div className="w-full h-2/3 justify-evenly relative flex flex-col md:flex-row">
          <div className="flex flex-col gap-6 md:gap-12 justify-center h-full relative items-center md:items-start">
            <div className="flex items-center w-full relative justify-center text-white">
              <img
                src="/images/leftTop.png"
                alt="Left Top"
                className="absolute md:xl:-top-5 md:xl:-left-10 w-10 h-10 md:w-16 md:h-16 left-5 -top-5"
              />
              <h4 className="font-smooch-sans whitespace-nowrap text-6xl md:text-9xl">
                {activeTypewriters.div2 && (
                  <Typewriter
                    options={{ loop: true }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Öğren")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Başar")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Kazan")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                )}
              </h4>
              <button className="h-12 w-48 md:h-20 md:w-56 bg-gradient-to-r from-[#7DFF56] to-[#4B9936] rounded-[260px] border-none ml-auto xl:block hidden"></button>
            </div>
            <h6
              className="font-smooch-sans text-4xl md:text-6xl relative xl:text-left text-center text-white"
              style={{ letterSpacing: "0.5rem" }}
            >
              Görevleri tamamla.
              <img
                src="/images/rightDown.png"
                alt="Right Down"
                className="absolute xl:-bottom-6 xl:-right-6 w-10 h-10 md:w-16 md:h-16 -right-8 -bottom-3"
              />
            </h6>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/greenBall.png"
              alt="Green Ball"
              className="w-40 h-40 md:w-auto md:h-auto"
            />
          </div>
        </div>
      </div>

      {/* DIV 3*/}
      <div
        ref={div3Ref}
        className="bg-[#091310] bg-cover bg-center h-screen p-4 flex flex-col md:flex-row items-center justify-center font-be-vietnam"
        style={{ backgroundImage: "url('/images/backgroundLines.png')" }}
      >
        {/* Left Section (Video and Background Combination) */}
        <div className="h-full md:w-7/12 w-full p-4 flex justify-center items-center">
          <div
            className="w-10/12 h-5/6 relative border-[2rem]"
            style={{
              borderColor: "rgba(11, 24, 18, 0.5)", // Opaklık azaltıldı (0.5)
              borderTopLeftRadius: "40px", // Sol üst köşe radius
              borderBottomRightRadius: "40px", // Sağ alt köşe radius
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center z-10 pointer-events-none"
              style={{
                backgroundImage: "url('/images/backgroundLines.png')",
                opacity: 1,
              }}
            ></div>
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              src="/videos/LAND3.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        {/* Right Section (Text Content) */}
        <div className="relative h-4/5 md:w-5/12 w-full md:pr-24 flex flex-col justify-center text-center md:text-right gap-y-6">
          <h1 className="text-3xl md:text-5xl pb-1.5 font-bold bg-gradient-to-r from-[#A2FA72] to-[#13AF23] text-transparent bg-clip-text">
            {activeTypewriters.div3 && (
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Dijital Çağdayız")
                    .pauseFor(5000)
                    .deleteAll()
                    .start();
                }}
              />
            )}
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-[#D9FFDE]">
            Hala klasik yöntemlerle <br /> zamanını boşa mı <br /> harcıyorsun?
          </h1>
          <h6 className="relative text-xl md:text-2xl text-[#708A76] z-50">
            Eğlenerek kazananlar topluluğuna katıl <br />
            finansal geleceğini bugünden inşa et!
            <img
              src="/images/circleYellow.png"
              alt="Background Circle"
              className="absolute left-[-10px] md:left-[-20px] top-10 md:top-12 opacity-75 pointer-events-none hidden lg:block"
            />
          </h6>
        </div>
      </div>

      {/* DIV 4*/}
      <div
        className="bg-[#091310] bg-cover bg-center h-screen p-4 flex flex-col md:flex-row items-center justify-evenly font-be-vietnam relative"
        style={{ backgroundImage: "url('/images/backgroundLines.png')" }}
      >
        <img
          src="/images/orange.png"
          alt="Orange Ball"
          className="spin-slow absolute -top-16 md:top-0 md:left-2/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 opacity-100 pointer-events-none"
        />

        <h1 className="font-bold text-5xl bg-gradient-to-r from-[#97F46A] to-[#0C5E15] text-transparent bg-clip-text md:text-left text-center md:mr-8">
          Finansal <br />
          özgürlük bi' <br />
          tık <br />
          uzağınızda!
        </h1>

        <div className="md:w-1/2 w-full mt-4 md:mt-0">
          <video
            className="w-full h-auto rounded-lg shadow-lg"
            src="/videos/LAND4.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <img
          src="/images/orange.png"
          alt="Orange Ball"
          className="spin-slowR absolute -bottom-24 right-3/4 opacity-100 pointer-events-none z-50"
        />
      </div>

      {/*DIV 5*/}
      <div
        ref={div5Ref}
        className="bg-[#091310] bg-cover bg-center h-screen font-be-vietnam flex items-center justify-center flex-col relative overflow-hidden"
        style={{ backgroundImage: "url('/images/backgroundLines.png')" }}
      >
        <img
          src="/images/bounce.png"
          alt="Pink Bounce"
          className="floating-star absolute top-32 right-4 md:right-44 z-0 max-w-[30%]"
        />

        <img
          src="/images/pinkbounce.png"
          alt="Bounce"
          className="floating-starThree absolute bottom-44 right-4 md:bottom-32 md:right-44 z-0 max-w-[30%]"
        />

        <img
          src="/images/bounce.png"
          alt="Pink Bounce"
          className="floating-starTwo absolute bottom-16 left-4 md:bottom-48 md:left-32 z-0 max-w-[30%] transform rotate-180"
        />

        <p className="text-2xl md:text-5xl text-[#D9FFDE] text-justify w-3/5 leading-normal relative z-10">
          NFT, kripto para ve oyunlarla kazanç sağlamak için hiç deneyiminiz
          olmasa bile başlayabilirsiniz.
          <span className="italic">
            {activeTypewriters.div5 && (
              <Typewriter
                options={{ cursor: "", loop: true, delay: "50" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Haydi, geleceğe birlikte adım atalım!")
                    .pauseFor(5000)
                    .start();
                }}
              />
            )}
          </span>
        </p>
      </div>

      {/*DIV 6*/}
      <div
        ref={sectionRef}
        className="bg-[#080E0C] bg-cover bg-center h-screen p-12 flex flex-col md:flex-row items-center justify-evenly font-be-vietnam relative"
        style={{ backgroundImage: "url('/images/crossBackground.png')" }}
      >
        {/* Left Column - Video */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <video
            src="/videos/LAND5.mp4"
            autoPlay
            loop
            muted
            className="max-w-full max-h-full object-cover"
          />
        </div>

        {/* Right Column - Text */}
        <div className="w-full md:mb-0 mb-32 md:w-1/2 text-white text-center md:text-left px-4 relative h-96 flex flex-col items-center md:items-start justify-center md:block">
          {/* Top vector image */}
          <img
            ref={topVectorRef}
            src="/images/vector20.png"
            alt="Top vector"
            className={`absolute transition-all duration-700 ease-out 
            ${
              isVisible ? "top-0 opacity-100" : "-top-96 opacity-0"
            } w-full z-50`}
          />

          {/* Text content */}
          <div className="relative z-10 h-full flex flex-col justify-center md:items-start items-center md:pl-12">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-[#D9FFDE]">
              Yapay Zeka Çağına <br /> Hoş Geldiniz!
            </h1>
            <h6 className="text-base md:text-lg lg:text-xl opacity-80 text-[#708676]">
              NFT, kripto para ve oyunlarla yapay zekayı gelir <br /> kaynağına
              dönüştürmeyi öğrenin. <br />
              Akıllı yöntemlerle kazanmaya başlayın ve geleceğe <br /> bir adım
              önde olun!
            </h6>
          </div>

          {/* Bottom vector image */}
          <img
            ref={bottomVectorRef}
            src="/images/vector22.png"
            alt="Bottom vector"
            className={`absolute transition-all duration-700 ease-out 
            ${
              isVisible ? "bottom-0 opacity-100" : "-bottom-96 opacity-0"
            } w-full z-50`}
          />
        </div>
      </div>

      {/*DIV 7*/}
      <div
        ref={div7Ref}
        className="relative bg-black bg-cover bg-center min-h-screen font-be-vietnam flex flex-col md:flex-row justify-center items-center"
        style={{
          backgroundImage: "url('/images/starsBg.png')",
        }}
      >
        {/* Background Overlay with reduced opacity */}
        <div
          className="absolute inset-0 bg-black z-0"
          style={{ opacity }} // Opaklık değeri 1'den 0'a doğru azalacak
        ></div>
        {/* Mobile Image - Shown on top for mobile, hidden on desktop */}
        <div className="md:hidden w-full flex items-center justify-center py-8">
          <img
            alt="hole"
            src="/images/holeimg.png"
            className="md:max-w-[80%] md:max-h-[50vh] max-w-[40%] object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full md:w-7/12 px-6 md:px-24 py-12 md:py-24 text-center md:text-justify flex flex-col justify-center">
          <h1 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-[#97F46A] to-[#0C5E15] text-transparent bg-clip-text md:text-left text-center md:mr-8 pb-2 mb-4 md:mb-7">
            Bilgisayarı açmayı <br /> bilmiyor olmanız bile önemli <br /> değil;
          </h1>

          <h6 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 text-[#D9FFDE] px-4 md:px-0">
            yapay zeka eşliğinde kazananlardan olacaksınız! Sıfırdan zirveye
            taşıyacak videolu eğitimlerle blockchain teknolojisini A'dan Z'ye
            öğrenirken her ders sonunda ödüller kazanacak ve uygulamalı
            alıştırmalarla bilginizi topluluğunuzla birlikte geliştireceksiniz.
          </h6>

          <h1 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-[#97F46A] to-[#0C5E15] text-transparent bg-clip-text md:text-left text-center md:mr-8 pb-2 mb-4 md:mb-7">
            {activeTypewriters.div7 && (
              <Typewriter
                options={{ delay: 40 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "  Unutmayın: <br /> Nereye gideceğinizi bilmiyorsanız, hangi yoluseçtiğinizin bir önemi yoktur."
                    )
                    .start();
                }}
              />
            )}
          </h1>
        </div>

        <div className="hidden md:flex md:w-5/12 h-full items-center justify-center">
          <img
            alt="hole"
            src="/images/holeimg.png"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/*DIV 8*/}
      <div
        ref={div8Ref}
        className="bg-[#080E0C] bg-cover bg-center h-screen font-be-vietnam flex items-center justify-center flex-row relative overflow-hidden px-12"
        style={{ backgroundImage: "url('/images/backgroundLines.png')" }}
      >
        <div className="w-full md:w-6/12 h-full p-6 md:p-12 flex flex-col gap-y-6 justify-center text-[#8FB098]">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#D2FDD8]">
            Sıfırdan zirveye... <br /> Öğren, geliş, kazan!
          </h1>
          <p
            className={`p-4 text-lg md:text-lg border-2 rounded-tl-2xl rounded-br-2xl bg-[#10241B] border-[#40C639]
              transition-all duration-700 ease-out transform
              ${
                paragraphAnimations.paragraph1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
          >
            Yapay zeka çağıyla birçok meslek yok olmaya yüz tutarken, <br />
            finansal geleceğiniz için sizi yenilikçi bir <br /> sistemle
            tanıştırıyoruz.
          </p>
          <p
            className={`p-4 text-lg md:text-lg border-2 rounded-tl-2xl rounded-br-2xl bg-[#10241B] border-[#40C639]
              transition-all duration-700 ease-out transform
              ${
                paragraphAnimations.paragraph2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
          >
            Beyaz tavşanı takip edin !
          </p>
          <p
            className={`p-4 text-lg md:text-lg border-2 rounded-tl-2xl rounded-br-2xl bg-[#10241B] border-[#40C639]
              transition-all duration-700 ease-out transform
              ${
                paragraphAnimations.paragraph3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
          >
            Yeni dünyaya birlikte adım atalım.
          </p>
        </div>

        {/* Rest of the div remains the same */}
        <div className="w-7/12 h-full md:flex items-center justify-center relative hidden">
          <div
            className="w-7/12 h-4/6 relative"
            style={{
              backgroundImage: "url('/images/bordergroup.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <video
              src="/videos/LAND6.mp4"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover rounded-lg shadow-lg p-8"
              autoPlay
              loop
              muted
            ></video>

            <img
              src="/images/star2.png"
              className="absolute top-0 left-0 spin-slow"
              alt="Shiny Star"
            />

            <img
              src="/images/star2.png"
              className="absolute bottom-0 right-0 spin-slowR"
              alt="Shiny Star"
            />
          </div>
        </div>
      </div>

      {/*DIV 9*/}
      <div className="flex justify-center items-center w-full h-48 overflow-hidden bg-black">
        <video
          src="/videos/money.mp4"
          autoPlay
          muted
          loop
          className="object-center object-cover w-72 h-72"
        />
      </div>

      {/*DIV 10*/}
      <div
        ref={sectionRef}
        className="bg-[#080E0C] bg-cover bg-center h-screen font-be-vietnam flex items-center justify-center flex-col relative overflow-hidden"
        style={{ backgroundImage: "url('/images/crossBackground.png')" }}
      >
        <div className="w-full h-2/5 flex flex-col lg:flex-row justify-evenly items-center px-8">
          <div className="flex flex-col justify-center w-2/5 relative">
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-center lg:text-left font-bold mb-4 text-[#D9FFDE]">
              Yolculuğa <br /> başla !
            </h1>
            <h6 className="text-base md:text-lg lg:text-xl text-center lg:text-left opacity-80 text-[#708676]">
              Haydi, adım at! <br />
              Bilginle kazanç sağlama zamanı.
            </h6>

            {/* Top Left Image */}
            <img
              ref={leftTopRef}
              src="/images/leftTop.png"
              alt="Left Top"
              className={`absolute transition-all duration-700 ease-out
              ${
                isVisible
                  ? "-top-2 -left-10 lg:-top-5 lg:-left-12 opacity-100"
                  : "-top-96 -left-96 lg:-top-0 lg:-left-96 opacity-0"
              } w-10 h-10 md:w-16 md:h-16`}
            />

            {/* Bottom Right Image */}
            <img
              ref={rightDownRef}
              style={{ marginRight: isVisible ? "330px" : "0px" }}
              src="/images/rightDown.png"
              alt="Right Down"
              className={`absolute transition-all duration-700 ease-out
    ${
      isVisible
        ? "-bottom-0  lg:-bottom-6 lg:-right-16 -right-96 opacity-100"
        : "bottom-0 right-96 lg:-bottom-6 lg:-right-32 opacity-0"
    } w-10 h-10 md:w-16 md:h-16`}
            />

            {/* Vector 13 Image */}
            <img
              ref={vector13Ref}
              src="/images/vector13.png"
              alt="Vector 13"
              className={`absolute transition-all duration-700 ease-out hidden lg:block
              ${
                isVisible
                  ? "-bottom-12 -left-12 opacity-100"
                  : "-bottom-96 -left-12 opacity-0"
              } w-8/12`}
            />
          </div>

          <div className="w-1/5 hidden lg:block"></div>

          <div className="h-48 w-48">
            <img
              src="https://i.gifer.com/origin/b9/b9341a7cdc9dabd29d5e29e0065a0a90_w200.gif"
              alt="diamond"
            />
          </div>
        </div>

        <div className="w-full h-2/5 mt-16 lg:mt-32">
          <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
            <div
              ref={sliderRef}
              id="card-slider"
              className="flex gap-6 w-full h-full overflow-x-auto no-scrollbar"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="w-[280px] h-[300px] bg-[#0D1714] flex-shrink-0 border-2 p-2 border-[#246A25] rounded-tl-lg rounded-br-lg"
                  onMouseEnter={() => handleCardMouseEnter(card.id)}
                  onMouseLeave={() => handleCardMouseLeave(card.id)}
                >
                  <div className="w-full h-[200px] bg-gray-200 overflow-hidden mb-4">
                    <video
                      ref={(el) => (videoRefs.current[card.id] = el)}
                      className="w-full h-full object-cover"
                      src={card.videoSrc}
                      muted
                      loop
                    />
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <h3 className="text-sm font-bold text-white">
                      {card.title}
                    </h3>
                    <button
                      onClick={() =>
                        handleModalOpen(card.description, card.title)
                      }
                      className="bg-gradient-to-r from-[#A1F96F] to-[#18B124] cursor-pointer px-6 py-2 rounded-tl-lg rounded-br-lg whitespace-nowrap"
                    >
                      Devamını oku
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {modalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 lg:flex-row flex-col gap-4"
            onClick={handleModalClose}
          >
            <div
              className=" text-white flex flex-col justify-between bg-gradient-to-b from-[#0CAB1B] to-[#A1EB74] p-4 rounded-lg w-72 h-[22rem]"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="mt-4 text-center rounded-lg bg-[#248A24] p-2 h-64">
                {modalDescription}
              </p>
              <h3 className="text-lg font-bold text-center">{modalTitle}</h3>
            </div>

            <div
              className=" text-white flex flex-col justify-between bg-[#248A24] p-6 w-72 h-40 bg-opacity-40 border-4 border-opacity-35 border-cyan-300"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-extrabold text-center">
                HEMEN KAYIT OL!
              </h3>
              <p className="mt-4 text-center text-lg p-1 h-64">
                Derslere katıl, tüm bilgilere sahip ol!
              </p>
            </div>
          </div>
        )}
      </div>

      {/*DIV 11*/}
      <div
        className="bg-[#080E0C] bg-cover bg-center font-be-vietnam flex items-center justify-center flex-row relative overflow-hidden px-12"
        style={{ backgroundImage: "url('/images/crossBackground.png')" }}
      >
        {" "}
        <img src="/images/nftconnectiologo.png" alt="logo" className="lg:h-80" />
      </div>
    </>
  );
};

export default App;
