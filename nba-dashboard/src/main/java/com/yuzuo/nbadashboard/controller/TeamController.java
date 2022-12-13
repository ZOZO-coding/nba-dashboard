package com.yuzuo.nbadashboard.controller;

import com.yuzuo.nbadashboard.model.Match;
import com.yuzuo.nbadashboard.model.Team;
import com.yuzuo.nbadashboard.repository.MatchRepository;
import com.yuzuo.nbadashboard.repository.TeamRepository;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team")
    public Iterable<Team> getAllTeams() {
        return this.teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);

        team.setMatches(matchRepository.findLatestMatchesByTeam(teamName, 4));
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

//        return this.matchRepository.getByHomeTeamAndGameDateBetweenOrVisitorTeamAndGameDateBetween(
//                teamName, startDate, endDate,
//                teamName, startDate, endDate
//        );

        return this.matchRepository.getMatchesByTeamBetweenDates(
                teamName, startDate, endDate
        );
    }

}
