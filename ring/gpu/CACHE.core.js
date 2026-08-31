class CACHE {

    constructor(){
        this.input = null;
        this.state = "INIT";
        this.score = 0;
        this.mode = "RAW";
        this.output = null;
    }

    enter(value){
        this.input = value;
        this.state = "RECEIVED";
    }

    setMode(mode){
        this.mode = mode;
    }

    compute(){
        let raw = this.input;

        // SCORE
        this.score = (raw * 7) % 999;

        // MISS / FAIL / RDY
        let status = "MISS";
        if(this.score > 600) status = "RDY";
        if(this.score < 100) status = "FAIL";

        // MODE CONVERSION
        let converted = raw;

        if(this.mode === "6e") converted = raw % 6;
        if(this.mode === "12e") converted = raw % 12;
        if(this.mode === "RAW") converted = raw;
        if(this.mode === "6d") converted = raw % 6;

        this.output = {
            input: raw,
            score: this.score,
            status,
            mode: this.mode,
            converted
        };

        return this.output;
    }
}

window.CACHE = new CACHE();
