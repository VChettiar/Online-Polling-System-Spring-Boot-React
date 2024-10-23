package com.OnlinePolling.Service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.OnlinePolling.Model.CreateOnlinePolling;
import com.OnlinePolling.Model.OnlinePolling;
import com.OnlinePolling.Model.Options;
import com.OnlinePolling.Repository.OnlinePollingRepository;
import com.OnlinePolling.Repository.OptionRepository;

@Service
public class OnlinePollingServiceImp implements OnlinePollingService{
	@Autowired
	OnlinePollingRepository pollingRepo;
	
	@Autowired
	OptionRepository optionRepo;
	
	@Override
	public OnlinePolling createPoll(OnlinePolling createpoll) {
		Date createdAt = new Date();
		createpoll.setCreatedAt(createdAt);
		OnlinePolling savePoll = pollingRepo.save(createpoll);
		for(Options option : savePoll.getOptions()) {
			option.setPollId(savePoll);
			option.setCreatedAt(createdAt);
		}
		optionRepo.saveAll(savePoll.getOptions());
		return savePoll;
	}
	
	@Override
	public List<OnlinePolling> showPoll() {
		return pollingRepo.findAll();
	}

	@Override
	public OnlinePolling showPollDetails(int id) {
		return pollingRepo.findById(id).get();
	}

	@Override
	public OnlinePolling updatePolling(int id, int optionId) {
		OnlinePolling updatePoll = pollingRepo.findById(id).get();
		Options optionName = optionRepo.findById(optionId).get();
		if(optionId != 0) {
			updatePoll.setVoted(optionName.getOptionName());
		}
		return pollingRepo.save(updatePoll);
	}

}
