import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <h1>PUPPY BOWL MMXXIV</h1>
        <NavLink to="/">home</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
