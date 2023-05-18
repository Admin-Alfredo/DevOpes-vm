var http = require('http')

const server = http.createServer(mainServerHandler)
function mainServerHandler (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.write(`<h1>BEM VINDO</h1><p>Ferramentas de Virtualizacao</p><br></ul>${['VirtualBox', 'VMWare', 'AWS', 'DigitaOcean'].map(function(vm) {return (`<li>${vm}</li>`)}).join('')}</ul>`)
res.end()
}

server.listen(3000, function(){console.log('RUNNING....')})
