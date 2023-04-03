import React from 'react'
import './LiveScore.css'

function LiveScore() {
    return (
        <div className='main'>
            <div className='main_page_heading'>
                <h1>TATA IPL Today Live Score</h1>
            </div>
            <div className='main_match_title'>
                <h2>Royal Challengers Bangalore vs Mumbai Indians, 5th Match </h2>
            </div>
            <div className='main_status_crr'>
                <p>Sunrisers Hyderabad need 140 runs in 47 balls</p>
                <p>CRR: 5.2</p>
            </div>
            <div className='main_team_score'>
                <div className='main_teamscore_title'>
                    Today IPL Match "Team 1" vs "Team 2"
                </div>
                <div className='main_teams_scores'>
                    <div className='main_team1'>
                        <div className='main_tram1_logo_name'>
                            <img src='https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png' alt="Team 1 Logo" />
                            <p>Mumbai Indians</p>
                        </div>
                        <div className='main_team1_scores'>
                            MI - 171/7 (20)
                        </div>
                    </div>
                    <div className='main_team2'>
                        <div className='main_tram2_logo_name'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/300px-Delhi_Capitals_Logo.svg.png' alt="Team 1 Logo" />
                            <p>Delhi Capitals</p>
                        </div>
                        <div className='main_team2_scores'>
                            DC - 138/0 (13.3)
                        </div>
                    </div>
                </div>
            </div>
            <div className='main_players_partnership'>
                <p>Partnership: 27(17)</p>
            </div>
            <div className='main_batters'>
                <div className='main_batters_heading'>
                    <div className='main_batter_title_left'>
                        <p>Batter</p>
                    </div>
                    <div className='main_batter_title_right'>
                        <pre>R|B|4S|6S|SR</pre>
                    </div>
                </div>
                <div className='main_batteers_players'>
                    <div className='main_batters_player1'>
                        <div className='main_batter_player1_name'>
                            <p>Virat Kohli*</p>
                        </div>
                        <div className='main_batter_player1_score'>
                            <pre>26|21|3|0|123.81</pre>
                        </div>
                    </div>
                    <div className='main_batters_player2'>
                        <div className='main_batter_player2_name'>
                            <p>Faf du Plessis</p>
                        </div>
                        <div className='main_batter_player2_score'>
                            <pre>26|21|3|0|123.81</pre>
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
                        O    M    R    W    ECO
                    </div>
                </div>
                <div className='main_bowler_players'>
                    <div className='main_bowler_player1'>
                        <div className='main_bowler1_name'>
                            <p>Bowler 1 Name</p>
                        </div>
                        <div className='main_bowler1_score'>
                            01     01    08     02     123.81
                        </div>
                    </div>
                </div>
            </div>
            <div className='main_recent_bolls'>
                <p>Recent: ... | 2 0 Wd 1 0 0 Wd 6 | L1 0 N1 1</p>
            </div>
            <div className='main_last_wicket'>
                <p>Last Wkt: Sanju Samson c Abhishek Sharma b T Natarajan 55(32) - 187/5 in 18.3 over</p>
            </div>
        </div>
    )
}

export default LiveScore