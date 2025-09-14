import { MoodType } from './MoodVibeJournal';
import { Button } from '@/components/ui/button';

interface MoodSelectorProps {
  selectedMood: MoodType;
  onMoodChange: (mood: MoodType) => void;
}

const moodOptions = [
  { type: 'happy' as MoodType, emoji: '😊', label: 'Happy', description: 'Joyful and upbeat' },
  { type: 'calm' as MoodType, emoji: '😌', label: 'Calm', description: 'Peaceful and relaxed' },
  { type: 'energetic' as MoodType, emoji: '⚡', label: 'Energetic', description: 'Full of energy' },
  { type: 'sad' as MoodType, emoji: '😢', label: 'Sad', description: 'Feeling down' },
  { type: 'excited' as MoodType, emoji: '🤩', label: 'Excited', description: 'Thrilled and enthusiastic' },
  { type: 'peaceful' as MoodType, emoji: '🧘', label: 'Peaceful', description: 'Zen and mindful' },
];

export const MoodSelector = ({ selectedMood, onMoodChange }: MoodSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white text-center">
        What's your vibe today?
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {moodOptions.map((mood) => (
          <Button
            key={mood.type}
            onClick={() => onMoodChange(mood.type)}
            variant="secondary"
            className={`p-6 h-auto flex flex-col items-center space-y-2 transition-all duration-300 ${
              selectedMood === mood.type
                ? 'bg-white/30 border-2 border-white/60 pulse-glow'
                : 'bg-white/10 border border-white/20 hover:bg-white/20'
            }`}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <div className="text-center">
              <div className="font-semibold text-white">{mood.label}</div>
              <div className="text-sm text-white/70">{mood.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};