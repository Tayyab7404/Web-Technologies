package p1;

/*
    Please note that the latest versions of Java use the
    Jakarta 10 EE  and the older versions use the Java 5 EE
    so the package name changed from javax to jakarta.
*/

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Login extends HttpServlet 
{
    	protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
        	response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
        	try 
		{
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
        	}
		finally
		{
			out.close();
		}
    	}
    
    	@Override
    	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
        	processRequest(request, response);
    	}

    	@Override
    	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
        	processRequest(request, response);
    	}
}