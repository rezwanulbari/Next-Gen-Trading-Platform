class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: linear-gradient(90deg, #020617 0%, #0f172a 100%);
          padding: 1rem 2rem;
          border-bottom: 1px solid #1e293b;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
        }
        .logo-icon {
          color: #6366f1;
        }
        nav {
          display: flex;
          gap: 1.5rem;
        }
        nav a {
          color: #94a3b8;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        nav a:hover {
          color: #e2e8f0;
        }
        .active {
          color: #6366f1 !important;
        }
        .user-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .user-actions button {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .login-btn {
          background: transparent;
          color: #94a3b8;
          border: 1px solid #334155;
        }
        .login-btn:hover {
          background: #1e293b;
          color: #e2e8f0;
        }
        .signup-btn {
          background: #6366f1;
          color: white;
          border: none;
        }
        .signup-btn:hover {
          background: #4f46e5;
        }
      </style>
      <header>
        <div class="header-container">
          <a href="/" class="logo">
            <i data-feather="activity" class="logo-icon"></i>
            QuantumTrade
          </a>
          <nav>
            <a href="/" class="active">
              <i data-feather="home"></i>
              Dashboard
            </a>
            <a href="/markets.html">
              <i data-feather="trending-up"></i>
              Markets
            </a>
            <a href="/portfolio.html">
              <i data-feather="briefcase"></i>
              Portfolio
            </a>
            <a href="/tools.html">
              <i data-feather="tool"></i>
              Tools
            </a>
          </nav>
          <div class="user-actions">
            <button class="login-btn">Log In</button>
            <button class="signup-btn">Sign Up</button>
          </div>
        </div>
      </header>
    `;
  }
}
customElements.define('custom-header', CustomHeader);