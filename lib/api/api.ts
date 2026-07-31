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
// export async function fetchNotes(
//   search: string = '',
//   page: number = 1,
//   perPage: number = 12,
//   tag?: NoteTag
// ): Promise<NotesHttpResponse> {
//   const response = await axios.get<NotesHttpResponse>('/notes', {
//     params: {
//       search,
//       page,
//       perPage,
//       tag,
//     },
//   });

//   return response.data;
// }

// export async function createNote(note: NewNote): Promise<Note> {
//   const response = await axios.post<Note>('/notes', note);
//   return response.data;
// }

// export async function deleteNote(id: string): Promise<Note> {
//   const response = await axios.delete<Note>(`/notes/${id}`);
//   return response.data;
// }

// export async function fetchNoteById(id: string): Promise<Note> {
//   const response = await axios.get<Note>(`/notes/${id}`);
//   return response.data;
// }
