function Footer() {
  return (
    <footer className="mt-auto">
      <div className="p-4 bg-primary-400">
        <div className="w-full flex flex-col items-center p-4 mb-4">
          <h1>Vet du vad en orgonit är?</h1>
          <a href="/butik">Besök vår butik!</a>
        </div>

        <div className="flex justify-around gap-4 mb-4">
          <div>
            <h4>Kontakta oss</h4>
            <p>Edsgatan 39 66230 Åmål</p>
            <p>XXX-XXX XX XX</p>
            <p>ove.holmstrom@gmail.com</p>
          </div>
          <div>
            <h4>Sociala medier</h4>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
          <div>
            <h4>Hanuman Ananda Garden</h4>
            <p>Butik</p>
            <p>Klinik</p>
            <p>Boende</p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <p>@2023 Hanunman Ananda Garden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
