# bhookh
A Clone of food delivery App. (Login and Home Page, Api calls)

# Steps to run the Application - Android:
- clone the repository into local machine using `git clone https://github.com/roysoumendu765/bhookh.git`
- Open Android Studio in local machine. Open the cloned project in Android Studio.
- Open new Terminal use the following commands to create a fresh build:
- `cd android` -> `./gradlew clean` -> `./gradlew assembleRelease` -> New build is created in the `android\app\build\outputs\apk\debug`
- Drag and drop that .apk file in the emulator device in android studio
- Once installed in the emulator device. Test for the functionalities.

# Alternative Way to Run:
```bash
git clone https://github.com/roysoumendu765/bhookh.git
cd bhookh
```

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

# Implementations:
- Login Screen (used mockusers.ts)
- Home Screen (Main Component - Used `Redux` for state management)
- Onboarding Screen (Using the carousel)
- Loader Screen (Basic Loader)

# Test Credentials:
- Username: `JohnDoe123@gmail.com`
- Password: `John@123`
