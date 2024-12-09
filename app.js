const audioClips = [
    { name: 'brainstorm', file: 'audio/g2_brainstorm.wav' },
    { name: 'long', file: 'audio/g2_long.wav' },
    { name: 'pizza', file: 'audio/g2_pizza.wav' },
    { name: 'sadsacks', file: 'audio/g2_sadsacks.wav' },
    { name: 'thisisg2', file: 'audio/g2_thisisg2.wav' }
];

function SoundButton({ name, file }) {
    const playSound = () => {
        const audio = new Audio(file);
        audio.play();
    };

    return (
        <button
            onClick={playSound}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg m-2 transform hover:scale-105 transition-transform duration-200 shadow-lg"
        >
            {name}
        </button>
    );
}

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-green-500 mb-8">Gremlins 2 Soundboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {audioClips.map(clip => (
                    <SoundButton
                        key={clip.name}
                        name={clip.name}
                        file={clip.file}
                    />
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));