// worker.js
importScripts("https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js");
// add below line to fix issue.
//ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";

self.addEventListener("message", async (event) => {
  const session = await ort.InferenceSession.create('./model.onnx');
  console.log('on worker message1')
  const { a, b } = event.data;
  const result = a + b;
  self.postMessage(result);
});
