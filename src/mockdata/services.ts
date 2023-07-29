type Service = {
    title: string,
    description: string
}

const shopService: Service = {
    title: 'Butik',
    description: "Vi säljer bland annat rökelser, oljor, brännande, kristaller och stenar, kortlekar, singing bowls, smycken osv"
}

const clinicService: Service = {
    title: 'Klinik',
    description: "Kliniken erbjuder akupunktur för både hälsa och skönhet samt massage enligt Traditionell kinesisk medicin. Vi ser hela kroppen som en helhet och ger våra patienter relevanta och individualiserade behandlingar."
}

const hostelService: Service = {
    title: 'Vandrarhem',
    description: "Bo på vårt meditativa lilla boende. Vi finns i utkanten av Åmål, men ändå centralt. Ca 300 m till tåg- och busstation samt ca 1 km till centrum."
}

export { shopService, clinicService, hostelService }