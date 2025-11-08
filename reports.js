
const factions = {
    T: "Fédération Thélios",
    RCA: "République Corporatiste Adréanne",
    L: "Léanth",
    D: "Domaines Ducaux",
    Z: "Dominion Zetran",
    A: "Empire Amaranth",
    M: "Peuple Melrehn",
    C: "Cetyn",
    P: "Pirate"
}

var reports = []

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762393538c4o56fru0xziy39h7em1bdatgnwslvkj2qp8.htm",
    "localLink": "1762393538c4o56fru0xziy39h7em1bdatgnwslvkj2qp8",
    "title":"328464557",
    "attackers": ["Fédération Thelios",],
    "defenders": ["regitraz",],
    "coordinates": "1:30:3:0",
    "position": L.latLng([487.6150969844095,762.375]),
    "facAttackers": factions.T,
    "facDefenders": factions.L,
    get facAttackersImg() {
        return "img" + "/IcoF7.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF5.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 30 Onovahn(1) de l'an 20,398 ",
    "dateIRL": "06/11/25 02:45:38",
    "win": true
})
