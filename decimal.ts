// 加法
export function add(num1: number | string, num2: number | string): number {
  let r1, r2, m;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((num1 as number) * m + (num2 as number) * m) / m;
}

// 减法
export function subtract(num1: number | string, num2: number | string): string {
  let r1, r2, m, n;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return (((num1 as number) * m - (num2 as number) * m) / m).toFixed(n);
}

// 乘法
export function multiply(num1: number | string, num2: number | string): number {
  let m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

// 除法
export function divide(num1: number, num2: number) {
  let t1 = 0,
    t2 = 0,
    r1, r2;
  try {
    t1 = num1.toString().split('.')[1].length;
  } catch (e) {}
  try {
    t2 = num2.toString().split('.')[1].length;
  } catch (e) {}
  const p = Math.pow(10, Math.max(t1, t2));
  r1 = Math.round(num1 * p);
  r2 = Math.round(num2 * p);
  return (r1 / r2) / p;
}

export function _toFixed (val: string | number, precision: number) {
  return Number(val).toLocaleString('en-US', {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  })
}

// // 测试案例
// console.log(add(0.1, 0.2)); // 0.3
// console.log(subtract(0.3, 0.1)); // 0.2
// console.log(multiply(0.1, 0.2)); // 0.02
// console.log(divide(0.3, 0.1)); // 3
