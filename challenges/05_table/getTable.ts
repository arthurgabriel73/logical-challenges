interface Table {
  multiplicand: number;
  value: number;
}

export function getTable(num: number): Table[] {
  let table: Table[] = [];

  for (let i = 1; i <= 10; i++) {
    table.push({
      multiplicand: i,
      value: i * num
    })
  }
  return table;
}