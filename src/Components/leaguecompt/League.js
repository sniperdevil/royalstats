import React, { Component } from 'react';
import './league.css';
import badge from '../../assest/img/legendaryPoints.png';
import Trophy from '../../assest/img/Trophy.png';
import LeagueData from '../StatsHolder/LeagueData';


export default class League extends Component {



    render() {


        const { leagueStatistics } = this.props;
        const currentSeason = Object.assign({}, leagueStatistics.currentSeason)
        const previousSeason = Object.assign({}, leagueStatistics.previousSeason)
        const bestSeason = Object.assign({}, leagueStatistics.bestSeason)




       


        return (


            <div>
                <div className="container badge-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex stats-header">
                                <img src={badge} alt="Badge-icon" width="50" height="55" />
                                <span className="header-text">LeagueStats</span>
                            </div>
                            <div className="offset-2 d-flex">








                                <div className="outer-box">
                                    <div className="inner-box text-center">
                                        <span className="d-block mt-2">Previous Season</span>
                                        <LeagueData
                                            trophies={previousSeason.bestTrophies}
                                        />
                                    </div>
                                    <div className="conternt-box d-flex mt-3 text-center">
                                        <span className="align-middle text-monospace">
                                            <img src={Trophy} className="align-middle icon-s" alt="" />
                                            {previousSeason.bestTrophies}
                                        </span>
                                    </div>
                                </div>

                                <div className="outer-box">
                                    <div className="inner-box text-center">
                                        <span className="d-block mt-2">Currunt Season</span>
                                        <LeagueData
                                            trophies={currentSeason.bestTrophies}
                                        />
                                    </div>
                                    <div className="conternt-box d-flex mt-3 text-center">
                                        <span className="align-middle text-monospace">
                                            <img src={Trophy} className="align-middle icon-s" alt="" />
                                            {currentSeason.bestTrophies}
                                        </span>
                                    </div>
                                </div>


                                <div className="outer-box">
                                    <div className="inner-box text-center">
                                        <span className="d-block mt-2">Best Season</span>
                                        {/* <img src={badge} className="d-block" alt="Badge-icon" width="50" height="55" /> */}
                                        <LeagueData
                                            trophies={bestSeason.trophies}
                                        />
                                    </div>
                                    <div className="conternt-box d-flex mt-3 text-center">
                                        <span className="align-middle text-monospace">
                                            <img src={Trophy} className="align-middle icon-s" alt="" />
                                            {bestSeason.trophies}
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}