import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accueil: 'nav-item',
            discographie: 'nav-item',
            concerts: 'nav-item',
            actualites: 'nav-item',
            apropos: 'nav-item'
        }

    }

    componentDidMount() {
        if (this.props.toPage != null) {
            switch (this.props.toPage) {
                default:
                case 'accueil':
                    this.setState ({
                        accueil: 'nav-item active',
                        discographie: 'nav-item',
                        concerts: 'nav-item',
                        actualites: 'nav-item',
                        apropos: 'nav-item'
                    });
                    break;
                case 'discographie':
                    this.setState ({
                        accueil: 'nav-item',
                        discographie: 'nav-item active',
                        concerts: 'nav-item',
                        actualites: 'nav-item',
                        apropos: 'nav-item'
                    })
                    break;
                case 'concerts':
                    this.setState ({
                        accueil: 'nav-item',
                        discographie: 'nav-item',
                        concerts: 'nav-item active',
                        actualites: 'nav-item',
                        apropos: 'nav-item'
                    })
                    break;
                case 'actualites':
                    this.setState ({
                        accueil: 'nav-item',
                        discographie: 'nav-item',
                        concerts: 'nav-item',
                        actualites: 'nav-item active',
                        apropos: 'nav-item'
                    })
                    break;
                case 'apropos':
                    this.setState ({
                        accueil: 'nav-item',
                        discographie: 'nav-item',
                        concerts: 'nav-item',
                        actualites: 'nav-item',
                        apropos: 'nav-item active'
                    })
                    break;
            }

        } 
    }

    render() {
        return (
            <div>
                
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link class="navbar-brand" to="/">Jul</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li id="accueil" class={this.state.accueil}>
                                    <Link class="nav-link" to="">Accueil <span class="sr-only">(current)</span></Link>
                                </li>
                                <li id="discographie" class={this.state.discographie}>
                                    <Link class="nav-link" to="/discographie">Discographie</Link>
                                </li>
                                <li id="concerts" class={this.state.concerts}>
                                    <Link class="nav-link" to="/concerts">Concerts</Link>
                                </li>
                                <li id="actualites" class={this.state.actualites}>
                                    <Link class="nav-link" to="/actualites">Actualités</Link>
                                </li>
                                <li id="apropos" class={this.state.apropos}>
                                    <Link class="nav-link" to="/apropos">A Propos</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    };
}

export default Header;