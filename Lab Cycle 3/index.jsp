<%-- 
    Document   : index
    Created on : Jul 1, 2023, 4:25:38 PM
    Author     : y21cs172
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">
 <head>
  <title>Login page</title>
 </head>
 <body>
 <h1> Login Form </h1>
 <form method="post" action="./LoginDemo">
	Username: <input type="text" name="username"><br>
	Password: <input type="password" name="pass"><br>
        <input type="submit" name="b1" value="login"><br>
            <input type="reset" name="b2" value="clear"><br>
 </form>
 </body>
</html>
