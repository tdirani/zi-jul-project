import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExtendedApropos from '../components/ExtendedApropos';

class Apropos extends React.Component {

    render() {
        return (
            <div className="App bg-dark">
                <Header toPage={this.props.toPage} />

                <div class="container-fluid text-light">
                    <div class="row">
                        <ExtendedApropos/>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }

}

export default Apropos;