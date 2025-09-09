
      // Prevent back navigation useful if user clicks back button after single email sign in 
      history.pushState(null, null, location.href);

      window.addEventListener('popstate', function () {
      history.pushState(null, null, location.href);
      alert("You can not go back to the dashboard back without logging.");
  });