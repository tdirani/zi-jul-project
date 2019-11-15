import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TwitterContainer from '../components/TwitterContainer';
// import InstaGrid from '../components/InstaGrid';

class ActualitesPage extends React.Component {

    render() {
        return (
            <div className="App bg-dark">
                <Header toPage={this.props.toPage} />

                {/* <div class="container-fluid text-light">
                    <div class="row">
                        <TwitterContainer/>
                    </div>
                </div> */}

                <div class="col border border-secondary text-light">
                    <div class='col-6'>
                        <TwitterContainer />
                    </div>
                    <div class='col-6'>
                        {/* <InstaGrid account="juldetp" numberOfMediaElements={9} /> */}
                    </div>
                </div>

                <Footer />
            </div>
        );
    }

}

export default ActualitesPage;