import { Play, Save } from 'lucide-react';
import Card from './Card';
import Button from './Button';

const PauseMenu = ({ isPaused, handleResume, handleSaveAndExit }) => {
    if (!isPaused) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="max-w-xl w-full relative">
                {/* The Menu Card */}
                <Card>
                    <h2 className="text-2xl mb-6 text-center font-bold">Paused</h2>
                    <div className="space-y-4 py-4">
                        {/* Resume Button */}
                        <Button variant="black" onClick={handleResume} className="w-full h-14 text-lg">
                            <Play size={20} className="mr-2 fill-white" /> Resume
                        </Button>
                        {/* Save & Exit Button */}
                        <Button variant="secondary" onClick={handleSaveAndExit} className="w-full h-14 text-lg">
                            <Save size={20} className="mr-2" /> Save & Exit
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PauseMenu;