package com.yuzuo.nbadashboard.repository;

import com.yuzuo.nbadashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);
}
