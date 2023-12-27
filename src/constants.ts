import { Quiz } from "./types";

export const defaultQuestions: Quiz[] = [
  {
    created: "2020-09-09 09:26:39",
    modified: "2020-09-09 09:26:39",
    description: "Description",
    id: 29,
    score: undefined,
    title: "quiz title",
    url: "https://www.youtube.com/watch?v=e6EGQFJLl04",
    questions: [
      {
        answer_id: undefined,
        answers: [
          {
            id: 122,
            isTrue: false,
            text: "question 1 answer 1 false",
          },
          {
            id: 123,
            isTrue: false,
            text: "question 1 answer 2 false",
          },
          {
            id: 124,
            isTrue: true,
            text: "question 1 answer 3 true",
          },
          {
            id: 125,
            isTrue: false,
            text: "question 1 answer 4 false",
          },
        ],
        feedbackFalse: "question 1 false feedback",
        feedbackTrue: "question 1 true feedback",
        id: 53,
        text: "question 1 text",
      },
      {
        answer_id: undefined,
        answers: [
          {
            id: 126,
            isTrue: true,
            text: "question 2 answer 1 true",
          },
          {
            id: 127,
            isTrue: false,
            text: "question 2 answer 2 false",
          },
        ],
        feedbackFalse: "question 2 false feedback",
        feedbackTrue: "question 2 true feedback",
        id: 54,
        text: "question 2 text",
      },
      {
        answer_id: undefined,
        answers: [
          {
            id: 128,
            isTrue: false,
            text: "question 3 answer 1 false",
          },
          {
            id: 129,
            isTrue: true,
            text: "question 3 answer 2 true",
          },
          {
            id: 130,
            isTrue: false,
            text: "question 3 answer 3 false",
          },
        ],
        feedbackFalse: "question 3 false feedback",
        feedbackTrue: "question 3 true feedback",
        id: 55,
        text: "question 3 text",
      },
    ],
  },
];
