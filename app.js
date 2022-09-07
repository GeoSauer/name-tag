// import functions and grab DOM elements
const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('button');
const nameDisplay = document.getElementById('name-display');

// let state

// set event listeners
changeButton.addEventListener('click', () => {
    const userName = nameInput.value;
    nameDisplay.textContent = userName;
    nameInput.value = '';
});

// get user input
// use user input to update state
// update DOM to reflect the new state
