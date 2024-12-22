// import { normPlovApi } from "@/redux/api";

// type aiChatResponse = {
//   date: string;
//   status: number;
//   payload: coversation[];
//   message: string;
// };

// type coversation = {
//   uuid: string;
//   chat_title: string;
//   created_at: string;
//   updated_at: string;
// };

// type CreateChatResponse = {
//   date: string; 
//   status: number; 
//   payload: {
//     conversation_uuid: string; 
//     chat_title: string; 
//     conversation_history: {
//       user_query: string | null;
//       ai_reply: string; 
//       timestamp: string; 
//     }[];
//   };
//   message: string; 
// };



// export const chatApi = normPlovApi.injectEndpoints({
//   endpoints: (builder) => ({
//     fetchAllChat: builder.query<any, void>({
//       query: () => ({
//         url: "api/v1/ai/conversations",
//         method: "GET",
//       }),
//     }),
//     createChat: builder.mutation<CreateChatResponse, void>({
//       query: () => ({
//         url: `ai/conversations/start`,
//         method: "POST",
//       }),
//     }),

//   }),
// });

// export const { useFetchAllChatQuery, useCreateChatMutation } = chatApi;


import { normPlovApi } from "@/redux/api";

type aiChatResponse = {
  date: string;
  status: number;
  payload: conversation[];
  message: string;
};

type conversation = {
  uuid: string;
  chat_title: string;
  created_at: string;
  updated_at: string;
};

type CreateChatResponse = {
  date: string;
  status: number;
  payload: {
    conversation_uuid: string;
    chat_title: string;
    conversation_history: {
      user_query: string | null;
      ai_reply: string;
      timestamp: string;
    }[];
  };
  message: string;
};

export const chatApi = normPlovApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch All Chats
    fetchAllChat: builder.query<aiChatResponse, void>({
      query: () => ({
        url: "api/v1/ai/conversations", // Correct endpoint
        method: "GET",
      }),
    }),

    // Create New Chat
    createChat: builder.mutation<CreateChatResponse, void>({
      query: () => ({
        url: "api/v1/ai/conversations/start", // Correct endpoint
        method: "POST",
      }),
    }),
  }),
});

export const { useFetchAllChatQuery, useCreateChatMutation } = chatApi;
