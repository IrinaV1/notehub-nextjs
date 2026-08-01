import { Note } from '@/types/note';
import axios, { AxiosError } from 'axios';

export type ApiError = AxiosError<{ error: string }>;

const baseURL = process.env.NEXT_PUBLIC_API_URL + '/api';
export const API = axios.create({
  baseURL,
  withCredentials: true,
});

export interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}
export type RegisterRequest = {
  email: string;
  password: string;
  // userName: string;
};

export type LoginRequest = {
  email: string;
  password: string;
 
};
