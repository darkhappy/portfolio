import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="container d-flex vh-100 h-100 w-100 mx-auto flex-column">
      <header className="bg-dark p-5 mt-5 mt-md-auto border-5 border-success border-bottom mb-4 mb-md-0">
        <h1 className="display-1">
          <span className="fs-2">hey! i'm </span>darkhappy
        </h1>
        <h2 className="fw-light fs-3 text-muted d-none d-md-block">
          a<span className="fw-normal text-success">computer sciences</span>{" "}
          student
        </h2>
      </header>
      <main className="row g-4 g-md-5">
        <div className="col-12 order-1 order-md-0">
          <h3 className="fw-normal d-md-none mb-3">
            <i aria-hidden="true" className="bi bi-person-badge" role="img" />
            Connections
          </h3>
          <div className="list-group list-group-horizontal-md text-start text-md-center text-xl-start">
            <a
              className="list-group-item list-group-item-action"
              href="mailto:me@darkh.app"
            >
              <i
                aria-label="Email"
                className="bi bi-envelope-fill me-2 fs-5"
                role="img"
              />
              <span className="d-inline d-md-none d-xl-inline">
                me@darkh.app
              </span>
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="https://github.com/darkhappy"
            >
              <i
                aria-label="GitHub"
                className="bi bi-github me-2 fs-5"
                role="img"
              />
              <span className="d-inline d-md-none d-xl-inline">darkhappy</span>
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="https://discord.bio/p/darkhappy"
            >
              <i
                aria-label="Discord"
                className="bi bi-discord me-2 fs-5"
                role="img"
              />
              <span className="d-inline d-md-none d-xl-inline">
                darkhappy#0001
              </span>
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="https://reddit.com/u/DarkHappy"
            >
              <i
                aria-label="Reddit"
                className="bi bi-reddit me-2 fs-5"
                role="img"
              />
              <span className="d-inline d-md-none d-xl-inline">DarkHappy</span>
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="https://spotify.com/user/darkhappy90"
            >
              <i
                aria-label="Spotify"
                className="bi bi-spotify me-2 fs-5"
                role="img"
              />
              <span className="d-inline d-md-none d-xl-inline">
                darkhappy90
              </span>
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="https://steamcommunity.com/darkhappy"
            >
              <i
                aria-label="Steam"
                className="bi bi-steam me-2 fs-5"
                role="img"
              />
              <span className="d-inline d-md-none d-xl-inline">
                petite lemay
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-5 col-12 order-0 order-md-1">
          <h3 className="d-none d-md-block fw-normal mb-3">
            <i aria-hidden="true" className="bi bi-info-circle" role="img" />
            About me
          </h3>
          <p className="card-text">
            I'm a College Student in Quebec that's currently taking Computer
            Sciences classes. In my free time, I tend to code personal projects,
            play video games and watch anime.
          </p>
        </div>
        <div className="col-lg-9 col-md-7 col-12 order-2">
          <h3 className="fw-normal mb-3">
            <i aria-hidden="true" className="bi bi-files-alt" role="img" />
            Projects
          </h3>
          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-xl-9">
                      <h4 className="card-title">College Classes</h4>
                      <p className="card-text">
                        All my school assignments and projects that involves
                        programming.
                      </p>
                    </div>
                    <div className="col d-none d-xl-flex justify-content-evenly flex-column text-center">
                      <i
                        aria-hidden="true"
                        className="bi bi-mortarboard fs-1"
                        role="img"
                      />
                    </div>
                  </div>
                </div>
                <a
                  className="text-white font-monospace text-decoration-none"
                  href="https://github.com/drkhapp-school/prog"
                >
                  <div className="card-footer bg-info stretched-link">
                    <i
                      aria-label="Link to Github"
                      className="bi bi-github fs-5 me-1"
                      role="img"
                    />
                    drkhapp-school/prog
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card border-secondary">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-xl-9">
                      <h4 className="card-title">
                        Toontown Information Dashboard
                      </h4>
                      <p className="card-text">
                        A modern electron application which shows you the
                        current status of Toontown Rewritten.
                      </p>
                    </div>
                    <div className="col d-none d-xl-flex justify-content-evenly flex-column text-center">
                      <i
                        aria-hidden="true"
                        className="bi bi-pie-chart fs-1"
                        role="img"
                      />
                    </div>
                  </div>
                </div>
                <a
                  className="card-link text-white font-monospace text-decoration-none"
                  href="https://github.com/darkhappy/ttrinfo-app"
                >
                  <div className="card-footer bg-secondary">
                    <i
                      aria-label="Link to Github"
                      className="bi bi-github fs-5 me-1"
                      role="img"
                    />
                    darkhappy/ttrinfo-app
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto text-muted text-center">
        <p>
          made with{" "}
          <a
            aria-label="Bootstrap"
            className="bi bi-bootstrap text-info"
            href="https://getbootstrap.com"
          />
        </p>
      </footer>
    </div>
  );
};

export default Home;
