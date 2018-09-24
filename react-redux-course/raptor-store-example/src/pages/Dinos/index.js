import React, { Component } from 'react';
import DinoService from '../../services/dinoService';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

class DinosPage extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { 
            dinos: [],
            loading: true,
        };
    }

    componentDidMount() {
        DinoService.getAll().then( data => {
            this.setState({
                dinos: data.dinosaurs,
                loading: false,
            })
        });
    }

    render() {
        return (
            <section>
                <h1>Our dinosaurs</h1>
                <div className="row spacing-around">
                    <Loading status={this.state.loading}/>
                    {
                        this.state.dinos.map(dino => (
                            <Card
                                onClick={ this.props.addToCart.bind(this, dino) }
                                classname="col-4" 
                                key={dino.id}
                                image={dino.image.url}
                                price={dino.price}
                            />
                        ))
                    }
                </div>
            </section>
            
        );
    }
}

export default DinosPage;