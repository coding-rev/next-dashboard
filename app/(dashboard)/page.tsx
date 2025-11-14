"use client";

import AnalyticalCard from "@/components/ui/AnalyticalCard";
import PageHeader from "@/components/common/PageHeader";

export default function Home() {
  return (
    <div>
        {/* Page Content - Header */}
        <PageHeader/>
        {/* Page Content - Body starts here */}
        {/* Analytical Cards */}
        <div className="flex justify-between">
        <AnalyticalCard title="Total Projects" count={24} 
            description="Increased from last month" trendStatus="increasing"
            trendPercentage={5} isActive={true} 
        />
        <AnalyticalCard title="Ended Projects" count={10} 
            description="Increased from last month" trendStatus="increasing"
            trendPercentage={10} isActive={false} 
        />
        <AnalyticalCard title="Running Projects" count={12} 
            description="Increased from last month" trendStatus="increasing"
            trendPercentage={5} isActive={false} 
        />
        <AnalyticalCard title="Pending Projects" count={2} 
            description="Increased from last month" trendStatus="increasing"
            trendPercentage={5} isActive={false} 
        />
        </div>
        {/* Page Content - Body ends here */}
    </div>
  );
}
