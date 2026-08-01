import { Note, NoteTag } from '@/types/note';
import { API } from './api';
import { NotesHttpResponse } from './api';
import { cookies } from 'next/headers';
import { User } from '@/types/user';

type CheckSessionRequest = {
  success: boolean;
};

export async function fetchNotes(
  search: string = '',
  page: number = 1,
  perPage: number = 12,
  tag?: NoteTag
): Promise<NotesHttpResponse> {
  const cookieStore = await cookies();
  const response = await API.get<NotesHttpResponse>('/notes', {
    params: {
      search,
      page,
      perPage,
      tag,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const cookieStore = await cookies();
  const response = await API.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
}
export async function checkSession() {
  const cookieStore = await cookies();
  const res = await API.get<CheckSessionRequest>('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
}

export async function getMe(): Promise<User> {
  const cookieStore = await cookies();
  const res = await API.get<User>('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}
