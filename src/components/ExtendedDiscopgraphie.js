import React from 'react';
import Youtube from 'react-youtube';
// import CompReactPlayer from './ReactPlayer';

//Images
import Rien100Rien from "../img/Rien100Rien.jpg";
import Albumgratuit from "../img/AlbumGratuitVol4.jpg";
import LaTeteDansLesNuages from "../img/LaTeteDansLesNuages.jpg";
import LaZoneEnPersonne from "../img/LaZoneEnPersonne.jpg";
import LOvni from "../img/LOvni.jpg";

class ExtendedDiscographie extends React.Component {

    constructor() {
        super();

        this.state = {
            videoId: '',
            opts: {
                height: '300',
                width: '100%',
                playerVars: {
                    autoplay: 0
                }
            }
        }

        this.clicked.bind(this);
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    clicked(url) {
        // let url = 'https://www.youtube.com/watch?v=RMNCkopwr08';
        // let urlsliced = url.slice(url.indexOf('v=') +2, url.length);
        if (url != null)
            this.setState({
                videoId: url.slice(url.indexOf('v=') + 2, url.length)
            });
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 m-5 text-left">
                        <h1 class='center'>Rien 100 Rien</h1>
                        <img class="float-left rounded" width="300" alt="Rien100Rien" src={Rien100Rien} />
                        <div class="row">
                            <div class="col-7">
                                <ul class='list-group'>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=RMNCkopwr08')} >Play </button> <p class=''>1. La bandite</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=ByHxaDIyRTk')} >Play </button> <p class=''>2. JCVD</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=2GTsPB3oY9Y')} >Play </button> <p class=''>3. Salvatrucha</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=0rZy5vEgkA0')} >Play </button> <p class=''>4. Sakakini</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=P5PEesp95YU')} >Play </button> <p class=''>5. La Machine</p></li>
                                </ul>
                            </div>
                            <div class="col-3 float-right m-auto">

                                <Youtube
                                    videoId={this.state.videoId}
                                    opts={this.state.opts}
                                    onReady={this._onReady}
                                />

                            </div>
                        </div>
                    </div>
                    <div class="col-12 m-5 text-left">
                    <h1 class='center'>Album Gratuit Vol.4</h1>
                        <img class="float-left rounded" width="300" alt="AlbumgratuitVol4" src={Albumgratuit} />
                        <div class="row">
                            <div class="col-7">
                                <ul class='list-group'>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=RMNCkopwr08')} >Play </button> <p class=''>1. La bandite</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=ByHxaDIyRTk')} >Play </button> <p class=''>2. JCVD</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=2GTsPB3oY9Y')} >Play </button> <p class=''>3. Salvatrucha</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=0rZy5vEgkA0')} >Play </button> <p class=''>4. Sakakini</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=P5PEesp95YU')} >Play </button> <p class=''>5. La Machine</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 m-5 text-left">
                    <h1 class='center'>La tête dans les nuages</h1>
                        <img class="float-left rounded" width="300" alt="LaTeteDansLesNuages" src={LaTeteDansLesNuages} />
                        <div class="row">
                            <div class="col-7">
                                <ul class='list-group'>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=RMNCkopwr08')} >Play </button> <p class=''>1. La bandite</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=ByHxaDIyRTk')} >Play </button> <p class=''>2. JCVD</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=2GTsPB3oY9Y')} >Play </button> <p class=''>3. Salvatrucha</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=0rZy5vEgkA0')} >Play </button> <p class=''>4. Sakakini</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=P5PEesp95YU')} >Play </button> <p class=''>5. La Machine</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 m-5 text-left">
                    <h1 class='center'>La zone en personne</h1>
                        <img class="float-left rounded" width="300" alt="LaZoneEnPersonne" src={LaZoneEnPersonne} />
                        <div class="row">
                            <div class="col-7">
                                <ul class='list-group'>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=RMNCkopwr08')} >Play </button> <p class=''>1. La bandite</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=ByHxaDIyRTk')} >Play </button> <p class=''>2. JCVD</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=2GTsPB3oY9Y')} >Play </button> <p class=''>3. Salvatrucha</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=0rZy5vEgkA0')} >Play </button> <p class=''>4. Sakakini</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=P5PEesp95YU')} >Play </button> <p class=''>5. La Machine</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 m-5 text-left">
                    <h1 class='center'>L'ovni</h1>
                        <img class="float-left rounded" width="300" alt="LOvni" src={LOvni} />
                        <div class="row">
                            <div class="col-7">
                                <ul class='list-group'>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=RMNCkopwr08')} >Play </button> <p class=''>1. La bandite</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=ByHxaDIyRTk')} >Play </button> <p class=''>2. JCVD</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=2GTsPB3oY9Y')} >Play </button> <p class=''>3. Salvatrucha</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=0rZy5vEgkA0')} >Play </button> <p class=''>4. Sakakini</p></li>
                                    <li class='list-group-item bg-dark' ><button class='btn btn-light float-left btn-sm ' onClick={this.clicked.bind(this, 'https://www.youtube.com/watch?v=P5PEesp95YU')} >Play </button> <p class=''>5. La Machine</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };


}

export default ExtendedDiscographie;