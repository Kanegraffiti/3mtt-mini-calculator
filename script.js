body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #1a1a1a;
    font-family: Arial, sans-serif;
}

.calculator {
    background-color: #2a2a2a;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 320px;
}

.display {
    background-color: #3a3a3a;
    color: white;
    font-size: 2em;
    text-align: right;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

button {
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    font-size: 1.2em;
    cursor: pointer;
    background-color: #4a4a4a;
    color: white;
}

button:hover {
    background-color: #5a5a5a;
}

.operator {
    background-color: #6a6a6a;
}

.operator:hover {
    background-color: #7a7a7a;
}

.equals {
    background-color: #00c4b4;
}

.equals:hover {
    background-color: #00d4c4;
}

.sidebar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    left: 20px;
}
