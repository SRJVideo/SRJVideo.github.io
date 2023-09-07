import React, {Component} from 'react';
import { Col, Form, InputGroup} from "react-bootstrap";
import Taxes from './MontantAvecTaxes'

class TaxeQc extends Component {
    state = {
        montTaxe: new Taxes(0,0)
    }

    getMontantSaisie = () => {
        this.setState(  {
            montTaxe : new Taxes(
                document.getElementById('curann').value,
                document.getElementById('curmont').value)
        })
    }
 //setState () -> { [event.target.name]: event.target.value }
    render() {
        let annees = [];
        for (let i = new Date().getFullYear(); i >= 2011 ; i--) {
            annees.push(<option className='chqAnnee' key={i}>{i}</option>)
        }

        return (
            <div>
                <Form.Group as={Col} controlId='formAnnee'>
                    <Form.Label>Choisissez l'Année du calcul :</Form.Label>
                    <Form.Select onChange={() => this.getMontantSaisie()} id='curann'>
                        {annees}
                    </Form.Select>
                </Form.Group>

                <Form.Label>Tapez le montant avant taxe :</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control onChange={() => this.getMontantSaisie()} id='curmont' type='number' aria-label="Amount (to the nearest dollar)"  />
                </InputGroup>

                <Form.Group className="m" as={Col} controlId='lisibles'>
                    <InputGroup className="mb-3">
                        <Form.Label>TPS :</Form.Label>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control value={this.state.montTaxe.getTPS()} disabled/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Label>TVQ :</Form.Label>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control value={this.state.montTaxe.getTVQ()} disabled/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Label>Montant Total :</Form.Label>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control value={this.state.montTaxe.getMontantAvecTaxe()} disabled/>
                    </InputGroup>
                </Form.Group>
            </div>
        );
    }
}

export default TaxeQc;