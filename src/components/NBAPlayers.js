import { useEffect, useState } from "react"

const NBAPlayers = () => {
  const [players, setPlayers] = useState([])
  const [playerRank, setPlayerRank] = useState(null)
  const [isRanked, setIsRanked] = useState(false)

  useEffect(() => {
    fetch("http://localhost:4000/nba")
    .then(res => res.json())
    .then(data => {
      setPlayers(data)
    })
  }, [])

  return (
    <div className="nba-players-container">
      {players.length > 0 && (
        <ul>
          {players.map(player => {
            return (
              <li key={player.id}>{player.name}</li>
            )
          })}
        </ul>
      )}
    </div>
    )
}

export default NBAPlayers