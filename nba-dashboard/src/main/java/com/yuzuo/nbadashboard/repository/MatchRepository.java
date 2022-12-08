package com.yuzuo.nbadashboard.repository;

import com.yuzuo.nbadashboard.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByHomeTeamOrVisitorTeamOrderByGameDateDesc(String teamNameHome, String teamNameVisitor, PageRequest pageRequest);

    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        return getByHomeTeamOrVisitorTeamOrderByGameDateDesc(teamName, teamName, PageRequest.of(0, count));
    }
}
