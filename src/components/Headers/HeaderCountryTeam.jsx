import "./HeaderCountry.css";

const HeaderCountry = ({ team }) => {
  return (
    <header className="header_country">
      <a href="/mainPage">
        <h1 className="header_info"> WEARING GLORY</h1>{" "}
      </a>
      <h1 className="header_country"> BRASIL </h1>
      <h1 className="header_country"> {team} </h1>
    </header>
  );
};

export default HeaderCountry;
