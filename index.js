var http = require('http')
http.createServer(function(req,res) {
	
	var data = new Date()
	
	res.write('<html>');
	res.write('</html>');
	res.write('</div>');
    
	res.write('<h5>Server OK </h5>');
	res.write('</hr>');
	res.write('Date ' + data );
	
	res.write('</div>');
	res.write('</body>');
	res.write('</html>');
    res.end();
	
	
}).listen(3000);