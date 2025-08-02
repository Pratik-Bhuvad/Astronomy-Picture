# NASA APOD - Astronomy Picture of the Day

A responsive React web application that displays NASA's Astronomy Picture of the Day (APOD) with a beautiful, mobile-friendly interface and dark/light theme toggle.

## Features

- 🚀 **NASA APOD Integration**: Fetches daily astronomy pictures and videos from NASA's official API
- 🌙 **Dark/Light Theme**: Toggle between dark and light modes with persistent theme preference
- 📱 **Responsive Design**: Mobile-first design that works perfectly on all devices
- 🖼️ **Media Support**: Handles both images and videos from NASA's APOD feed
- ⚡ **Fast Loading**: Built with Vite for optimal performance
- 🎨 **Modern UI**: Clean, professional interface using Tailwind CSS
- 📊 **Error Handling**: Graceful error handling with retry functionality
- 🔄 **Loading States**: Beautiful loading indicators for better UX

## Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Icons**: React Icons
- **API**: NASA APOD API

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ApodCard.jsx    # Main content card component
│   ├── ErrorMessage.jsx # Error display component
│   ├── Header.jsx      # Application header
│   ├── LoadingSpinner.jsx # Loading indicator
│   └── ThemeToggle.jsx # Dark/light theme toggle
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management context
├── pages/              # Page components
│   └── Home.jsx        # Main home page
├── services/           # API services
│   └── api.js          # NASA API integration
├── App.jsx             # Main application component
├── App.css             # Global styles
└── main.jsx            # Application entry point
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd npd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory and add your NASA API key:
   ```env
   VITE_NASA_API_KEY=your_nasa_api_key_here
   ```
   
   Get your free NASA API key from: https://api.nasa.gov/

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## NASA APOD API

This application uses NASA's Astronomy Picture of the Day API, which provides:
- Daily astronomy images and videos
- Detailed explanations and descriptions
- High-resolution image links
- Historical data access

API Documentation: https://github.com/nasa/apod-api

## Features in Detail

### Theme Toggle
- Persistent theme preference stored in localStorage
- Smooth transitions between light and dark modes
- System theme detection support

### Responsive Design
- Mobile-first approach
- Optimized for phones, tablets, and desktop
- Touch-friendly interface elements

### Media Handling
- Automatic detection of image vs video content
- HD image viewing for supported content
- Responsive video embeds for astronomy videos

### Error Handling
- Network error recovery
- API rate limit handling
- User-friendly error messages with retry options

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- NASA for providing the amazing APOD API
- React team for the excellent framework
- Tailwind CSS for the utility-first styling approach+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
