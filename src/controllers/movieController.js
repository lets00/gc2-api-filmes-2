const movies = [
  {
    id: 0,
    name: "O Astronauta",
    year: 2024,
    gender: "Ação, Sci-fi",
  },
  {
    id: 1,
    name: "O Som ao Redor",
    year: 2013,
    gender: "Ação, Sci-fi",
  },
  {
    id: 2,
    name: "O Som ao Redor",
    year: 2013,
    gender: "Ação, Sci-fi",
  },
  {
    id: 3,
    name: "Central do Brasil",
    year: 1998,
  },
  {
    id: 4,
    name: "Cidade de Deus",
    year: 2002,
  },
  {
    id: 5,
    name: "Tropa de Elite",
    year: 2007,
  },
];

export function findAllMovies(req, res) {
  return res.status(200).json(movies)
}
