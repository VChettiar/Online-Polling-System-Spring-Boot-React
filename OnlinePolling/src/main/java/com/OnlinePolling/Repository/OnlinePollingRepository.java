package com.OnlinePolling.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OnlinePolling.Model.OnlinePolling;
import com.OnlinePolling.Model.Options;

public interface OnlinePollingRepository extends JpaRepository<OnlinePolling, Integer>{

}
