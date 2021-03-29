async function main() {

	const speech = require('@google-cloud/speech');
	const fs = require('fs');

	const client = new speech.SpeechClient({ credentials: { private_key: "private key", client_email: "client email" } });

	const gcsUri = 'gs://mifercas/xx.wav';
	const encoding = 'LINEAR16';
	const sampleRateHertz = 16000;
	const enableWordTimeOffsets = true;
	const languageCode = 'ru-RU';


	const config = {
		encoding: encoding,
		sampleRateHertz: sampleRateHertz,
		languageCode: languageCode,
		enableWordTimeOffsets: enableWordTimeOffsets,
	};
	const audio = {
		uri: gcsUri,
	};

	const request = {
		config: config,
		audio: audio,
	};
	
	const [operation] = await client.longRunningRecognize(request);
	const [response] = await operation.promise();
	const transcription = response.results
		.map(result => result.alternatives[0].transcript)
		.join('\n');
	//console.log(`results:` + JSON.stringify(response.results));
	//console.log(`Transcription: ${transcription}`);
	return transcription
}

main().catch(console.error);

module.exports = async (req, res) => { // this function will be launched when the API is called.
	try {
		res.send(await main()) // send the variable
	} catch (err) {
		res.send(err) // send the thrown error
	}
}


