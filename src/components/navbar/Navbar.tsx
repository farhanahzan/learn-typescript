import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header
      style={{
        position: 'static',
        top: 0,
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        width: '100vw',
        padding: 10,
      }}
    >
      <button>
        <Link to="/" relative="route">
          Home
        </Link>
      </button>
      <button>
        <Link to="/example" relative="route">
          Examples
        </Link>
      </button>
      <button>
        <Link to="/todo" relative="route">
          Todo
        </Link>
      </button>
      <button>
        <Link to="/context" relative="route">
          Context
        </Link>
      </button>
      <button>
        <Link to="/carousel" relative="route">
          Carousel
        </Link>
      </button>
      <button>
        <Link to="/faq" relative="route">
          FAQ
        </Link>
      </button>
    </header>
  );
};
