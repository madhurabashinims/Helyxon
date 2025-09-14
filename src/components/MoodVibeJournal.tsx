import { useState, useEffect } from 'react';
import { MoodSelector } from './MoodSelector';
import { MoodDisplay } from './MoodDisplay';
import { QuoteDisplay } from './QuoteDisplay';
import { MoodHistory } from './MoodHistory';
import { Button } from '@/components/ui/button';
import { Calendar, History } from 'lucide-react';

export type MoodType = 'happy' | 'calm' | 'energetic' | 'sad' | 'excited' | 'peaceful';

export interface MoodEntry {
  id: string;
  mood: MoodType;
  description: string;
  timestamp: Date;
  quote: string;
}

const MoodVibeJournal = () => {
  const [currentMood, setCurrentMood] = useState<MoodType>('calm');
  const [moodDescription, setMoodDescription] = useState('');
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('moodVibeEntries');
    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries).map((entry: MoodEntry) => ({
        ...entry,
        timestamp: new Date(entry.timestamp)
      }));
      setMoodEntries(parsedEntries);
    }
  }, []);

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    if (moodEntries.length > 0) {
      localStorage.setItem('moodVibeEntries', JSON.stringify(moodEntries));
    }
  }, [moodEntries]);

  // Apply mood background to the entire page body
  useEffect(() => {
    const body = document.body;
    const allMoodClasses = [
      'mood-bg-happy',
      'mood-bg-calm',
      'mood-bg-energetic',
      'mood-bg-sad',
      'mood-bg-excited',
      'mood-bg-peaceful',
    ];
    body.classList.remove(...allMoodClasses);
    body.classList.add(`mood-bg-${currentMood}`);

    return () => {
      body.classList.remove(`mood-bg-${currentMood}`);
    };
  }, [currentMood]);

  const handleMoodSubmit = async () => {
    if (!moodDescription.trim()) return;
    
    setIsSubmitting(true);
    
    // Get a random quote for this mood
    const quote = getRandomQuote(currentMood);
    
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      mood: currentMood,
      description: moodDescription,
      timestamp: new Date(),
      quote: quote
    };

    // Add delay for animation effect
    setTimeout(() => {
      setMoodEntries(prev => [newEntry, ...prev]);
      setMoodDescription('');
      setIsSubmitting(false);
    }, 1000);
  };

  const getRandomQuote = (mood: MoodType): string => {
    const quotes = {
      happy: [
        "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi"
      ],
      calm: [
        "Peace comes from within. Do not seek it without. - Buddha",
        "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
        "Calm mind brings inner strength and self-confidence. - Dalai Lama"
      ],
      energetic: [
        "Energy and persistence conquer all things. - Benjamin Franklin",
        "The energy of the mind is the essence of life. - Aristotle",
        "Enthusiasm is the electricity of life. - Gordon Parks"
      ],
      sad: [
        "Tears come from the heart and not from the brain. - Leonardo da Vinci",
        "Even the darkest night will end and the sun will rise. - Victor Hugo",
        "The way I see it, if you want the rainbow, you gotta put up with the rain. - Dolly Parton"
      ],
      excited: [
        "Excitement is the more practical synonym for happiness. - Alain de Botton",
        "Nothing great was ever achieved without enthusiasm. - Ralph Waldo Emerson",
        "The secret to getting ahead is getting started. - Mark Twain"
      ],
      peaceful: [
        "Peace cannot be kept by force; it can only be achieved by understanding. - Albert Einstein",
        "If you want to make peace with your enemy, you have to work with your enemy. - Nelson Mandela",
        "Inner peace begins the moment you choose not to allow another person or event to control your emotions. - Pema Chödrön"
      ]
    };
    
    const moodQuotes = quotes[mood];
    return moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
  };

  return (
    <div className={`min-h-screen relative transition-all duration-1000`}>
      <div className={`fixed inset-0 z-0 mood-bg-${currentMood} pointer-events-none`} aria-hidden="true" />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 animate-float">
            MoodVibe Journal
          </h1>
          <p className="text-xl text-white/80">
            Capture your daily vibes with colors and inspiration
          </p>
        </header>

        <div className="max-w-2xl mx-auto space-y-8">
          {!showHistory ? (
            <>
              <MoodDisplay 
                mood={currentMood} 
                description={moodDescription}
                isSubmitting={isSubmitting}
              />
              
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <MoodSelector 
                  selectedMood={currentMood}
                  onMoodChange={setCurrentMood}
                />
                
                <div className="space-y-4">
                  <label className="block text-white text-lg font-medium">
                    How are you feeling today?
                  </label>
                  <textarea
                    value={moodDescription}
                    onChange={(e) => setMoodDescription(e.target.value)}
                    placeholder="Describe your mood, thoughts, or what's on your mind..."
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  
                  <Button
                    onClick={handleMoodSubmit}
                    disabled={!moodDescription.trim() || isSubmitting}
                    className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Capturing your vibe...' : 'Capture This Vibe'}
                  </Button>
                </div>
              </div>

              {moodEntries.length > 0 && (
                <QuoteDisplay quote={moodEntries[0]?.quote} />
              )}
            </>
          ) : (
            <MoodHistory entries={moodEntries} />
          )}

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => setShowHistory(!showHistory)}
              variant="secondary"
              className="glass-card text-white border-white/30 hover:bg-white/20"
            >
              {showHistory ? <Calendar className="mr-2 h-4 w-4" /> : <History className="mr-2 h-4 w-4" />}
              {showHistory ? 'Add New Entry' : 'View History'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodVibeJournal;