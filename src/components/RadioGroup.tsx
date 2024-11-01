import React from "react";
import { Control, Controller, UseFormTrigger } from "react-hook-form";
import { z } from "zod";
import { OperatingSystem } from "./VirtualMachineForm";
import { database, size } from "./DatabaseForm";
import { profile } from "./ObjectStore";

interface RadioOption {
  value: OperatingSystem | size | database | profile;
  label: string;
}

interface RadioGroupProps {
  control: Control<any>;
  trigger?: UseFormTrigger<any>;
  name: string;
  label?: string;
  options: RadioOption[];
  centered?: boolean;
  big?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  control,
  trigger,
  name,
  label,
  options,
  centered = false,
  big = false,
}) => {
  return (
    <div
      className={`flex w-full h-full flex-col gap-2 text-field-text ${
        centered ? "items-center" : ""
      }`}
    >
      {label && <p className="text-base">{label}</p>}
      <div className="grid grid-cols-3 gap-4">
        {" "}
        {/* Configuração da grade */}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              {options.map((option) => (
                <label
                  key={String(option.value)}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="radio"
                    value={option.value}
                    checked={field.value === option.value}
                    onChange={() => {
                      field.onChange(option.value);
                      if (trigger) trigger(name);
                    }}
                    onBlur={field.onBlur}
                    name={field.name}
                    className={`accent-call-to-action cursor-pointer ${
                      big ? "w-6 h-6" : "w-3 h-3"
                    }`}
                  />
                  <span
                    className={`-mb-1 ${
                      big ? "text-2xl text-[#656262]" : "text-base"
                    }`}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default RadioGroup;
