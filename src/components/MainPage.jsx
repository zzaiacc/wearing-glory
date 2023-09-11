//? Components
import Header from "./Headers/Header";

//?IMGs
import CorinthiansLogo from "../assets/corinthians.png";
import PalmeirasLogo from "../assets/palmeiras.png";
import SantosLogo from "../assets/santos.png";
import SaoPauloLogo from "../assets/saoPaulo.png";
import VascoLogo from "../assets/vasco.png";
import ArsenalLogo from "../assets/arsenal.png";
import ManchesterUnitedLogo from "../assets/manUnited.png";
import ManchesterCityLogo from "../assets/manCity.png";
import ChelseaLogo from "../assets/chelsea.png";
import LiverpoolLogo from "../assets/liverpool.png";
import RealMadridLogo from "../assets/realMadrid.png";
import BarcelonaLogo from "../assets/barcelona.png";
import ValenciaLogo from "../assets/valencia.png";
import AtleticoMadridLogo from "../assets/atleticoMadrid.png";
import AthleticBilbaoLogo from "../assets/athleticBilbao.png";
//? Styles
import "./MainPage.css";

const MainPage = () => {
  const countries = ["Brasil", "England", "España"];

  const brTeams = [
    {
      id: 1,
      path: "/brasil/palmeiras",
      img: PalmeirasLogo,
      name: "Palmeiras",
      alt: "LogoPalmeiras",
    },
    {
      id: 2,
      img: VascoLogo,
      path: "/brasil/vasco",
      name: "Vasco",
      alt: "LogoVasco",
    },
    {
      id: 3,
      path: "/brasil/santos",
      img: SantosLogo,
      name: "Santos",
      alt: "LogoSantos",
    },
    {
      id: 4,
      path: "/brasil/saoPaulo",
      img: SaoPauloLogo,
      name: "São Paulo",
      alt: "LogoSaoPaulo",
    },
    {
      id: 5,
      path: "/brasil/corinthians",
      img: CorinthiansLogo,
      name: "Corinthians",
      alt: "LogoCoritnhians",
    },
  ];
  const espTeams = [
    {
      id: 16,
      path: "/realMadrid",
      img: RealMadridLogo,
      name: "Real Madrid",
      alt: "LogoRealMadrid",
    },
    {
      id: 17,
      path: "/barcelona",
      img: BarcelonaLogo,
      name: "Barcelona",
      alt: "LogoBarcelona",
    },
    {
      id: 18,
      path: "/alteticoMadrid",
      img: AtleticoMadridLogo,
      name: "Atlético Madrid",
      alt: "LogoAtleticoMadrid",
    },
    {
      id: 19,
      path: "/athleticBilbao",
      img: AthleticBilbaoLogo,
      name: "Athletic Bilbao",
      alt: "LogoAthleticBilbao",
    },
    {
      id: 20,
      path: "/valencia",
      img: ValenciaLogo,
      name: "Valencia",
      alt: "LogoValencia",
    },
  ];
  const engTeams = [
    {
      id: 31,
      path: "/manUnited",
      img: ManchesterUnitedLogo,
      name: "United",
      alt: "LogoMachesterUnited",
    },
    {
      id: 32,
      path: "/manCity",
      img: ManchesterCityLogo,
      name: "City",
      alt: "LogoManchesterCity",
    },
    {
      id: 33,
      path: "/chelsea",
      img: ChelseaLogo,
      name: "Chelsea",
      alt: "LogoChelsea",
    },
    {
      id: 34,
      path: "/liverpool",
      img: LiverpoolLogo,
      name: "Liverpool",
      alt: "LogoLiverpool",
    },
    {
      id: 35,
      path: "/arsenal",
      img: ArsenalLogo,
      name: "Arsenal",
      alt: "LogoArsenal",
    },
  ];

  return (
    <>
      <Header />
      {/* main page */}
      <div className="mainPage_container">
        <div>
          <div className="teams_text">
            <a href="/brasil">
              <h3 className="br_colors"> {countries[0]} </h3>
            </a>
            <h3> VER MAIS...</h3>
          </div>
          <div className="teams_wrapper">
            {brTeams.map(({ id, img, name, alt, path }) => {
              return (
                <a href={path} key={id}>
                  <article className="teams_container">
                    <img src={img} alt={alt} className="teams_logos" />
                    <h3 className="teams_names">{name}</h3>
                  </article>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mainPage_container">
        <div>
          <div className="teams_text">
            <h3 className="eng_colors"> {countries[1]} </h3>
            <h3 className="eng_colors"> MORE...</h3>
          </div>
          <div className="teams_wrapper">
            {engTeams.map(({ id, img, name, alt, path }) => {
              return (
                <a href={path} key={id}>
                  <article className="teams_container">
                    <img src={img} alt={alt} className="teams_logos" />
                    <h3 className="teams_names">{name}</h3>
                  </article>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mainPage_container">
        <div>
          <div className="teams_text">
            <h3> {countries[2]} </h3>
            <h3> VER MAIS...</h3>
          </div>
          <div className="teams_wrapper">
            {espTeams.map(({ id, img, name, alt, path }) => {
              return (
                <a href={path} key={id}>
                  <article className="teams_container">
                    <img src={img} alt={alt} className="teams_logos" />
                    <h3 className="teams_names">{name}</h3>
                  </article>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
