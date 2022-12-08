package com.yuzuo.nbadashboard.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
@Entity
public class Match {
    private LocalDate gameDate;
    @Id
    private long gameId;
    private String season;

    private int homeTeamWins;

    private String homeTeam;
    private String ptsHome;
    private String fgPctHome;
    private String ftPctHome;
    private String fgThreePctHome;
    private String astHome;
    private String rebHome;

    private String visitorTeam;
    private String ptsAway;
    private String fgPctAway;
    private String ftPctAway;
    private String fgThreePctAway;
    private String astAway;
    private String rebAway;

    public Match() {
    }

    public void setGameDate(LocalDate gameDate) {
        this.gameDate = gameDate;
    }

    public LocalDate getGameDate() {
        return gameDate;
    }

    public long getGameId() {
        return gameId;
    }

    public void setGameId(long gameId) {
        this.gameId = gameId;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public int getHomeTeamWins() {
        return homeTeamWins;
    }

    public void setHomeTeamWins(int homeTeamWins) {
        this.homeTeamWins = homeTeamWins;
    }

    public String getHomeTeam() {
        return homeTeam;
    }

    public void setHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
    }

    public String getPtsHome() {
        return ptsHome;
    }

    public void setPtsHome(String ptsHome) {
        this.ptsHome = ptsHome;
    }

    public String getFgPctHome() {
        return fgPctHome;
    }

    public void setFgPctHome(String fgPctHome) {
        this.fgPctHome = fgPctHome;
    }

    public String getFtPctHome() {
        return ftPctHome;
    }

    public void setFtPctHome(String ftPctHome) {
        this.ftPctHome = ftPctHome;
    }

    public String getFgThreePctHome() {
        return fgThreePctHome;
    }

    public void setFgThreePctHome(String fgThreePctHome) {
        this.fgThreePctHome = fgThreePctHome;
    }

    public String getAstHome() {
        return astHome;
    }

    public void setAstHome(String astHome) {
        this.astHome = astHome;
    }

    public String getRebHome() {
        return rebHome;
    }

    public void setRebHome(String rebHome) {
        this.rebHome = rebHome;
    }

    public String getVisitorTeam() {
        return visitorTeam;
    }

    public void setVisitorTeam(String visitorTeam) {
        this.visitorTeam = visitorTeam;
    }

    public String getPtsAway() {
        return ptsAway;
    }

    public void setPtsAway(String ptsAway) {
        this.ptsAway = ptsAway;
    }

    public String getFgPctAway() {
        return fgPctAway;
    }

    public void setFgPctAway(String fgPctAway) {
        this.fgPctAway = fgPctAway;
    }

    public String getFtPctAway() {
        return ftPctAway;
    }

    public void setFtPctAway(String ftPctAway) {
        this.ftPctAway = ftPctAway;
    }

    public String getFgThreePctAway() {
        return fgThreePctAway;
    }

    public void setFgThreePctAway(String fgThreePctAway) {
        this.fgThreePctAway = fgThreePctAway;
    }

    public String getAstAway() {
        return astAway;
    }

    public void setAstAway(String astAway) {
        this.astAway = astAway;
    }

    public String getRebAway() {
        return rebAway;
    }

    public void setRebAway(String rebAway) {
        this.rebAway = rebAway;
    }
}
