
import React from 'react';
import "./social.scss";

class Social extends React.Component {
    //<div className={`clr-col-12 clr-col-md-6 clr-col-xl-4 ${props.type}`} >
    //<div className="card-block">

    render() {
        return (
            <a href={this.props.linkTo} className='social'>
                <p>{this.props.name}
                    <img src={this.props.image}></img>
                </p>
            </a>

        )
    }
    /*
    return (
        <a href= { ""} >
            <div className="social" >

            </div>
        < /a>

    )
*/
}

export default Social