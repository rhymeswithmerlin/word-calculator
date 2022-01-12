import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import { getColorFromValue } from './services/colors';
import { getWordValue } from './services/words';

const DEFAULT_METER_COLOR = 'black';

function App() {

  const [name, setName] = useState('');
  const [nameVariations, setNameVariations] = useState([]);
  const [wordValue, setWordValue] = useState(0);
  const [wordLength, setWordLength] = useState(0);
  const [wordRatio, setWordRatio] = useState(0);
  const [meterColor, setMeterColor] = useState(DEFAULT_METER_COLOR);

  const renderListItems = (arr) => {
    return arr.map(item => <li key={item}>{item}</li>)
  }
  
  const handleChange = (e) => { 
// /TODO how to set multiple props at once AND repaint sdom
    let name = e.target.value;
    setName(name);
    setWordValue(getWordValue(name));
    setWordLength(name.length);
    setMeterColor(getColorFromValue(getWordValue(name)));
    setWordRatio(getWordValue(name) / name.length);
  }
  const handleSubmit = (e) => {
    console.log("submitHandled")
    setNameVariations([ ...nameVariations, {
      name,
      wordLength,
      wordValue,
      wordRatio
    }])
    clearCurrentData();
  }

  const clearCurrentData = () => {
    setName('');
    setWordValue(0);
    setWordLength(0);
    setMeterColor(DEFAULT_METER_COLOR);
    setWordRatio(0);
  }
  
  return (
    <div className="App">
      <div className="topSection" style={{backgroundColor: meterColor}}>
        <div className="dataEntrySection">
          <input value={name} onChange={handleChange} />
          <button className="saveButton" onClick={handleSubmit}>Save</button>
        </div>
        <div className="resultsSection">
          <div className="displayArea">
          </div>
          <h1>Word Value: {wordValue}</h1>
          <h2>Word Length: {wordLength}</h2>
          <h2>Value ratio (Value / Length): {wordRatio}</h2>
        </div>
      </div>
      <div className="bottomSection">
      Results
        <table>
          <thead>
            <th>Word</th>
            <th>Value</th>
            <th>Length</th>
            <th>Ratio</th>
          </thead>
          <tbody>
            {nameVariations && nameVariations.map(word =>
                      <tr>
                        <td>{word.name}</td>
                        <td>{word.wordValue}</td>
                        <td>{word.wordLength}</td>
                        <td>{word.wordRatio}</td>
                      </tr>
            )}
          </tbody>
        </table>
      </div>



    </div>
  );
}

export default App;
