import React from 'react'
import CircleButton from './CircleButton';
import { ArrowUp, ChevronDown, ChevronUp, MoveUpRight } from 'lucide-react';

interface AnalyticalCardProps {
  title: string;
  count: number;
  description: string;
  trendStatus: 'increasing' | 'decreasing';
  trendPercentage: number;
  isActive: boolean;
}

export default function AnalyticalCard({
    title, count = 0, description, trendStatus, trendPercentage,
    isActive = false
}: AnalyticalCardProps) {
  return (
    <div className={`${isActive === true ? "bg-green-900" : "bg-white"} h-40 flex flex-col justify-between rounded-2xl mb-6 p-3 text-white w-[24%]`}>
        <div className='flex justify-between items-center'>
            <h3 className={`${isActive === true ? "text-white" : "text-black"} text-sm`}>{ title }</h3>
            <CircleButton borderColor={`${isActive === true ? "white" : "black"}`} icon={MoveUpRight} size={30} label='Analytical Button'/>
        </div>
        <h2 className={`${isActive === true ? "text-white" : "text-black"} text-5xl`}>{ count }</h2>
        <div className={`flex ${isActive === true ? "text-green-300" : "text-[var(--color-primary)]"}`}>
            <div className={`${isActive === true ? "border-green-300" : "border-[var(--color-primary)]"} mr-2 border rounded px-[3px] items-center text-[10px] flex `}>
                { trendPercentage }
                { trendStatus === "increasing" ? <ChevronUp size={12}/> : <ChevronDown size={12}/> }
            </div>
            <p className='text-[10px]'>{ description }</p>
        </div>
    </div>
  )
}
