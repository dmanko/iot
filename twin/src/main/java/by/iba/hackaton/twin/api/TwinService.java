package by.iba.hackaton.twin.api;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.sql.DataSource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

import org.eclipse.persistence.config.PersistenceUnitProperties;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import by.iba.hackaton.twin.model.Node;



/**
 * {@link TwinService}
 * 
 * @author Dzmitry Manko
 * @version 0.1
 */



@Path("/svc")
@Produces({ MediaType.APPLICATION_JSON })
public class TwinService {


	@SuppressWarnings("unchecked")
	@GET
	@Path("/geojson/all")
	public List<Node> getNodes(@Context SecurityContext ctx) {
		List<Node> retVal = null;

		EntityManager em = this.getEntityManager(ctx);
		retVal = em.createNamedQuery("Node.findAll").getResultList();

		return retVal;
	}
	
	
	@SuppressWarnings("unchecked")
	@GET
	@Path("/geojson/original")
	public String getOriginalGeoJSON(@Context SecurityContext ctx) {
		String retVal = null;

		EntityManager em = this.getEntityManager(ctx);
		List<Node> nodes = em.createNamedQuery("Node.findAll").getResultList();
		
		JSONArray jsonArray = new JSONArray();
		String json = null;
		
		Iterator<Node> nodeIterator = nodes.iterator();
		
		while (nodeIterator.hasNext()) {
			json = nodeIterator.next().getOriginalJSON();
			if (json != null) {
				jsonArray.add(json);
			}
			
		}
		
		retVal = jsonArray.toJSONString();

		return retVal;
	}
	
	@GET
	@Path("/geojson/{id}")
	public Node getNodeById(@PathParam(value = "id") String id, @Context SecurityContext ctx) {
		Node retVal = null;

		EntityManager em = this.getEntityManager(ctx);

		try {
			Query query = em.createNamedQuery("NodeById");
			query.setParameter("id", id);
			retVal = (Node) query.getSingleResult();
			
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			em.close();
		}

		return retVal;
	}
	
	
	
	/**
	 * Returns the <code>DefaultDB</code> {@link DataSource} via JNDI.
	 * 
	 * @return <code>DefaultDB</code> {@link DataSource}
	 */
	protected DataSource getDataSource() {
		DataSource retVal = null;

		try {
			InitialContext ctx = new InitialContext();
			retVal = (DataSource) ctx.lookup("java:comp/env/jdbc/DefaultDB");

		} catch (NamingException ex) {
			ex.printStackTrace();
		}

		return retVal;
	}

	/**
	 * Returns the {@link EntityManagerFactory}.
	 * 
	 * @return The {@link EntityManagerFactory}
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	protected EntityManagerFactory getEntityManagerFactory() {
		EntityManagerFactory retVal = null;

		try {
			Map properties = new HashMap();

			DataSource ds = this.getDataSource();

			properties.put(PersistenceUnitProperties.NON_JTA_DATASOURCE, ds);

			retVal = Persistence.createEntityManagerFactory("application", properties);
		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("!!!!ALARMA!!!!!  " + ex.getLocalizedMessage());
			
		}

		return retVal;
	}
	
	protected EntityManager getEntityManager(SecurityContext ctx) {
		
		String userName = (ctx.getUserPrincipal() != null) ? ctx.getUserPrincipal().getName() : "anonymous";
		Map<String, String> props = new HashMap<String, String>();
		props.put("tenant.id", userName);

		return this.getEntityManagerFactory().createEntityManager(props);
		
	}
		

}

