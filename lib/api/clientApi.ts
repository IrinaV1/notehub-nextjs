import { NewNote, Note, NoteTag } from '@/types/note';
import { API, LoginRequest, NotesHttpResponse, RegisterRequest } from './api';
import { User } from '@/types/user';

type UpdateUserRequest = {
  email?: string;
  username?: string;
};
type CheckSessionRequest = {
  success: boolean;
};

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

export async function register(data: RegisterRequest): Promise<User> {
  const response = await API.post<User>('/auth/register', data);
  return response.data;
}

export async function login(data: LoginRequest): Promise<User> {
  const response = await API.post<User>('/auth/login', data);
  return response.data;
}

export async function logout(): Promise<void> {
  await API.post('/auth/logout');
}
export async function checkSession(): Promise<boolean> {
  const response = await API.get<CheckSessionRequest>('/auth/session');
  return response.data.success;
}

export async function getMe(): Promise<User> {
  const response = await API.get<User>('/users/me');
  return response.data;
}
export async function updateMe(data: UpdateUserRequest): Promise<User> {
  const response = await API.patch<User>('/users/me', data);
  return response.data;
}
