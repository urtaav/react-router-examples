import React, { useEffect, useState } from 'react'
import { MultistepProvider, useMultistep } from './context/MultistepContext';
import './MultiStep.css';

const Step1 = () => {
    const { state, dispatch } = useMultistep();
    const [inputValue, setInputValue] = useState('');

    const handleNext = () => {
        // Aquí podrías validar el input, realizar lógica específica, etc.
        dispatch({ type: 'NEXT_STEP', payload: { step1Data: inputValue } });
    };

    return (
        <div>
            <h2>Step 1</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};
const Step2 = () => {
    const { state, dispatch } = useMultistep();

    const [options, setOptions] = React.useState([]);
    const [selectedOption, setSelectedOption] = React.useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setOptions(data);
            } catch (error) {
                console.error('Error al obtener opciones:', error);
            }
        };

        fetchData();
    }, []);

    const handleNext = () => {
        // Realizar la petición antes de avanzar al siguiente paso
        dispatch({ type: 'NEXT_STEP', payload: { step2Data: selectedOption } });
    };

    const handlePrevious = () => {
        dispatch({ type: 'PREVIOUS_STEP' });
    };

    return (
        <div className="step-container">
            <h2>Step 2</h2>
            <label>Selecciona una opción:</label>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option) => (
                    <option key={option.id} value={option.email}>
                        {option.username} - {option.email}
                    </option>
                ))}
            </select>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};
const FinalStep = () => {
    const { state } = useMultistep();


    const handleSubmit = () => {
        console.log("handleSubmit",state.data);
    }
    return (
        <div className="step-container">
            <h2>Final Step</h2>
            <p>Step 1 Data: {state.data.step1Data}</p>
            <p>Step 2 Data: {state.data.step2Data}</p>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

const MultiStep = () => {

    const { state } = useMultistep();

    return (
        <div>
            {state.step === 1 && <Step1 />}
            {state.step === 2 && <Step2 />}
            {state.step === 3 && <FinalStep />}
        </div>
    );
}

export default MultiStep
