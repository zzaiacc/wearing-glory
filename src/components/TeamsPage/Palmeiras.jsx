import HeaderCountryTeam from "../Headers/HeaderCountryTeam";
import Camisa2023Palmeiras1 from "../../assets/pal2023-1.png";
import Camisa2023Palmeiras2 from "../../assets/pal2023-2.png";
import Camisa2023Palmeiras3 from "../../assets/pal2023-3.png";
import Camisa2022Palmeiras1 from "../../assets/pal2022-1.png";
import Camisa2022Palmeiras2 from "../../assets/pal2022-2.png";
import Camisa2022Palmeiras3 from "../../assets/pal2022-3.png";
import Camisa2021Palmeiras1 from "../../assets/pal2021-1.png";
import Camisa2021Palmeiras2 from "../../assets/pal2021-2.png";
import Camisa2021Palmeiras3 from "../../assets/pal2021-3.png";
import Camisa2020Palmeiras1 from "../../assets/pal2020-1.png";
import Camisa2020Palmeiras2 from "../../assets/pal2020-2.png";
import Camisa2020Palmeiras3 from "../../assets/pal2020-3.png";
import Camisa2018Palmeiras1 from "../../assets/pal2018-1.png";
import Camisa2018Palmeiras2 from "../../assets/pal2018-2.png";
import Camisa2018Palmeiras3 from "../../assets/pal2018-3.png";
import Camisa2015Palmeiras1 from "../../assets/pal2015-1.png";
import Camisa2015Palmeiras2 from "../../assets/pal2015-2.png";
import Camisa2015Palmeiras3 from "../../assets/pal2015-3.png";

import { useState, useEffect } from "react";

//CSS
import "./TeamPage.css";

const Palmeiras = () => {
  const team = "Palmeiras";

  const teamInfo = [
    {
      year: "2023",
      titles: [
        "Campeonato Paulista",
        "Supercopa do Brasil",
      ],
      jerseys: [
        {
          name: "I",
          img: Camisa2023Palmeiras1,
        },
        {
          name: "II",
          img: Camisa2023Palmeiras2,
        },
        {
          name: "III",
          img: Camisa2023Palmeiras3,
        },
      ],
    },
    {
      year: "2022",
      titles: [
        "Campeonato Paulista",
        "Campeonato Brasileiro",
        "Recopa Sulamericana",
      ],
      jerseys: [
        {
          name: "I",
          img: Camisa2022Palmeiras1,
        },
        {
          name: "II",
          img: Camisa2022Palmeiras2,
        },
        {
          name: "III",
          img: Camisa2022Palmeiras3,
        },
      ],
    },

    {
      year: "2021",
      titles: ["Libertadores"],
      jerseys: [
        {
          name: "I",
          img: Camisa2021Palmeiras1,
        },
        {
          name: "II",
          img: Camisa2021Palmeiras2,
        },
        {
          name: "III",
          img: Camisa2021Palmeiras3,
        },
      ],
    },
    {
      year: "2020",
      titles: [
        "Copa do Brasil",
        "Libertadores",
        "Campeonato Paulista",
        "Florida Cup",
      ],
      jerseys: [
        {
          name: "I",
          img: Camisa2020Palmeiras1,
        },
        {
          name: "II",
          img: Camisa2020Palmeiras2,
        },
        {
          name: "III",
          img: Camisa2020Palmeiras3,
        },
      ],
    },
    {
      year: "2018",
      titles: ["Campeonato Brasileiro"],
      jerseys: [
        {
          name: "I",
          img: Camisa2018Palmeiras1,
        },
        {
          name: "II",
          img: Camisa2018Palmeiras2,
        },
        {
          name: "III",
          img: Camisa2018Palmeiras3,
        },
      ],
    },
    {
      year: "2015",
      titles: ["Campeonato Brasileiro"],
      jerseys: [
        {
          name: "I",
          img: Camisa2015Palmeiras1,
        },
        {
          name: "II",
          img: Camisa2015Palmeiras2,
        },
        {
          name: "III",
          img: Camisa2015Palmeiras3,
        },
      ],
    },
  ];

  const [year, setYear] = useState(teamInfo[0].year); // Inicialize com o ano do primeiro item do array
  const [filterTitles, setFilterTitles] = useState(teamInfo[0].titles);

  const handleSelect = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);

    const filteredTeams = teamInfo.find((team) => team.year === selectedYear);
    if (filteredTeams) {
      setFilterTitles(filteredTeams.titles);
    } else {
      setFilterTitles([]);
    }
  };

  useEffect(() => {
    // Chame handleSelect com o ano inicial quando o componente é montado
    handleSelect({ target: { value: teamInfo[0].year } });
  }, []);

  return (
    <>
      <HeaderCountryTeam team={team} />

      <div className="select_container">
        <select name="year" value={year} onChange={handleSelect}>
          {teamInfo.map((y, i) => (
            <option key={i} value={y.year}>
              {y.year}
            </option>
          ))}
        </select>
      </div>
      <div className="team_info_container">
        <h4> Títulos </h4>
        <div className="titles_container">
          {filterTitles.map((title, i) => (
            <div key={i}>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
        <div className="team_jersey_container">
          {teamInfo
            .find((item) => item.year === year)
            .jerseys.map((camisa, i) => (
              <img
                key={i}
                className="team_jersey"
                src={camisa.img}
                alt={`Camisa ${camisa.name} Palmeiras ${year}`}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Palmeiras;
