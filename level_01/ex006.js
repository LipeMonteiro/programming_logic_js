//Ask for a note (0-10) and inform
// Failed (<6)
// Recovery (6 - 6.9)
// Approved (≥ 7)

function verifyNote (note) {
    if (note < 0 || note > 10) {
        throw new RangeError('Insert a note between 0-10')
    }
    else if (note < 6) return "Failed";
    else if (note < 7) return "Recovery";
    else return "Approved"
}

console.log(verifyNote(11));