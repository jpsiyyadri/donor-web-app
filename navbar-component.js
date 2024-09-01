import { LitElement, html } from "https://cdn.jsdelivr.net/npm/lit@2.6.0/+esm";

class NavbarComponent extends LitElement {
  createRenderRoot() {
    return this;
  }

  toggleNav() {
    this.querySelector("#sideNav").style.width = "250px";
  }

  closeNav() {
    this.querySelector("#sideNav").style.width = "0";
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg navbar-success bg-danger">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click=${this.toggleNav}
          >
            <i class="fas fa-bars navbar-toggler-icon"></i>
          </button>
          <a class="navbar-brand text-light" href="index.html">Helping Hands</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link text-light" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="guest-dashboard.html">Search Donors</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="sideNav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click=${this.closeNav}>&times;</a>
        <a href="index.html">Home</a>
        <a href="guest.html">Search Donors</a>
      </div>
    `;
  }
}

customElements.define("navbar-component", NavbarComponent);
