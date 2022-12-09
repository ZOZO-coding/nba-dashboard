package com.yuzuo.nbadashboard.repository;

import com.yuzuo.nbadashboard.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByHomeTeamOrVisitorTeamOrderByGameDateDesc(String teamNameHome, String teamNameVisitor, PageRequest pageRequest);

//    List<Match> getByHomeTeamAndGameDateBetweenOrVisitorTeamAndGameDateBetween (
//            String teamNameHome, LocalDate date1, LocalDate date2,
//            String teamNameVisitor, LocalDate date3, LocalDate date4
//    );

    @Query("select m from Match m where (m.homeTeam = :teamName or m.visitorTeam = :teamName) and m.gameDate between :dateStart and :dateEnd order by gameDate desc")
    List<Match> getMatchesByTeamBetweenDates(
            @Param("teamName") String teamName,
            @Param("dateStart") LocalDate dateStart,
            @Param("dateEnd") LocalDate dateEnd
    );

    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        return getByHomeTeamOrVisitorTeamOrderByGameDateDesc(teamName, teamName, PageRequest.of(0, count));
    }
}
