// Navigation Color Generator
const navBarEl = document.getElementById('nav');

const changecolor = () => {
    setInterval(() => {
        const colorArr = ["#130f40", "#535c68", "#4834d4", "#eb4d4b", "#6ab04c", "#f0932b", "#22a6b3", "#0c2461", "#1e3799", "#b71540", "#eb2f06", "#e55039", "#f6b93b", "#1e272e", "#3c40c6", "#ef5777"];
        const oneColor = Math.floor(Math.random() * colorArr.length);
        navBarEl.style.background = colorArr[oneColor];
    }, 1000);
};
changecolor();

// Div 1 ColorGenerator App-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const div1El = document.getElementById('div-1');
const div2H2El = document.querySelector('.colorbox h2');

function div1ColorGenerator() {
    const colorStr = 'ABCDEF0123456789'
    let color = "#";
    setInterval(() => {
        color = "#"
        for (let i = 0; i < 6; i++) {
            const makeColor = Math.floor(Math.random() * colorStr.length);
            color += colorStr[makeColor];
            div1El.style.background = color;
            div2H2El.innerHTML = color;
        }
    }, 3000);
}
div1ColorGenerator();


// Div 2 ColorGenerator App---------------------------------------------------------------------------------------------
const div2El = document.getElementById('div-2');
const inputEl = document.querySelector('.colorbox input');

inputEl.addEventListener('input', () => {
    div2El.style.background = inputEl.value;
});

// Div 3 ColorGenerator App----------------------------------------------------------------------------------------------

const div3El = document.getElementById('div-3');
const div3H2El = document.getElementById('div3-h2');
const nextBtnEl = document.getElementById('btn');

function div3ColorGenerator() {
    const colorStr = 'ABCDEF0123456789'
    let color;
    color = "#"
    for (let i = 0; i < 6; i++) {
        const makeColor = Math.floor(Math.random() * colorStr.length);
        color += colorStr[makeColor];
        div3El.style.background = color;
        div3H2El.innerText = color;
    }
}
div3ColorGenerator();

nextBtnEl.addEventListener('click', div3ColorGenerator);