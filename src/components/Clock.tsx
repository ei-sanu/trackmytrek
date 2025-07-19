import { Clock as ClockIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
                <ClockIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 w-[280px] text-center font-mono">
                    {formatTime(time)}
                </div>
            </div>
            <div className="text-xl text-gray-300 w-[400px] mx-auto">
                {formatDate(time)}
            </div>
        </div>
    );
};
