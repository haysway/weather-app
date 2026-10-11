import { useEffect, useState, useReducer } from 'react';
import ErrorModal from './ErrorModal';

const initialFormState = {
    city: ''
}

function formReducer(state, action) {
    switch (action.type) {
        case 'SET_CITY':
            return {
                ...state,
                city: action.value
            };
        case 'RESET':
            return initialFormState;
        
        default:
            return state;
    }
}

function CityForm(prop) {
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const [error, setError] = useState('');

    useEffect(() => {
        const city = formState.city.trim();
        if (!city) return;

        const timerId = setTimeout(() => {
            prop.onCityChange(city);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [formState.city, prop.onCityChange]);

    const submitHandler = (event) => {
        event.preventDefault();
        
        // check for standard error
        if (formState.city.trim() === '') {
            setError({
                title: 'Missing fields',
                message: 'Please fill out a city'
            });
            return;
        }

        setError(null);

        prop.onCitySubmit(formState.city);

        dispatch({ type: 'RESET' });
    };

    return (
        <>
            {error && (
                <ErrorModal 
                    title={error.title}
                    message={error.message}
                    onConfirm={() => setError(null)}
                />
            )}
            <form className="card" onSubmit={submitHandler}>
                <div className="form-control">
                    <label>City:</label>

                    <input
                        type="text"
                        value={formState.city}
                        onChange={(e) => 
                            dispatch({
                                type: 'SET_CITY',
                                value: e.target.value
                            })
                        }
                    />
                </div>

                <button type="submit">Get Weather</button>
            </form>
        </>
    );
}

export default CityForm;