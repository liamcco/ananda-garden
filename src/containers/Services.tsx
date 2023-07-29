export default function Services() {
  return (
    <div className="max-w-7xl m-auto px-4 my-4">
      <h2 className="text-3xl font-extrabold mb-4">Våra tjänster</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="border rounded-lg p-2 shadow-md">
          <h3 className="text-xl font-bold">Butik</h3>
          <p>
            I vår butik finner du ett brett sortiment av stenar, rökelser,
            böcker, tarotkort, änglakort, orakelkort, pendlar, kristaller,
            smycken, buddhor, änglar, drömfångare, vindspel, ljus, ljusstakar,
            kuddar, doftoljor, doftljus, doftpinnar, och mycket mer.
          </p>
        </div>
        <div className="border rounded-lg p-2 shadow-md">
          <h3 className="text-xl font-bold">Klinik</h3>
          <p>
            I vår klinik erbjuder vi behandlingar som healing, massage, tarot,
            mediumskap, reiki, regression, hypnos, coaching, samtalsterapi,
            medial vägledning, andlig vägledning, medial utveckling, kurser,
            meditationer, trumresor, seanser, föreläsningar, workshops, och
            mycket mer.
          </p>
        </div>
        <div className="border rounded-lg p-2 shadow-md">
          <h3 className="text-xl font-bold">Vandrarhem</h3>
          <p>
            I vårt vandrarhem erbjuder vi övernattning i enkelrum, dubbelrum,
            familjerum, och flerbäddsrum. Vi har även ett stort kök, matsal,
            vardagsrum, och tvättstuga. I priset ingår sängkläder, handdukar,
            frukost, och städning.
          </p>
        </div>
      </div>
    </div>
  );
}
