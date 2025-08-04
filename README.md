# SEE EVENT

A modern web application for discovering and managing college events.

## 🌟 Features

- **Event Discovery**: Browse and search for college events
- **User Profiles**: Manage your profile and preferences
- **Event Registration**: Easy registration for events
- **Event Creation**: Create and manage your own events
- **Responsive Design**: Works on all devices

## 🚀 Live Demo

Visit: https://YOUR_USERNAME.github.io/see-event-app

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript
- Tailwind CSS for styling
- Firebase integration
- Responsive design principles

## 📁 Project Structure

```
├── On Boarding/
├── Login page/
├── Home Page/
└── firebase.js
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.
### Code Reduction & Optimization
- **70% CSS reduction**: Consolidated ~400 lines of repeated styles into `global.css`
- **65% JavaScript reduction**: Combined ~200 lines of common functions into `global.js`
- **Eliminated duplication**: Removed identical HTML head sections across 20+ files
- **Standardized naming**: Consistent file naming convention (kebab-case)

### Professional Structure
- **Organized folders**: Logical grouping by functionality
- **Shared resources**: Single source of truth for styles and scripts
- **Template system**: Consistent layout across all pages
- **Scalable architecture**: Easy to add new pages and features

### Enhanced Features
- **Responsive design**: Mobile-first approach with breakpoints
- **Global navigation**: Centralized routing functions
- **Form validation**: Reusable validation system
- **Local storage**: Persistent data management
- **Toast notifications**: User feedback system
- **Loading states**: Better UX with loading indicators

## 🎨 Design System

### Colors
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Background: `#FAF9F6` (Off-white)
- Text: `#374151` (Dark gray)

### Typography
- Font: Poppins (400, 500, 600, 700, 800)
- Responsive sizing with `clamp()` functions
- Consistent line heights and spacing

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Consistent elevation and border radius
- **Forms**: Standardized input styling with validation
- **Navigation**: Unified header and menu patterns

## 📱 Responsive Breakpoints

- **Mobile**: ≤ 480px (Phone optimized)
- **Tablet**: 481px - 1024px (Increased container width)
- **Desktop**: ≥ 1025px (Centered phone container)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, clamp())
- **JavaScript**: ES6+ features
- **TailwindCSS**: Utility-first CSS framework
- **Google Fonts**: Poppins font family
- **SVG Icons**: Scalable vector graphics

## 🔧 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/GuruTesmaBhasker/SEE_EVENT.git
   ```

2. **Open in VS Code**
   ```bash
   cd SEE_EVENT
   code .
   ```

3. **Start development server**
   - Use Live Server extension in VS Code
   - Or open `index.html` in your browser

4. **Navigate the app**
   - Start at `index.html` (splash screen)
   - Auto-redirects to onboarding sequence
   - Flows to main application

## 📝 File Naming Convention

- **Folders**: lowercase with hyphens
- **HTML files**: lowercase with hyphens
- **CSS classes**: kebab-case for custom, utility classes from TailwindCSS
- **JavaScript functions**: camelCase
- **Assets**: descriptive names with hyphens

## 🔄 Navigation Flow

```
index.html (Splash)
    ↓
pages/onboarding/onboarding-1.html
    ↓
pages/onboarding/onboarding-2.html
    ↓
pages/onboarding/onboarding-3.html
    ↓
pages/home/home.html (Main App)
    ↓
pages/profile/profile.html
    ├── edit-profile.html
    ├── bookmarks.html
    ├── feedback.html
    ├── my-events.html
    └── terms.html
```

## 🧪 Features

### Core Functionality
- Event discovery and search
- User authentication
- Profile management
- Event bookmarking
- Feedback system
- Responsive design

### User Experience
- Smooth transitions
- Loading states
- Error handling
- Form validation
- Toast notifications
- Auto-save functionality

### Technical Features
- Local storage persistence
- Responsive typography
- Touch-friendly interface
- Keyboard navigation
- Semantic HTML
- Performance optimized

## 📦 Reusable Components

### CSS Classes
- `.main-container`: App wrapper
- `.phone-container`: Mobile frame
- `.btn-primary`, `.btn-secondary`: Button variants
- `.form-input`, `.form-textarea`: Form elements
- `.card`: Content containers
- `.nav-item`: Navigation elements
- `.text-*-responsive`: Responsive typography

### JavaScript Functions
- `navigateToPage()`: Page routing
- `validateForm()`: Form validation
- `showToast()`: Notifications
- `saveToStorage()`, `getFromStorage()`: Data persistence
- `formatDate()`, `formatTime()`: Data formatting

## 🔮 Future Enhancements

- **Backend Integration**: API endpoints for real data
- **Real-time Features**: Live event updates
- **Push Notifications**: Event reminders
- **Social Features**: User interactions
- **Advanced Search**: Filters and sorting
- **Analytics**: Usage tracking
- **Offline Support**: PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across devices
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for college students**
- View detailed event information (description, date, time, venue, organizer)
- Bookmark or save events
- Generate event passes (QR Code)
- View upcoming and past events
- Form teams and communicate through discussion/chat pages
- Submit feedback and event ratings
- Receive notifications about events

### For Organizers
- Create and post new events with full details
- Manage events via a dedicated event dashboard
- View registration data and control participant flow
- Scan event passes using QR code scanner
- Send notifications to registered users

---

## Design & UI

- Background color: `#FAF9F6`
- Font: Poppins
- Text color:
  - "See": `#D66D4B`
  - "Event": `#3b3b3b`

---

## App Pages

- Splash Screen  
- Onboarding Pages  
- Login Page  
- Sign Up Page  
- Home Page  
- Event Details Page  
- Search / Filter Page  
- Profile Page  
- Edit Profile Page  
- My Events Page  
- Create Event Page (Organizers)  
- Event Management Dashboard (Organizers)  
- Team Formation Page  
- Chat / Event Discussion Page  
- Bookmarks / Saved Events Page  
- Event Pass / QR Code Page  
- QR Code Scanner Page (Organizers)  
- Upcoming & Past Events Page  
- Feedback & Ratings Page  
- Notifications Page  
- Error / No Internet Page  
- About Us Page  
- Terms & Conditions / Privacy Policy Page



---

## License

This project is open for learning, academic, and portfolio purposes.
