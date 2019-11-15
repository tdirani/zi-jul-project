import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExtendedConcerts from '../components/ExtendedConcerts';

class Concerts extends React.Component {
    getDate() {
        const today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    }

    render() {
        return (
            <div className="App bg-dark">
                <Header toPage={this.props.toPage} />

                <div class="col border border-secondary text-light">

                    <ExtendedConcerts date={this.getDate()} />

                </div>

                <Footer />
            </div>
        );
    }

}

export default Concerts;