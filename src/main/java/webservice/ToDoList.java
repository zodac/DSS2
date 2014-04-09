package webservice;

import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import services.ToDoItemService;
import services.UserService;
import entities.ToDoItem;

@Path("/ToDoList")
@Stateless
@LocalBean
public class ToDoList {
	@EJB
	private ToDoItemService toDoEJB;
	@EJB
	private UserService userEJB;
	
	@GET
    @Path("/{userName}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<ToDoItem> getItemsByUser(@PathParam("userName") String userName) {
        return toDoEJB.getItemsByUser(userName);
    }
	
	@GET
	@Path("Add/{task}/{user}")
	@Produces(MediaType.APPLICATION_JSON)
    public void addItem(@PathParam("task") String task, @PathParam("user") String userName){
    	ToDoItem item = new ToDoItem();
    	item.setDate(new Date());
    	item.setTask(task);
    	item.setUser(userEJB.getUserByUsername(userName));
    	
    	toDoEJB.addItem(item);
    }
	
	@GET
	@Path("Remove/{id}")
	@Produces(MediaType.APPLICATION_JSON)
    public void removeItem(@PathParam("id") int itemID){
    	toDoEJB.removeItem(itemID);
    }
}