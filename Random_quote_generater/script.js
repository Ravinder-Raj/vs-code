//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: ' "The best way to find yourself is to lose yourself in the service of others" ',
        person: ' Mahatma Gandhi '
    },
    {
        quote: ' "You miss 100% of the shots you don\'t take." ',
        person: ' Wayne Gretzky '
    },
    {
        quote: ' "In three words I can sum up everything I\'ve learned about life: it goes on." ',
        person: ' Robert Frost '
    },
    {
        quote: ' "Success is not final, failure is not fatal: It is the courage to continue that counts." ',
        person: ' Winston Churchill '
    },
    {
        quote: ' "The only way to do great work is to love what you do." ',
        person: ' Steve Jobs '
    },
    {
        quote: ' "Life is what happens when you\'re busy making other plans." ',
        person: ' John Lennon '
    },
    {
        quote: ' "The greatest glory in living lies not in never falling, but in rising every time we fall." ',
        person: ' Nelson Mandela '
    },
    {
        quote: ' "The only thing necessary for the triumph of evil is for good men to do nothing." ',
        person: ' Edmund Burke '
    },
    {
        quote: ' "The future belongs to those who believe in the beauty of their dreams." ',
        person: ' Eleanor Roosevelt '
    },
    {
        quote: ' "The only limit to our realization of tomorrow will be our doubts of today." ',
        person: ' Franklin D. Roosevelt '
    },
    {
        quote: ' "The best way to predict the future is to create it." ',
        person: ' Peter Drucker '
    },
    {
        quote: ' "Your time is limited, so don\'t waste it living someone else\'s life." ',
        person: ' Steve Jobs '
    },
    {
        quote: ' "Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe." ',
        person: ' Albert Einstein '
    },
    {
        quote: ' "It does not matter how slowly you go as long as you do not stop." ',
        person: ' Confucius '
    },
    {
        quote: ' "The only thing we have to fear is fear itself." ',
        person: ' Franklin D. Roosevelt '
    },
    {
        quote: ' "Don\'t count the days, make the days count." ',
        person: ' Muhammad Ali '
    },
    {
        quote: ' "I have no special talent. I am only passionately curious." ',
        person: ' Albert Einstein '
    },
    {
        quote: ' "The journey of a thousand miles begins with one step." ',
        person: ' Lao Tzu '
    },
    {
        quote: ' "Life is really simple, but we insist on making it complicated." ',
        person: ' Confucius '
    },
    {
        quote: ' "Change your thoughts and you change your world." ',
        person: ' Norman Vincent Peale '
    },
    {
        quote: ' "The only true wisdom is in knowing you know nothing." ',
        person: ' Socrates '
    },
    {
        quote: ' "The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it." ',
        person: ' Jordan Belfort '
    },
    {
        quote: ' "Success usually comes to those who are too busy to be looking for it." ',
        person: ' Henry David Thoreau '
    },
    {
        quote: ' "The mind is everything. What you think you become." ',
        person: ' Buddha '
    },
    {
        quote: ' "The best revenge is massive success." ',
        person: ' Frank Sinatra '
    },
    {
        quote: ' "You can never cross the ocean until you have the courage to lose sight of the shore." ',
        person: ' Christopher Columbus '
    },
    {
        quote: ' "The only person you are destined to become is the person you decide to be." ',
        person: ' Ralph Waldo Emerson '
    },
    {
        quote: ' "Life is 10% what happens to us and 90% how we react to it." ',
        person: ' Charles R. Swindoll '
    },
    {
        quote: ' "Success is walking from failure to failure with no loss of enthusiasm." ',
        person: ' Winston Churchill '
    }
];

console.log(quotes);

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length); // Fixed the typo here
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
