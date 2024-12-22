'use client';

import { useState, useEffect } from 'react';
import { DynamicChatComponent } from '@/components/ui/chat/DynamicChatComponent';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { useCreateChatMutation, useFetchAllChatQuery } from '@/redux/feature/chat/aiChat';
import Image from 'next/image';
import aichat from '@/public/chat/emptymailbox.png'

type Message = {
  id: number;
  variant: 'received' | 'sent';
  avatar: string | null;
  message: string;
};

export default function ChatApp() {
  const [chatData, setChatData] = useState<{ [key: number]: Message[] }>({});
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [nextChatId, setNextChatId] = useState(1); // Tracks the ID for the next new chat

  // Auto-create a new chat on first visit
  // useEffect(() => {
  //   if (Object.keys(chatData).length === 0) {
  //     createNewChat();
  //   }
  // }, []);


  const { data: apiData} = useFetchAllChatQuery();

  console.log("chat: ", apiData)
  const [createChat] = useCreateChatMutation();


   // Load chat data from the API when the component mounts
   useEffect(() => {
    if (apiData && apiData.payload) {
      // Format the data into chatData
      const formattedData = apiData.payload.reduce(
        (acc: { [key: number]: Message[] }, chat, index) => {
          acc[index + 1] = [
            {
              id: Date.now(),
              variant: 'received',
              avatar: '/chat/ai.png',
              message: chat.chat_title, // Use the title as the initial message
             
            },
            
          ];
          return acc;
        },

        
        {}
      );
      console.log("chat title: ", formattedData)
      setChatData(formattedData);
      setNextChatId(Object.keys(formattedData).length + 1); // Update the next chat ID
    }
  }, [apiData]);

  // Load chat data from the API when the component mounts
  // useEffect(() => {
  //   if (apiData && apiData.payload) {
  //     const formattedData = apiData.payload.reduce((acc: { [key: number]: Message[] }, chat, index) => {
  //       acc[index + 1] = [
  //         {
  //           id: Date.now(),
  //           variant: 'received',
  //           avatar: '/chat/ai.png',
  //           message: chat.chat_title,
  //         },
  //       ];
  //       return acc;
  //     }, {});
  //     setChatData(formattedData);
  //     setNextChatId(Object.keys(formattedData).length + 1); // Set next chat ID based on API data
  //   }
  // }, [apiData]);

  // Function to create a new chat
  // const createNewChat = () => {
  //   const newChatId = nextChatId;
  //   setChatData((prevData) => ({
  //     ...prevData,
  //     [newChatId]: [
  //       {
  //         id: Date.now(),
  //         variant: 'received',
  //         avatar: '/chat/ai.png',
  //         message: `Welcome to Chat ${newChatId}! How can I assist you today?`,
  //       },
  //     ],
  //   }));
  //   setSelectedChatId(newChatId); // Auto-select the new chat
  //   setNextChatId((prevId) => prevId + 1); // Increment the next chat ID
  // };

  const createNewChat = async () => {
    try {
      const response = await createChat().unwrap(); // Call the API
      const newChatId = nextChatId;
  
      setChatData((prevData) => ({
        ...prevData,
        [newChatId]: [
          {
            id: Date.now(),
            variant: 'received',
            avatar: '/chat/ai.png',
            message: response.payload.conversation_history[0]?.ai_reply || 'Welcome!',
          },
        ],
      }));
      setSelectedChatId(newChatId); // Auto-select the new chat
      setNextChatId((prevId) => prevId + 1); // Increment the next chat ID
    } catch (error) {
      console.error('Failed to create new chat:', error);
    }
  };

  // Function to update messages for a specific chat
  const updateMessages = (chatId: number, newMessage: Message) => {
    setChatData((prevData) => ({
      ...prevData,
      [chatId]: [...(prevData[chatId] || []), newMessage],
    }));
  };

  return (
    <div >
      {/* Sidebar */}
      <AppSidebar
        chatData={chatData}
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
        createNewChat={createNewChat}
      />

      {/* Chat Content */}
      <div >
        {selectedChatId ? (
          <DynamicChatComponent
            messages={chatData[selectedChatId] || []}
            updateMessages={(newMessage) => updateMessages(selectedChatId, newMessage)}
          />
        ) : (
          <div>
            <div className="h-screen flex justify-center items-center overflow-hidden p-4">
              <div className='flex justify-center flex-col items-center'>
                <Image
                  src={aichat}
                  alt="Quiz Illustration"
                  width={500}
                  height={500}
                  className="object-fill"
                />
                <p className='text-center -mt-4'><span className='text-primary'>No chats yet? </span>Create a new conversation or pick one from the sidebar to get started.</p>

              </div>


            </div>

          </div>

        )}
      </div>



    </div>

  );
}
