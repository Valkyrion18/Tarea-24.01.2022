import { Form, Button } from 'react-bootstrap';
import FormHook from './FormHook';

const Formulario = () => {

    const { data, handleSubmit, handleInputChange } = FormHook()

    return (
        <div>
            <h1>Formulario de registro</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="correo"
                        value={data.correo} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="nombre" value={data.nombre} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="button">
                    Enviar
                </Button>
            </Form>
        </div>
    );
}

export default Formulario;
