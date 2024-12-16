import React from "react";
import Typewriter from "typewriter-effect";

const App = () => (
  <>
    {/* DIV 1*/}
    <div className="h-screen w-full relative">
      <div className="absolute top-0 left-0 w-full flex justify-between items-center py-4 px-32 bg-opacity-60 z-50">
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
      className="bg-[#080E0C] bg-cover bg-center h-screen p-4 flex flex-col"
      style={{ backgroundImage: "url('/images/backgroundLines.png')" }}
    >
      <div className="font-be-vietnam flex flex-col md:flex-row w-full h-1/3 justify-center">
        <div className="md:w-6/12 w-full flex items-center justify-center md:mt-0 mt-32 xl:justify-start px-4 md:px-32 relative">
          <img
            src="/images/circleYellow.png"
            alt="Yellow Circle"
            className="absolute top-20 left-72 w-80 h-80 object-contain z-0"
          />
          <h1 className="text-[#D9FFDE] text-5xl md:text-5xl font-bold text-center md:text-left z-10 xl:mb-0 my-10">
            Yatırımınız <br /> Güvende !
          </h1>
          <img
            src="/images/shinyStar.png"
            alt="Shiny Star"
            className="floating-star absolute -bottom-16 left-72 transform -translate-x-1/2 object-contain z-50"
          />
        </div>
        <div className="md:w-6/12 w-full p-6 md:p-12 relative flex flex-col justify-center">
          <div className="relative">
            <img
              src="/images/greenStar.png"
              alt="Green Star"
              className="floating-star absolute -top-10 -left-10"
            />
            <h6 className="text-5xl lg:text-5xl font-normal text-[#708676] text-center md:text-left">
              8 hafta içinde ödediğiniz <br /> kadar kazanın!
            </h6>
          </div>
          <h6 className="text-4xl mt-5 md:text-4xl font-normal bg-gradient-to-r from-[#97F46A] to-[#0C5E15] text-transparent bg-clip-text text-center md:text-left">
            Kazanamazsanız paranız iade!
          </h6>
        </div>
      </div>
      <div className="w-full h-2/3 justify-evenly relative flex flex-row">
        <div className="flex flex-col gap-12 justify-center h-full relative">
          <div className="flex items-center w-full relative justify-center text-white xl:mt-0 mt-32">
            <img
              src="/images/leftTop.png"
              alt="Left Top"
              className="absolute xl:-top-5 xl:-left-10 w-16 h-16 left-5 -top-5"
            />
            <h4 className="font-smooch-sans whitespace-nowrap text-9xl">
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
            </h4>
            <button className="h-20 w-80 bg-gradient-to-r from-[#7DFF56] to-[#4B9936] rounded-[260px] border-none ml-auto xl:block hidden"></button>
          </div>
          <h6
            className="font-smooch-sans text-6xl relative xl:text-left text-center text-white"
            style={{ letterSpacing: "1rem" }}
          >
            Görevleri tamamla.
            <img
              src="/images/rightDown.png"
              alt="Right Down"
              className="absolute xl:-bottom-6 xl:-right-6 w-16 h-16 right-5 -bottom-4"
            />
          </h6>
        </div>
        <div className="xl:flex hidden items-center justify-center">
          <img src="/images/greenBall.png" alt="green ball" />
        </div>
      </div>
    </div>

    {/* DIV 3*/}
    <div
      className="bg-[#080E0C] bg-cover bg-center h-screen p-4 flex flex-col md:flex-row items-center justify-center font-be-vietnam"
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
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-[#D9FFDE]">
          Hala klasik yöntemlerle <br /> zamanını boşa mı <br /> harcıyorsun?
        </h1>
        <h6 className="relative text-xl md:text-2xl text-[#708A76]">
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
      className="bg-[#080E0C] bg-cover bg-center h-screen p-4 flex flex-col md:flex-row items-center justify-evenly font-be-vietnam relative"
      style={{ backgroundImage: "url('/images/backgroundLines.png')" }}
    >
      <img
        src="/images/orange.png"
        alt="Orange Ball"
        className="spin-slow absolute -top-16 md:top-0 left-2/4 transform -translate-x-1/2 -translate-y-1/2 opacity-100 pointer-events-none"
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
      className="bg-[#080E0C] bg-cover bg-center h-screen font-be-vietnam flex items-center justify-center flex-col relative overflow-hidden"
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
          <Typewriter
            options={{ cursor: "", loop: true, delay: "50" }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Haydi, geleceğe birlikte adım atalım!")
                .pauseFor(5000)
                .start();
            }}
          />
        </span>
      </p>
    </div>

    {/*DIV 6*/}
    <div
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
          src="/images/vector20.png"
          alt="Top vector"
          className="absolute -top-5 w-full z-50 "
        />

        {/* Text content */}
        <div className="relative z-10 h-full flex flex-col justify-center md:items-start items-center pl-12">
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
          src="/images/vector22.png"
          alt="Bottom vector"
          className="absolute -bottom-5 w-full z-50"
        />
      </div>
    </div>
  </>
);

export default App;
