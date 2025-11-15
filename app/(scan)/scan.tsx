import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { uploadBase64Image } from "../../utils/serverConnection";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Request permission on first mount ONLY
  useEffect(() => {
    if (!permission) return;
    if (!permission.granted) requestPermission();
  }, []);

  const takePicture = async () => {
    try {
      if (!cameraRef.current) return;

      setLoading(true);

      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        base64: true,
      });

      if (!photo?.base64) {
        console.error("Base64 not found in captured photo");
        return;
      }

      setPhotoUri(photo.uri);

      await uploadBase64Image(photo.base64);
      console.log("Photo captured & uploaded successfully");

    } catch (err) {
      console.error("Camera capture error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Permission not loaded yet
  if (!permission) return <Text>Requesting camera permission...</Text>;

  // Permission denied
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Camera access is required</Text>

        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Live Camera or Preview */}
      {!photoUri ? (
        <CameraView ref={cameraRef} style={styles.camera} facing="back" />
      ) : (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      )}

      {/* Capture / Retake Button */}
      <View style={styles.controls}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <TouchableOpacity
            style={styles.captureButton}
            onPress={() => {
              if (photoUri) setPhotoUri(null);
              else takePicture();
            }}
          >
            <View style={styles.captureInner} />
          </TouchableOpacity>
        )}

        <Text style={styles.captureText}>
          {photoUri ? "Tap to Retake" : "Tap to Capture"}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  camera: {
    flex: 1,
  },

  preview: {
    flex: 1,
    resizeMode: "cover",
  },

  controls: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    alignItems: "center",
  },

  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  captureInner: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 40,
  },

  captureText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  permissionText: {
    fontSize: 18,
    marginBottom: 20,
  },

  permissionButton: {
    backgroundColor: "#0066FF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  permissionButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
