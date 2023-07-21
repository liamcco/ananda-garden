function Sign() {
  return (
    <div className="flex flex-col self-end">
      <div className="sign__container sign__big">
        <h1>HANUMAN ANANDA GARDEN</h1>
      </div>
      <div className="sign__rope">
        <span />
        <span />
      </div>
      <div className="sign__container sign__small">
        <h2>
          <a href="/butik">BUTIK</a>
        </h2>
      </div>
      <div className="sign__rope">
        <span />
        <span />
      </div>
      <div className="sign__container sign__small">
        <h2>
          <a href="/klinik">KLINIK</a>
        </h2>
      </div>
      <div className="sign__rope">
        <span />
        <span />
      </div>
      <div className="sign__container sign__small">
        <h2>
          <a href="/vandrarhem">VANDRARHEM</a>
        </h2>
      </div>
      <div className="sign__rope">
        <span />
        <span />
      </div>
      <div className="sign__container sign__book">
        <div className="sign__book-container">
          <h3>BOKA</h3>
          <h4>
            {" "}
            <a href="https://www.airbnb.se/users/show/423792636">BOENDE</a>
          </h4>
          <h4>
            {" "}
            <a href="/klinik">BEHANDLING</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Sign;
