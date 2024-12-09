const clips = [
  { id: 'brainstorm', label: 'Brainstorm', file: 'g2_brainstorm.wav' },
  { id: 'long', label: 'Long', file: 'g2_long.wav' },
  { id: 'pizza', label: 'Pizza', file: 'g2_pizza.wav' },
  { id: 'sadsacks', label: 'Sad Sacks', file: 'g2_sadsacks.wav' },
  { id: 'thisisg2', label: 'This is G2', file: 'g2_thisisg2.wav' }
];

const SoundButton = ({ clip, isPlaying, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-4 m-2 rounded-lg font-bold shadow-lg transition-all duration-200 transform hover:scale-105
        ${isPlaying ? 'bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}
      `}
    >
      {clip.label}
    </button>
  );
};

const App = () => {
  const [playingClip, setPlayingClip] = React.useState(null);
  const audioRef = React.useRef(null);

  const playSound = (clip) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    const audio = new Audio(`audio/${clip.file}`);
    audioRef.current = audio;
    
    audio.play();
    setPlayingClip(clip.id);
    
    audio.onended = () => {
      setPlayingClip(null);
    };
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-green-500 mb-8">Gremlins 2 Soundboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {clips.map(clip => (
          <SoundButton
            key={clip.id}
            clip={clip}
            isPlaying={playingClip === clip.id}
            onClick={() => playSound(clip)}
          />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));