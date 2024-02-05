// ShowResult.tsx
import React, { useEffect, useState } from 'react';
import { Section, Question } from './types';
import { calculateLevel } from './calculateLevel';
import { calculateValue } from './calculateValue';
import { Employee } from './types';
import { sectionResult, levelResult } from './styles';
import ShowRadar from './ShowRadar';

type Props = {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
  sections: Section[];
  scores: number[];
};

const ShowResult: React.FC<Props> = ({ employee, setEmployee, sections, scores }) => {
  const [values, setValues] = useState<{ scale: string; value: number; }[][]>([]);
  const [totals, setTotals] = useState<number[]>([]);

  useEffect(() => {
    const valuesNumbers = values.map(value => value.map(v => v.value));
    const { method1, method2, totals } = calculateLevel(scores, valuesNumbers);
    if (method1 && method2) {
      setEmployee(prev => ({ ...prev, level: 'high' }));
    } else {
      setEmployee(prev => ({ ...prev, level: 'low' }));
    }
    setTotals(totals);
  }, [scores, values, setEmployee]);

  useEffect(() => {
    setValues(sections.map((section) => {
      const questions: Question[] = section.questions;
      return section.factors?.map(factor => ({
        scale: factor.scale,
        value: calculateValue(questions, factor)
      })) ?? [];
    }));
  }, [sections]);

  return (
    <div>
      <div css={levelResult}>
        <p>{employee.level === 'high' ? '高ストレス者' : '低ストレス者'}です</p>
      </div>
      <div css={sectionResult}>
        {sections.map((section, sectionIndex) => {
          // Skip section0 and section4
          if (sectionIndex === 0 || sectionIndex === 4) return null;

          return (
            <div key={section.step}>
              <p>STEP{section.step} {section.name}</p>
              <p>スコアの合計: {scores[sectionIndex]}</p>
              <p>評価点の合計: {totals[sectionIndex]}</p>
              <p>{section.group}</p>
              <ShowRadar factors={values[sectionIndex] ?? []} level={employee.level === 'high' || employee.level === 'low' ? employee.level : 'low'} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowResult;