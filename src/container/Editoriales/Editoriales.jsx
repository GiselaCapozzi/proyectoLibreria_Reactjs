import { Component } from 'react';
import { editoriales } from '../../data/editoriales';
import Editorial from '../../components/Editorial/Editorial'
import './Editoriales.module.css';

export class Editoriales extends Component {
    render () {
        return (
            <div className='container'> 
                <span>EDITORIALES</span>

                <div className='row tarjeta'>
                    {/* <div className='col-12 col-md-6 col-lg-4'> */}
                    {
                        editoriales.map(editorial => (
                        <Editorial 
                            imagen={editorial.imagen}
                            nombre={editorial.nombre}
                            key={editorial.id}
                        />
                        ))
                    }
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Editoriales;