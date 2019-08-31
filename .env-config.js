const prod = process.env.NODE_ENV == 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://nextjs-jp.bangarangler.now.sh' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://nextjs-jp.bangarangler.now.sh',
  'process.env.CLIENT_ID': 'tDvlaGtL20f3bhW0ujL7iu02KiOeucft'
}
//https://nextjs-jp.bangarangler.now.sh/
//https://jp-portfolio-dain.herokuapp.com
