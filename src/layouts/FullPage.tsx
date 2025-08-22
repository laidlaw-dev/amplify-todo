import Banner from '@/components/common/Banner';
import type { ReactNode } from 'react';

interface FullPageProps {
    children: ReactNode;
}
const FullPage = ({ children }: FullPageProps) => {
    return (
        <div className="h-screen w-screen bg-background text-foreground flex flex-col">
            <Banner />
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default FullPage;
