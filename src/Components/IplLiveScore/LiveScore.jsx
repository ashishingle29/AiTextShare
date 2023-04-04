import React, { useState, useEffect } from "react";
import './LiveScore.css'


function LiveScore() {

    //other team score
    //team 1 logo
    //team 2 logo

    // let obj = {
    //     "success": true,
    //     "livescore": {
    //         "title": "Lucknow Super Giants vs Delhi Capitals, 3rd Match",
    //         "current": "DC - 143\/8 (19.2)",
    //         "batsman": "Chetan Sakariya*",
    //         "batsmanrun": "4",
    //         "ballsfaced": "(1)",
    //         "fours": "1",
    //         "sixes": "0",
    //         "sr": "400",
    //         "batsmantwo": "Kuldeep Yadav",
    //         "batsmantworun": "6",
    //         "batsmantwoballsfaced": "(10)",
    //         "batsmantwofours": "0",
    //         "batsmantwosixes": "0",
    //         "batsmantwosr": "60",
    //         "bowler": "Mark Wood*",
    //         "bowlerover": "3.2",
    //         "bowlerruns": "14",
    //         "bowlerwickets": "4",
    //         "bowlermaiden": "0",
    //         "bowlertwo": "Jaydev Unadkat",
    //         "bowletworover": "3",
    //         "bowlertworuns": "39",
    //         "bowlertwowickets": "0",
    //         "bowlertwomaiden": "0",
    //         "partnership": "4(1)",
    //         "recentballs": "... 6 0 1 | 1 0 1 1 0 Wd5 0 | W 4",
    //         "lastwicket": "Axar Patel c (sub)Prerak Mankad b Mark Wood 16(11) - 139\/8 in 19.1 ov.",
    //         "runrate": "CRR: 7.40",
    //         "commentary": [
    //             "Avesh Khan gives Axar a warning, asks him to stay inside the crease at the bowler's end"
    //         ],
    //         "teamone": "Data Not Found",
    //         "teamtwo": "Data Not Found",
    //         "update": "Delhi Capitals need 51 runs in 4 balls"
    //     }
    // }

    // let data = obj.livescore;

    let logos = {
        "Mumbai Indians": "https://www.rajasthanroyals.com/static-assets/images/teams/1111.png?v=5.24",
        "Delhi Capitals": "https://www.rajasthanroyals.com/static-assets/images/teams/1109.png?v=5.24",
        "Royal Challengers Bangalore": "https://www.rajasthanroyals.com/static-assets/images/teams/1105.png?v=5.24",
        "Sunrisers Hyderabad": "https://www.rajasthanroyals.com/static-assets/images/teams/1379.png?v=5.24",
        "Kolkata Knight Riders": "https://www.rajasthanroyals.com/static-assets/images/teams/1106.png?v=5.24",
        "Chennai Super Kings": "https://www.rajasthanroyals.com/static-assets/images/teams/1108.png?v=5.24",
        "Gujarat Titans": "https://www.rajasthanroyals.com/static-assets/images/teams/2955.png?v=5.24",
        "Panjab Kings": "https://www.rajasthanroyals.com/static-assets/images/teams/1107.png?v=5.24",
        "Rajasthan Royals": "https://www.rajasthanroyals.com/static-assets/images/teams/1110.png?v=5.24",
        "Lucknow Super Giants": "https://www.rajasthanroyals.com/static-assets/images/teams/2954.png?v=5.24",
    } 
    
    const [news, setNews] = useState({});

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetch(
                "https://cricket-live-api.vercel.app/cri.php?url=https://www.cricbuzz.com/live-cricket-scores/66208/rr-vs-pbks-8th-match-indian-premier-league-2023"
            )
                .then((response) => response.json())
                .then((data) => setNews(data))
                .catch((e) => console.log(e.message))
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    let result = { data: news };

    let x = Object.keys(result.data)

    if (x.length != 0) {

        
        let data = result.data.livescore;

        let { title,
            current,
            batsman,
            batsmanrun,
            ballsfaced,
            fours,
            sixes,
            sr,
            batsmantwo,
            bowler,
            bowlerover,
            bowlerruns,
            bowlerwickets,
            bowlermaiden,
            partnership,
            recentballs,
            lastwicket,
            runrate,
            commentary,
            teamone,
            teamtwo, update } = data; 
        
            
        return (
            <div className='main'>
                <div className='main_page_heading'>
                    <h1>TATA IPL Today Live Score</h1>
                </div>
                <div className='main_match_title'>
                    <h2>{title}</h2>
                </div>
                <div className='main_status_crr'>
                    <p>{update}</p>
                    <p>{runrate}</p>
                </div>
                <div className='main_team_score'>
                    <div className='main_teamscore_title'>
                        Today IPL Match {title.split(',')[0]}
                    </div>
                    <div className='main_teams_scores'>
                        <div className='main_team1'>
                            <div className='main_tram1_logo_name'>
                                <img src='https://www.rajasthanroyals.com/static-assets/images/teams/1110.png?v=5.24' alt="Team 1 Logo" />
                                <p>{title.split("vs")[0]}</p>
                            </div>
                            <div className='main_team1_scores'>
                                {current}
                            </div>
                        </div>
                        <div className='main_team2'>
                            <div className='main_tram2_logo_name'>
                                <img src='https://www.rajasthanroyals.com/static-assets/images/teams/1107.png?v=5.24' alt="Team 1 Logo" />
                                <p>{title.split("vs")[1].split(",")[0]}</p>
                            </div>
                            <div className='main_team2_scores'>
                                {current}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main_players_partnership'>
                    <p>Partnership: {partnership}</p>
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
                                <p>{batsman}</p>
                            </div>
                            <div className='main_batter_player1_score'>
                                <pre>{batsmanrun}|{ballsfaced}|{fours}|{sixes}|{sr}   </pre>
                            </div>
                        </div>
                        <div className='main_batters_player2'>
                            <div className='main_batter_player2_name'>
                                <p>{batsmantwo}</p>
                            </div>
                            <div className='main_batter_player2_score'>
                                <pre>{batsmanrun}|{ballsfaced}|{fours}|{sixes}|{sr}   </pre>
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
                                <p>{bowler}</p>
                            </div>
                            <div className='main_bowler1_score'>
                                <pre>{bowlerover} | {bowlermaiden}  | {bowlerruns} | {bowlerwickets}   </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main_recent_bolls'>
                    <p>Recent: {recentballs}</p>
                </div>
                <div className='main_last_wicket'>
                    <p>Last Wkt: {lastwicket}</p>
                </div>
                <div className='main_recent_bolls'>
                    <p>Commentary: {commentary}</p>
                </div>
            </div>
        )
    }
}

export default LiveScore