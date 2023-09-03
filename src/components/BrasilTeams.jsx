import HeaderCountry from "./Headers/HeaderCountry";

//CSS
import "./BrasilTeams.css";

//IMGs
import CorinthiansLogo from "../assets/corinthians.png";
import PalmeirasLogo from "../assets/palmeiras.png";
import SantosLogo from "../assets/santos.png";
import SaoPauloLogo from "../assets/saoPaulo.png";
import VascoLogo from "../assets/vasco.png";
import AtleticoMgLogo from "../assets/atleticoMg.png";
import AthleticoPrLogo from "../assets/athleticoPr.png";
import BotafogoLogo from "../assets/botafogo.png";
import CruzeiroLogo from "../assets/cruzeiro.png";
import FlamengoLogo from "../assets/flamengo.png";
import GremioLogo from "../assets/gremio.png";
import FluminenseLogo from "../assets/fluminense.png";
import SportLogo from "../assets/sport.png";
import InternacionalLogo from "../assets/internacional.png";
import BahiaLogo from "../assets/bahia.png";

const BrasilTeams = () => {
  const brTeams = [
    {
      id: 1,
      path: "/athletico-pr",
      name: "Athletico Paranaense",
      img: AthleticoPrLogo,
      alt: "Logo do Athletico Paranaense",
    },
    {
      id: 2,
      path: "/corinthians",
      name: "Corinthians",
      img: CorinthiansLogo,
      alt: "Logo do Corinthians",
    },
    {
      id: 3,
      path: "/cruzeiro",
      name: "Cruzeiro",
      img: CruzeiroLogo,
      alt: "Logo do Cruzeiro",
    },
    {
      id: 4,
      path: "/flamengo",
      name: "Flamengo",
      img: FlamengoLogo,
      alt: "Logo do Flamengo",
    },
    {
      id: 5,
      path: "/fluminense",
      name: "Fluminense",
      img: FluminenseLogo,
      alt: "Logo do Fluminense",
    },
    {
      id: 6,
      path: "/gremio",
      name: "Grêmio",
      img: GremioLogo,
      alt: "Logo do Grêmio",
    },
    {
      id: 7,
      path: "/internacional",
      name: "Internacional",
      img: InternacionalLogo,
      alt: "Logo do Internacional",
    },
    {
      id: 8,
      path: "/brasil/palmeiras",
      name: "Palmeiras",
      img: PalmeirasLogo,
      alt: "Logo do Palmeiras",
    },
    {
      id: 9,
      path: "/santos",
      name: "Santos",
      img: SantosLogo,
      alt: "Logo do Santos",
    },
    {
      id: 10,
      path: "/saopaulo",
      name: "São Paulo",
      img: SaoPauloLogo,
      alt: "Logo do São Paulo",
    },
    {
      id: 11,
      path: "/sport",
      name: "Sport",
      img: SportLogo,
      alt: "Logo do Sport",
    },
    {
      id: 12,
      path: "/vasco",
      name: "Vasco da Gama",
      img: VascoLogo,
      alt: "Logo do Vasco da Gama",
    },
    {
      id: 13,
      path: "/atleticomg",
      name: "Atlético Mineiro",
      img: AtleticoMgLogo,
      alt: "Logo do Atlético Mineiro",
    },
    {
      id: 14,
      path: "/botafogo",
      name: "Botafogo",
      img: BotafogoLogo,
      alt: "Logo do Botafogo",
    },
    {
      id: 15,
      path: "/bahia",
      name: "Bahia",
      img: BahiaLogo,
      alt: "Logo do Bahia",
    },
  ];

  return (
    <>
      <HeaderCountry />
      <div className="mainPage_container">
        <div className="teams_wrapper teams_grid">
          {brTeams.map(({ id, alt, img, name, path }) => {
            return (
              <a href={path} key={id}>
                <article className="teams_container">
                  <img src={img} alt={alt} className="teams_logos" />
                  <h3 className="team_name"> {name} </h3>
                </article>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BrasilTeams;
