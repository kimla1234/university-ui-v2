'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { QuizButton } from './QuizButton'
import { ArrowRight } from "lucide-react";
import placeholderImage from '@/public/Quiz/placeholder.jpg'


// this compoenent can be use as main option type of quiz or learning style technique card

type props = {
  title: string;
  desc: string;
  image?: StaticImageData | string;
  buttonText?: string;
  type?: 'main' | 'learninigStyle'
  badgeText?: string;
  onClick?: () => void;
}

export const QuizOptHorizontalContainer = ({ title, desc, image, buttonText, type = 'main', badgeText, onClick }: props) => {

  const [imageSrc, setImageSrc] = useState<StaticImageData | string>(image || placeholderImage);

  const [currentImgSrc, setImgSrc] = useState<string | StaticImageData>(
    `${process.env.NEXT_PUBLIC_NORMPLOV_API_URL}${image}`
  );

  return (
    <div className={`flex flex-col sm:flex-row w-full bg-white p-4 gap-4 rounded-xl ${type === 'learninigStyle' ? 'justify-center items-center' : ''} `}>
      {/* Image Section */}
      <div className="flex-none flex justify-center items-center overflow-hidden">
        {
          type === 'learninigStyle' ? (
            <Image
              src={currentImgSrc}
              alt="Technique Illustration"
              width={100}
              height={100}
              className="object-fill"
              onError={() => setImgSrc(placeholderImage)}
            />
          ) : (
            <Image
              src={imageSrc}
              alt="Technique Illustration"
              width={200}
              height={200}
              className="object-fill"
              onError={() => setImageSrc(placeholderImage)}
            />
          )
        }

      </div>


      <div className="flex flex-col justify-between flex-1 gap-4">
        <div>
          <h2 className={`text-xl font-bold  ${type === 'main' ? 'text-primary mb-1' : 'text-secondary '} `}>{title}</h2>
          <p className={`rounded-full text-textprimary text-opacity-80 text-sm mb-2 ${type === 'main' ? 'hidden' : ''}`}>{badgeText}</p>
          <p className="text-base text-textprimary ">
            {desc}
          </p>
        </div>

        <div className={`flex justify-start md:justify-end ${type === 'main' ? '' : 'hidden'}`}>
          <QuizButton title={buttonText ? buttonText : 'Start Quiz'} rounded='full' icon={<ArrowRight />} type='rightIcon' onClick={onClick} />
        </div>

      </div>
    </div>
  )
}
