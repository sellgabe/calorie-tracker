import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const ProgressBar = () => {
  const { getGainLoss, dailyLimit } = useGlobalContext();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (+getGainLoss() / +dailyLimit) * 100;
    setProgress(percentage);
  }, [getGainLoss, dailyLimit]);

  return (
    <div className="container mt-8 mb-10 w-full">
      <div className="w-full h-4 rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${
            progress > 100 ? 'bg-custom-red' : 'bg-custom-green'
          } transition-all ease-out duration-150`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
