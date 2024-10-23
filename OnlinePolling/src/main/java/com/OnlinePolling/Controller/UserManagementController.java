package com.OnlinePolling.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.OnlinePolling.Service.UserManagementService;
import com.OnlinePolling.dto.ReqRes;

@RestController
@RequestMapping("/onlinepolling")
public class UserManagementController {
	@Autowired
	private UserManagementService userManagementService;
	
	@PostMapping("/register")
	public ResponseEntity<ReqRes> register(@RequestBody ReqRes reg){
		return ResponseEntity.ok(userManagementService.registerUser(reg));
	}
	
	@PostMapping("/login")
	public ResponseEntity<ReqRes> login(@RequestBody ReqRes reg){
		return ResponseEntity.ok(userManagementService.login(reg));
	}
	
	@GetMapping("/admin/getAllUsers")
	public ResponseEntity<ReqRes> getAllUsers(){
		return ResponseEntity.ok(userManagementService.getAllUsers());
	}
}
