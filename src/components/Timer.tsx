import React, { useEffect } from 'react';

const Timer = ({ timeRemaining, onTimeUp }: { timeRemaining: number; onTimeUp: () => void }) => {
  useEffect(() => {
    if (timeRemaining <= 0) {
      onTimeUp();
    }
  }, [timeRemaining, onTimeUp]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Calculate the color based on time remaining
  const percentageTimeRemaining = (timeRemaining / (30 * 60)) * 100; // Based on 30 minutes
  let barColor = 'bg-green-500';
  if (percentageTimeRemaining <= 50 && percentageTimeRemaining > 20) {
    barColor = 'bg-yellow-500';
  } else if (percentageTimeRemaining <= 20) {
    barColor = 'bg-red-500';
  }

  return (
    <div className="text-xl font-mono mb-4">
      Time Remaining: {minutes}:{seconds.toString().padStart(2, '0')}
      <div className="w-full bg-gray-200 h-2 rounded mt-2">
        <div
          style={{ width: `${percentageTimeRemaining}%` }}
          className={`h-full rounded ${barColor}`}
        />
      </div>
    </div>
  );
};

export default Timer;
