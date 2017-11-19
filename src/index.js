const FantasyFootballApi = require("./api/FantasyFootballApi");

exports.getEspnFantasyFootballPowerRankings = async(request, response) => {
  if (!request.body.leagueId || !request.body.seasonId) {
    response.status(400).send('No leagueId/seasonId defined!');
  } else {
      const api = new FantasyFootballApi();
      const powerRankings = await api.getPowerRankings(request.body.leagueId, request.body.seasonId);
      response.status(200).send(powerRankings);
  }
};
