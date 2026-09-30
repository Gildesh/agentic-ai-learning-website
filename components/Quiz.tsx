"use client";

import { useState } from "react";

export type QuizQuestion = {
  prompt: string;
  choices: string[];
  answer: number;
  why: string;
};

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [picked, setPicked] = useState<Record<number, number>>({});

  return (
    <section className="my-8">
      <h2 className="font-sans text-lg font-semibold">Quiz</h2>
      <ol className="mt-4 space-y-6">
        {questions.map((question, index) => {
          const choice = picked[index];
          const answered = choice !== undefined;
          return (
            <li key={question.prompt} className="rounded-xl border border-line bg-paper-2 p-4">
              <p className="font-sans font-semibold leading-snug">
                {index + 1}. {question.prompt}
              </p>
              <ul className="mt-3 space-y-2">
                {question.choices.map((option, optionIndex) => {
                  const selected = choice === optionIndex;
                  const correct = optionIndex === question.answer;
                  return (
                    <li key={option}>
                      <button
                        type="button"
                        className={`w-full rounded-lg border px-3 py-2 text-left font-sans text-sm ${
                          answered && correct
                            ? "border-pine bg-pine-soft"
                            : selected
                              ? "border-clay bg-clay-soft"
                              : "border-line"
                        }`}
                        onClick={() => setPicked((current) => ({ ...current, [index]: optionIndex }))}
                      >
                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {answered ? (
                <p className="mt-3 text-base leading-relaxed">
                  {choice === question.answer ? "Correct. " : "Not quite. "}
                  {question.why}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
