package com.OnlinePolling.Service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.OnlinePolling.Model.OurUsers;
import com.OnlinePolling.Repository.UsersRepository;
import com.OnlinePolling.dto.ReqRes;

@Service
public class UserManagementServiceImp implements UserManagementService{
	@Autowired
	private UsersRepository userRepo;
	
	@Autowired
	private JWTUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@Override
	public ReqRes registerUser(ReqRes registrationRequest) {
		ReqRes resp = new ReqRes();
		try {
			OurUsers ourUser = new OurUsers();
			ourUser.setEmail(registrationRequest.getEmail());
			ourUser.setRole(registrationRequest.getRole());
			ourUser.setName(registrationRequest.getName());
			ourUser.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
			
			OurUsers ourUserResult = userRepo.save(ourUser);
			if(ourUserResult .getId() > 0) {
				resp.setOurUsers(ourUserResult);
				resp.setMessage("User Saved Successfully");
				resp.setStatusCode(200);
			}
			
		}catch(Exception e) {
			resp.setStatusCode(500);
			resp.setError(e.getMessage());
		}
		return resp;
	}


	@Override
	public ReqRes login(ReqRes loginRequest) {
		ReqRes response = new ReqRes();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
			var user = userRepo.findByEmail(loginRequest.getEmail()).orElseThrow();
			var jwt = jwtUtils.generateToken(user);
			var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), user);
			response.setToken(jwt);
			response.setRole(user.getRole());
			response.setStatusCode(200);
			response.setRefreshToken(refreshToken);
			response.setExpirationTime("24Hrs");
			response.setMessage("Successfully Logged In");
		}catch(Exception e) {
			response.setStatusCode(500);
			response.setError(e.getMessage());
		}
		return response;
	}


	@Override
	public ReqRes getAllUsers() {
		ReqRes resp = new ReqRes();
		try {
			List<OurUsers> result = userRepo.findAll();
			if(!result.isEmpty()) {
				resp.setOurUsersList(result);
				resp.setStatusCode(200);
				resp.setMessage("Successfull");
			} else {
				resp.setStatusCode(404);
				resp.setMessage("No Users Found");
			}
		}catch(Exception e) {
			resp.setStatusCode(500);
			resp.setError(e.getMessage());
		}
		return resp;
	}

}

