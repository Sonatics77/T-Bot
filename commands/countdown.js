const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports.run = async (Bot, message, args, prefix) => {
  function channelsListById(auth, requestData) {
  var service = google.youtube('v3');
  var parameters = removeEmptyParameters(requestData['params']);
  parameters['auth'] = auth;
  service.channels.list(parameters, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    console.log(response);
  });
}
channelsListById("AIzaSyD8TGfcg87dZfe7G9fLW_CazRlcfXNdeWg", "subscribers");

}

  module.exports.help = {
    name: "coutndown"
  }
