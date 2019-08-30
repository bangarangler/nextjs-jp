// add values before deploy
module.exports = {
  DB_URI: `mongodb+srv://jon:2bxme2RqsHdTustzi4@@portfolio-next-jp-prod-5lc18.mongodb.net/test?retryWrites=true&w=majority`,
  NAMESPACE: 'https://jp-portfolio-dain.herokuapp.com'
}
console.log(process.env.DB_URI)
