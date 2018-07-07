import React, { Component } from "react";
import logo from "./Logo.png";
import "./App.css";
import Lightbox from "react-images";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://i.imgur.com/SO9GnB2.jpg",
    caption:
      "During the first weeks of work at PMA Digital in London, I reveloped their website in a team with one other developer, visit it at: http://new.pmadigital.com",
    height: 190,
    width: 39
  },
  {
    src: "https://i.imgur.com/qGJgnF2.png",
    caption:
      "This project was developed whilst at a Digital Agency for The Economist & ABB. I built the structure of the site, frontpage and focused on the data visualisation.",
    height: 183,
    width: 73
  },
  {
    src: "https://i.imgur.com/7m4MhcI.jpg",
    caption:
      "A news digest app that gets you different perspectives on todays news. Downloadable on iOS and Android, a personal project built in Node.js and React Native.",
    height: 432,
    width: 245
  },
  {
    src: "https://i.imgur.com/sMJzL0c.png",
    caption:
      "A website and motion graphic advertisement video I made that demonstrates what Vantage is. http://vantagenews.co/",
    height: 2,
    width: 1
  },
  {
    src: "https://i.imgur.com/ca5eB2s.png",
    caption:
      "https://vews.tk/ Winner: AngelHack London. A platform for expressing views on today’s headlines through crowdsourced live video.",
    height: 8,
    width: 15
  },
  {
    src: "https://i.imgur.com/TVwRUk2.png",
    caption:
      "Acorn Aspirations wanted a concept for ways of showing content on their website, as well as a general website redesign concept. This is one of the pages I designed for them.",
    height: 89,
    width: 119
  },
  {
    src: "https://i.imgur.com/XwY27gH.png",
    caption:
      "On a freelance basis I created the store from scratch using a custom API for mineteria. Visit it at: store.mineteria.com",
    height: 9,
    width: 16
  },
  {
    src: "https://i.imgur.com/8GDtUsj.png",
    caption:
      "I was briefed to design a website where people can browse and collate different events. This is a design style concept.",
    height: 65,
    width: 71
  },
  {
    src: "https://i.imgur.com/nziSjJR.png",
    caption:
      "I designed and developed an MVP of Tamp, a social network for coffee lovers with a friend of mine. I explored the graphic design style presented by Apple in their new app store with this design and implemented it using React Native and Expo.",
    height: 5,
    width: 3
  },
  {
    src: "https://i.imgur.com/Kwlci7a.png",
    caption:
      "For Acorn Aspirations, I design concepts for how the organisation could potentially feature certain projects on their website as case studies. I took inspiration from a number of agency websites and tried to understand what content was important to be displayed before designing this particular page.",
    height: 47,
    width: 24
  },
  {
    src: "https://i.imgur.com/3nraIYn.png",
    caption:
      "Hablar is an anonymous online social platform where people post using their voice. I built this in 24 hours and was a winning project at a hackathon.",
    height: 5,
    width: 3
  },
  {
    src: "https://i.imgur.com/nqW6kFQ.jpg",
    caption:
      "This is the TeensinAI.com landing page which I created on a freelance basis. The client gave specific content, then I designed and produced the final delivered product. Visit it at: teensinai.com",
    height: 463,
    width: 161
  },
  {
    src: "https://i.imgur.com/wcMu7WD.png",
    caption:
      "Site designed and developed for a top dentist in Norway on a sub-contract basis.",
    height: 9,
    width: 16
  },
  {
    src: "https://i.imgur.com/0sWdo6I.png",
    caption:
      "This is a mockup for a delivery tracking business redesign. I was briefed by a client and with the provided assets and information, this is a mockup I came up with.",
    height: 23,
    width: 33
  },
  {
    src: "https://i.imgur.com/mobIBhP.png",
    caption:
      "A CS:GO wagering site I designed and developed for a client on a freelance basis with 50,000+ users.",
    height: 45,
    width: 68
  },
  {
    src: "https://i.imgur.com/ZiGj90p.png",
    caption:
      "A CS:GO wagering site I designed and developed which had over 20,000 registered users.",
    height: 10,
    width: 16
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentImage: 0, lightboxIsOpen: false, width: 1000 };
  }
  componentWillMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ width: window.innerWidth });
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    return (
      <div>
        <div className="white-border">
          <div className="hero">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="profile-picture" />
          </div>
        </div>
        <div className="white-border">
          <div className="about">
            <div className="overlay">
              <div className="content">
                <h1>About Luca.</h1>
                <p>
                  I'm Luca, a web developer and designer from London. I'm
                  currently working at a digital agency in London but looking to
                  do freelance work.
                </p>
                <p>
                  I've been tinkering with code since age 11 and have grown to
                  enjoy combining creativity with technology to build solutions
                  to problems I find or am presentented with.
                </p>
                <p>
                  I design <b>user interfaces</b> using{" "}
                  <b>Sketch and Photoshop</b>, develop sites with{" "}
                  <b>React & Node.js</b> and deploy to <b>Linux</b> virtual
                  private servers. I also love building mobile apps with{" "}
                  <b>Expo and React Native.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="white-border" style={{ height: "auto" }}>
          <div className="projects">
            <div className="overlay">
              <div className="content">
                <h1>Work & Projects.</h1>
                <p>
                  Projects and work drive me to learn new things and develop my
                  skills in different areas, here is a selection of the work
                  that I've done over the last four years.
                </p>
                <div style={{ marginBottom: 15 }}>
                  <Gallery
                    photos={photos}
                    onClick={this.openLightbox.bind(this)}
                    columns={this.state.width > 1000 ? 4 : 1}
                    margin={this.state.width > 1000 ? 30 : 0}
                  />
                  <div className="lightbox">
                    <Lightbox
                      images={photos}
                      onClose={this.closeLightbox.bind(this)}
                      onClickPrev={this.gotoPrevious.bind(this)}
                      onClickNext={this.gotoNext.bind(this)}
                      currentImage={this.state.currentImage}
                      isOpen={this.state.lightboxIsOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
