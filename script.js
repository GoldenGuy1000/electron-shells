function getShellsText() {
    let input = document.getElementById("math-input").value;
    let output = "";
    let orbs = getShells(input);
    if (typeof orbs === 'string') {
        output = orbs
    } else {
        for (let i = 0; i < orbs.length; i++) {
            output += String(orbs[i][0]) + orbs[i][1] + "<sup>" + String(orbs[i][2]) + "</sup>";
        }
    }

    document.getElementById("result").innerHTML = output;
}

const orbitals = [[1, 's', 2], [2, 's', 2], [2, 'p', 6], [3, 's', 2], [3, 'p', 6], [4, 's', 2], [3, 'd', 10], [4, 'p', 6], [5, 's', 2], [4, 'd', 10], [5, 'p', 6], [6, 's', 2], [4, 'f', 14], [5, 'd', 10], [6, 'p', 6], [7, 's', 2], [5, 'f', 14], [6, 'd', 10], [7, 'p', 6]]
const elements = [["h", "hydrogen", 1], ["he", "helium", 2], ["li", "lithium", 3], ["be", "beryllium", 4], ["b", "boron", 5], ["c", "carbon", 6], ["n", "nitrogen", 7], ["o", "oxygen", 8], ["f", "fluorine", 9], ["ne", "neon", 10], ["na", "sodium", 11], ["mg", "magnesium", 12], ["al", "aluminum", 13], ["si", "silicon", 14], ["p", "phosphorus", 15], ["s", "sulfur", 16], ["cl", "chlorine", 17], ["ar", "argon", 18], ["k", "potassium", 19], ["ca", "calcium", 20], ["sc", "scandium", 21], ["ti", "titanium", 22], ["v", "vanadium", 23], ["cr", "chromium", 24], ["mn", "manganese", 25], ["fe", "iron", 26], ["co", "cobalt", 27], ["ni", "nickel", 28], ["cu", "copper", 29], ["zn", "zinc", 30], ["ga", "gallium", 31], ["ge", "germanium", 32], ["as", "arsenic", 33], ["se", "selenium", 34], ["br", "bromine", 35], ["kr", "krypton", 36], ["rb", "rubidium", 37], ["sr", "strontium", 38], ["y", "yttrium", 39], ["zr", "zirconium", 40], ["nb", "niobium", 41], ["mo", "molybdenum", 42], ["tc", "technetium", 43], ["ru", "ruthenium", 44], ["rh", "rhodium", 45], ["pd", "palladium", 46], ["ag", "silver", 47], ["cd", "cadmium", 48], ["in", "indium", 49], ["sn", "tin", 50], ["sb", "antimony", 51], ["te", "tellurium", 52], ["i", "iodine", 53], ["xe", "xenon", 54], ["cs", "cesium", 55], ["ba", "barium", 56], ["la", "lanthanum", 57], ["ce", "cerium", 58], ["pr", "praseodymium", 59], ["nd", "neodymium", 60], ["pm", "promethium", 61], ["sm", "samarium", 62], ["eu", "europium", 63], ["gd", "gadolinium", 64], ["tb", "terbium", 65], ["dy", "dysprosium", 66], ["ho", "holmium", 67], ["er", "erbium", 68], ["tm", "thulium", 69], ["yb", "ytterbium", 70], ["lu", "lutetium", 71], ["hf", "hafnium", 72], ["ta", "tantalum", 73], ["w", "tungsten", 74], ["re", "rhenium", 75], ["os", "osmium", 76], ["ir", "iridium", 77], ["pt", "platinum", 78], ["au", "gold", 79], ["hg", "mercury", 80], ["tl", "thallium", 81], ["pb", "lead", 82], ["bi", "bismuth", 83], ["po", "polonium", 84], ["at", "astatine", 85], ["rn", "radon", 86], ["fr", "francium", 87], ["ra", "radium", 88], ["ac", "actinium", 89], ["th", "thorium", 90], ["pa", "protactinium", 91], ["u", "uranium", 92], ["np", "neptunium", 93], ["pu", "plutonium", 94], ["am", "americium", 95], ["cm", "curium", 96], ["bk", "berkelium", 97], ["cf", "californium", 98], ["es", "einsteinium", 99], ["fm", "fermium", 100], ["md", "mendelevium", 101], ["no", "nobelium", 102], ["lr", "lawrencium", 103], ["rf", "rutherfordium", 104], ["db", "dubnium", 105], ["sg", "seaborgium", 106], ["bh", "bohrium", 107], ["hs", "hassium", 108], ["mt", "meitnerium", 109], ["ds", "darmstadtium", 110], ["rg", "roentgenium", 111], ["cn", "copernicium", 112], ["nh", "nihonium", 113], ["fl", "flerovium", 114], ["mc", "moscovium", 115], ["lv", "livermorium", 116], ["ts", "tennessine", 117], ["og", "oganesson", 118]]
function getShells(number_or_name) {
    let atomic_number;
    if (!isNaN(Number(number_or_name))) {
        atomic_number = Number(number_or_name);
    } else if (typeof number_or_name === 'string') {
        atomic_number = search_elements(number_or_name);
        if (atomic_number === "Not an element") {
            return `\`${number_or_name}\` is not an atomic number, nor the name of an element.`;
        }
    }
    let acc = 0;
    let num_orbitals = [];
    for (let i = 0; i < orbitals.length; i++) {
        if (orbitals[i][2] <= atomic_number - acc) {
            acc += orbitals[i][2];
            num_orbitals.push(orbitals[i])
        } else if (atomic_number - acc !== 0) {
            let [shell, subshell, _] = orbitals[i];
            let partial_orbital = [shell, subshell, atomic_number - acc];
            num_orbitals.push(partial_orbital);
            break;
        }
    }
    return num_orbitals;
}

function search_elements(element_name) {
    element_name = element_name.trim().toLowerCase();
    for (const element of elements) {
        if (element_name === element[0] || element_name === element[1]) {
            return element[2];
        }
    }
    return "Not an element";
}