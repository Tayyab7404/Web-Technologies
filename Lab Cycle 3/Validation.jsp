<html>
	<head>
		<title>Login Page</title>
	</head>
	<body>
		<%	
			String uname = request.getParameter("username");
            		String pwd = request.getParameter("password");
            
            		if (uname.equals("Tayyab") && pwd.equals("y21cs172"))
            		{
				out.println("<h3>Login success</h3>");
                		out.println("<h1>Welcome <em>"+uname+"</em></h1>");
            		}
            		else
            		{
                		out.println("<h1 style=\"color: red;\">LOGIN FAILED</h1>");
            		}
		%>
	</body>
</html>