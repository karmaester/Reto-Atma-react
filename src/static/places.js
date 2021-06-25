const places = [
  {
    title: "Consulta médica",
    description:
      "Consulta con equipo médico multidisciplinario para manejo de peso, ansiedad y trastornos relacionados.",
    imageUrl1: process.env.PUBLIC_URL + "/assets/consulta.jpg",
    imageUrl2: process.env.PUBLIC_URL + "/assets/consulta2.jpg",
    action: "Solicitar",
    link: "/consulta",
    time: 1500,
  },
  {
    title: "Curso de alimentación sana",
    description:
      "Unete al curso de alimentación sana de la mano de profesionales de la salud que compartirán información que puede cambiar tu salud y la de tu familia.",
    imageUrl1: process.env.PUBLIC_URL + "/assets/curso.png",
    imageUrl2: process.env.PUBLIC_URL + "/assets/curso2.png",
    action: "Inscribirme",
    link: "/curso",
    time: 1500,
  },
];

export default places;
