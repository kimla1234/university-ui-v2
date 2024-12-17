import React from "react";
import checkIcon from "@/public/Quiz/skill-icon/check.png";
import upIcon from "@/public/Quiz/skill-icon/up.png";
import xIcon from "@/public/Quiz/skill-icon/x.png";
import QuizHeader from '../../QuizHeader';
import { QuizResultListing } from '../../QuizResultListing';
import { useFetchAssessmentDetailsQuery } from "@/redux/feature/assessment/result";
import { useParams } from "next/navigation";
import { RecommendationCard } from "../../RecommendationCard";
import CardPersonality from "../../CardPersonality";
import ScoreBar from "../ScoreBarPersonality";
// type Skill = {
// skill: string;
// description: string;
// };

type Major = {
major_name: string;
schools: string[];
};

type RecommendedCareer = {
career_name: string;
description: string;
majors: Major[];
};

export const PersonalityResultComponent = () => {
const params = useParams();

    // Normalize the values from params
    // const resultType = Array.isArray(params.resultType) ? params.resultType[0] : params.resultType;
    // const uuid = Array.isArray(params.uuid) ? params.uuid[0] : params.uuid;

const resultTypeString =
    typeof params.resultType === "string" ? params.resultType : "";
const uuidString = typeof params.uuid === "string" ? params.uuid : "";

const { data: response, error } = useFetchAssessmentDetailsQuery({
    testUUID: uuidString,
    resultType: resultTypeString,
});

console.log(`result: ${resultTypeString} id: ${uuidString}`);

if (!resultTypeString || !uuidString) {
        return <p>Loading...</p>;
}

if (error) {
    console.error("Error fetching data:", error);
        return <p>Error loading data</p>;
}
    console

    //   const skillCategory = response?.[0]?.categoryPercentages;
    const personalities = response?.[0]?.personalityType
    const personalitiesDimension = response?.[0]?.dimensions
    console.log("Personalities dimension",personalitiesDimension)
    // Function to dynamically get matching dimensions
  const getDimensionPair = (name1: string, name2: string) => {
    const dim1 = personalitiesDimension?.find((d: any) => d.dimension_name === name1)?.score || 0;
    const dim2 = personalitiesDimension?.find((d: any) => d.dimension_name === name2)?.score || 0;
    return { dim1, dim2 };
  };
 

    //   if (!skillCategory) {
    //     return <p>Loading...</p>;
    //   }

    //   const personailitiesTrait = response?.[0]?.traits["positive"]
    //   console.log("PersonailitiesTrait", personailitiesTrait)
    //   const averageSkill = response?.[0]?.skillsGrouped["Average"];
    //   const weakSkill = response?.[0]?.skillsGrouped["Weak"];

    const recommendedCareer = response?.[0]?.strongCareers;

   
    return (
        <div className="bg-red-100">
        {/* Personalities Name and Description */}
        <div className=" max-w-7xl mx-auto">
            <CardPersonality
            titleForCard="បុគ្គលិកលក្ខណៈរបស់អ្នកគឺជា"
            name={personalities?.name}
            title={personalities?.title}
            description={personalities?.description}
            />
            <div className="border border-slate-100 mt-14 p-6 rounded-[8px] ">
            <h2 className="bg-secondary inline-block text-white text-lg md:text-2xl px-4 py-2 rounded-[8px] mb-6">
                ប្រភេទបុគ្គលិកលក្ខណៈ
            </h2>
            <div className="space-y-6 p-8">
            {/* Introvert vs Extrovert */}
            <ScoreBar
              labelLeft="Introvert"
              labelRight="Extrovert"
              valueLeft={getDimensionPair("I_Score", "E_Score").dim1}
              valueRight={getDimensionPair("I_Score", "E_Score").dim2}
              colorLeft="bg-red-400"
              colorRight="bg-orange-400"
              customStyles={{
                container: "",
                labelText: "text-red-600 text-xl font-bold",
                valueText: "text-gray-700 text-xl font-semibold",
              }}
            />

            {/* Sensing vs Intuition */}
            <ScoreBar
              labelLeft="Sensing"
              labelRight="Intuition"
              valueLeft={getDimensionPair("S_Score", "N_Score").dim1}
              valueRight={getDimensionPair("S_Score", "N_Score").dim2}
              colorLeft="bg-yellow-400"
              colorRight="bg-teal-400"
              customStyles={{
                container: "",
                labelText: "text-red-600 text-xl font-bold",
                valueText: "text-gray-700 text-xl font-semibold",
              }}
            />

            {/* Thinking vs Feeling */}
            <ScoreBar
              labelLeft="Thinking"
              labelRight="Feeling"
              valueLeft={getDimensionPair("T_Score", "F_Score").dim1}
              valueRight={getDimensionPair("T_Score", "F_Score").dim2}
              colorLeft="bg-green-400"
              colorRight="bg-blue-700"
              customStyles={{
                container: "",
                labelText: "text-red-600 text-xl font-bold",
                valueText: "text-gray-700 text-xl font-semibold",
              }}
            />

            {/* Judging vs Perceiving */}
            <ScoreBar
              labelLeft="Judging"
              labelRight="Perceiving"
              valueLeft={getDimensionPair("J_Score", "P_Score").dim1}
              valueRight={getDimensionPair("J_Score", "P_Score").dim2}
              colorLeft="bg-blue-500"
              colorRight="bg-yellow-400"
              customStyles={{
                container: "",
                labelText: "text-red-600 text-xl font-bold",
                valueText: "text-gray-700 text-xl font-semibold",
              }}
            />
          </div>
            {/* <div className="space-y-6 p-8">
                <ScoreBar
                labelLeft="Introvert"
                labelRight="Extrovert"
                valueLeft={7}
                valueRight={8}
                colorLeft="bg-red-400"
                colorRight="bg-orange-400"
                customStyles={{
                    container: "",
                    labelText: "text-red-600 text-xl font-bold",
                    valueText: "text-gray-700 text-xl font-semibold",
                }}
                />
                <ScoreBar
                labelLeft="Sensing"
                labelRight="Intuition"
                valueLeft={5}
                valueRight={7}
                colorLeft="bg-yellow-400"
                colorRight="bg-teal-400"
                customStyles={{
                    container: "",
                    labelText: "text-red-600 text-xl font-bold",
                    valueText: "text-gray-700 text-xl font-semibold",
                }}
                />
                <ScoreBar
                labelLeft="Thinking"
                labelRight="Feeling"
                valueLeft={8}
                valueRight={7}
                colorLeft="bg-green-400"
                colorRight="bg-blue-700"
                customStyles={{
                    container: "",
                    labelText: "text-red-600 text-xl font-bold",
                    valueText: "text-gray-700 text-xl font-semibold",
                }}
                />
                <ScoreBar
                labelLeft="Judging"
                labelRight="Perceiving"
                valueLeft={6}
                valueRight={10}
                colorLeft="bg-blue-500"
                colorRight="bg-yellow-400"
                customStyles={{
                    container: "",
                    labelText: "text-red-600 text-xl font-bold",
                    valueText: "text-gray-700 text-xl font-semibold",
                }}
                />
            </div> */}
            </div>
        </div>
        {/* Strength */}
      {/* <div className="bg-bgPrimaryLight">
        <div className="space-y-4 lg:space-y-8 max-w-7xl mx-auto p-4 md:p-10 lg:p-12">
          <QuizHeader title="ចំណុចខ្លាំងរបស់អ្នក" description="Strength" size="sm" type="result" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6  ">
            {personailitiesTrait.map((skill: Skill, index: number) => (
              <QuizResultListing key={index} title={skill.skill} desc={skill.description} image={checkIcon} />
            ))}
          </div>
        </div>
      </div> */}
        </div>
    );
    };
