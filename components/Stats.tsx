import React from 'react';

const Stats: React.FC = () => {
  return (
    <div className="bg-trustBlue py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white divide-y md:divide-y-0 md:divide-x divide-blue-400/30">
          <div className="p-2">
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-blue-200 text-sm uppercase tracking-wider font-semibold">Students Trusted</div>
          </div>
          <div className="p-2">
            <div className="text-3xl font-bold mb-1">30 min</div>
            <div className="text-blue-200 text-sm uppercase tracking-wider font-semibold">Avg Delivery</div>
          </div>
          <div className="p-2">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-blue-200 text-sm uppercase tracking-wider font-semibold">Secure</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;