package com.OnlinePolling.Service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.OnlinePolling.Model.CreateOnlinePolling;
import com.OnlinePolling.Model.OnlinePolling;
import com.OnlinePolling.Model.Options;

public interface OnlinePollingService {
	public OnlinePolling createPoll(OnlinePolling createpoll);
	public List<OnlinePolling> showPoll();
	public OnlinePolling showPollDetails(int id);
	public OnlinePolling updatePolling(int optionId, int id);
}
