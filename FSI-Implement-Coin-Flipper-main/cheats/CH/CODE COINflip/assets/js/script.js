// TODO: Declare any global variables we need
let headsCount = 0;
let tailsCount = 0;
let total = 0;
let headsPct = 0;
let tailsPct = 0;
let result = 0;

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    //Start with the Flip button
    document.querySelector("#flip-penny").addEventListener('click', function(e){
        //0 - .5 => heads, 0.51 - 1 => tails
        total ++;
        result = Math.random();
        console.log(result);
        if (result <= 0.5) {
            headsCount ++;
            document.querySelector("#penny-img").src="./assets/images/penny-heads.jpg"
            document.querySelector("#status-message").textContent = "You got heads! The best one"
        } else {
            tailsCount ++;
            document.querySelector("#penny-img").src="./assets/images/penny-tails.jpg"
            document.querySelector("#status-message").textContent = "You got tails! I'm sorry"
        }

        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        headsPct = (headsCount/total)*100;
        tailsPct = (tailsCount/total)*100;
        console.log(headsPct, headsCount, tailsCount);

        //select the four counts/pct and change the text
        document.querySelector("#heads").textContent = `${headsCount}`
        document.querySelector("#heads-percent").textContent = `${headsPct}%`
        document.querySelector("#tails").textContent = `${tailsCount}`
        document.querySelector("#tails-percent").textContent = `${tailsPct}%`
    })

    // Clear Button Click Handler
    document.querySelector("#clear-score").addEventListener('click', function(e){
        // TODO: Reset global variables to 0
        headsCount = 0;
        tailsCount = 0;
        total = 0;
        headsPct = 0;
        tailsPct = 0;
        result = 0;

        // TODO: Update the scoreboard (same logic as in flip button click handler)
        document.querySelector("#heads").textContent = `${headsCount}`;
        document.querySelector("#heads-percent").textContent = `${headsPct}%`;
        document.querySelector("#tails").textContent = `${tailsCount}`;
        document.querySelector("#tails-percent").textContent = `${tailsPct}%`;
    })
})