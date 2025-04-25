(() => {
  const display = document.getElementById('display');
  let current = '';
  let previous = '';
  let operator = null;

  function updateDisplay(value) {
    display.textContent = value || '0';
  }

  function clearAll() {
    current = '';
    previous = '';
    operator = null;
    updateDisplay('');
  }

  function appendDigit(d) {
    if (d === '.' && current.includes('.')) return;
    current = (current || '') + d;
    updateDisplay(current);
  }

  function handleParenthesis() {
    const lastChar = current.slice(-1);
    if (lastChar === '(') {
      current += ')';
    } else {
      current += '(';
    }
    updateDisplay(current);
  }

  function chooseOperator(op) {
    if (!current) return;
    if (previous) compute();
    operator = op;
    previous = current;
    current = '';
  }

  function compute() {
    try {
      const expr = previous + operatorMap(operator) + current;
      const result = eval(expr);
      current = String(result);
      operator = null;
      previous = '';
      updateDisplay(current);
    } catch {
      updateDisplay('Error');
    }
  }

  function operatorMap(op) {
    switch(op) {
      case '×': return '*';
      case '÷': return '/';
      case '−': return '-';
      default: return op;
    }
  }

  function handlePercent() {
    if (!current) return;
    current = String(parseFloat(current) / 100);
    updateDisplay(current);
  }

  function handleDelete() {
    current = current.slice(0, -1);
    updateDisplay(current);
  }

  document.querySelector('.buttons').addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.dataset.action;
    const val = btn.dataset.value;
    switch (action) {
      case 'digit': appendDigit(val); break;
      case 'parenthesis': handleParenthesis(); break;
      case 'operator': chooseOperator(val); break;
      case 'equals': compute(); break;
      case 'clear': clearAll(); break;
      case 'percent': handlePercent(); break;
    }
  });

  document.querySelector('.top-bar').addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.action === 'delete') handleDelete();
  });

  // init
  clearAll();
})();
