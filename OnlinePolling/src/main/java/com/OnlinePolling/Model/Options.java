package com.OnlinePolling.Model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="optionData")
public class Options {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name = "pollId")
	@JsonIgnore 
	private OnlinePolling pollId;
	private String optionName;
	private Date createdAt;
	public Options() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Options(int id, OnlinePolling pollId, String optionName, Date createdAt) {
		super();
		this.id = id;
		this.pollId = pollId;
		this.optionName = optionName;
		this.createdAt = createdAt;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public OnlinePolling getPollId() {
		return pollId;
	}
	public void setPollId(OnlinePolling pollId) {
		this.pollId = pollId;
	}
	public String getOptionName() {
		return optionName;
	}
	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
}
