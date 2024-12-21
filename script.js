function appendCharacter(character) {
    const resultField = document.getElementById('result');
    resultField.value += character;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteChar() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      const resultField = document.getElementById('result');
      resultField.value = eval(resultField.value);
    } catch (error) {
      alert('Invalid calculation');
    }
  }
  