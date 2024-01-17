import React from 'react';

type Step = {
  number: number;
  label: string;
};

type ProgressStepsProps = {
  steps: Step[];
  currentStepIndex: number;
};

const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps, currentStepIndex }) => {
  const lineFillWidth = `${(100 / (steps.length - 1)) * currentStepIndex}%`;

  return (
    <div className="w-full max-w-600px mx-auto px-4 my-20">
      <div className="flex justify-between mt-14 relative step-container">
        <div
          className="w-full absolute bg-[#f3e7f3] h-1 top-1/2 transform -translate-y-1/2"
          style={{
            width: '100%',
            zIndex: 1, // Increase z-index to position the line behind the steps
          }}
        />
        <div
          className="w-1/3 absolute bg-4a154b h-1 top-1/2 transform -translate-y-1/2 left-0 transition duration-400 ease-in-out"
          style={{
            width: lineFillWidth,
            zIndex: 2, // Increase z-index to position the line above the background line
          }}
        />
        {steps.map((step, index) => (
          <div key={step.number} className="relative" style={{ zIndex: 3 }}>
            <div
              className={`w-10 h-10 bg-primary border-4 rounded-full transition duration-400 ease-in-out flex justify-center items-center ${
                index === currentStepIndex ? 'border-[#FB4552]' : 'border-[#f3e7f3]'
              }`}
            >
              <span className={`text-[19px] ${index === currentStepIndex ? 'text-white' : 'text-white'}`}>
                {step.number}
              </span>
            </div>
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
              <span
                className={`text-sm ${index === currentStepIndex ? 'text-white' : 'text-white'} whitespace-nowrap`}
              >
                {step.label}
              </span>
            </div>
          </div>
        ))}
        <style>{`
          .step-container::after {
            content: '';
            position: absolute;
            background: #FB4552;
            height: 4px;
            width: ${lineFillWidth};
            top: 45%;
            transition: width 0.4s ease; // Add transition for smooth width change
            transform: translateY(-50%);
            left: 0;
            z-index: 1; 
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProgressSteps;
