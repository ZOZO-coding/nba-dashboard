package com.yuzuo.nbadashboard.data;

import com.yuzuo.nbadashboard.model.Match;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import java.time.LocalDate;

public class MatchDataProcesser implements ItemProcessor<MatchInput, Match> {

    private static final Logger log = LoggerFactory.getLogger(MatchDataProcesser.class);

    @Override
    public Match process(final MatchInput matchInput) throws Exception {
        Match match = new Match();

        match.setGameId(Long.parseLong(matchInput.getGame_id()));
        match.setGameDate(LocalDate.parse(matchInput.getGame_date()));
        match.setSeason(matchInput.getSeason());

        match.setHomeTeamWins(Integer.parseInt(matchInput.getHome_team_wins()));

        match.setHomeTeam(matchInput.getHome_team());
        match.setVisitorTeam(matchInput.getVisitor_team());

        match.setPtsHome(matchInput.getPts_home());
        match.setPtsAway(matchInput.getPts_away());

        match.setRebHome(matchInput.getReb_home());
        match.setRebAway(matchInput.getReb_away());

        match.setAstHome(matchInput.getAst_home());
        match.setAstAway(matchInput.getAst_away());

        match.setFgPctHome(matchInput.getFg_pct_home());
        match.setFgPctAway(matchInput.getFg_pct_away());

        match.setFgThreePctHome(matchInput.getFg_three_pct_home());
        match.setFgThreePctAway(matchInput.getFg_three_pct_away());

        match.setFtPctAway(matchInput.getFt_pct_home());
        match.setFtPctAway(matchInput.getFt_pct_away());

        return match;
    }

}
