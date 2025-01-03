# Expo Camera Freeze on Camera Type Switch (Android)

This repository demonstrates a bug in the Expo Camera API on Android devices where switching the camera type (front/rear) while the camera is already active can cause the preview to freeze.  The app requires a restart to function correctly.

## Bug Reproduction

1. Clone this repository.
2. Run the app on an Android device (emulator or physical).
3. Tap the "Switch Camera" button to change camera types.  The camera preview will freeze on some devices.

## Solution

The proposed solution involves ensuring that the camera is properly stopped and restarted when switching the camera type. This ensures a clean transition, avoiding the freeze.

## Contributing

Feel free to contribute to this issue by providing additional testing, solutions, or bug reports.