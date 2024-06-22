import App from "./App";
import { render, fireEvent } from '@testing-library/react';

test('renders App component', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });


test('evitar xss sanitizando la entrada', ()=>{
    // interceptar todos los "alert". Se verifica si se llama a alert

    window.alert = jest.fn();
    
    const {getByText,getByTestId, getByLabelText, getByRol,} = render(<App/>)

    // Simular la entrada con un script malicioso

    const input = getByTestId('inputNombre');
    fireEvent.change(input, {target: {value:"<img src=x onerror=alert('XSS') />"}})
console.log('input', input.value)

    const enviarBtn = getByText('Enviar');
    fireEvent.click(enviarBtn);
    // Verificar que el script no se ejecuta
    expect(window.alert).not.toHaveBeenCalled;


    //VErificar que se visualice el contenido deseado

})