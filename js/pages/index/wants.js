var words = ["for a fun night out.", "for an unforgettable date night.", "to relieve stress."];
var counter = 0;
var interval = 5000;

function changeWants() {
    return new Promise((resolve) => {
        $("#wants")
            .html(words[counter])
            .fadeIn(interval * 0.1)
            .delay(interval * 0.8)
            .fadeOut(interval * 0.1, function() {
                counter = (counter + 1) % words.length;
                resolve();
            });
    });
};

// Change word every 5 seconds
(function loop() {
    changeWants().then(() => {
        setTimeout(loop, 0);
    });
})();