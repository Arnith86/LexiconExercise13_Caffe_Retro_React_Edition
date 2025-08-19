import { NavBar } from "./Navbar";
import { Pages } from "./Pages";

/**
 * Root application component.
 *
 * Responsible for rendering the global layout:
 *  - Navigation bar (site-wide)
 *  - Main content pages (menu sections)
 *
 * This component is the entry point mounted by React in `index.html`.
 */

function App() {
  return (
    <>
      <NavBar />
      <Pages />
    </>
  );
}

export default App;
