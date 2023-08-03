import { GradeSumResult, IGradeCalculator, SingleGrade } from "./protocols/IGradeCalculator";

export class GradeCalculator implements IGradeCalculator {
  execute(subjects: SingleGrade[]): string {
    const { gradeSum, subjectsCount } = this.getGradeSum(subjects);
    return this.getAvarage(gradeSum, subjectsCount);
  }

  getGradeSum(subjects: SingleGrade[]): GradeSumResult {
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

