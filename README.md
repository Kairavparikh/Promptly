# PromptlyAI 🤖📅
> **Video Demonstration**

https://drive.google.com/file/d/1I8XjQSBovHzcBv6L2SAfDi9fHkzIdPP5/view?usp=sharing

> **DevPost Link**
https://devpost.com/software/promptly-52t9a3
> 
> **Smart AI-Powered Day Planning & Calendar Management**

PromptlyAI is an intelligent React Native app that revolutionizes how you plan and manage your daily schedule. Using advanced AI algorithms and seamless Google Calendar integration, it automatically creates optimized schedules based on your natural language input while respecting your existing commitments and preferences.

## ✨ Key Features

### 🧠 **AI-Powered Planning**
- **Natural Language Processing**: Simply tell the AI what you want to accomplish (e.g., "I need 2 hours for project work, 1 hour gym, and grocery shopping")
- **Intelligent Scheduling**: AI automatically finds optimal time slots based on your existing calendar
- **Conflict Resolution**: Smart detection and resolution of scheduling conflicts with automatic rescheduling
- **Personalized Recommendations**: AI learns from your patterns and suggests optimal timing

### 📅 **Seamless Calendar Integration**
- **Google Calendar Sync**: Full two-way integration with Google Calendar
- **Real-time Updates**: Instant synchronization of events and changes
- **Event Management**: Create, move, and delete calendar events directly from the app
- **Multi-calendar Support**: Works with all your Google Calendar accounts

### 🎙️ **Voice-to-Text Planning**
- **Voice Input**: Record your planning requests using built-in speech-to-text
- **OpenAI Whisper Integration**: High-accuracy audio transcription
- **Hands-free Planning**: Plan your day while on the go

### ⚡ **Smart Schedule Management**
- **Daily Progress Tracking**: Visual progress indicators showing completion rates and focused time
- **Restricted Hours**: Set "do not disturb" periods where no events can be scheduled
- **Conflict Detection**: 30-minute buffer zones to prevent back-to-back scheduling stress
- **Automatic Rescheduling**: AI moves conflicting events to available time slots (up to 12 hours ahead)

### 🏷️ **Advanced Organization**
- **Event Tagging System**: Categorize tasks with custom tags stored in Firebase
- **Progress Analytics**: Track daily completion rates and time allocation
- **Task Categorization**: Automatic categorization of different types of activities

### 🔐 **Secure Authentication**
- **Google OAuth Integration**: Secure sign-in with Google accounts
- **Multi-platform Support**: Works seamlessly across iOS and Android
- **Privacy-First**: Your data stays secure with Firebase backend

## 🚀 Technology Stack

- **Frontend**: React Native, Expo, TypeScript
- **Navigation**: Expo Router with file-based routing
- **Authentication**: Google Sign-In SDK
- **Calendar API**: Google Calendar API v3
- **Database**: Firebase Firestore
- **AI/ML**: Custom scheduling API with conflict resolution algorithms
- **Speech-to-Text**: OpenAI Whisper API
- **State Management**: React Hooks
- **Styling**: StyleSheet with modern UI components

## 📱 Screenshots & Demo

### Home Screen
- Daily progress tracking with completion percentages
- Today's schedule with intelligent task categorization
- Quick access to AI Planner with prominent "Plan My Day" button

### AI Planner Interface
- Conversational AI interface with chat-like experience
- Voice recording capabilities for hands-free input
- Real-time schedule generation with conflict warnings
- Plan confirmation system with detailed event breakdown

### Smart Features in Action
- **Conflict Resolution**: AI automatically detects overlapping events and suggests alternatives
- **Restricted Hours**: Respects your "do not disturb" periods
- **Intelligent Rescheduling**: Moves events to optimal time slots when conflicts arise

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- iOS Simulator (for iOS development) or Android Studio (for Android)
- Google Cloud Console project with Calendar API enabled
- Firebase project setup
- OpenAI API key (for speech-to-text features)

### 1. Clone the Repository
```bash
git clone https://github.com/Kairavparikh/Promptly.git
cd Promptly
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```bash
# OpenAI API Key for speech-to-text functionality
EXPO_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Firebase Configuration
- Add your `GoogleService-Info.plist` to `ios/Promptly/`
- Update Firebase configuration in `lib/firebase.ts`

