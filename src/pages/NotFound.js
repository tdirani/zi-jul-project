import React from 'react';

class NotFoundPage extends React.Component{

    render(){
        return(
            <div>
                <h1>404 Not Found!</h1>
                <a href="/"><small>Euh... Tu t'es perdu ?</small></a>
                {console.log(this.props.test)}
            </div>
        );
    }

}

export default NotFoundPage;