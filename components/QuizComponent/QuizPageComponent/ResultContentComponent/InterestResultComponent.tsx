import React from 'react'
import QuizHeader from '../../QuizHeader'
import { QuizInterestResultCard } from '../../QuizInterestResultCard'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// Import image
import creativityImage from '@/public/Quiz/interest/creativity.png'
import enterprising from '@/public/Quiz/interest/enterprising.png'

// Import json
import interestJson from '@/app/(user)/json/interestKh.json'
import { StaticImageData } from 'next/image'

const data = [
    {
        subject: 'Artistic',
        A: 90,

        fullMark: 100,
    },
    {
        subject: 'Enterprise',
        A: 89,

        fullMark: 100,
    },
    {
        subject: 'Investigative',
        A: 30,

        fullMark: 100,
    },
    {
        subject: 'Social',
        A: 20,

        fullMark: 100,
    },
    {
        subject: 'Realitic',
        A: 45,

        fullMark: 100,
    },
    {
        subject: 'Conventional',
        A: 65,

        fullMark: 100,
    },
];

export const InterestResultComponent = () => {

    const { result } = interestJson;

    const images: { [key: string]: StaticImageData } = {
        Artistic: creativityImage,
        Enterprising: enterprising,
    };

    return (

        <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto p-4 md:p-10 lg:p-12' >

            <div className='w-full grid gap-4 grid-cols-1 lg:grid-cols-2 pb-4 '>
                <div className='col-span-1 space-y-2 md:space-y-4'>
                    <p className='text-md md:text-xl'>អ្នកគឺជា</p>
                    <p className='text-3xl md:text-4xl text-primary font-bold'>The Creator</p>
                    <div className='flex flex-wrap gap-2'>
                        <div className="rounded-[8px] text-secondary bg-secondary bg-opacity-10  text-xs lg:text-sm max-w-fit px-1 lg:px-2">imaginative</div>
                        <div className="rounded-[8px] text-secondary bg-secondary bg-opacity-10 text-xs lg:text-sm max-w-fit px-1 lg:px-2">Creative</div>
                        <div className="rounded-[8px] text-secondary bg-secondary bg-opacity-10 text-xs lg:text-sm max-w-fit px-1 lg:px-2">Visionary</div>
                    </div>
                    <p className='text-textprimary'>
                        You are imaginative, resourceful, and driven to bring creative ideas to life. Passionate about originality, you enjoy crafting new and unique solutions, whether through art, design, or conceptual innovation. You thrive in environments that allow you to express your creativity and push the boundaries of what is possible, making you perfect for creative industries and entrepreneurial ventures.

                    </p>

                </div>


                <div className="col-span-1 ">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                            <Radar name="Mike" dataKey="A" stroke="#FFA500" fill="#FFA500" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <QuizHeader title="បុគ្គលដែលមានចំណាប់អារម្មណ៍លើផ្នែកនេះមានទំនោរទៅខាង" description="Individuals with an interest in this area tend to be" size='sm' type='result' />

            <div className='flex flex-wrap gap-4 justify-center'>
                {result.interestCard.map((item, index) => (
                    <QuizInterestResultCard
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        image={images[item.title]}
                    />
                ))}
            </div>


        </div>

    )
}
