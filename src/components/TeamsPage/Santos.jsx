import HeaderCountryTeam from "../Headers/HeaderCountryTeam";
import { useState, useEffect } from "react";
import Camisa2016Santos1 from "../../assets/san2016-1.png";
import Camisa2016Santos2 from "../../assets/san2016-2.png";
import Camisa2016Santos3 from "../../assets/san2016-3.png";
//CSS
import "./TeamPage.css";

const Santos = () => {
  const team = "Santos";

  const teamInfo = [
    {
      year: "2016",
      titles: ["Campeonto Paulista"],
      jerseys: [
        {
          name: "I",
          img: Camisa2016Santos1,
        },
        {
          name: "II",
          img: Camisa2016Santos2,
        },
        {
          name: "III",
          img: Camisa2016Santos3,
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

      <div style={{ backgroundColor: "white", height: "100vh" }}>
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

          {/*//* Titulos */}
          <h4 style={{ color: "black" }}> Títulos </h4>  
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
      </div>
    </>
  );
};

export default Santos;
