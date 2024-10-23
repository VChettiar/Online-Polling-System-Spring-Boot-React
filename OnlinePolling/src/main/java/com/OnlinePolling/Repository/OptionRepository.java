package com.OnlinePolling.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OnlinePolling.Model.Options;

public interface OptionRepository extends JpaRepository<Options, Integer>{

}
