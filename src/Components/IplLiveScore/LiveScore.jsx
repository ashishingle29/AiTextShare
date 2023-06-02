import React, { useState, useEffect } from "react";
import './LiveScore.css'
import axios from 'axios'


const bk = "https://aitext-share-bkl.onrender.com" 
// const bk = "http://localhost:3000"


function LiveScore() {



    const [url, setUrl] = useState("")
    const [iplData, setIplData] = useState("")
    const [teamOneLogo, setTeamOneLogo] = useState("")
    const [teamTwoLogo, setTeamTwoLogo] = useState("")


    const LogoName = ["Mumbai Indians", "Delhi Capitals", "Royal Challengers Bangalore", "Sunrisers Hyderabad", "Kolkata Knight Riders", "Chennai Super Kings", "Gujarat Titans", "Panjab Kings", "Rajasthan Royals", "Lucknow Super Giants"]
    const LogoUrl = ["https://www.rajasthanroyals.com/static-assets/images/teams/1111.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/1109.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/1105.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/1379.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/1106.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/1108.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/2955.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/1107.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/1110.png?v=5.24",
        "https://www.rajasthanroyals.com/static-assets/images/teams/2954.png?v=5.24"]




    useEffect(() => {
        axios.get(`http://localhost:3000/ipl/getiplurl`)
            .then((res) => {
                // console.log(res.data)
                setUrl(res.data.data.url)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [url])



    // console.log(url)

    useEffect(() => {
        axios.get(
            `https://cricket-live-api.vercel.app/cri.php?url=${url}`
        )
            .then((response) => {
                const ResponseData = response.data.livescore
                if (ResponseData != undefined) {
                    setIplData(ResponseData)

                    for (let i = 0; i < LogoName.length; i++) {
                        if (LogoName[i] == ResponseData.title.split("vs")[0].trim()) {
                            setTeamOneLogo(LogoUrl[i])
                        } else if (LogoName[i] == ResponseData.title.split("vs")[1].split(",")[0].trim()) {
                            setTeamTwoLogo(LogoUrl[i])
                        }
                    }
                }
            })
            .catch((e) => console.log(e.message))
    }, [url]);


    // console.log(iplData)


    // console.log(teamOneLogo)


    return (
        <div className='main'>
            {iplData ? (
                <>
                    <div className='main_page_heading'>
                        <h1>TATA IPL Today Live Score</h1>
                    </div>
                    <div className='main_match_title'>
                        <h2>{iplData.title}</h2>
                    </div>
                    <div className='main_status_crr'>

                        <p>{iplData.update}</p>
                        <p>{iplData.runrate}</p>
                    </div>
                    <div className='main_team_score'>
                        <div className='main_teamscore_title'>
                            Today IPL Match {iplData.title.split(',')[0]}
                        </div>
                        <div className='main_teams_scores'>
                            <div className='main_team1'>
                                <div className='main_tram1_logo_name'>
                                    <img src={teamOneLogo} alt="Team 1 Logo" />

                                    <p>{iplData.title.split("vs")[0]}</p>
                                </div>
                                <div className='main_team1_scores'>
                                    {iplData.teamtwo == "Data Not Found" ? "0" : iplData.teamtwo}
                                </div>
                            </div>
                            <div className='main_team2'>
                                <div className='main_tram2_logo_name'>
                                    <img src={teamTwoLogo} alt="Team 1 Logo" />
                                    <p>{iplData.title.split("vs")[1].split(",")[0]}</p>
                                </div>
                                <div className='main_team2_scores'>
                                    {iplData.teamtwo == "Data Not Found" ? "0" : iplData.teamone}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main_players_partnership'>
                        <p>Partnership: {iplData.partnership == "Data Not Found" ? "0" : iplData.partnership}</p>
                    </div>
                    <div className='main_batters'>
                        <div className='main_batters_heading'>
                            <div className='main_batter_title_left'>
                                <p>Batter</p>
                            </div>
                            <div className='main_batter_title_right'>
                                <pre> R|B|4S|6S|SR</pre>
                            </div>
                        </div>
                        <div className='main_batteers_players'>
                            <div className='main_batters_player1'>
                                <div className='main_batter_player1_name'>
                                    <p>{iplData.batsman == "Data Not Found" ? "0" : iplData.batsman}</p>
                                </div>
                                <div className='main_batter_player1_score'>
                                    <pre>{iplData.batsmanrun == "Data Not Found" ? "0" : iplData.batsmanrun}|
                                        {iplData.ballsfaced == "Data Not Found" ? "0" : iplData.ballsfaced}|
                                        {iplData.fours == "Data Not Found" ? "0" : iplData.fours}|
                                        {iplData.sixes == "Data Not Found" ? "0" : iplData.sixes}|
                                        {iplData.sr == "Data Not Found" ? "0" : iplData.sr}
                                    </pre>
                                </div>
                            </div>
                            <div className='main_batters_player2'>
                                <div className='main_batter_player2_name'>
                                    <p>{iplData.batsmantwo == "Data Not Found" ? "0" : iplData.batsmantwo}</p>
                                </div>
                                <div className='main_batter_player2_score'>
                                    <pre>{iplData.batsmanrun == "Data Not Found" ? "0" : iplData.batsmanrun}|
                                        {iplData.batsmanrun == "Data Not Found" ? "0" : iplData.ballsfaced}|
                                        {iplData.batsmanrun == "Data Not Found" ? "0" : iplData.fours}|
                                        {iplData.batsmanrun == "Data Not Found" ? "0" : iplData.sixes}|
                                        {iplData.batsmanrun == "Data Not Found" ? "0" : iplData.sr}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main_bowler'>
                        <div className='main_bowler_heading'>
                            <div className='main_bowler_title_left'>
                                <p>Bowler</p>
                            </div>
                            <div className='main_bowler_title_right'>
                                <pre>O | M | R | W </pre>
                            </div>
                        </div>
                        <div className='main_bowler_players'>
                            <div className='main_bowler_player1'>
                                <div className='main_bowler1_name'>
                                    <p>{iplData.bowler == "Data Not Found" ? "0" : iplData.bowler}</p>
                                </div>
                                <div className='main_bowler1_score'>
                                    <pre>
                                        {iplData.bowlerover == "Data Not Found" ? "0" : iplData.bowlerover}|
                                        {iplData.bowlermaiden == "Data Not Found" ? "0" : iplData.bowlermaiden}|
                                        {iplData.bowlerruns == "Data Not Found" ? "0" : iplData.bowlerruns}|
                                        {iplData.bowlewickets == "Data Not Found" ? "0" : iplData.bowlewickets}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main_recent_bolls'>
                        <p>Recent: {iplData.recentballs == "Data Not Found" ? "0" : iplData.recentballs}</p>
                    </div>
                    <div className='main_last_wicket'>
                        <p>Last Wkt: {iplData.lastwicket == "Data Not Found" ? "0" : iplData.lastwicket}</p>
                    </div>
                    <div className='main_recent_bolls'>
                        <p>Commentary: {iplData.commentary}</p>
                    </div>
                </>
            ) : (
                <div className="loading">
                    Loading Data...
                </div>

            )

            }
        </div>
    )
}

export default LiveScore