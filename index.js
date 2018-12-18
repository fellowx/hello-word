const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .option({

      a:{

        alias: 'Address',
        demand: true,
        describe: 'Address to Fetch weather',
        string: true

      }
})
  .help()
  .alias('help', 'h')
  .argv;

//request(option, callback)
var getWeather = (city, country) => {
request({

  url:'http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=b7e5b6b822f96246f8f940e435f13413&units=metric',
  json: true

}, (error, response, body) => {

  console.log(body.name);
  console.log('Temperature is', body.main.temp);





});
}
