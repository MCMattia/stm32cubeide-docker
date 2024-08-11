# Verifiable STM32CubeIde docker image

Docker image build by github actions with verifiable steps.

## Usage

Verify the image with github cli (optional):

```
gh attestation verify oci://docker.io/mcmattia/stm32cubeide-docker:1.0 -R mcmattia/stm32cubeide-docker
```

Pull the image from [docker hub](https://hub.docker.com/r/mcmattia/stm32cubeide-docker):

```
docker pull mcmattia/stm32cubeide-docker:1.0
```

Run the image:

```
docker run -it  mcmattia/stm32cubeide:1.0
```

Execute STM32CubeIde build command:

```
stm32cubeide --launcher.suppressErrors -nosplash -application org.eclipse.cdt.managedbuilder.core.headlessbuild -data buildWorkspace -import STM32Project -build STM32Project/Debug

```

## Image versions

| Image version | STM32CubeIde version |
| ------------- | -------------------- |
| 1.0           | 1.16.0               |
