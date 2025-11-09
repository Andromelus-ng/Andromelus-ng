
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

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1761884545ibj5gpty28xmlh7wvf3a9sneo160kzqd4rcu.htm",
    "localLink": "1761884545ibj5gpty28xmlh7wvf3a9sneo160kzqd4rcu",
    "title":"328436998",
    "attackers": ["Fanatiques Shankari",],
    "defenders": ["Cartel de Canardtopia",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.M,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF6.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 33 Celetahn(2) de l'an 20,392 ",
    "dateIRL": "31/10/25 05:22:25",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17623808664ks2t7baum9hdvoeq6fjr1l5zywcin038gpx.htm",
    "localLink": "17623808664ks2t7baum9hdvoeq6fjr1l5zywcin038gpx",
    "title":"328457945",
    "attackers": ["FearNyx",],
    "defenders": ["Flamme Givrante",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 11 Erehahn(10) de l'an 20,397 ",
    "dateIRL": "05/11/25 23:14:26",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17623810543eg0ylndc2pquwjv541ik6bxrsz98ot7hamf.htm",
    "localLink": "17623810543eg0ylndc2pquwjv541ik6bxrsz98ot7hamf",
    "title":"328457954",
    "attackers": ["FearNyx",],
    "defenders": ["ETCC",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 12 Erehahn(10) de l'an 20,397 ",
    "dateIRL": "05/11/25 23:17:34",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762381547fuhonwe2l4qid8v1kx5ctj9r7mzgs3ba6py0.htm",
    "localLink": "1762381547fuhonwe2l4qid8v1kx5ctj9r7mzgs3ba6py0",
    "title":"328457942",
    "attackers": ["FearNyx",],
    "defenders": ["Le Grand Ordre Thélosien",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 14 Erehahn(10) de l'an 20,397 ",
    "dateIRL": "05/11/25 23:25:47",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/176238344218sg3uo4h0r5t6i2ecwv7j9payqdfxbkmnlz.htm",
    "localLink": "176238344218sg3uo4h0r5t6i2ecwv7j9payqdfxbkmnlz",
    "title":"328457945",
    "attackers": ["FearNyx",],
    "defenders": ["aegon targaryen",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 23 Erehahn(10) de l'an 20,397 ",
    "dateIRL": "05/11/25 23:57:22",
    "win": false
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17623970750nvwc6j8eh5ul2tsr9kqfi4ab7y3ozdgpx1m.htm",
    "localLink": "17623970750nvwc6j8eh5ul2tsr9kqfi4ab7y3ozdgpx1m",
    "title":"328464632",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["Nounours",],
    "coordinates": "26:37:10:0",
    "position": L.latLng([375.361042488896,544]),
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
    "dateTSU": " 6 Celetahn(2) de l'an 20,398 ",
    "dateIRL": "06/11/25 03:44:35",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762477454sk5g2hd1l3jfqnvryiuzo9t6wbac7x0e48mp.htm",
    "localLink": "1762477454sk5g2hd1l3jfqnvryiuzo9t6wbac7x0e48mp",
    "title":"328469202",
    "attackers": ["Fédération Thelios",],
    "defenders": ["FearNyx","Cartel de Canardtopia",],
    "coordinates": "7:664:13:0",
    "position": L.latLng([419.86907971894044,456.375]),
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
    "dateTSU": " 18 Onovahn(1) de l'an 20,399 ",
    "dateIRL": "07/11/25 02:04:14",
    "win": false
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17624781585pw9yqnci47g6v8eumz13jsxhlkoart02bdf.htm",
    "localLink": "17624781585pw9yqnci47g6v8eumz13jsxhlkoart02bdf",
    "title":"328469206",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["FearNyx",],
    "coordinates": "7:664:13:0",
    "position": L.latLng([419.86907971894044,456.375]),
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
    "dateTSU": " 22 Onovahn(1) de l'an 20,399 ",
    "dateIRL": "07/11/25 02:15:58",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762479376c76fedt0sxlzvorn3jk5qiphagu2yw1bm849.htm",
    "localLink": "1762479376c76fedt0sxlzvorn3jk5qiphagu2yw1bm849",
    "title":"328469218",
    "attackers": ["Fédération Thelios",],
    "defenders": ["FearNyx","Cartel de Canardtopia","mike",],
    "coordinates": "7:664:13:0",
    "position": L.latLng([419.86907971894044,456.375]),
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
    "dateTSU": " 27 Onovahn(1) de l'an 20,399 ",
    "dateIRL": "07/11/25 02:36:16",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762479554ri92j06emqf5lsuznk3xhp1dbt7o48yacvwg.htm",
    "localLink": "1762479554ri92j06emqf5lsuznk3xhp1dbt7o48yacvwg",
    "title":"328469218",
    "attackers": ["Fédération Thelios",],
    "defenders": ["FearNyx",],
    "coordinates": "7:664:13:0",
    "position": L.latLng([419.86907971894044,456.375]),
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
    "dateTSU": " 28 Onovahn(1) de l'an 20,399 ",
    "dateIRL": "07/11/25 02:39:14",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762479740ldzkfbetv3m1j8r0i6ona4g5w27q9chuxyps.htm",
    "localLink": "1762479740ldzkfbetv3m1j8r0i6ona4g5w27q9chuxyps",
    "title":"328469218",
    "attackers": ["Fédération Thelios",],
    "defenders": ["FearNyx",],
    "coordinates": "7:664:13:0",
    "position": L.latLng([419.86907971894044,456.375]),
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
    "dateTSU": " 29 Onovahn(1) de l'an 20,399 ",
    "dateIRL": "07/11/25 02:42:20",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/176247991292skrgtnl3cbz7qwm0hpux8dfji1yv4a5e6o.htm",
    "localLink": "176247991292skrgtnl3cbz7qwm0hpux8dfji1yv4a5e6o",
    "title":"328469218",
    "attackers": ["Fédération Thelios",],
    "defenders": ["FearNyx",],
    "coordinates": "7:664:13:0",
    "position": L.latLng([419.86907971894044,456.375]),
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
    "dateTSU": " 30 Onovahn(1) de l'an 20,399 ",
    "dateIRL": "07/11/25 02:45:12",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762606238nxarbvdz7s2gec94it1lwohmuy860q35jfpk.htm",
    "localLink": "1762606238nxarbvdz7s2gec94it1lwohmuy860q35jfpk",
    "title":"328475065",
    "attackers": ["FearNyx",],
    "defenders": ["Chantecrit",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 15 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 13:50:38",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762609601j2t3k0iom6wflscyz71uxpqra5e4dnbhvg98.htm",
    "localLink": "1762609601j2t3k0iom6wflscyz71uxpqra5e4dnbhvg98",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 30 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 14:46:41",
    "win": false
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762609631bnwtcvz0k3duh7rim2plg4yqjeoaxs185f96.htm",
    "localLink": "1762609631bnwtcvz0k3duh7rim2plg4yqjeoaxs185f96",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 30 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 14:47:11",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762609754tagduirb90p75hwlv2ysn4e6kzxqo38jc1mf.htm",
    "localLink": "1762609754tagduirb90p75hwlv2ysn4e6kzxqo38jc1mf",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 31 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 14:49:14",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762610179w4j28v9rngtflyo6epkb0ciuda5h7sx3zqm1.htm",
    "localLink": "1762610179w4j28v9rngtflyo6epkb0ciuda5h7sx3zqm1",
    "title":"328475345",
    "attackers": ["Sholpon-Ata",],
    "defenders": ["FearNyx",],
    "coordinates": "",
    "position": L.latLng([0,0]),
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
    "dateTSU": " 33 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 14:56:19",
    "win": false
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762610194m1tps7ux83dzgco5l9baq24jri6yhfnwv0ek.htm",
    "localLink": "1762610194m1tps7ux83dzgco5l9baq24jri6yhfnwv0ek",
    "title":"328475348",
    "attackers": ["Sholpon-Ata",],
    "defenders": ["FearNyx",],
    "coordinates": "",
    "position": L.latLng([0,0]),
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
    "dateTSU": " 33 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 14:56:34",
    "win": false
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/176261021051nbat23czdqhg0fi6pyl4oxkue9svrw8j7m.htm",
    "localLink": "176261021051nbat23czdqhg0fi6pyl4oxkue9svrw8j7m",
    "title":"328475350",
    "attackers": ["Sholpon-Ata",],
    "defenders": ["FearNyx",],
    "coordinates": "",
    "position": L.latLng([0,0]),
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
    "dateTSU": " 33 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 14:56:50",
    "win": false
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762610230hrtyc59p8x4z1f3sojvi7ubd6nale0gqkw2m.htm",
    "localLink": "1762610230hrtyc59p8x4z1f3sojvi7ubd6nale0gqkw2m",
    "title":"328475352",
    "attackers": ["Sholpon-Ata",],
    "defenders": ["FearNyx",],
    "coordinates": "",
    "position": L.latLng([0,0]),
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
    "dateTSU": " 33 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 14:57:10",
    "win": false
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17626104893uea4t0nblwyzrmci6xqv9hogsfdkj812p75.htm",
    "localLink": "17626104893uea4t0nblwyzrmci6xqv9hogsfdkj812p75",
    "title":"328475369",
    "attackers": ["Sholpon-Ata",],
    "defenders": ["FearNyx",],
    "coordinates": "",
    "position": L.latLng([0,0]),
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
    "dateTSU": " 34 Dolahn(6) de l'an 20,400 ",
    "dateIRL": "08/11/25 15:01:29",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762613497mhzxyu6ko0t4wjg21s9dar7cbnlp3vqief58.htm",
    "localLink": "1762613497mhzxyu6ko0t4wjg21s9dar7cbnlp3vqief58",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 8 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 15:51:37",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762613557j5xyfdsv7ugb6tqmheok4cl2zi108nawp39r.htm",
    "localLink": "1762613557j5xyfdsv7ugb6tqmheok4cl2zi108nawp39r",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 8 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 15:52:37",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762613607schwau94d3zpog0v526leyi871xbqnjrmtfk.htm",
    "localLink": "1762613607schwau94d3zpog0v526leyi871xbqnjrmtfk",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 9 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 15:53:27",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762613707h7am9eko64usyt1rpcfvix08g5bzn3dl2qwj.htm",
    "localLink": "1762613707h7am9eko64usyt1rpcfvix08g5bzn3dl2qwj",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 9 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 15:55:07",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17626139925371aolxizdbrhy2jtnc86mpu40e9fsvqgkw.htm",
    "localLink": "17626139925371aolxizdbrhy2jtnc86mpu40e9fsvqgkw",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 10 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 15:59:52",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762614164qgtue1ya8hrc0n37f9ijdmxbp2v6zskol4w5.htm",
    "localLink": "1762614164qgtue1ya8hrc0n37f9ijdmxbp2v6zskol4w5",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 11 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 16:02:44",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762614191vzxpa25okgn60w1bcujd48eimhfrqt73ys9l.htm",
    "localLink": "1762614191vzxpa25okgn60w1bcujd48eimhfrqt73ys9l",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 11 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 16:03:11",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762614228qmeyxto8uc3sb201flvparhnwkg6jd7zi459.htm",
    "localLink": "1762614228qmeyxto8uc3sb201flvparhnwkg6jd7zi459",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 12 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 16:03:48",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762614357t0gpus6314himcdq89lexnjfaroz5b2k7vyw.htm",
    "localLink": "1762614357t0gpus6314himcdq89lexnjfaroz5b2k7vyw",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 12 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 16:05:57",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762614573eyk3sd1w4bhic07pmo2n6rjutg8qzf5xv9al.htm",
    "localLink": "1762614573eyk3sd1w4bhic07pmo2n6rjutg8qzf5xv9al",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 13 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 16:09:33",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762614622zog36jy9hq5afc7dsixnk4v1ep0bl28wtrmu.htm",
    "localLink": "1762614622zog36jy9hq5afc7dsixnk4v1ep0bl28wtrmu",
    "title":"",
    "attackers": ["FearNyx",],
    "defenders": ["Neros",],
    "coordinates": "",
    "position": L.latLng([0,0]),
    "facAttackers": factions.L,
    "facDefenders": factions.T,
    get facAttackersImg() {
        return "img" + "/IcoF5.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF7.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 13 Stelahn(7) de l'an 20,400 ",
    "dateIRL": "08/11/25 16:10:22",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762665344fet3c1ykzxqmb8ndaw9ju542v076shrogpil.htm",
    "localLink": "1762665344fet3c1ykzxqmb8ndaw9ju542v076shrogpil",
    "title":"328477477",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["regitraz",],
    "coordinates": "33:2:2:0",
    "position": L.latLng([364.97653415870946,414.25]),
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
    "dateTSU": " 8 Feloahn(3) de l'an 20,401 ",
    "dateIRL": "09/11/25 06:15:44",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762665676xdi6ysn9kpuw2e0hc84vq7tmflgzb3a1ro5j.htm",
    "localLink": "1762665676xdi6ysn9kpuw2e0hc84vq7tmflgzb3a1ro5j",
    "title":"328477477",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["regitraz",],
    "coordinates": "33:2:3:0",
    "position": L.latLng([364.97653415870946,414.25]),
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
    "dateTSU": " 10 Feloahn(3) de l'an 20,401 ",
    "dateIRL": "09/11/25 06:21:16",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17626660095nzoska3cu0py4q9r1gtbilf6jhwx87e2vdm.htm",
    "localLink": "17626660095nzoska3cu0py4q9r1gtbilf6jhwx87e2vdm",
    "title":"328477477",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["regitraz",],
    "coordinates": "33:2:4:0",
    "position": L.latLng([364.97653415870946,414.25]),
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
    "dateTSU": " 11 Feloahn(3) de l'an 20,401 ",
    "dateIRL": "09/11/25 06:26:49",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17626663545s68q2fxwea94u3pmk71bohrtg0invjczydl.htm",
    "localLink": "17626663545s68q2fxwea94u3pmk71bohrtg0invjczydl",
    "title":"328477477",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["CapriShura",],
    "coordinates": "33:2:5:0",
    "position": L.latLng([364.97653415870946,414.25]),
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
    "dateTSU": " 13 Feloahn(3) de l'an 20,401 ",
    "dateIRL": "09/11/25 06:32:34",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/17626667197wh3uzd0etv28gfnq5cyilrkb61jo49psamx.htm",
    "localLink": "17626667197wh3uzd0etv28gfnq5cyilrkb61jo49psamx",
    "title":"328477477",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["CapriShura",],
    "coordinates": "33:2:6:0",
    "position": L.latLng([364.97653415870946,414.25]),
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
    "dateTSU": " 15 Feloahn(3) de l'an 20,401 ",
    "dateIRL": "09/11/25 06:38:39",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762667059laxdz6fjkw42c5b9u1n3seopthqm8irv7y0g.htm",
    "localLink": "1762667059laxdz6fjkw42c5b9u1n3seopthqm8irv7y0g",
    "title":"328477477",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["CapriShura",],
    "coordinates": "33:2:7:0",
    "position": L.latLng([364.97653415870946,414.25]),
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
    "dateTSU": " 16 Feloahn(3) de l'an 20,401 ",
    "dateIRL": "09/11/25 06:44:19",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762667465hloi19zsvum8abtkcefy6pd02x7g4jrq3wn5.htm",
    "localLink": "1762667465hloi19zsvum8abtkcefy6pd02x7g4jrq3wn5",
    "title":"328477477",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["regitraz",],
    "coordinates": "33:2:12:0",
    "position": L.latLng([364.97653415870946,414.25]),
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
    "dateTSU": " 18 Feloahn(3) de l'an 20,401 ",
    "dateIRL": "09/11/25 06:51:05",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/176266783097nfp0bdjrqe1vk8wmtxa2yz5i4c6osg3hul.htm",
    "localLink": "176266783097nfp0bdjrqe1vk8wmtxa2yz5i4c6osg3hul",
    "title":"328477477",
    "attackers": ["Cartel de Canardtopia",],
    "defenders": ["regitraz",],
    "coordinates": "33:2:13:0",
    "position": L.latLng([364.97653415870946,414.25]),
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
    "dateTSU": " 20 Feloahn(3) de l'an 20,401 ",
    "dateIRL": "09/11/25 06:57:10",
    "win": true
})

reports.push({
    "onlineLink": "https://horizon.celestus.fr/CelestusV2/RC/Uni2/1762675125hli71dvmcu9ogsa6zq8ewk2435tfp0xnrjyb.htm",
    "localLink": "1762675125hli71dvmcu9ogsa6zq8ewk2435tfp0xnrjyb",
    "title":"328478041",
    "attackers": ["Fanatiques Shankari",],
    "defenders": ["Shas\'ar\'Tol",],
    "coordinates": "12:183:2:1",
    "position": L.latLng([554.0189448993905,583.5]),
    "facAttackers": factions.M,
    "facDefenders": factions.A,
    get facAttackersImg() {
        return "img" + "/IcoF6.png"
    },
    get facDefendersImg() {
        return "img" + "/IcoF4.png"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": " 13 Koylahn(4) de l'an 20,401 ",
    "dateIRL": "09/11/25 08:58:45",
    "win": true
})
