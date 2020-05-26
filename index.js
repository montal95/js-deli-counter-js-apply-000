let katzDeliLine = [];
let takeANumber = (number, name) => {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}