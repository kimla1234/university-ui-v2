import { normPlovApi } from "@/redux/api";

export const feedbackApi = normPlovApi.injectEndpoints({
  endpoints: (builder) => ({
    SubmitFeedback: builder.mutation({
      query: ({ body }: {body: { feedback: string; user_test_uuid: string } }) => {
        return {
          url: `feedback/create`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useSubmitFeedbackMutation } = feedbackApi;