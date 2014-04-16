package webservice;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.codec.digest.DigestUtils;

import services.UserService;
import entities.User;

@Path("/Users")
@Stateless
@LocalBean
public class Users {
	@EJB
	private UserService userEJB;
	
	@GET
    @Path("/{userName}")
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser(@PathParam("userName") String userName) {
        return userEJB.getUserByUsername(userName);
    }
	
	@GET
	@Path("/{userName}/{password}")
	@Produces(MediaType.APPLICATION_JSON)
    public Response registerUser(@PathParam("userName") String userName, @PathParam("password") String password){
    	User user = new User();
    	user.setUserName(userName);
    	user.setUserPassword(DigestUtils.sha256Hex(password));
    	
    	userEJB.registerUser(user);
    	Response.ResponseBuilder builder = Response.ok();
    	
    	return builder.build();
    }
	
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUserList() {
        return userEJB.findAllUsers();
    }
}