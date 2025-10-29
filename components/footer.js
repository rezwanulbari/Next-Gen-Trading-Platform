class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #020617;
          padding: 3rem 2rem;
          border-top: 1px solid #1e293b;
        }
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }
        .footer-logo-icon {
          color: #6366f1;
        }
        .footer-description {
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          color: #94a3b8;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: #6366f1;
        }
        .footer-heading {
          color: white;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #6366f1;
        }
        .copyright {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #1e293b;
          color: #64748b;
          text-align: center;
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="footer-container">
          <div>
            <div class="footer-logo">
              <i data-feather="activity" class="footer-logo-icon"></i>
              QuantumTrade
            </div>
            <p class="footer-description">
              The next generation trading platform with AI-powered tools and real-time market data.
            </p>
            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
          <div>
            <h3 class="footer-heading">Products</h3>
            <div class="footer-links">
              <a href="#">Spot Trading</a>
              <a href="#">Margin Trading</a>
              <a href="#">Futures</a>
              <a href="#">Options</a>
              <a href="#">Staking</a>
            </div>
          </div>
          <div>
            <h3 class="footer-heading">Services</h3>
            <div class="footer-links">
              <a href="#">API</a>
              <a href="#">Trading Bots</a>
              <a href="#">Mining Pool</a>
              <a href="#">Market Analysis</a>
              <a href="#">Portfolio Tracking</a>
            </div>
          </div>
          <div>
            <h3 class="footer-heading">Company</h3>
            <div class="footer-links">
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div>
            <h3 class="footer-heading">Legal</h3>
            <div class="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Risk Disclosure</a>
              <a href="#">AML Policy</a>
            </div>
          </div>
        </div>
        <div class="copyright">
          © 2025 | QuantumTrade | All rights reserved | Developed by: Rezwan Ul Bari
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);