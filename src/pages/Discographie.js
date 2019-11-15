import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExtendedDiscographie from '../components/ExtendedDiscopgraphie';

class Discographie extends React.Component {

    render() {
        return (
            <div className="App bg-dark">
                <Header toPage={this.props.toPage} />
                <div class="col border border-secondary text-light">
                        <ExtendedDiscographie/>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Discographie;