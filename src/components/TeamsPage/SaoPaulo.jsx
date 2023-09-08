import HeaderCountryTeam from "../Headers/HeaderCountryTeam";
import { useState, useEffect } from "react";
import Camisa2021SaoPaulo1 from "../../assets/sp2021-1.png";
import Camisa2021SaoPaulo2 from "../../assets/sp2021-2.png";
import Camisa2021SaoPaulo3 from "../../assets/sp2021-3.png";
//CSS
import "./TeamPage.css";

const SaoPaulo = () => {
  const team = "SaoPaulo";

  const teamInfo = [
    {
      year: "2021",
      titles: ["Campeonto Paulista"],
      jerseys: [
        {
          name: "I",
          img: Camisa2021SaoPaulo1,
        },
        {
          name: "II",
          img: Camisa2021SaoPaulo2,
        },
        {
          name: "III",
          img: Camisa2021SaoPaulo3,
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
                alt={`Camisa ${camisa.name} Sao Paulo ${year}`}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SaoPaulo;
