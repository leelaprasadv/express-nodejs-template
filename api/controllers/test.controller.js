
const logger = require("../../utils/logger")

const ninjas = [
{
  id: 1,
  name: "Uchiha Itachi",
  rank: "Jounin",
  village: "Konoha"
},
{
  id: 2,
  name: "Hatake Kakashi",
  rank: "Jounin",
  village: "Konoha"
},
{
  id: 3,
  name: "Sarutobi Asuma",
  rank: "Jounin",
  village: "Konoha"
},
{
  id: 4,
  name: "Guy",
  rank: "Jounin",
  village: "Konoha"
},
{
  id: 5,
  name: "Uzumaki Naruko",
  rank: "Hokage",
  village: "Konoha"
}
]

getAllNinjas = function (req, res) {
  logger.info("test", {test: "hello"})
  logger.warn("test warning", {test: "hello"})
  res.status(200).json(ninjas);
}

getNinjaById = function (req, res) {
  const filteredNinjaRec = ninjas.filter((item) => item.id === req.swagger.params.id.value)
  res.status(200).json(filteredNinjaRec);
}

getNinjaByName = function (req, res) {
  const filteredNinjaRec = ninjas.filter((item) => item.name === req.swagger.params.name.value)
  res.status(200).json(filteredNinjaRec);
}

getNinjaByRank = function (req, res) {
  const rank =  req.swagger.params.rank.value;
  const filteredNinjaRec = ninjas.filter((item) => item.rank.toLowerCase() === rank.toLowerCase())
  res.status(200).json(filteredNinjaRec);
}

module.exports = {
  getAllNinjas,
  getNinjaById,
  getNinjaByName,
  getNinjaByRank
}