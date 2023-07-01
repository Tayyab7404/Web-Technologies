/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package p1;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/* @author y21cs172 */

public class LoginDemo extends HttpServlet 
{
   public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
   {
      // Set response content type
      response.setContentType("text/html");
	   
      // Actual logic goes here.
      PrintWriter out = response.getWriter();
      String name = request.getParameter("username"); //will return value
      String pwd = request.getParameter("pass");
      
      if(name.equalsIgnoreCase("Tayyab") && pwd.equalsIgnoreCase("12345"))
      {
          out.println("Login Successful!");
	  out.println("Welcome "+name);
      }
      else
          out.println("Login Unsucceusful! "+name);
      out.close();
   }
}
