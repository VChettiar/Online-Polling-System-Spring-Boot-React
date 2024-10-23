package com.OnlinePolling.Model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="onlinepolling")
@Data
public class OnlinePolling {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String title;
	@Column(columnDefinition = "Text")
	private String description;
	private Date createdAt;
	private String voted;
	@OneToMany(mappedBy = "pollId", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Options> options;
	
	public OnlinePolling() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OnlinePolling(int id, String title, String description, Date createdAt, String voted) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.createdAt = createdAt;
		this.voted = voted;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public String getVoted() {
		return voted;
	}
	public void setVoted(String voted) {
		this.voted = voted;
	}
	public List<Options> getOptions() {
		return options;
	}
	public void setOptions(List<Options> options) {
		this.options = options;
	}
}
