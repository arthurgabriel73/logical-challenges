import { GradeCalculator } from "../src/GradeCalculator"

const grades = [
    {
      description: 'calculates average grade correctly',
      grades: [
        { subject: 'Physics', grade: 10 },
        { subject: 'Math', grade: 9.5 },
        { subject: 'History', grade: 8 }
      ],
      expectedAverage: '9.17'
    },
    {
      description: 'handles one grade',
      grades: [{ subject: 'Biology', grade: 7.5 }],
      expectedAverage: '7.50'
    },
    {
      description: 'handles equal grades',
      grades: [
        { subject: 'English', grade: 6 },
        { subject: 'Chemistry', grade: 6 },
        { subject: 'Art', grade: 6 }
      ],
      expectedAverage: '6.00'
    },
  ]
describe('GradeCalculator test', () => {
  const gradeCalculator = new GradeCalculator();

  it.each(grades)('$description', ({ grades, expectedAverage }) => {
    // Act
    const result = gradeCalculator.execute(grades);

    // Assert
    expect(result).toBe(expectedAverage);
  })
})