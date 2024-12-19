"use client";
import UniversityDetailSkeleton from "@/components/SkeletonLoading/UniversityDetailSkeleton/UniversityDetailSkeleton";
import CardUniversityDetail from "@/components/UniversityComponent/CardUniversityDetail";
import { useAppSelector } from "@/redux/hooks";
import React, { useState, useEffect } from "react";

type MajorType = {
  uuid: string;
  name: string;
  description: string;
  fee_per_year: number;
  duration_years: number;
  degree: string;
  faculty?: string; // Optional, as faculties may or may not be assigned
};
// Fallback major data with missing properties
const fallbackMajor = {
  uuid: "no-id",
  name: "No majors available",
  degree: "N/A",
  fee_per_year: 0,
  duration_years: 0,
  description: "No description available",
};
// Type definition for universities
type UniversityType = {
  uuid: string;
  kh_name: string;
  en_name: string;
  location: string;
  province_name: string;
  popular_major: string;
  logo_url: string;
  cover_image: string | null; // Handle null value
  phone: string;
  lowest_price: number;
  highest_price: number;
  latitude: number;
  longitude: number;
  email: string;
  website: string;
  description: string;
  mission: string;
  vision: string;
  majors: {
    // Define majors as an array of objects with appropriate properties
    uuid: string;
    name: string;
    description: string;
    fee_per_year: number;
    duration_years: number;
    degree: string;
  }[]; // Handle empty array
  faculties: {
    uuid: string;
    name: string;
    description: string;
    majors?: MajorType[]; // Make 'majors' optional here
  }[]; // Faculties with optional majors
};

export default function Page({ params }: { params: { id: string } }) {
  
  const { search, province_uuid, page, selectedDegree, selectedFaculty } =
    useAppSelector((state) => state.filter);

  // Renamed to 'Page'
  const [universities, setUniversities] = useState<UniversityType[]>([]);
  const [filteredMajors, setFilteredMajors] = useState<MajorType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch universities on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NORMPLOV_API_URL}api/v1/schools/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
  
        const data = await response.json();
        console.log("API Response:", data);  // Log the entire response
  
        if (data && data.payload) {
          console.log("Majors:", data.payload.faculties);  // Log majors to verify degree
          setUniversities([data.payload]);
        } else {
          setError("Data format error: No valid university data found");
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || "Something went wrong while fetching data");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [params.id]);
  
  


  

  useEffect(() => {
    if (universities.length > 0) {
      const university = universities[0];

      const selectedFacultyObj = university.faculties.find(
        (faculty) => faculty.name === selectedFaculty
      );

      let majorsToFilter = selectedFacultyObj?.majors || [];

      // If selectedDegree is not null, filter majors by degree
      if (selectedDegree) {
        majorsToFilter = majorsToFilter.filter((major) => major.degree === selectedDegree);
      }

      setFilteredMajors(majorsToFilter); // Update filtered majors
    }
  }, [selectedDegree, selectedFaculty, universities]);

  if (loading) {
    return (
      <div>
        <UniversityDetailSkeleton />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {universities.length > 0 ? (
        universities.map((university: any, index) => (
          <CardUniversityDetail
            key={index}
            uuid={university.uuid}
            kh_name={university.kh_name}
            en_name={university.en_name}
            province_name={university.province_name}
            popular_major={university.popular_major}
            location={university.location}
            logo_url={university.logo_url}
            cover_image={university.cover_image || "/default.png"}
            phone={university.phone}
            lowest_price={university.lowest_price}
            highest_price={university.highest_price}
            latitude={university.latitude}
            longitude={university.longitude} // Added latitude and longitude properties for map rendering
            email={university.email}
            website={university.website}
            description={university.description}
            mission={university.mission}
            vision={university.vision}
            majors={
              filteredMajors.length > 0 ? filteredMajors : [fallbackMajor]
            } // Ensure filteredMajors is not undefined
            faculties={university.faculties || []}
          />
        ))
      ) : (
        <div>No universities found</div> // Show this if the universities array is empty
      )}
    </div>
  );
}
