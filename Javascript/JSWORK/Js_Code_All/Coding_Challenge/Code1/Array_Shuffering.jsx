
function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    
    const colors = shuffleArray(['red', 'blue', 'green', 'yellow', 'orange', 'purple']);
    console.log(colors);
