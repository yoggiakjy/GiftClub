'use client';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RestaurantTemplate from './restaurant_pages/template';
import pages from './restaurant_pages/data/pages';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', display: 'flex', gap: '15px' }}>
        {pages.map((page, i) => (
          <Link key={i} to={page.path}>{page.title}</Link>
        ))}
      </nav>

      <Routes>
        {pages.map((page, i) => (
          <Route
            key={i}
            path={page.path}
            element={<RestaurantTemplate title={page.title} image={page.image} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
