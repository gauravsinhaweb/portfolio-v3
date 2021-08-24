const moviezoid_img = `https://res.cloudinary.com/dlrm1ch0d/image/upload/v1621920465/movieZoid_q5h7tm.png`;
const auth_img = `https://res.cloudinary.com/dlrm1ch0d/image/upload/v1621759649/form_ntgo5f.png`;
const twitter_img = `https://res.cloudinary.com/dlrm1ch0d/image/upload/v1621759649/twitter_suko6k.png`;
const todo_img = `https://res.cloudinary.com/dlrm1ch0d/image/upload/v1621759649/todo_an3rht.png`;

function ProjectData() {
  const Data = [
    {
      title: "MovieZoid",
      src: moviezoid_img,
      link: "https://moviezoid.netlify.app/discover/Popular?page=1",
      desc: `is a website that shows a
        collection of Movies and TV shows and related Information,
        reviews, Dates of Release, Star Ratings, overview, etc. It is
        Made by using tmdb API. This App is responsive for Mobile and
        Desktop Devices. It supports static rendering ${` &
          `} pagination
        as well.`,
    },
    {
      title: "Form Authentication",
      src: auth_img,
      link: `https://authentication-firebase.netlify.app/`,
      desc: `aims to make building
      secure authentication systems easy, while improving the sign-in
      and onboarding experience for end users.`,
    },

    {
      title: "Twitter Clone",
      src: twitter_img,
      link: "https://gauravsinhaweb-twitterclone.netlify.app/",
      desc: `is an app where I tried to clone
      the Twitter app. The reason behind making this app because I was
      curious to know about how the scroll works in three individual
      columns.`,
    },
    {
      title: "Todo-List App",
      src: todo_img,
      link: "https://gauravsinhaweb.github.io/TodoList-App/",
      desc: `is a CRUD App where you can
      Create, Read, Update and Delete the data. It is a simple
      note-taking platform, where you can write all the important
      to-dos and delete the tasks after they're done.`,
    },
  ];

  return [Data];
}
export default ProjectData;
