import Image from "next/image";
//import logo_big from "../../assets/logo_big.webp";

const Nyhetsbrev = () => (
  <div className="ananda__header section__padding">
    <div className="ananda__header-content">
      <h1 className="gradient__text">Prenumerera på vårat nyhetsbrev!</h1>
      <p>
        Ange din email för att ta del av aktuella erbjudanden och spännande
        erbjudanden varje vecka
      </p>

      <div className="ananda__header-content__input">
        <input type="email" placeholder="Din email" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="ananda__header-image">
      <Image src={""} alt="logo_big" />
    </div>
  </div>
);

export default Nyhetsbrev;
