import React from 'react';


export const contextState = {
  model: 'modelR',
  init: false,
  totalValue: 0,
  stagingValue: 0,
  color: {},
  wheels: {},
  engine: {},
  step: "",
  selected: {},
  nextStep: "",
  data: null,
  updateState: ({...states}) => {}
}

const AppContext = React.createContext({
  ...contextState
});

export default AppContext;