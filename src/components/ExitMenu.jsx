import { Play, LogOut } from 'lucide-react';
import Card from './Card';
import Button from './Button';

const ExitMenu = ({ showExit, cancelExit, confirmExit }) => {
    if (!showExit) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="max-w-xl w-full relative">
                {/* The Menu Card */}
                <Card>
                    <h2 className="text-2xl mb-6 text-center font-bold">Are you sure?</h2>
                    <p className="text-gray-600 mb-4">
                        The timer is still running! If you leave now, your attempt won't be saved.
                    </p>
                    <div className="space-y-4 py-4">
                        {/* Resume Button */}
                        <Button variant="black" onClick={cancelExit} className="w-full h-14 text-lg">
                            <Play size={20} className="mr-2 fill-white" /> Resume
                        </Button>
                        {/* Exit Button */}
                        <Button variant="red" onClick={confirmExit} className="w-full h-14 text-lg">
                            <LogOut size={20} className="mr-2" /> Exit
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ExitMenu;