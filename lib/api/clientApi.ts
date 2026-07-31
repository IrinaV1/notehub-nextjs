import { NewNote, Note, NoteTag } from '@/types/note';
import { API, NotesHttpResponse, RegisterRequest } from './api';
import { User } from '@/types/user';

export async function fetchNotes(
  search: string = '',
  page: number = 1,
  perPage: number = 12,
  tag?: NoteTag
): Promise<NotesHttpResponse> {
  const response = await API.get<NotesHttpResponse>('/notes', {
    params: {
      search,
      page,
      perPage,
      tag,
    },
  });

  return response.data;
}

export async function createNote(note: NewNote): Promise<Note> {
  const response = await API.post<Note>('/notes', note);
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await API.delete<Note>(`/notes/${id}`);
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await API.get<Note>(`/notes/${id}`);
  return response.data;
}

export async function register(data: RegisterRequest) {
  const response = await API.post<User>('/auth/register', data);
  return response.data;
}

export async function login(data: RegisterRequest) {
  const response = await API.post<User>('/auth/login', data);
  return response.data;
}

export async function logout() {}
export async function checkSession(data: RegisterRequest) {}

export async function getMe() {}
export async function updateMe() {}
