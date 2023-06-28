function calculateSquare() {
    var n = parseInt(document.getElementById("input-n").value);
    console.log("clicked on calculate ",n)
    var squareResult = n * n;
    
    document.getElementById("n-value").textContent = n;
    document.getElementById("square-value").textContent = squareResult;
}

