import Image from "next/image";
//import logo_big from "../assets/logo_big.png";

function Footer() {
  <div className="ananda__footer" id="footer">
    <div className="ananda__footer-heading">
      <h1 className="gradient__text">Vet du vad en orgonit är?</h1>
    </div>

    <a href="/butik">
      <div className="ananda__footer-btn">
        <p>Besök vår butik!</p>
      </div>
    </a>

    <div className="ananda__footer-links">
      <div className="ananda__footer-links_logo">
        <Image src={""} alt="logo" />
      </div>
      <div className="ananda__footer-links_div">
        <h4>Kontakta oss</h4>
        <p>Edsgatan 39 66230 Åmål</p>
        <p>XXX-XXX XX XX</p>
        <p>ove.holmstrom@gmail.com</p>
      </div>
      <div className="ananda__footer-links_div">
        <h4>Sociala medier</h4>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
      <div className="ananda__footer-links_div">
        <h4>Hanuman Ananda Garden</h4>
        <p>Butik</p>
        <p>Klinik</p>
        <p>Boende</p>
      </div>
    </div>

    <div className="ananda__footer-copyright">
      <p>@2023 Hanunman Ananda Garden. All rights reserved.</p>
    </div>
  </div>;
}

export default Footer;
