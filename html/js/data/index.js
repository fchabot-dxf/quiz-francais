import { orthographeQuestions } from './orthographe.js';
import { syntaxeQuestions } from './syntaxe.js';
import { ponctuationQuestions } from './ponctuation.js';
import { lexiqueQuestions } from './lexique.js';

export const QUIZ_DATA = [
    ...orthographeQuestions,
    ...syntaxeQuestions,
    ...ponctuationQuestions,
    ...lexiqueQuestions
];
