import { LitElement, html } from 'https://cdn.jsdelivr.net/npm/lit@2.6.0/+esm';

class NavbarComponent extends LitElement {
    render() {
        return html`
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">BloodApp</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="guest.html">Search Donors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="donor.html">Donor Portal</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('navbar-component', NavbarComponent);
