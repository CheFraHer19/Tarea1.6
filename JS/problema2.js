var x = parseFloat(prompt("Escribe la coordenada X: "));
var y = parseFloat(prompt("Escribe la coordenada Y: "));

if (x > 0 && y > 0)
{
	document.write("<b><u><p> Q1 </p></u></b>");
}
else if (x < 0 && y > 0)
{
	document.write("<b><u><p> Q2 </p></u></b>");
}
else if (x < 0 && y < 0)
{
	document.write("<b><u><p> Q3 </p></u></b>");
}
else if (x > 0 && y < 0)
{
	document.write("<b><u><p> Q4 </p></u></b>");
}
else if (x === 0 && y === 0)
{
	document.write("<b><u><p> Origem </p></u></b>");
}
else if (x === 0 && y!== 0)
{
	document.write("<b><u><p> Eixo Y </p></u></b>");
}
else if (x!== 0 && y === 0)
{
	document.write("<b><u><p> Eixo X </p></u></b>");
}