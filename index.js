const takeANumber = (currentLine, name) => {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

const nowServing = (currentLine) => {
  if(currentLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  let name = currentLine[0];
  currentLine.shift();
  return `Currently serving ${name}`;
}