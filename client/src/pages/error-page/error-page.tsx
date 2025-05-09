function ErrorPage() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Back to main</span>
                  </a>
                </li>
              </ul>
            </nav>x
          </div>
        </div>
      </header>

      <main className="page__main page__main--error">
        <div className="container">
          <section className="error">
            <h1 className="error__title">404</h1>
            <p className="error__message">Oops! The page you're looking for doesn't exist.</p>
            <a className="error__link" href="/">Go to Main Page</a>
          </section>
        </div>
      </main>
    </div>
  );
}

export { ErrorPage };