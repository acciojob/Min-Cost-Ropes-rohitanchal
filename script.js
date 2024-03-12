function mincost(arr) {
    // Convert the array to a min-heap
    let heap = [...arr];
    heap.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Continue until only one rope is left
    while (heap.length > 1) {
        // Extract the two shortest ropes
        let firstRope = heap.shift();
        let secondRope = heap.shift();
        
        // Calculate the cost of connecting them
        let cost = firstRope + secondRope;
        
        // Add the cost to the total
        totalCost += cost;
        
        // Add the combined rope back to the heap
        heap.push(cost);
        heap.sort((a, b) => a - b); // Re-sort the heap
    }
    
    return totalCost;
}

module.exports = mincost;
