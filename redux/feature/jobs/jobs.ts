import { normPlovApi } from "@/redux/api";

type Job = {
    uuid: string;
    title: string;
    company_name: string;
    logo: string;
    location: string;
    job_type: string;
    description: string;
    requirements: string[] | []; 
    responsibilities: string[] | []; 
    facebook_url: string;
    email: string;
    phone: string;
    website: string;
    created_at: string; // ISO date string
  }
  
 type Metadata = {
    page: number;
    page_size: number;
    total_items: number;
    total_pages: number;
  }
  
type JobApiResponse = {
    date: string; 
    status: number;
    payload: {
      items: Job[];
      metadata: Metadata;
    };
    message: string;
  }
  

export const jobApi = normPlovApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchJobs: builder.query<JobApiResponse, { page: number; page_size: number }>({
        query: ({ page = 1, page_size= 10 }) =>({
            url: `api/v1/jobs?page=${page}&page_size=${page_size}`,
            method: "GET",
        })
         
    }),
  }),
});

export const { useFetchJobsQuery } = jobApi;