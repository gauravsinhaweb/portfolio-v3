import gamoby from "../images/gamoby.png";
import covid from "../images/covid.png";
import gamergram from "../images/gamergram.png";
import deathnote from "../images/death-note.png";

const projectList = [
  {
    title: "MovieZoid",
    src: gamoby,
    link: "https://moviezoid.netlify.app/discover/Popular?page=1",
    desc: ` The MovieZoid is a website that shows a collection of Movies and TV shows and related Information, reviews, Dates of Release, Star Ratings, overview, etc. It is Made by using MovieDB API.
        This App is responsive for Mobile and Desktop Devices. It supports
        static rendering f& pagination as well.`,
  },
  {
    title: "Form Authentication",
    src: covid,
    link: `https://authentication-firebase.netlify.app/`,
    desc: `Form Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users using Google Firebase Authentication Service.`,
  },
  {
    title: "Twitter Clone",
    src: deathnote,
    link: "https://gauravsinhaweb-twitterclone.netlify.app/",
    desc:
      "Twitter clone is an app, where I tried to clone the Twitter app. The reason behind making this app because I was curious to know about how the scroll works in three individual columns. Also, I will connect this app to firebase so that the Tweets will be accessible through any device.",
  },
  {
    title: "Todo-List App",
    src: gamergram,
    link: "https://gauravsinhaweb.github.io/TodoList-App/",
    desc: `It is a CRUD App where you can Create, Read, Update and Delete the data.
It is a simple note-taking platform, where you can write all the important to-dos and delete the tasks after they're done. The Database is connected by Google Firebase.`,
  },
  {
    title: "Weather App",
    src: gamergram,
    link: "https://gauravsinhaweb.github.io/weather-app/",
    desc: `The weather app provides atmospheric pressure, weather conditions, relative humidity, precipitation in different cities. It has a Geolocation feature where you can access the weather information of your city. I will add AQI, which will show air pollution quality and particle percentage of your city`,
  },
  {
    title: "Stocks Recommendation Dashboard",
    src: gamergram,
    link: "https://gauravsinhaweb.github.io/weather-app/",
    desc: `Esse cupidatat sint occaecat qui excepteur consequat Lorem excepteur irure deserunt tempor.`,
  },
];

export default projectList;
