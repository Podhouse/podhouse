import React from "react";
import { Switch, Route } from "react-router-dom";

import { AppContainer } from "./App.styles";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import Browse from "src/modules/App/Browse/Browse";

import SignIn from "src/modules/App/SignIn/SignIn";
import SignUp from "src/modules/App/SignUp/SignUp";
import ForgotPassword from "src/modules/App/ForgotPassword/ForgotPassword";
import ResetPassword from "src/modules/App/ResetPassword/ResetPassword";

import Podcast from "src/modules/App/Podcast/Podcast";
import Episode from "src/modules/App/Episode/Episode";
import Search from "src/modules/App/Search/Search";
import Subscriptions from "src/modules/App/Subscriptions/Subscriptions";
import Favorites from "src/modules/App/Favorites/Favorites";
import Filters from "src/modules/App/Filters/Filters";

import Settings from "src/modules/App/Settings/Settings";
import Password from "src/modules/App/Password/Password";
import About from "src/modules/App/About/About";
import FAQ from "src/modules/App/FAQ/FAQ";
import Feedback from "src/modules/App/Feedback/Feedback";
import PrivacyPolicy from "src/modules/App/PrivacyPolicy/PrivacyPolicy";
import Terms from "src/modules/App/Terms/Terms";

import Advertise from "src/modules/App/Advertise/Advertise";

import usePlayer from "src/hooks/usePlayer/usePlayer";

const App = () => {
  const {
    initial,
    loading,
    ready,
    idle,
    playing,
    paused,
    end,
    episode,
    seek,
    volume,
    rate,
    duration,
    mute,
    loop,
    error,
    onToggle,
    onPlay,
    onPause,
    onVolume,
    onRate,
    onMute,
    onLoop,
    onSeek,
    onForward,
    onBackward,
  } = usePlayer();

  return (
    <AppContainer>
      <Dashboard>
        <Switch>
          <Route exact path="/" component={Browse} />

          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset-password" component={ResetPassword} />

          <Route
            exact
            path="/podcast/:id"
            component={() => (
              <Podcast
                currentEpisode={episode}
                playing={playing}
                onToggle={onToggle}
                onPlay={onPlay}
                onPause={onPause}
              />
            )}
          />
          <Route exact path="/episode/:id" component={Episode} />

          <Route exact path="/search" component={Search} />
          <Route exact path="/subscriptions" component={Subscriptions} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/filters" component={Filters} />

          <Route exact path="/settings" component={Settings} />
          <Route exact path="/settings/password" component={Password} />
          <Route exact path="/settings/about" component={About} />
          <Route exact path="/settings/faq" component={FAQ} />
          <Route exact path="/settings/feedback" component={Feedback} />
          <Route exact path="/settings/privacy" component={PrivacyPolicy} />
          <Route exact path="/settings/terms" component={Terms} />

          <Route exact path="/advertise" component={Advertise} />
        </Switch>
      </Dashboard>
      <Header />
      <Player
        initial={initial}
        loading={loading}
        ready={ready}
        idle={idle}
        playing={playing}
        paused={paused}
        end={end}
        episode={episode}
        seek={seek}
        volume={volume}
        rate={rate}
        duration={duration}
        mute={mute}
        loop={loop}
        error={error}
        onToggle={onToggle}
        onPlay={onPlay}
        onPause={onPause}
        onVolume={onVolume}
        onRate={onRate}
        onMute={onMute}
        onLoop={onLoop}
        onSeek={onSeek}
        onForward={onForward}
        onBackward={onBackward}
      />
      <Menu />
    </AppContainer>
  );
};

export default App;
