import React from 'react';


export const contextState = {
  init: false,
  totalValue: 0,
  stagingValue: 0,
  color: {},
  wheel: {},
  engine: {},
  step: "",
  selected: {step: false, engine: false, color: false, wheels: false},
  nextStep: "",
  data: null,
  updateState: ({...states}) => {}

}

const AppContext = React.createContext({
  ...contextState
});

export default AppContext;