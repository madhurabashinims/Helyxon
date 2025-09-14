import { MoodEntry, MoodType } from './MoodVibeJournal';
import { formatDistanceToNow } from 'date-fns';
import { Card } from '@/components/ui/card';

interface MoodHistoryProps {
  entries: MoodEntry[];
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

export const MoodHistory = ({ entries }: MoodHistoryProps) => {
  if (entries.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-bold text-white mb-2">No entries yet</h3>
        <p className="text-white/70">Start capturing your daily vibes to see them here!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Your Vibe Journey
      </h2>
      
      <div className="space-y-4">
        {entries.map((entry) => (
          <Card key={entry.id} className="glass-card border-white/20 p-6 animate-float">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{moodEmojis[entry.mood]}</div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-white">
                    {moodLabels[entry.mood]}
                  </h4>
                  <span className="text-sm text-white/60">
                    {formatDistanceToNow(entry.timestamp, { addSuffix: true })}
                  </span>
                </div>
                
                <p className="text-white/80 leading-relaxed">
                  {entry.description}
                </p>
                
                {entry.quote && (
                  <blockquote className="text-sm text-white/70 italic border-l-2 border-white/30 pl-4 mt-3">
                    {entry.quote}
                  </blockquote>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {entries.length > 5 && (
        <div className="text-center pt-4">
          <p className="text-white/60 text-sm">
            Showing {entries.length} vibe entries
          </p>
        </div>
      )}
    </div>
  );
};