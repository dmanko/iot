package by.iba.hackaton.twin.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the "feedback" database table.
 * 
 */
@Entity
@Table(schema="\"ENTERPRISE_TWIN\"", name="\"feedback\"")

@NamedQueries({ @NamedQuery(name="Feedback.findAll", query="SELECT f FROM Feedback f"),
				@NamedQuery(name = "Feedback.count", query = "SELECT COUNT(f) FROM Feedback f")
})

public class Feedback implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="\"id\"")
	private int id;

	@Column(name="\"message\"")
	private String message;

	@Column(name="\"name\"")
	private String name;

	public Feedback() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMessage() {
		return this.message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}