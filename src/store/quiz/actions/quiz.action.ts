import { createCustomAction } from 'typesafe-actions';
import { Data } from 'pages/quiz-page/quiz-page.intarface';
import { createAsyncAction } from 'typesafe-actions';
import { Breeds } from '../quiz.interface';

export const quizAction = createCustomAction('COMPERE', (data: Data) => {
  return { payload: data };
});

export const fetchPetBreeds = createAsyncAction(
  '@breeds/FETCH_REQUEST',
  '@breeds/FETCH_SUCCESS',
  '@breeds/FETCH_ERROR',
)<void, Breeds, string>();
