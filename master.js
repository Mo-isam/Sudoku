<<<<<<< HEAD
// console.log(Math.floor(Math.random() * 9 + 1));

class cell {
    constructor(i, j) {
        // let nume;
        // console.log(this.num);
        this.cell = document.querySelector(
            `.board>:nth-child(${i + 1})>:nth-child(${j + 1})`
        );
        this.cellp = this.cell.querySelector("p");
        this.cellnote = this.cell.querySelectorAll("div>p");
        //!-----------------Event Listener-------------------//
        // similar(num);
        this.as(i, j);
        // undoFunction([1, 2, 3]);
        // !EventListener
    }

    as(i, j, a, arr) {
        let nume;
        if (typeof matrex[i][j] == "object") {
            nume = matrex[i][j][0];
            this.cell.addEventListener("click", cclk1);
        } else {
            nume = matrex[i][j];
            this.cell.addEventListener("click", same);
        }

        function same(e) {
            console.log(nume);
            // e.currentTarget.classList.add("like");
            similar(nume);
            inSame(i, j, true);
            inSame(i, j, false);
        }
        function cclk1(e) {
            let cell = e.currentTarget;
            if (num != undefined) {
                console.log(e.currentTarget);
                if (penclk) {
                    cell.querySelector("p").textContent = undefined;
                    // console.log(cell.querySelectorAll(`div>p`)[num]);
                    cell.querySelector(`div`).classList.add("note");
                    let notenum = cell.querySelectorAll(`div>p`)[num];
                    if (matrex[i][j][1].includes(num)) {
                        undoArray.push([i, j, num, true]);
                        console.log(undoArray);
                        notenum.textContent = "";
                        notenum.classList.remove("like");
                        let g = [...matrex[i][j][1]].indexOf(num);
                        matrex[i][j][1].splice(g, 1);
                    } else {
                        undoArray.push([i, j, num, true]);
                        console.log(undoArray);
                        notenum.textContent = num;
                        notenum.classList.add("like");
                        matrex[i][j][1].push(num);
                        console.log(matrex[i][j]);
                    }
                } else {
                    cell.querySelector(`div`).classList.remove("note");
                    console.log(num);
                    cell.querySelector("p").textContent = num;
                    console.log(this.num, num);
                    // ! if find the right answer
                    if (matrex[i][j][0] == num) {
                        undoArray.push([i, j, true]);
                        console.log(undoArray);
                        removeinSameColumn(i, j, num);
                        // matrex[i][j] = matrex[i][j][0];
                        numarray[num - 1]--;
                        console.log(numarray);
                        document.querySelector(
                            `.num>div:nth-child(${num})>span`
                        ).textContent = numarray[num - 1];
                        // cell.querySelector("p").classList.remove("WrongAnswer");
                        cell.querySelector("p").classList.add("answer");
                        cell.classList.add("like");
                        cell.removeEventListener("click", cclk1);
                        cell.addEventListener("click", same);
                        inSame(i, j, true);
                        inSame(i, j, false);
                        if (numarray[num - 1] == 0) {
                            document.querySelector(
                                `.num>div:nth-child(${num})`
                            ).style.visibility = "hidden";
                            num = undefined;
=======
// let t = [[1], [2], [3]],
//     e = [[[1, 2, 3]], [[1, 2, 3]], [[1, 2, 3]]];
// // e.length = 9;
// for (let g = 0; g < e.length; g++) {
//     console.table(e[g]);
// }
// let a = new Set();
// let f = 0;
// do {
//     f++;
//     let x = Math.floor(Math.random() * 9 + 1);
//     a.add(x);
// } while (a.size < 9);
// a.delete(9);
// a = Array.from(a);
// console.log(a[0], f);
let row = [],
    box = [],
    inrow = [];
let matrex = [[[[]]]];
// matrex[0][0][0][0] = 8;
// console.log(matrex[0][0][0][0]);
// console.log(chk(0, 0, 0, 1, 0));
// let ll = [...matrex[0][0]].join().replace(/,/g, "");
// ll = [...matrex[0][0][0], ...matrex[0][0][1], ...matrex[0][0][2]];
// ll = Array.from(ll);
// console.log(ll);
let v = 0;
for (let g = 0; g < 3; g++) {
    matrex[g] = [];
    for (let h = 0; h < 3; h++) {
        matrex[g][h] = [];
        let a = [];
        do {
            let x = Math.floor(Math.random() * 9 + 1);
            if (!a.includes(x)) {
                a.push(x);
            }
        } while (a.length < 9);
        for (let i = 0; i < 3; i++) {
            matrex[g][h][i] = [];
            for (let j = 0; j < 3; j++) {
                let t = true;
                for (let m = 0; m < a.length; m++) {
                    let xx = a[m];
                    if (rowchk(g, h, i, xx, j)) {
                        matrex[g][h][i][j] = xx;
                        a[m] = a.pop();
                        t = false;
                        break;
                    }
                }
                if (t) {
                    g = h = i = 0;
                    j = -1;
                    matrex[g] = [];
                    matrex[g][h] = [];
                    matrex[g][h][i] = [];
                    // matrex[g][h][i][j] = 1000;
                    v++;
                    // console.log(v);
                    a = [];
                    do {
                        let x = Math.floor(Math.random() * 9 + 1);
                        if (!a.includes(x)) {
                            a.push(x);
>>>>>>> 6e2834fd0761a7b2877d7857903ef1c57314255a
                        }
                    } else {
                        undoArray.push([i, j, false]);
                        console.log(undoArray);
                        cell.querySelector("p").classList.add("WrongAnswer");
                    }
                }
            }
        }
        if (a) {
            undoFunction(this.cell, this.cellp, this.cellnote, arr);
        }
        function undoFunction(cell, cellp, cellnote, arr) {
            console.log(arr, arr.length);
            if (arr.length == 3) {
                if (arr[2] == true) {
                    let x = cellp.textContent;
                    cell.querySelector(`div`).classList.add("note");

                    cell.querySelector(`div>p:nth-child(${x})`).textContent = x;

                    cellp.textContent = undefined;
                    numarray[num - 1]++;
                    // matrex[i][j] = [matrex[i][j], []];

                    cell.querySelector("p").classList.remove("answer");

                    cell.removeEventListener("click", same);
                    cell.addEventListener("click", cclk1);
                } else {
                    cellp.textContent = undefined;
                    // numarray[num - 1]++;
                    // cell.querySelector("p").classList.remove("answer");

                    // cell.removeEventListener("click", same);
                    // cell.addEventListener("click", cclk1);
                }
            } else {
                if (arr[2] == true) {
                }
            }
        }
    }
}
<<<<<<< HEAD
class cell111111 {
    constructor(i, j) {
        let nume;
        // console.log(this.num);
        this.cell = document.querySelector(
            `.board>:nth-child(${i + 1})>:nth-child(${j + 1})`
        );
        this.cellp = this.cell.querySelector("p");
        this.cellnote = this.cell.querySelectorAll("div>p");
        //!-----------------Event Listener-------------------
        if (typeof matrex[i][j] == "object") {
            nume = matrex[i][j][0];
            this.cell.addEventListener("click", cclk1);
=======

console.log("Sudoku created in", v, "Tries");
// console.log("---------------->", matrex);
// console.log(chk(1, 1, 1, 1, 1));
function rowchk(x, y, z, key, index) {
    let row = [];
    for (let i = 0; i < 3; i++) {
        if (matrex[x][i] == undefined) {
            break;
>>>>>>> 6e2834fd0761a7b2877d7857903ef1c57314255a
        } else {
            nume = matrex[i][j];
            this.cell.addEventListener("click", same);
        }
        // similar(num);
        function same() {
            console.log(nume);
            similar(nume);
            inSame(i, j, true);
            inSame(i, j, false);
        }
        function cclk1(e) {
            let cell = e.currentTarget;
            if (num != undefined) {
                console.log(e.currentTarget);
                if (penclk) {
                    cell.querySelector("p").textContent = undefined;
                    // console.log(cell.querySelectorAll(`div>p`)[num]);
                    cell.querySelector(`div`).classList.add("note");
                    let notenum = cell.querySelectorAll(`div>p`)[num];
                    if (matrex[i][j][1].includes(num)) {
                        undoArray.push([i, j, num, true]);
                        console.log(undoArray);
                        notenum.textContent = "";
                        notenum.classList.remove("like");
                        let g = [...matrex[i][j][1]].indexOf(num);
                        matrex[i][j][1].splice(g, 1);
                    } else {
                        undoArray.push([i, j, num, true]);
                        console.log(undoArray);
                        notenum.textContent = num;
                        notenum.classList.add("like");
                        matrex[i][j][1].push(num);
                        console.log(matrex[i][j]);
                    }
                } else {
                    cell.querySelector(`div`).classList.remove("note");
                    console.log(num);
                    cell.querySelector("p").textContent = num;
                    console.log(this.num, num);
                    // ! if find the right answer
                    if (matrex[i][j][0] == num) {
                        undoArray.push([i, j, true]);
                        console.log(undoArray);

                        removeinSameColumn(i, j, num);
                        matrex[i][j] = matrex[i][j][0];
                        numarray[num - 1]--;
                        console.log(numarray);
                        document.querySelector(
                            `.num>div:nth-child(${num})>span`
                        ).textContent = numarray[num - 1];
                        // cell.querySelector("p").classList.remove("WrongAnswer");
                        cell.querySelector("p").classList.add("answer");
                        cell.classList.add("like");
                        cell.removeEventListener("click", cclk1);
                        cell.addEventListener("click", same);
                        inSame(i, j, true);
                        inSame(i, j, false);
                        if (numarray[num - 1] == 0) {
                            document.querySelector(
                                `.num>div:nth-child(${num})`
                            ).style.visibility = "hidden";
                            num = undefined;
                        }
                    } else {
                        undoArray.push([i, j, false]);
                        console.log(undoArray);
                        cell.querySelector("p").classList.add("WrongAnswer");
                    }
                }
            }
        }
        const p = function () {
            console.log("ppppppppppppppppppppppp");
        };
        // undoFunction([1, 2, 3]);
        // !EventListener
    }

    undoFunction(arr) {
        console.log(arr, arr.length);
        if (arr.length == 3) {
            if (arr[2] == true) {
                this.cellp.textContent = undefined;
                console.log(this.cellp);
                console.log(this.same());
                this.cell.removeEventListener("click", same);
                this.cell.addEventListener("click", cclk1);
            }
        }
    }
}

// const car1 = new cell(i,j);
const undo = document.getElementById("undo");
const pencil = document.getElementById("pencil");
let penclk = false;
let matrex = [[]];
let numarray = [9, 9, 9, 9, 9, 9, 9, 9, 9];
let undoArray = [];
let classes = [];
let v = 0;
for (let i = 0; i < 9; i++) {
    matrex[i] = [];
    let a = [];
    do {
        let x = Math.floor(Math.random() * 9 + 1);
        if (!a.includes(x)) {
            a.push(x);
        }
    } while (a.length < 9);
    // console.log(a);
    for (let j = 0; j < 9; j++) {
        let t = true;

        for (let m = 0; m < a.length; m++) {
            if (colchkk(i, j, a[m]) && rowchkk(i, j, a[m])) {
                let num = a[m];
                matrex[i][j] = num;

                t = false;
                a[m] = a.pop();
                break;
            }
        }

        if (t) {
            v++;
            // console.log(v);
            i = 0;
            j = -1;
            matrex = [[]];
            matrex[i] = [];
            a = [];
            do {
                let x = Math.floor(Math.random() * 9 + 1);
                if (!a.includes(x)) {
                    a.push(x);
                }
            } while (a.length < 9);
        }
    }
}
matrex = [
    [[6, []], 5, [3, []], [7, []], [9, []], [8, []], [1, []], [4, []], [2, []]],
    [[9, []], [7, []], [4, []], [3, []], [1, []], 2, [8, []], [5, []], 6],
    [[8, []], [1, []], 2, [4, []], 5, [6, []], 3, [9, []], [7, []]],
    [[8, []], 7, [9, []], [2, []], [6, []], [4, []], [3, []], [1, []], [5, []]],
    [[6, []], 3, [1, []], 7, [9, []], 5, [4, []], [2, []], 8],
    [[2, []], 4, 5, [1, []], 8, [3, []], 6, [7, []], 9],
    [9, 8, [6, []], 4, [2, []], 7, [5, []], 3, [1, []]],
    [[5, []], [4, []], 3, 1, [6, []], [9, []], 2, [8, []], [7, []]],
    [[7, []], [2, []], 1, [5, []], 3, [8, []], [9, []], 6, 4],
];
console.log(numarray);
console.log(v);
// colchk(3, 5, 1);
// console.log(rowchkk(0, 0, 8));
// rowchkk(7, 8, 0);
function rowchkk(x, y, key) {
    // console.log("x,y--->", matrex[x][y]);
    for (let w = getrow(x); w < getrow(x) + 3; w++) {
        // if (w == x) {
        //     continue;
        // }
        for (let e = getrow(y); e < getrow(y) + 3; e++) {
            if (w == x && e == y) {
                return true;
            }
            // console.log(matrex[w][e]);
            if (matrex[w][e] == key) {
                return false;
            }
        }
    }
    return true;
}
<<<<<<< HEAD
function colchkk(x, y, key) {
    for (let z = getcol(x); z < 9; z += 3) {
        for (let q = getcol(y); q < 9; q += 3) {
            if (matrex[z] == undefined) {
                return true;
            }
            if (matrex[z][q] == key) {
                return false;
            }
        }
    }
    return true;
}
function getcol(x) {
    if (x < 3) {
        x = x;
    } else if (x > 5) {
        x -= 6;
    } else {
        x -= 3;
    }
    return x;
}
function getrow(x) {
    let xx;
    if (x < 3) {
        xx = 0;
    } else if (x > 5) {
        xx = 6;
    } else {
        xx = 3;
    }
    return xx;
}
function colchk(x, y, key) {
    for (let i = 0; i < x; i++) {
        if (matrex[i][y] == key) {
            return false;
        }
    }
    return true;
}
function rowchk(x, y, key) {
    if (matrex[x].includes(key)) {
        return false;
    } else {
        return true;
    }
}
function boxchk(x, y, key) {
    let i, j;
    if (x < 3) {
        i = 0;
    } else if (x > 5) {
        i = 6;
    } else {
        i = 3;
    }
    if (y < 3) {
        j = 0;
    } else if (y > 5) {
        j = 6;
    } else {
        j = 3;
    }

    for (let a = i; a < i + 3; a++) {
        for (let s = j; s < j + 3; s++) {
            if (matrex[a] == undefined) {
                return true;
            }
            if (s == x && s == y) {
                return true;
            } else if (matrex[a][s] == key) {
                return false;
            }
        }
    }
    // console.log("box ok");
    return true;
}

console.log(...matrex);
let f = document.querySelector(".board>:nth-child(1)>:nth-child(1)>p");
console.log(f);
//!------------------ start keyboard number -----------------------
let t = document.querySelectorAll(".num>div");
for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("click", clk);
}
let a;
let num;
function clk() {
    if (a != null) {
        a.classList.remove("clk");
    }
    a = this;
    a.classList.add("clk");
    num = a.querySelector("p").textContent;
    console.log("num = ", num);
    similar(num);
    inSame(0, 0, true);
    // inSame(i, j, false);
}
//? Similar is a function for showing similar numbers
let prives = 1;
function similar(num) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.querySelector(
                `.board>:nth-child(${i + 1})>:nth-child(${j + 1})`
            );
            let cellText = cell.querySelector("p").textContent;
            if (matrex[i][j] == num) {
                if (cellText != "") {
                    cell.classList.add("like");
                }
            } else {
                let notenum = document.querySelector(
                    `.board>:nth-child(${i + 1})>:nth-child(${
                        j + 1
                    })>div>p:nth-child(${num})`
                );
                let privesNum = document.querySelector(
                    `.board>:nth-child(${i + 1})>:nth-child(${
                        j + 1
                    })>div>p:nth-child(${prives})`
                );

                if (notenum.textContent == num) {
                    console.log(notenum);
                    notenum.classList.add("like");
                }
                if (privesNum.textContent == prives) {
                    privesNum.classList.remove("like");
                } else {
                    cell.classList.remove("like");
                }
            }
        }
    }
    prives = num;
}
//!----------------- End keyboard number --------------------------

let cont = 0;
// do {
//     let i = Math.floor(Math.random() * 9 + 1);
//     let j = Math.floor(Math.random() * 9 + 1);
//     // console.log(typeof matrex[i - 1][j - 1]);
//     if (typeof matrex[i - 1][j - 1] == "number") {
//         cont++;
//         // numarray[matrex[i - 1][j - 1] - 1]++;
//         matrex[i - 1][j - 1] = [matrex[i - 1][j - 1], []];
//     }
// } while (cont < 40);
// console.log(matrex);
// for (let i = 0; i < 9; i++) {
//     document.querySelector(`.num>div:nth-child(${i + 1})>span`).textContent =
//         numarray[i];
// }
console.log(numarray);
//! --------------pencil--------------------
pencil.addEventListener("click", (e) => {
    console.log("aaaaaaaaaaaaaaaaaaaaaa");
    e.currentTarget.classList.toggle("penon");
    let t = document.querySelector(".num");
    t.classList.toggle("ifpenclk");
    if (penclk) {
        penclk = false;
    } else {
        penclk = true;
    }
});

for (let i = 0; i < 9; i++) {
    classes[i] = [];
    for (let j = 0; j < 9; j++) {
        const cell1 = new cell(i, j);
        classes[i].push(cell1);
        if (typeof matrex[i][j] == "object") {
            classes[i][j].cellp.textContent = undefined;
        } else {
            numarray[matrex[i][j] - 1]--;
            classes[i][j].cellp.textContent = matrex[i][j];
        }
    }
}

for (let i = 0; i < 9; i++) {
    document.querySelector(`.num>div:nth-child(${i + 1})>span`).textContent =
        numarray[i];
}
console.log(numarray);

function inSameColumn(x, y, remove) {
    for (let z = getcol(x); z < 9; z += 3) {
        if (z == x) {
            continue;
        }
        for (let q = getcol(y); q < 9; q += 3) {
            let cell = document.querySelector(
                `.board>:nth-child(${z + 1})>:nth-child(${q + 1})`
            );
            if (remove) {
                cell.classList.remove("insame");
            } else {
                cell.classList.add("insame");
            }
        }
    }
    if (!remove) {
        px = x;
        py = y;
    }
}
// inSame(0, 0);
// document.getElementById().style.backgroundColor = "red";
let px = 0,
    py = 0;
function inSame(x, y, remove) {
    if (remove) {
        x = px;
        y = py;
        document
            .querySelector(`.board>:nth-child(${px + 1})`)
            .classList.remove("insame");
    } else {
        console.log(document.querySelector(`.board>:nth-child(${x + 1})`));
        document
            .querySelector(`.board>:nth-child(${x + 1})`)
            .classList.add("insame");
    }

    for (let w = getrow(x); w < getrow(x) + 3; w++) {
        if (w == x) {
            continue;
        }
        for (let e = getrow(y); e < getrow(y) + 3; e++) {
            let cell = document.querySelector(
                `.board>:nth-child(${w + 1})>:nth-child(${e + 1})`
            );
            if (remove) {
                cell.classList.remove("insame");
            } else {
                cell.classList.add("insame");
            }
        }
    }
    inSameColumn(x, y, remove);
}
function removeinSameColumn(x, y, num) {
    for (let index = 0; index < 9; index++) {
        let cell = document.querySelector(
            `.board>:nth-child(${x + 1})>:nth-child(${index + 1})`
        );
        let notenum = cell.querySelectorAll(`div>p`)[num];
        if (matrex[x][index][1] != undefined) {
            if (matrex[x][index][1].includes(num)) {
                notenum.classList.remove("like");
                notenum.textContent = "";
                let g = [...matrex[x][index][1]].indexOf(num);
                matrex[x][index][1].splice(g, 1);
            }
        }
    }
    for (let z = getcol(x); z < 9; z += 3) {
        if (z == x) {
            continue;
        }
        for (let q = getcol(y); q < 9; q += 3) {
            let cell = document.querySelector(
                `.board>:nth-child(${z + 1})>:nth-child(${q + 1})`
            );
            let notenum = cell.querySelectorAll(`div>p`)[num];
            if (matrex[z][q][1] != undefined) {
                if (matrex[z][q][1].includes(num)) {
                    notenum.classList.remove("like");
                    notenum.textContent = "";
                    let g = [...matrex[z][q][1]].indexOf(num);
                    matrex[z][q][1].splice(g, 1);
                }
            }
        }
    }
    removeinSame(x, y, num);
}
// inSame(0, 0);
// document.getElementById().style.backgroundColor = "red";

function removeinSame(x, y, num) {
    for (let z = getrow(x); z < getrow(x) + 3; z++) {
        if (z == x) {
            continue;
        }
        for (let q = getrow(y); q < getrow(y) + 3; q++) {
            let cell = document.querySelector(
                `.board>:nth-child(${z + 1})>:nth-child(${q + 1})`
            );
            let notenum = cell.querySelectorAll(`div>p`)[num];
            if (matrex[z][q][1] != undefined) {
                if (matrex[z][q][1].includes(num)) {
                    notenum.classList.remove("like");
                    notenum.textContent = "";
                    let g = [...matrex[z][q][1]].indexOf(num);
                    matrex[z][q][1].splice(g, 1);
                }
            }
        }
    }
}
undo.addEventListener("click", (e) => {
    let a = undoArray.pop();
    let i = a[0],
        j = a[1];
    console.log(a);
    // classes[i][j].p();

    classes[i][j].as(i, j, true, a);
});
=======
// let row2 = [...matrex[0][0][0], ...matrex[0][0][1], ...matrex[0][0][2]];
// console.log(row2);
// let l = [...matrex[0][0]].join().replace(/,/g, "");
// l = Array.from(l);
// console.log(l);
// console.log(matrex[0][0]);
// for (let i = 0; i < 9; i++) {
//     let k = [];
//     for (let j = 1; j < 10; j++) {
//         k.push(j);
//         // e[[[j]]]=j
//     }
//     e[i] = k;
// }
// let r = [1, 2, 3];
// let arr = [[], []];
// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {}
// }
let c;
let outcell = $(".outcell");
// outcell[2].style.backgroundColor = "red";
for (let i = 0; i < outcell.length; i++) {
    let inn = outcell[i].querySelectorAll(".in");
    let f = Math.floor(i / 3);
    c = i;
    if (i > 2 && i < 6) {
        c = i - 3;
    } else if (i > 5) {
        c = i - 6;
    } else {
        c = i;
    }
    let k = matrex[f][c];
    for (let i = 0; i < inn.length; i++) {
        // console.log(f);
        let l = [...k[0], ...k[1], ...k[2]];
        inn[i].querySelector("p").textContent = l[i];
    }
}

//!-------------------------------------
let innum;
let penceil = document.getElementById("pen");
// document.getElementById().addEventListener('click',write)
outcell[0].querySelectorAll(".in")[0].addEventListener("click", write);
function writeee(params) {
    console.log("sdfghjkl");
}
function write() {
    // this.style.backgroundColor = "gray";
    console.log(this.parentNode);
    let tx1 = clk();

    let cell = this;
    let color = cell.querySelector("p").style.color;
    console.log(getnum(0, 0));
    if (penceil.checked) {
        cell.querySelector("div").style.display = "grid";
        cell.querySelector("div").querySelectorAll("p")[tx1 - 1].textContent =
            tx1;
        // penceil.style.display = "none";
    } else {
        // cell.querySelector('p').textContent = clk();

        if (color == "red" || cell.querySelector("p").style.color == "white") {
            console.log(cell.querySelector("p").style.color);
            let tx = cell.querySelector("p").textContent;
            console.log(tx1, tx);
            cell.querySelector("div").style.display = "none";
            cell.querySelector("p").style.display = "block";
            if (getnum(0, 0) == tx1) {
                cell.querySelector("p").textContent = tx1;
                cell.querySelector("p").style.color = "lightgreen";
            } else {
                cell.querySelector("p").textContent = tx1;
                cell.querySelector("p").style.color = "red";
            }
        }
    }
}
function getnum(x, y) {
    let f = Math.floor(x / 3);
    let c = x;
    if (x > 2 && x < 6) {
        c = x - 3;
    } else if (x > 5) {
        c = x - 6;
    } else {
        c = x;
    }
    let k = matrex[f][c];
    let l = [...k[0], ...k[1], ...k[2]];
    return l[y];
}
function clk() {
    let num;
    let but = document.getElementsByName("but");
    for (let i = 0; i < but.length; i++) {
        if (but[i].checked) {
            num = i + 1;
            break;
        }
    }
    return num;
}
//!-------------------------------------
let condition = 0;
while (condition != 40) {
    condition++;
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    // outcell[x].querySelectorAll(".in")[y].style.color = "white";
    outcell[x].querySelectorAll(".in")[y].querySelector("p").style.color =
        "white";
    outcell[x].querySelectorAll(".in")[y].querySelector("p").style.display =
        "none";
    outcell[x].querySelectorAll(".in")[y].addEventListener("click", write);
}

console.log(...matrex);
>>>>>>> 6e2834fd0761a7b2877d7857903ef1c57314255a
