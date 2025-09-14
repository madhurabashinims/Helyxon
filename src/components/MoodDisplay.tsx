import { MoodType } from './MoodVibeJournal';

interface MoodDisplayProps {
  mood: MoodType;
  description: string;
  isSubmitting: boolean;
}

const moodEmojis = {
  happy: '😊',
  calm: '😌',
  energetic: '⚡',
  sad: '😢',
  excited: '🤩',
  peaceful: '🧘'
};

const moodLabels = {
  happy: 'Happy',
  calm: 'Calm',
  energetic: 'Energetic',
  sad: 'Sad',
  excited: 'Excited',
  peaceful: 'Peaceful'
};

export const MoodDisplay = ({ mood, description, isSubmitting }: MoodDisplayProps) => {
  return (
    <div className="text-center mb-8">
      <div className="glass-card rounded-2xl p-8 mx-auto max-w-md">
        <div className={`text-8xl mb-4 ${isSubmitting ? 'animate-pulse-glow' : 'animate-float'}`}>
          {moodEmojis[mood]}
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-2">
          Feeling {moodLabels[mood]}
        </h2>
        
        {description && (
          <p className="text-lg text-white/80 italic">
            "{description}"
          </p>
        )}
        
        {isSubmitting && (
          <div className="mt-4">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-white/30 border-t-white mx-auto"></div>
            <p className="text-white/70 mt-2 text-sm">Capturing your vibe...</p>
          </div>
        )}
      </div>
    </div>
  );
};