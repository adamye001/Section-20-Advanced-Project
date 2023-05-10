import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventsNavigation";

function EventsLayout() {
  return (
    <>
      <EventNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default EventsLayout;