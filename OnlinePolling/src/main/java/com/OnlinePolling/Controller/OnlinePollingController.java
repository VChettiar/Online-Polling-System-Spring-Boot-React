package com.OnlinePolling.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.OnlinePolling.Model.CreateOnlinePolling;
import com.OnlinePolling.Model.OnlinePolling;
import com.OnlinePolling.Repository.OnlinePollingRepository;
import com.OnlinePolling.Service.OnlinePollingService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/onlinepolling")
public class OnlinePollingController {
	@Autowired
	public OnlinePollingService pollingService;
	@Autowired
	public OnlinePollingRepository pollingRepo;

	@PostMapping("admin/createpolling")
	public OnlinePolling createPoll(@RequestBody OnlinePolling createpoll) {
		return pollingService.createPoll(createpoll);	
	}

	// select the polling data
	@GetMapping("user/getPoll")
	public List<OnlinePolling> showPoll() {
		return pollingService.showPoll();
	}

	// updating the vote poll
	@GetMapping("user/getPollByID/{id}")
	public OnlinePolling showPollDetails(@PathVariable int id) {
		return pollingService.showPollDetails(id);
	}
	
	@PutMapping("user/updatePoll/{id}/{optionId}")
	public OnlinePolling updatePoll(@PathVariable int id,@PathVariable int optionId){
		return pollingService.updatePolling(id,optionId);
	}
}
