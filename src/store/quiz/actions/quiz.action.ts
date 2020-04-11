import { createCustomAction } from 'typesafe-actions';
import { Data } from '../../../pages/quiz-page/quiz-page.intarface';

export const quizAction = createCustomAction('COMPERE', (data: Data) => {
  return { payload: data };
});