### 5. Google OAuth Setup
- Configure OAuth clients in Google Cloud Console
- Update client IDs in the app configuration

### 6. Start Development Server
```bash
npx expo start
```

### 7. Build Development Client
```bash
npx expo run:ios
# or
npx expo run:android
```

## 🏗️ Project Structure

```
PromptlyAI/
├── app/                          # App screens (file-based routing)
│   ├── (tabs)/                   # Tab navigation screens
│   │   ├── index.tsx            # Main dashboard
│   │   ├── index-new.tsx        # Alternative dashboard view
│   │   └── explore.tsx          # Exploration features
│   ├── ai-planner.tsx           # AI planning interface
│   ├── analytics.tsx            # Progress analytics
│   ├── preferences.tsx          # User preferences
│   └── _layout.tsx              # Root layout configuration
├── lib/                          # Core utilities and APIs
│   ├── calendarApiFunctions.ts  # Google Calendar integration
│   ├── firebase.ts              # Firebase configuration
│   └── ttsAPI.ts                # Speech-to-text functionality
├── utils/                        # Helper functions
│   ├── calendarUtils.ts         # Calendar utility functions
│   └── timeUtils.ts             # Time management utilities
├── components/                   # Reusable UI components
└── constants/                    # App constants and theming
```

## 🎯 Key Algorithms & Features

### Smart Scheduling Algorithm
1. **Context Analysis**: AI analyzes existing calendar events and restricted hours
2. **Conflict Detection**: Identifies potential scheduling conflicts with 30-minute buffers
3. **Optimization**: Finds optimal time slots based on event duration and priority
4. **Rescheduling**: Automatically moves conflicting events to available slots
5. **Validation**: Ensures all constraints are respected before finalizing

### Voice Processing Pipeline
1. **Audio Capture**: High-quality recording with expo-av
2. **Transcription**: OpenAI Whisper API for accurate speech-to-text
3. **Intent Processing**: Natural language understanding for scheduling requests
4. **Response Generation**: Conversational AI responses with scheduling confirmations

## 🌟 Advanced Features

### Intelligent Conflict Resolution
- **30-minute Buffer Zones**: Prevents back-to-back scheduling stress
- **12-hour Lookahead**: Finds alternative time slots up to 12 hours in advance
- **Priority-based Rescheduling**: Important events take precedence
- **User Notification**: Clear warnings about conflicts and resolutions

### Restricted Hours Management
- **Custom Time Blocks**: Set periods when no events can be scheduled
- **Validation**: AI respects restricted hours during planning
- **Conflict Warnings**: Alerts when requested tasks conflict with restrictions

### Progress Analytics
- **Daily Completion Rates**: Track task completion percentages
- **Focused Time Calculation**: Monitor productive hours
- **Visual Progress Indicators**: Beautiful UI showing daily achievements

## 🔄 API Integration

### Google Calendar API
- **OAuth 2.0 Authentication**: Secure access to user calendars
- **Event CRUD Operations**: Create, read, update, delete calendar events
- **Multi-calendar Support**: Works with primary and secondary calendars
- **Real-time Sync**: Instant updates between app and Google Calendar

### Custom Scheduling API
- **Endpoint**: `https://web-production-ae703.up.railway.app/schedule`
- **Input**: Natural language task descriptions
- **Output**: Optimized schedule with conflict detection
- **Features**: Priority handling, duration estimation, conflict resolution

## 🧪 Development & Testing

### Running Tests
```bash
npm test
# or
yarn test
```

### Debugging
- Use Expo DevTools for debugging
- React Native Debugger for advanced debugging
- Console logs are extensively used throughout the app for troubleshooting

### Building for Production
```bash
# iOS
npx expo build:ios

# Android
npx expo build:android
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for Whisper speech-to-text API
- **Google** for Calendar API and authentication services
- **Firebase** for backend infrastructure
- **Expo** for React Native development platform

## 📞 Support

For support, email support@promptlyai.com or create an issue in this repository.

---

**Built with ❤️ by [Kairav Parikh](https://github.com/Kairavparikh)**
