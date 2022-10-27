const getHealth = function(req, res) {
  res.status(200).json({message: "OK"})
}

module.exports = {
  getHealth
}