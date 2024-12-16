import { normPlovApi } from '@/redux/api'; // Import the main API instance

const assessmentApiMap: Record<string, string> = {
    skill: 'api/v1/assessment/predict-skills',
    personality: 'api/v1/assessment/personality-assessment',
    interest: 'api/v1/assessment/process-interest-assessment',
    value: 'api/v1/assessment/value-assessment',
    learningStyle: 'api/v1/assessment/predict-learning-style',
  };
  

export const quizApi = normPlovApi.injectEndpoints({
  endpoints: (builder) => ({
    predictAssessment: builder.mutation({
      query: ({ assessmentType, body }: { assessmentType: string ; body: object }) => {
        const endpoint = assessmentApiMap[assessmentType];
        if (!endpoint) throw new Error(`Invalid assessment type: ${assessmentType}`);
        return {
          url: endpoint,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { usePredictAssessmentMutation } = quizApi;
