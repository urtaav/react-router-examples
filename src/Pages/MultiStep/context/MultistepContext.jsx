import React, { createContext, useContext, useReducer } from 'react';

const MultistepContext = createContext();

const initialState = {
    step: 1,
    data: {}
};

const multistepReducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_STEP':
            return { ...state, step: state.step + 1, data: { ...state.data, ...action.payload } };
        case 'PREVIOUS_STEP':
            return { ...state, step: state.step - 1 };
        default:
            return state;
    }
}

const MultistepProvider = ({ children }) => {
    const [state, dispatch] = useReducer(multistepReducer, initialState);

    return (
        <MultistepContext.Provider value={{ state, dispatch }}>
            {children}
        </MultistepContext.Provider>
    )
}
const useMultistep = () => {
    const context = useContext(MultistepContext);
    if (!context) {
      throw new Error('useMultistep debe ser utilizado dentro de un MultistepProvider');
    }
    return context;
  };
  
  export { MultistepProvider, useMultistep };