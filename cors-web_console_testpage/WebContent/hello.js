function sendData2() {
	$.ajax({
		url: 'http://localhost:8080/login',
	    method: 'POST',
	    headers: {"Content-Type": 'application/json'},
	    data: '{"username":"shuaicj","password":"shuaicj"}'
	}).done(function (data, textStatus, xhr) { 
	    console.log(xhr.getResponseHeader('Authorization')); 
	});
}


function sendData() {
	$.ajax({
        url: 'http://localhost:8080/login',
//        url: 'http://localhost:9000/test.jsp',
//		url: 'http://13.125.113.148:18080/books/user/list',
        method: 'POST',
//        dataType: 'json',
//        success: function (data) {
//        	console.log(data)
//        },
        success: function(data, textStatus, request){
        	console.log("SUCCESS");
        	console.log(data);
        	$('#token').val(data);
        	console.log(request.getAllResponseHeaders());
        },
        error: function (request, textStatus, errorThrown) {
        	console.log("FAIL");
        	console.log(errorThrown);
        	//console.log(request);
        	//console.log(request.getResponseHeader('some_header'));
        },
//        xhrFields: {
//            withCredentials: true
//        },
        headers: {"Content-Type": 'application/json'},
        data: '{"username":"shuaicj","password":"shuaicj"}'
    });
}

function verify() {
	$.ajax({
        url: 'http://localhost:8080/backend/user',
        method: 'GET',
        success: function(data, textStatus, request){
        	console.log(request.getAllResponseHeaders());
        	console.log(data);
        	$('#result').html(data);
        },
        error: function (request, textStatus, errorThrown) {
        	$('#result').html(request.responseJSON.error);
        	console.log(errorThrown);
        	console.log(request);
        },
        headers: {"Authorization": $('#token').val()}
    });
}

function test1() {
	$.ajax({
        url: 'http://localhost:9000/cors_origin/test.jsp',
        method: 'GET',
        success: function(data, textStatus, request){
        	console.log(request.getAllResponseHeaders());
        	console.log(data);
        },
        error: function (request, textStatus, errorThrown) {
        	console.log(errorThrown);
        	console.log(request);
        	console.log(request.getResponseHeader('some_header'));
        },
        headers: {"Content-Type": 'application/json'}
    });
}

function test2() {
	$.ajax({
        url: 'http://localhost:9001/cors_cross/test.jsp',
        method: 'GET',
        success: function(data, textStatus, request){
        	console.log(request.getAllResponseHeaders());
        	console.log(data);
        },
        error: function (request, textStatus, errorThrown) {
        	console.log(errorThrown);
        	console.log(request);
        	console.log(request.getResponseHeader('some_header'));
        },
        headers: {"Content-Type": 'application/json'}
    });
}