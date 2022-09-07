// import functions and grab DOM elements
const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('button');
const nameDisplay = document.getElementById('name-display');

// let state

// set event listeners
changeButton.addEventListener('click', () => {
    console.log('clicking');
    const userName = nameInput.value;
    console.log(userName);
    nameDisplay.textContent = userName;
    console.log(nameDisplay);
    nameInput.value = '';
});

// get user input
// use user input to update state
// update DOM to reflect the new state
