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

// Div 1 ColorGenerator App
const div1El = document.getElementById('div-1');
const h2El = document.querySelector('.colorbox h2');

function div1ColorGenerator() {
    const colorStr = 'abcdef0123456789'
    let color = "#";
    setInterval(() => {
        color = "#"
        for (let i = 0; i < 6; i++) {
            const makeColor = Math.floor(Math.random() * colorStr.length);
            color += colorStr[makeColor];
            div1El.style.background = color
            h2El.innerHTML = color;
        }
    }, 3000);
}
div1ColorGenerator();


// Div 1 ColorGenerator App
const div2El = document.getElementById('div-2');
const inputEl = document.querySelector('.colorbox input');

inputEl.addEventListener('input', () => {
    div2El.style.background = inputEl.value;
});