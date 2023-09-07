import HeaderCountryTeam from "../Headers/HeaderCountryTeam";
import { useState, useEffect } from "react";
import Camisa2021Vasco1 from "../../assets/vasc2021-1.png";
import Camisa2021Vasco2 from "../../assets/vasc2021-2.png";
import Camisa2021Vasco3 from "../../assets/vasc2021-3.png";
import Camisa2019Vasco1 from "../../assets/vasc2019-1.png";
import Camisa2019Vasco2 from "../../assets/vasc2019-2.png";
import Camisa2019Vasco3 from "../../assets/vasc2019-3.png";
import Camisa2017Vasco1 from "../../assets/vasc2017-1.png";
import Camisa2017Vasco2 from "../../assets/vasc2017-2.png";
import Camisa2017Vasco3 from "../../assets/vasc2017-3.png";
import Camisa2016Vasco1 from "../../assets/vasc2016-1.png";
import Camisa2016Vasco2 from "../../assets/vasc2016-2.png";
import Camisa2016Vasco3 from "../../assets/vasc2016-3.png";

//CSS
import "./TeamPage.css";

const Vasco = () => {
  const team = "Vasco";

  const teamInfo = [
    {
      year: "2021",
      titles: ["Taça Rio"],
      jerseys: [
        {
          name: "I",
          img: Camisa2021Vasco1,
        },
        {
          name: "II",
          img: Camisa2021Vasco2,
        },
        {
          name: "III",
          img: Camisa2021Vasco3,
        },
      ],
    },
    {
      year: "2019",
      titles: ["Taça Guanabara"],
      jerseys: [
        {
          name: "I",
          img: Camisa2019Vasco1,
        },
        {
          name: "II",
          img: Camisa2019Vasco2,
        },
        {
          name: "III",
          img: Camisa2019Vasco3,
        },
      ],
    },
    {
      year: "2017",
      titles: ["Taça Rio"],
      jerseys: [
        {
          name: "I",
          img: Camisa2017Vasco1,
        },
        {
          name: "II",
          img: Camisa2017Vasco2,
        },
        {
          name: "III",
          img: Camisa2017Vasco3,
        },
      ],
    },
    {
      year: "2016",
      titles: ["Taça Guanabara", "Campeonato Carioca"],
      jerseys: [
        {
          name: "I",
          img: Camisa2016Vasco1,
        },
        {
          name: "II",
          img: Camisa2016Vasco2,
        },
        {
          name: "III",
          img: Camisa2016Vasco3,
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

export default Vasco;
