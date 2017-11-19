const FantasyFootballApi = require("./api/FantasyFootballApi");

exports.getEspnFantasyFootballPowerRankings = async(request, response) => {
  if (!request.body.leagueId || !request.body.seasonId) {
    response.status(400).send('No leagueId/seasonId defined!');
  } else {
      const api = new FantasyFootballApi();
      if(request.body.username && request.body.password) {
        await login(request, response, api);
      }
      await getPowerRankings(request, response, api);
  }
};

const login = async (request, response, api) => {
  try {
    const apiKey = await api.getApiKey();
    await api.login(request.body.username, request.body.password, apiKey)
  } catch(e) {
    if(e.response && e.response.status) {
      resonse.status(e.response.status).send("Authentication error");
    } else {
      response.status(500).send("Something went wrong...");
    }
  }
}

const getPowerRankings = async (request, response, api) => {
  try {
    const powerRankings = await api.getPowerRankings(request.body.leagueId, request.body.seasonId);
    response.status(200).send(powerRankings);
  } catch(e) {
    if(e.response && e.response.status) {
      response.status(e.response.status).send("Authentication error");
    } else {
      response.status(500).send("Something went wrong...");
    }
  }
}
