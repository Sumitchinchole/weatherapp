import styled from "styled-components";

const WeatherInfoIcons = {
  sunset: "/weatherapp/icons/temp.svg",
  sunrise: "/weatherapp/icons/temp.svg",
  humidity: "/weatherapp/icons/humidity.svg",
  wind: "/weatherapp/icons/wind.svg",
  pressure: "/weatherapp/icons/pressure.svg",
};

const weatherIcons = {
  "01d": "/weatherapp/icons/sunny.svg",
  "'01d'": "/weatherapp/icons/night.svg",
  "02d": "/weatherapp/icons/day.svg",
  '"02d"': "/weatherapp/icons/cloudy-night.svg",
  "03d": "/weatherapp/icons/cloudy.svg",
  '"03d"': "/weatherapp/icons/cloudy.svg",
  "04d": "/weatherapp/icons/perfect-day.svg",
  '"04d"': "/weatherapp/icons/cloudy-night.svg",
  "09d": "/weatherapp/icons/rain.svg",
  '"09d"': "/weatherapp/icons/rain-night.svg",
  "10d": "/weatherapp/icons/rain.svg",
  '"10d"': "/weatherapp/icons/rain-night.svg",
  "11d": "/weatherapp/icons/storm.svg",
  '"11d"': "/weatherapp/icons/storm.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;
const WeatherInfoLable = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;
const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};
const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}??C`}</span>{" "}
          {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={weatherIcons[weather?.weather[0].icon]} />
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLable>Weather Info</WeatherInfoLable>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  );
};
export default WeatherComponent;
