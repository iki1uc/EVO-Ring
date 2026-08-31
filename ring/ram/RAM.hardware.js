// RAM.hardware.js
export async function loadHardwareAxioms(){
    const res = await fetch("./axiom-hardware-6.csv");
    const text = await res.text();

    const lines = text.trim().split("\n").slice(1);
    return lines.map(line => {
        const [axiom, hardware, aufgabe] = line.split(",");
        return { axiom, hardware, aufgabe };
    });
}
