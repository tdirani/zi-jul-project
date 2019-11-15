import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Actualites from '../components/ShortActualites';
import ShortConcerts from '../components/ShortConcerts';
import ShortDiscographie from '../components/ShortDiscographie';

class MainPage extends React.Component {

    render() {
        return (
            <div className="App bg-dark">
                <Header toPage={this.props.toPage} />

                <div class="container-fluid text-light">
                    <div class="row">
                        <ShortDiscographie/>
                        <ShortConcerts/>
                        <Actualites/>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }

}

export default MainPage;