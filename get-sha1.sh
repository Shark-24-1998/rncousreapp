#!/bin/bash

echo "Getting SHA-1 fingerprint for debug keystore..."
echo ""

# Check if keytool is available
if ! command -v keytool &> /dev/null; then
    echo "Error: keytool not found. Make sure you have Java JDK installed."
    exit 1
fi

# Get SHA-1 for debug keystore
echo "Debug keystore SHA-1:"
keytool -list -v -keystore android/app/debug.keystore -alias androiddebugkey -storepass android -keypass android | grep SHA1

echo ""
echo "If you're using a different keystore or have a custom one, run:"
echo "keytool -list -v -keystore YOUR_KEYSTORE_PATH -alias YOUR_ALIAS"
echo ""
echo "Add this SHA-1 to your Firebase project:"
echo "1. Go to Firebase Console"
echo "2. Select your project"
echo "3. Go to Project Settings"
echo "4. Add fingerprint to Android app"
