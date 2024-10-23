package com.OnlinePolling.Service;

import com.OnlinePolling.dto.ReqRes;

public interface UserManagementService {
	public ReqRes registerUser(ReqRes registrationRequest);
	public ReqRes login(ReqRes loginRequest);
	public ReqRes getAllUsers();
}
