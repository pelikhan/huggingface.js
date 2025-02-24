import type { TaskDataCustom } from "../index.js";

const taskData: TaskDataCustom = {
	canonicalId: "text-to-audio",
	datasets: [
		{
			description: "10K hours of multi-speaker English dataset.",
			id: "parler-tts/mls_eng_10k",
		},
		{
			description: "Multi-speaker English dataset.",
			id: "mythicinfinity/libritts_r",
		},
		{
			description: "Mulit-lingual dataset.",
			id: "facebook/multilingual_librispeech",
		},
	],
	demo: {
		inputs: [
			{
				label: "Input",
				content: "I love audio models on the Hub!",
				type: "text",
			},
		],
		outputs: [
			{
				filename: "audio.wav",
				type: "audio",
			},
		],
	},
	metrics: [
		{
			description: "The Mel Cepstral Distortion (MCD) metric is used to calculate the quality of generated speech.",
			id: "mel cepstral distortion",
		},
	],
	models: [
		{
			description: "A prompt based, powerful TTS model.",
			id: "parler-tts/parler-tts-large-v1",
		},
		{
			description: "A powerful TTS model that supports English and Chinese.",
			id: "SWivid/F5-TTS",
		},
		{
			description: "A massively multi-lingual TTS model.",
			id: "coqui/XTTS-v2",
		},
		{
			description: "A powerful TTS model.",
			id: "amphion/MaskGCT",
		},
		{
			description: "A Llama based TTS model.",
			id: "OuteAI/OuteTTS-0.1-350M",
		},
	],
	spaces: [
		{
			description: "An application for generate highly realistic, multilingual speech.",
			id: "suno/bark",
		},
		{
			description:
				"An application on XTTS, a voice generation model that lets you clone voices into different languages.",
			id: "coqui/xtts",
		},
		{
			description: "An application that generates speech in different styles in English and Chinese.",
			id: "mrfakename/E2-F5-TTS",
		},
		{
			description: "An application that synthesizes emotional speech for diverse speaker prompts.",
			id: "parler-tts/parler-tts-expresso",
		},
	],
	summary:
		"Text-to-Speech (TTS) is the task of generating natural sounding speech given text input. TTS models can be extended to have a single model that generates speech for multiple speakers and multiple languages.",
	widgetModels: ["suno/bark"],
	youtubeId: "NW62DpzJ274",
};

export default taskData;
