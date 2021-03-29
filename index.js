const html = `<!DOCTYPE html> 
<head>
<style type="text/css">
<!--
.Estilo1 {
	font-size: 24px;
	font-weight: bold;
}
-->
</style>
</head>

<body>
<h1 align="center">&nbsp;</h1>
<h1 align="center">SPEECH TO TEX EXAMPLE </h1>
<p align="center">&nbsp;</p>
<p align="center" class="Estilo1"><a href="/api/index.js">Abrir pagina de reconocimiento de voz a texto</a> </p>
</body>`

module.exports = (req, res) => {
  res.send(html)
}