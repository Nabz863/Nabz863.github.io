function getMusicTitlesByYear(arrTracks) {

    function errorHandling(objTrack) {
        let boolError = false;
        if (typeof objTrack !== "object") {
            //throw new Error("Invalid input: Track is not an object");
            boolError = true;
        }
        if (objTrack === null) {
            //throw new Error("Invalid input: Track has no value");
            boolError = true;
        }
        if (!objTrack.hasOwnProperty("title") || !objTrack.hasOwnProperty("artist") || !objTrack.hasOwnProperty("year")) {
            //throw new Error("Invalid input: Track is missing a property");
            boolError = true;
        }
        if ((typeof objTrack.title !== "string") || (typeof objTrack.artist !== "string")) {
            //throw new Error("Invalid input: Artist and/or track should be strings");
            boolError = true;
        }
        if (typeof objTrack.year !== "number") {
            //throw new Error("Invalid input: Date should be of type number");
            boolError = true;
        }
        if (arrTracks.length === 0) {
            //throw new Error("Invalid input: No tracks");
            boolError = true;
        }
        return boolError;
    }

    for (let h = 0; h < arrTracks.length; h++) {
        if (!errorHandling(arrTracks[h])) {
            arrTracks.splice(h,1);
        }

    }

    let arrYears = [];
    for (let i = 0; i < arrTracks.length; i++) {
        if (!(arrYears.includes(arrTracks[i].year))) {
            arrYears.push(arrTracks[i].year);
        }
    }
    let objResult = {};
    let strYear;
    for (let j = 0; j < arrYears.length; j++) {
        strYear = String(arrYears[j]);
        let arrTracksPYr = [];
        for (let k = 0; k < arrTracks.length; k++) {
            if (arrTracks[k].year == arrYears[j]) {
                arrTracksPYr.push(arrTracks[k].title);
            }
        }
        arrTracksPYr.sort((a,b)=>a.localeCompare(b));
        objResult[strYear] = arrTracksPYr;

    }
    return objResult;
}

export {getMusicTitlesByYear};