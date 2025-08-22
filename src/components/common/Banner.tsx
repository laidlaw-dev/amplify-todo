import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '../ui/button';
import { LogOutIcon, CircleUserRound } from 'lucide-react';

const Banner = () => {
    const { signOut, user } = useAuthenticator();

    return (
        <div className="bg-primary text-primary-foreground p-4 flex justify-between">
            <div></div>

            <div className="flex gap-2 items-center">
                <CircleUserRound /> {user?.signInDetails?.loginId}
                <div>
                    <Button variant="ghost" size="icon" onClick={signOut}>
                        <LogOutIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
