export interface IGradeCalculator {
  execute(subjects: SingleGrade[]): string;
  getGradeSum(subjects: SingleGrade[]): GradeSumResult;
  getAvarage(gradeSum: number, subjectsCount: number): string;
}

export type SingleGrade = { subject: string; grade: number };
export type GradeSumResult = { gradeSum: number; subjectsCount: number };
