import React from 'react';
import snapcode from '../img/snapcode-jul.png';
import insta from '../img/insta-icone.png';
import twitter from '../img/twitter-icone.png';

class Footer extends React.Component {
    render() {
        return (
            // <footer>
            //     <div class="container-fluid text-light">
            //         <div class="row">
            //             <div class="col border border-secondary">
            //                 <h2>A propos</h2>
            //                 <br />
            //                 <p>Jul (/Djoul/), de son vrai nom Julien Mari, est un rappeur et chanteur français, né le 14 janvier 1990 à Marseille.  </p>
            //                 <p>Il sort son premier single, Sort le cross volé, en novembre 2013. Le single est suivi en février 2014 d'un album entier, Dans ma paranoïa, le premier d'une série prolifique : 2 albums complets par an depuis le début de sa carrière, tous primés au moins d'un disque de platine. </p>
            //                 <p>En 2015, Jul quitte le label Liga One Industry à la suite de désaccords financiers et fonde son propre label indépendant, D'or et de platine. L'année suivante, il reçoit la récompense du meilleur album de musique urbaine aux 32e Victoires de la musique pour l'album My World. </p>
            //             </div>
            //         </div>
            //     </div>
            // </footer>
            <footer class='footer bg-dark'>
                <div class='container-fluid text-light'>
                    <div class='row'>
                        <div class="col-md">
                            <p>La Team Jul</p>
                        </div>
                        <div class='col-sm-2'>
                            <div class='imgAbt'>
                                <a href='https://www.instagram.com/juldetp/'><img width='45' alt='Insta: juldetp' src={insta} /></a>
                                <a href='https://twitter.com/jul'><img width='45' alt='Twitter: jul' src={twitter} /></a>
                                <a href='https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=jul135city&type=SVG'><img width='45' alt='Snap: jul135city' src={snapcode} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            // <footer class='footer bg-dark'>
            //     <div class='container-fluid text-light'>
            //         La Team Jul
            //             <div class='float-right'>
            //         </div>

            //     </div>
            // </footer>
        )
    };
}

export default Footer;