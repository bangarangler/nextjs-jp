require('dotenv').config()
// add values before deploy
module.exports = {
  DB_URI: `mongodb+srv://i${process.env.MONGO_USER}:${process.env.MONGO_PW}@portfolio-next-jp-prod-5lc18.mongodb.net/test?retryWrites=true&w=majority`,
  NAMESPACE: 'https://jp-portfolio-dain.herokuapp.com'
}


//module.exports = {
  //DB_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW
  //}@portfolio-nextjs-jp-1webv.mongodb.net/portfolio-next-js-jp?retryWrites=true&w=majority`
//}, {useNewUrlParser: true}
