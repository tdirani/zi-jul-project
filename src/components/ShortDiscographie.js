import React from 'react';

//Images
import Rien100Rien from "../img/Rien100Rien.jpg";
import Albumgratuit from "../img/AlbumGratuitVol4.jpg";
import LaTeteDansLesNuages from "../img/LaTeteDansLesNuages.jpg";
import LaZoneEnPersonne from "../img/LaZoneEnPersonne.jpg";
import LOvni from "../img/LOvni.jpg";

class ShortDiscographie extends React.Component {
    render() {
        return (
            <div class="col border border-secondary">
                <h2>Discographie</h2>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col m-3">
                            <img width="180" alt="Rien100Rien" src={Rien100Rien}></img>
                        </div>
                        <div class="col m-3">
                            <img width="180" alt="AlbumGratuitVol4" src={Albumgratuit}></img>

                        </div>
                        <div class="col m-3">
                            <img width="180" alt="LaTeteDansLesNuages" src={LaTeteDansLesNuages}></img>

                        </div>
                        <div class="col m-3">
                            <img width="180" alt="LaZoneEnPersonne" src={LaZoneEnPersonne}></img>

                        </div>
                        <div class="col m-3">
                            <img width="180" alt="LOvni" src={LOvni}></img>

                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default ShortDiscographie;