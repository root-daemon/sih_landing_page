import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Card({ department, icon, skilled, unskilled }) {
  const navigate = useNavigate();

  // State to manage selected items and quantities
  const [selected, setSelected] = useState({ skilled: null, unskilled: null });
  const [quantities, setQuantities] = useState({ skilled: 0, unskilled: 0 });

  // Function to handle selection change
  const handleSelectChange = (type, value) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [type]: value,
    }));
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]: 1, // Initialize quantity to 1 when selected
    }));
  };

  // Function to handle quantity change
  const handleQuantityChange = (type, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [type]: Math.max(0, prevQuantities[type] + change), // Prevent negative quantity
    }));
  };

  return (
    <div className="flex min-h-[200px] cursor-pointer flex-col gap-3 rounded-3xl border border-[#CCC7C0] bg-[#DFD9D1] p-4 px-6">
      <div className="flex w-full items-start justify-between">
        <h3 className="max-w-[85%] text-left text-xl font-semibold">
          {department}
        </h3>
        {icon}
      </div>

      <div className="ml-2 flex flex-col">
        <div className="ml-2 mt-2 flex flex-col gap-4 border-l-2 border-dashed border-[#595754] border-opacity-30 pl-4">
          {/* Skilled Select */}
          <div>
            <Select
              onValueChange={(value) => handleSelectChange("skilled", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Skilled" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Skilled</SelectLabel>
                  {skilled.map((employ) => (
                    <SelectItem key={employ.name} value={employ.name}>
                      {employ.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {selected.skilled && (
              <div className="mt-2 flex items-center gap-2">
                <span>{selected.skilled}:</span>
                <button
                  className="px-2"
                  onClick={() => handleQuantityChange("skilled", -1)}
                  disabled={quantities.skilled <= 0}
                >
                  -
                </button>
                <span>{quantities.skilled}</span>
                <button
                  className="px-2"
                  onClick={() => handleQuantityChange("skilled", 1)}
                >
                  +
                </button>
              </div>
            )}
          </div>

          {/* Unskilled Select */}
          <div>
            <Select
              onValueChange={(value) => handleSelectChange("unskilled", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Unskilled" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Unskilled</SelectLabel>
                  {unskilled.map((employ) => (
                    <SelectItem key={employ.name} value={employ.name}>
                      {employ.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {selected.unskilled && (
              <div className="mt-2 flex items-center gap-2">
                <span>{selected.unskilled}:</span>
                <button
                  className="px-2"
                  onClick={() => handleQuantityChange("unskilled", -1)}
                  disabled={quantities.unskilled <= 0}
                >
                  -
                </button>
                <span>{quantities.unskilled}</span>
                <button
                  className="px-2"
                  onClick={() => handleQuantityChange("unskilled", 1)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
