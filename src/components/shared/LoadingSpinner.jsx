import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
};

export default LoadingSpinner;