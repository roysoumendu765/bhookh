

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

# bhookh
A Clone of food delivery App.

# Steps to run the Application - Android:
- clone the repository into local machine using `git clone https://github.com/roysoumendu765/bhookh.git`
- Open Android Studio in local machine. Open the cloned project in Android Studio.
- Open new Terminal use the following commands to create a fresh build:
- `cd android` -> `./gradlew clean` -> `./gradlew assembleRelease` -> New build is created in the `android/build/outputs/app-debug.apk`
- Drag and drop that .apk file in the emulator device in android studio
- Once installed in the emulator device. Test for the functionalities.

# Alternative Way to Run:
- git clone https://github.com/your-repo/react-native-app.git
- cd react-native-app

# Implementations:
- Login Screen (used mockusers)
- Home Screen (Main Component - Used `Redux` for state management)
- Onboarding Screen (Using the carousel)
- Loader Screen (Basic Loader)
