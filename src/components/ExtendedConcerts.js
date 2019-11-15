import React from 'react';

class ExtendedConcerts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            date: this.props.date
        }
    }    

    isAvailable(concertDate){

        
        let arrayDay = this.state.date.split('-');
        let arrayConcertDay = concertDate.split('-');

        if(arrayDay[0] === arrayConcertDay[0]){
            if(arrayDay[1] === arrayConcertDay[1]){
                if(arrayDay[2] < arrayConcertDay[2]){
                    return "btn btn-light";
                }
            }
        }
        return "btn btn-light disabled";
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 border m-2 p-0">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm text-right m-auto">
                                    <p>Mercredi<br />
                                        <h1>13</h1>
                                        Novembre 2019<br />
                                        19h00
                        </p>
                                </div>
                                <div class="col-sm text-left m-auto">
                                    Accorhotels Arena - Popb Bercy<br />
                                    <strong>Paris (75)</strong>
                                </div>
                                <div class="col-sm m-auto">
                                    <a href='www.google.com' class={this.isAvailable("2019-11-13")}>Réservez vite!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 border m-2 p-0">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm text-right m-auto">
                                    <p>Mercredi<br />
                                        <h1>20</h1>
                                        Novembre 2019<br />
                                        20h00
                        </p>
                                </div>
                                <div class="col-sm text-left m-auto">
                                    Musikhall - Parc Expo Rennes Aeroport<br />
                                    <strong>Rennes (35)</strong>
                                </div>
                                <div class="col-sm m-auto">
                                <a href='https://www.digitick.com/ap/event/jul/rennes-musikhall-/4598' class={this.isAvailable("2019-11-20")}>Réservez vite!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 border m-2 p-0">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm text-right m-auto">
                                    <p>Jeudi<br />
                                        <h1>21</h1>
                                        Novembre 2019<br />
                                        20h00
                        </p>
                                </div>
                                <div class="col-sm text-left m-auto">
                                    Zenith De Nantes Metropole<br />
                                    <strong>Nantes (44)</strong>
                                </div>
                                <div class="col-sm m-auto">
                                <a href='https://www.digitick.com/ap/event/jul/nantes-zenith-/4134?aff=id1infoconcert' class={this.isAvailable("2019-11-21")}>Réservez vite!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 border m-2 p-0">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm text-right m-auto">
                                    <p>Mercredi<br />
                                        <h1>27</h1>
                                        Novembre 2019
                        </p>
                                </div>
                                <div class="col-sm text-left m-auto">
                                    Le Galaxie A Amneville<br />
                                    <strong>Amneville (57)</strong>
                                </div>
                                <div class="col-sm m-auto">
                                <a href='https://www.digitick.com/ap/event/jul/amneville-galaxie-/4601?aff=id1infoconcert' class={this.isAvailable("2019-11-27")}>Réservez vite!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 border m-2 p-0">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm text-right m-auto">
                                    <p>Jeudi<br />
                                        <h1>28</h1>
                                        Novembre 2019<br />
                                        20h00
                        </p>
                                </div>
                                <div class="col-sm text-left m-auto">
                                    Zenith D'auvergne<br />

                                    <strong>Cournon (63)</strong>
                                </div>
                                <div class="col-sm m-auto">
                                <a href='https://www.digitick.com/ap/event/jul/clermont-ferrand-zenith-d-auvergne-/4602' class={this.isAvailable("2019-11-28")}>Réservez vite!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    };
}

export default ExtendedConcerts;