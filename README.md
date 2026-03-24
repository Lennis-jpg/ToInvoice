# ToInvoice  

This repository contains the source code for the public-facing website of ToInvoice, an invoicing platform designed for quick invoice generation on the go or in an office. The site includes the landing page, pricing information, and legal documents.

## About The Project

ToInvoice is an invoicing platform built with secure and user-friendly features. This repository hosts the static front-end that serves as the entry point for users to access the application. The core application itself is loaded via an `<iframe>` from external domains.

### Features

The platform is designed with the following features:
*   Saves Time with Automation
*   Professional & Customisable Templates
*   Tracks Payments & Due Dates
*   Real-Time Invoice Preview
*   Automatic Tax Calculations
*   Client & Project Management Integration

### Architecture

This project is a website built with HTML, CSS and JavaScript. The project has two versions free/standard and Premium. 
 
*   The free/standard version of the application is loaded from `https://toinvoice.org`.
*   The premium version is loaded from `https://toinvoice.online`.

## Repository Structure

The main files and directories in this repository are:

*   **`index.html`**: The main landing page, showcasing features and pricing tiers (Personal, Premium, Enterprise).
*   **`Login.html` / `Signup.html` / `Free.html`**: Wrapper pages that load the standard application from `toinvoice.org` in an iframe.
*   **`Premium.html`**: Wrapper page that loads the premium application from `toinvoice.online` in an iframe.
*   **`PrivacyPolicy.html` & `TermsofService.html`**: Legal documents for the service.
*   **`404.html`**: A custom "Page Not Found" error page.
*   **`assets/`**: Contains all static assets:
    *   `css/`: Stylesheets for the website.
    *   `js/`: JavaScript files for loading iframes and handling UI logic.
    *   `images/`: Contains logos and other image assets.
*   **`vercel.json`**: Deployment configuration for Vercel.
*   **`.htaccess`**: Apache server configuration for URL rewriting, for deployment environment.

## Running Locally

To view the website locally, you can follow these steps:

1.  Clone the repository:
    ```bash
    git clone https://github.com/clerusync/toinvoice.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd toinvoice
    ```
3.  Open the `index.html` file in your preferred web browser.

For a more complete experience that respects the clean URL configuration, you can use a local web server. If you have Python installed, you can run:

```bash
# For Python 3
python -m http.server

# For Python 2
python -m SimpleHTTPServer
```

Then, navigate to `http://localhost:8000` in your browser.
