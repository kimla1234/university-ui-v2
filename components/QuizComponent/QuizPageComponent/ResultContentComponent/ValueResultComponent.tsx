// import React from "react";
// import checkIcon from "@/public/Quiz/skill-icon/check.png";
// import upIcon from "@/public/Quiz/skill-icon/up.png";
// import xIcon from "@/public/Quiz/skill-icon/x.png";
// import QuizHeader from "../../QuizHeader";
// import { QuizResultListing } from "../../QuizResultListing";
// import { useFetchAssessmentDetailsQuery } from "@/redux/feature/assessment/result";
// import { useParams } from "next/navigation";
// import { RecommendationCard } from "../../RecommendationCard";
// import CardPersonality from "../../CardPersonality";
// import ScoreBar from "../ScoreBarPersonality";
// import { QuizCircularProgress } from '../../QuizCircularProgress';
// type Major = {
//   major_name: string;
//   schools: string[];
// };

// type RecommendedCareer = {
//   career_name: string;
//   description: string;
//   majors: Major[];
// };

// export const ValueResultComponent = () => {
//   const params = useParams();

//   // Normalize the values from params
//   // const resultType = Array.isArray(params.resultType) ? params.resultType[0] : params.resultType;
//   // const uuid = Array.isArray(params.uuid) ? params.uuid[0] : params.uuid;

//   const resultTypeString =
//     typeof params.resultType === "string" ? params.resultType : "";
//   const uuidString = typeof params.uuid === "string" ? params.uuid : "";

//   const { data: response, error } = useFetchAssessmentDetailsQuery({
//     testUUID: uuidString,
//     resultType: resultTypeString,
//   });

//   console.log(`result: ${resultTypeString} id: ${uuidString}`);

//   if (!resultTypeString || !uuidString) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     console.error("Error fetching data:", error);
//     return <p>Error loading data</p>;
//   }
//   console;

//   //   const skillCategory = response?.[0]?.categoryPercentages;
// //   const personalities = response?.[0]?.personalityType;
// //   const personalitiesDimension = response?.[0]?.dimensions;
// //   console.log("Personalities dimension", personalitiesDimension);
  
//  // Extract value details
//  const valueDetails = response?.[0]?.valueDetails || [];
//  console.log("Value Details:", valueDetails);
// // Define a set of colors for progress bars
// const colors = ["#F88787", "#FFA500", "#4CAF50", "#2196F3", "#9C27B0"];
// const chart = response?.[0]?.chartData || []
// console.log("Chart", chart)
//   //   if (!skillCategory) {
//   //     return <p>Loading...</p>;
//   //   }

//   //   const personailitiesTrait = response?.[0]?.traits["positive"]
//   //   console.log("PersonailitiesTrait", personailitiesTrait)
//   //   const averageSkill = response?.[0]?.skillsGrouped["Average"];
//   //   const weakSkill = response?.[0]?.skillsGrouped["Weak"];

//   const recommendedCareer = response?.[0]?.strongCareers;

//   return (
//     <div className="bg-red-100">
//      {/* Render value details */}
//      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {valueDetails.map((item: any, index: number) => (
//           <QuizCircularProgress
//             key={index}
//             title={item.name}
//             desc={item.definition}
//             progress={parseFloat(item.percentage)} // Convert percentage string to number
//             color={colors[index % colors.length]} // Cycle through colors
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

import { useFetchAssessmentDetailsQuery } from "@/redux/feature/assessment/result";
import { useParams } from "next/navigation";
import { QuizCircularProgress } from "../../QuizCircularProgress";
import QuizHeader from "../../QuizHeader";

type ChartData = {
  label: string;
  score: number;
  color: string;
};

export const ValueResultComponent = () => {
  const params = useParams();

  const resultTypeString =
    typeof params.resultType === "string" ? params.resultType : "";
  const uuidString = typeof params.uuid === "string" ? params.uuid : "";

  const { data: response, error, isLoading } = useFetchAssessmentDetailsQuery({
    testUUID: uuidString,
    resultType: resultTypeString,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !response) return <p>Error loading data...</p>;

  console.log("Response:", response);

  // Extract the chart data
  const chartData: ChartData[] =
    response?.[0]?.chartData?.map((item: any, index: number) => ({
      label: item.label,
      score: item.score,
      color: ["#F88787", "#FFA500", "#4CAF50", "#2196F3", "#9C27B0"][
        index % 5
      ], // Cycle through colors
    })) || [];

  console.log("Chart Data:", chartData);

  // Custom bar shape for dynamic coloring
  const CustomBar = (props: any) => {
    const { x, y, width, height, payload } = props;
    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={payload.color}
        radius={[4, 4, 0, 0]} // Rounded corners on top
      />
    );
  };

  // Render custom legend
  const renderCustomLegend = () => (
    <div className="w-full space-y-2 flex flex-wrap justify-start items-center lg:grid lg:grid-cols-2 lg:gap-4">
      {chartData.map((entry, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div
            className="w-6 h-6 rounded-md"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-sm font-medium text-gray-700">
            {entry.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 lg:p-12 bg-white rounded-lg">
      <QuizHeader
        title="Your Core Values and Priorities"
        description="See the values that matter most to you"
        size="sm"
        type="result"
      />

      {/* Bar Chart with custom legend */}
      <div className="grid grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="col-span-2">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" tick={false} />
              <Tooltip />
              <Bar
                dataKey="score"
                shape={(props :any) => <CustomBar {...props} />}
                name="Score"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="col-span-1 flex flex-col justify-center">
          {renderCustomLegend()}
        </div>
      </div>

      
    </div>
  );
};
