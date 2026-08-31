class CACHE_PIPE {

    forward(cache){
        return {
            next:
                cache.status === "RDY" ? "XI" :
                cache.status === "MISS" ? "IN" :
                "END",
            signature: cache.score,
            mode: cache.mode,
            converted: cache.converted
        };
    }
}

window.CACHE_PIPE = new CACHE_PIPE();
