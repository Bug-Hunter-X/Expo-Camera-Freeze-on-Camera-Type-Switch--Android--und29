The solution involves adding explicit calls to stop and start the camera, instead of simply switching types using `type`.   This ensures proper resource management, resolving the freeze issue.

```javascript
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';

const App = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [camera, setCamera] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const switchCamera = async () => {
    if (camera) {
      await camera.stopRecording(); // Added for good measure
      await camera.stopPreview();
      setType(type === CameraType.back ? CameraType.front : CameraType.back);
      await camera.resumePreview();
    }
  };

  if (hasPermission === null) {
    return <View />; // while we wait for permission
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => setCamera(ref)}>
        <Button title="Switch Camera" onPress={switchCamera} />
      </Camera>
    </View>
  );
};

export default App;
```