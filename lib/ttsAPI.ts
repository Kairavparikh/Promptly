async function transcribeAudio(fileUri: string): Promise<string> {
  try {
    console.log("🔧 Transcribing audio from:", fileUri);

    const apiKey = "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";
    // Create form data for the API request
    const formData = new FormData();

    // Create a blob from the file URI
    const audioBlob = {
      uri: fileUri,
      type: "audio/m4a",
      name: "speech.m4a",
    };

    formData.append("file", audioBlob as any);
    formData.append("model", "whisper-1");

    console.log("🔧 Sending request to OpenAI...");

    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `API Error: ${errorData.error?.message || response.statusText}`
      );
    }

    const data = await response.json();
    console.log("✅ Transcription response:", data);
    return data.text;
  } catch (error) {
    console.error("❌ Transcription error:", error);
    throw new Error(`Transcription failed: ${error}`);
  }
}

export { transcribeAudio };
