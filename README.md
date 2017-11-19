# get-espn-fantasy-football-power-rankings
Google Cloud Function to retrieve fantasy football power rankings data

# Example

## Request
```
{
	"leagueId": "12345",
	"seasonId": "2017"
}
```

## Response
```
[
    {
        "weeklyWinData": [
            {
                "wins": 8,
                "losses": 1,
                "id": 1,
                "name": "Team Partusch"
            },
            ...
        ],
        "id": 1,
        "logoUrl": "https://example.com/image.png",
        "owner": "Jake Partusch",
        "name": "Team Partusch",
        "overallWins": 6,
        "overallLosses": 4,
        "overallStanding": 3,
        "wins": 64,
        "losses": 26
    },
    ...
  ]
```
