import axios from 'axios';
import { JobData } from '../types/JobData';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchJobData = async (): Promise<JobData[]> => {
  try {
    const response = await axios.get<JobData[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching job data:', error);
    return [];
  }
};