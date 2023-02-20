var letsCookButton = document.querySelector('#letsCookBtn');
var cookPotImage = document.querySelector('#cookPotImg');
var mealMessageText = document.querySelector('#mealMessage');
var shouldMake = document.querySelector('#shouldMakeWords');
var clearMealButton = document.querySelector('#clearButton');
var sideDishRadioBtn = document.querySelector('#sideDishRadio');
var mainDishRadioBtn = document.querySelector('#mainDishRadio');
var dessertRadioBtn = document.querySelector('#dessertRadio');
var entireMealRadioBtn = document.querySelector('#entireMealRadio');
var returnMessage = document.querySelector('#mealMessage');
var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',
];

letsCookButton.addEventListener('click', getMeal);
clearMealButton.addEventListener('click', clearMeal);

function getRandomIndex(array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
};

function getMeal(event) {
    event.preventDefault(); 
    var selectMeal = document.querySelector('input[name="meals"]:checked').value;;

    if (selectMeal === 'side') {
        cookPotImage.classList.add('hidden');
        shouldMake.classList.remove('hidden');
        returnMessage.classList.remove('hidden');
        returnMessage.innerText = getRandomIndex(sides);
        clearMealButton.classList.remove('hidden');

    } else if (selectMeal === 'main') {
        cookPotImage.classList.add('hidden');
        shouldMake.classList.remove('hidden');
        returnMessage.classList.remove('hidden');
        returnMessage.innerText = getRandomIndex(mains);
        clearMealButton.classList.remove('hidden');

    } else if (selectMeal === 'dessert') {
        cookPotImage.classList.add('hidden');
        shouldMake.classList.remove('hidden');
        returnMessage.classList.remove('hidden');
        returnMessage.innerText = getRandomIndex(desserts);
        clearMealButton.classList.remove('hidden');
    }
}

function clearMeal(event) {
    event.preventDefault();
    cookPotImage.classList.remove('hidden');
    shouldMake.classList.add('hidden');
    returnMessage.classList.add('hidden');
    clearMealButton.classList.add('hidden');
}
