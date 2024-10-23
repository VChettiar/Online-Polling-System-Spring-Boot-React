package com.OnlinePolling.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OnlinePolling.Model.OurUsers;

public interface UsersRepository extends JpaRepository<OurUsers, Integer>{
	Optional<OurUsers> findByEmail(String email);
}
