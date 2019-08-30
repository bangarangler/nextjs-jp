const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://jp-portfolio-dain.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://jp-portfolio-dain.herokuapp.com',
  'process.env.CLIENT_ID': 'tDvlaGtL20f3bhW0ujL7iu02KiOeucft'
}
