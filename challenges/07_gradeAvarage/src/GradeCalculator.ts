export class GradeCalculator {
  execute(subjects: GradeCalculator.Params): string {
    const { gradeSum, subjectsCount } = this.getGradeSum(subjects);
    return this.getAvarage(gradeSum, subjectsCount);
  }

  getGradeSum(subjects: GradeCalculator.Params): GradeCalculator.GradeSumResult {
    let gradeSum = 0;
    let subjectsCount = 0;
    for (const subject of subjects) {
      const { grade } = subject;
      gradeSum += grade;
      subjectsCount++;
    }
    return { gradeSum, subjectsCount };
  }

  getAvarage(gradeSum: number, subjectsCount: number): string {
    const avarage = gradeSum/subjectsCount;
    return avarage.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  }
}

export namespace GradeCalculator {
  export type Params = {
    subject: string; 
    grade: number;
  }[]

  export type SingleGrade = {
  subject: string;
  grade: number;
};

  export type GradeSumResult = { gradeSum: number; subjectsCount: number; };
}