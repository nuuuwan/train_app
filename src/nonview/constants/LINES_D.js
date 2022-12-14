const LINES_D = [
  {
    lineName: "Main",
    stationNames: [
      "Maradana",
      "Dematagoda",
      "Kelaniya",
      "Wanawasala",
      "Hunupitiya",
      "Enderamulla",
      "Horape",
      "Ragama",
      "Walpola",
      "Batuwatte",
      "Bulugahagoda",
      "Ganemulla",
      "Yagoda",
      "Gampaha",
      "Daraluwa",
      "Bemmulla",
      "Magalegoda",
      "Heendeniya",
      "Veyangoda",
      "Wandurawa",
      "Keenawala",
      "Pallewala",
      "Ganegoda",
      "Wijayarajadahana",
      "Mirigama",
      "Wilwatte",
      "Botale",
      "Ambeypussa",
      "Yattalgoda",
      "Buthgamuwa",
      "Alawwa",
      "Wlakubura",
      "Polgahawela",
      "Panaleeya",
      "Tismalpola",
      "Yatagama",
      "Rambukkana",
      "Kadigamuwa",
      "Gangoda",
      "Ihalakotte",
      "Balana",
      "Kadugannawa",
      "Pilimatalawa",
      "Peradeniya",
      "Koshinna",
      "Gelioya",
      "Gampola",
      "Tembligala",
      "Ulapane",
      "Nawalapitiya",
      "Inguruoya",
      "Galaboda",
      "Watawala",
      "Ihalawatawala",
      "Rosella",
      "Hatton",
      "Kotagala",
      "Talawakele",
      "Watagoda",
      "Great Western",
      "Radella",
      "Nanuoya",
      "Perakumpura",
      "Ambewela",
      "Pattipola",
      "Ohiya",
      "Idalgasinna",
      "Haputale",
      "Diyatalawa",
      "Bandarawela",
      "Kinigama",
      "Heel Oya",
      "Kital Elle",
      "Elle",
      "Demodara",
      "Uduwara",
      "Haliela",
      "Badulla",
    ],
  },
  {
    lineName: "Coastal",
    stationNames: [
      "Maradana",
      "Colombo Fort",
      "Secretartat Halt",
      "Kompannavediya",
      "Kollupitiya",
      "Bambalapitiya",
      "Wellawatta",
      "Dehiwala",
      "Mount Lavinia",
      "Ratmalana",
      "Angulana",
      "Lunawa",
      "Moratuwa",
      "Koralawella",
      "Egoda Uyana",
      "Panadura",
      "Pinwatte",
      "Wadduwa",
      "Train Halt 01",
      "Kalutara North",
      "Kalutara South",
      "Katukurunda",
      "Payagala North",
      "Payagala South",
      "Maggona",
      "Beruwala",
      "Hettimulla",
      "Aluthgama",
      "Bentota",
      "Induruwa",
      "Mha Induruwa",
      "Kosgoda",
      "Piyagama",
      "Ahungalle",
      "Patagamgoda",
      "Balapitiya",
      "Andadola",
      "Kandegoda",
      "Ambalangoda",
      "Madampagama",
      "Akurala",
      "Kahawa",
      "Telwatte",
      "Seenigama",
      "Hikkaduwa",
      "Thiranagama",
      "Kumarakanda",
      "Dodanduwa",
      "Rathgama",
      "Boossa",
      "Ginthota",
      "Piyadigama",
      "Richmond Hill",
      "Galle",
      "Katugoda",
      "Unawatuna",
      "Thalpe",
      "Habaraduwa",
      "Koggala",
      "Kathaluwa",
      "Ahangama",
      "Midigama",
      "Kumbalgama",
      "Weligama",
      "Polwathumodara",
      "Mirissa",
      "Kamburugamuwa",
      "Walgama",
      "Matara",
      "Piliduwa",
    ],
  },
  {
    lineName: "Matale",
    stationNames: [
      "Kandy",
      "Mahaiyawa",
      "Katugastota",
      "Udatalawinna",
      "Wattegama",
      "Pathanpha",
      "Udaththawala",
      "Ukuwela",
      "Matale",
    ],
  },
  {
    lineName: "Puttalam",
    stationNames: [
      "Ragama",
      "Peralanda",
      "Kandana",
      "Kapuwatte",
      "Ja-ela",
      "Tudella",
      "Kudahakapola",
      "Alawatupitiya",
      "Seeduwa",
      "Liyanagemulla",
      "Katunayake",
      "Free Trade Zone",
      "Kurana",
      "Negombo",
      "Kattuwa",
      "Kochchikade",
      "Waikkala",
      "Bolawatte",
      "Borelessa",
      "Lunuwila",
      "Tummodara",
      "Nattandiya",
      "Walahapitiya",
      "Kuda Wawa",
      "Nelumpokuna",
      "Madampe",
      "Kakkapalliya",
      "Sawarana",
      "Chilaw",
      "Manuwangama",
      "Bangadeniya",
      "Arachchikattuwa",
      "Anawilundawa",
      "Battaluoya",
      "Pulachchikulam",
      "Mundal",
      "Mangalaeliya",
      "Madurankuliya",
      "Erukkalam Pendu",
      "Palavi",
      "Thilladiya",
      "Puttalam",
      "Nooranagar",
      // 'Karadipuwar',
      // 'Periyanagavillu',
    ],
  },
  {
    lineName: "Northern",
    stationNames: [
      "Girambe",
      "Talawattegedara",
      "Potuhera",
      "Nailiya",
      "Kurunegala",
      "Muththettugala",
      "Wellawa",
      "Ganewatte",
      "Yapahuwa",
      "Nagollagama",
      "Timbiriyagedara",
      "Maho",
      "Randenigama",
      "Abanpola",
      "Galgamuwa",
      "Senarathgama",
      "Thambuttegama",
      "Talawa",
      "Srawasthipura",
      "Anuradhapura Town",
      "Anuradhapura",
      "Mihintale Junction",
      "Saliyapura",
      "Parasangahawewa",
      "Medagama",
      "Medawachchiya",
      "Poonewa",
      "Erattaperiyakulam",
      "Vavuniya",
      "Vavuniya",
      "Omanthai",
      "Puliyankulam",
      "Mankulam",
      "Murikandy",
      "Kilinochchi",
      "Paranthan",
      "Eliphant Pass",
      "Pallai",
      "Kodikamam",
      "Chavakachcheri",
      "Navatkuli",
      "Jaffna",
      "Kondavil",
      "Chunnakam",
      "Kankesanthurai",
    ],
  },
];

export default LINES_D;
