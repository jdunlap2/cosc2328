// IC18 – COSC 2328 – Professor McCurry
// Implemented by: Jessica Dunlap

console.log('React version:', React.version);
console.log('ReactDOM available:', typeof ReactDOM !== 'undefined');

// context

const HabitatContext = React.createContext();

// components

const Header = () => {
    const {mode} = React.useContext(HabitatContext);
    return(
        <header>
        <h1> 🌍pixels habitat</h1>
        <p>{mode === 'day' ? '☀️ Day Mode' : '🌙 Night Mode'}</p>
        </header>
    );
};

const HabitatView = () => {
    const {mode} = React.useContext(HabitatContext);
    return(
        <div className="scene">
            {mode === 'day' ? '☀️ 🌿 🐾' : '🌙 ⭐️ 🐾'}
        </div>
    );
};


const ModeToggle = () => {
    const {mode, toggleMode} = React.useContext(HabitatContext);
    return(
        <div classsName="controls">
            <button onClick={toggleMode}>
                {mode === 'day' ? 'Switch to Night Mode' : 'Switch to Day Mode'}
            </button>
        </div>
    );
};

const App = () => {
    const [mode, setMode] = React.useState('day');
    const toggleMode = () => setMode(prev => prev === 'day' ? 'night' : 'day');

    return(
        <HabitatContext.Provider value={{mode, toggleMode}}>
            <div className={"habitat " + mode}>
            <Header />
            <HabitatView />
            <ModeToggle />
            </div>
        </HabitatContext.Provider>
    );
};


// mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);