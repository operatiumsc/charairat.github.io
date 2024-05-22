
import type { IconType } from 'react-icons'



export default function SkillIcon({ Icon }: { Icon: IconType }) { // Fix type declaration
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg">
            <Icon className="aspect-square size-8 text-white" />

        </div>
    );
};