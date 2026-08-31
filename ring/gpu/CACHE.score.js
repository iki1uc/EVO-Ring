class CACHE_SCORE {

    best(a, b){
        return a > b ? a : b;
    }

    offer(mode){
        if(mode === "6e") return 6;
        if(mode === "12e") return 6;
        if(mode === "RAW") return 6;
        if(mode === "6d") return 6;
        return 0;
    }
}

window.CACHE_SCORE = new CACHE_SCORE();
