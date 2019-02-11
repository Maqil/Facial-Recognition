function resizeCanvasAndResults(dimensions, canvas, results) {
  const { width, height } =
    dimensions instanceof HTMLVideoElement
      ? faceapi.getMediaDimensions(dimensions)
      : dimensions;
  canvas.width = width;
  canvas.height = height;

  // resize detections (and landmarks) in case displayed image is smaller than
  // original size
  return faceapi.resizeResults(results, { width, height });
}

function drawDetections(dimensions, canvas, detections) {
  const resizedDetections = resizeCanvasAndResults(
    dimensions,
    canvas,
    detections
  );
  faceapi.drawDetection(canvas, resizedDetections);
}
