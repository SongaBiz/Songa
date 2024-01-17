import React, { useEffect, useRef, useState } from 'react';
import SimpleOTPBoxesContainer from './SplitOTPBoxesContainer';

type OTPInputProps = {
  code: string;
  setCode: (code: string) => void;
  maximumLength: number;
  setIsPinReady: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OTPInput({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}: OTPInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const boxArray = new Array(maximumLength).fill(0);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    // inputRef.current.focus()
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const boxDigit = (_: any, index: number) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    return (
      <div
        className={`flex mx-2 justify-center items-center border-2 rounded-md p-3 min-w-12 focus:border-yellow-400 focus:bg-gray-400 ${
          isInputBoxFocused && isValueFocused ? 'border-yellow-400 bg-gray-400' : 'border-[#]'
        }`}
        key={index}
      >
        <div className="text-lg text-center text-gray-300">{digit}</div>
      </div>
    );
  };

  useEffect(() => {
    setIsPinReady(code.length === maximumLength);

    return () => {
      setIsPinReady(false);
    };
  }, [code, maximumLength, setIsPinReady]);

  return (
    <div className="flex items-center justify-center">
      <SimpleOTPBoxesContainer>{boxArray.map(boxDigit)}</SimpleOTPBoxesContainer>
      {/* Hidden input */}
      <input
        className="absolute opacity-0 border-[1px] p-[15px] bg-primary rounded-[5px] w-[300px]"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </div>
  );
}
