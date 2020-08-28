import React from "react";

// Plain About Me page. No sign in or sign up on this page 
function Banner() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">About Pocket Money</h1>
        <p className="lead">

          Living in a world where the cost of living continuously rises, many people look to build a better relationship with their finances and money. Due to COVID-19 and the resulting job insecurities within various industries many individuals have begun to set budgets and expense guidelines for themselves so theat they can balance their wants and needs. Even with the apparent financial challenges, people desire to travel and pursue life experiences. To mediate the challenge and their desires, Pocket Money was born.

          Pocket Money is an app that allows users to log and view their budget. The app is powered by the Big Mac Index which allows a user to have a more accurate calculation of how far their money with go when visiting another country.  The app uses the USD as its baseline and does a back end conversion to more accurately equate the value of the USD to the economy of the desination county.
</p>
<p>The Big Mac Index is an informal measure of currency exchange rates at ppp. It measures their value against a similar basket of goods and services, in this case a Big Mac. Differing prices at market exchange rates would imply that one currency is under or overvalued.</p>
    </div>
    </div>
  );
}

export default Banner;
