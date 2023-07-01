/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package p1;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Generic extends GenericServlet {

    public int c=0;
public void init(ServletConfig cg)throws ServletException
{
c++;
}
public void service(ServletRequest req,ServletResponse res)throws                                                     ServletException,IOException
{c++;
res.setContentType("text/html");
PrintWriter out=res.getWriter();
out.println("<h1> Welcome to RVR -: "+c+" </h1>");
out.println("<h1>SERVLET GENERIC SERVLET</h1>");
}

}
