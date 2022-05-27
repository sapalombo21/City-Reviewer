import React, { useState } from "react";
import { Navigate, Route, Routes , useParams} from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import CityFeed from "../CityFeed/CityFeed";
import CitySearch from "../Search/Search"
import CityDetail from "../CityDetail/CityDetail"
import cityService from "../../utils/cityService"
import CityNearby from "../CityNearby/CityNearby"

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  const params = useParams();
  if (user) {
    return (
      <Routes>
        <Route path="/" element={<CityFeed user={user} handleLogout={handleLogout} />} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/search" element={<CitySearch user={user} handleLogout={handleLogout}/>} />
        <Route path="/:geoDBId" element={<CityDetail user={user} handleLogout={handleLogout}/>}/>
        <Route path="/nearby/:geoDBId" element={<CityNearby user={user} handleLogout={handleLogout}/>} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
